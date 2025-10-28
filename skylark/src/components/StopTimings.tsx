"use client";

import { Box, Reset, Text, TextProps } from "@radix-ui/themes";
import { IconRefresh } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { useDebounceValue, useInterval } from "usehooks-ts";
import { InferOutput } from "valibot";

import styles from "./StopTimings.module.css";

import isbServices from "@/data/isbServices";
import isbStops from "@/data/isbStops";
import { ShuttleServiceResultSchema } from "@/types/schema";
import { getISBPositionsAll, getISBTimings } from "@/utils/api";

// TEMPORARY
type ISBStop = (typeof isbStops)[number];
type ISBService = (typeof isbServices)[number];

function getStopDetailsFromStopNames(stopNames: string[]) {
	return stopNames
		.map((stopName) => isbStops.find((s) => s.name === stopName))
		.filter(Boolean) as ISBStop[];
}

export default function StopTimings({
	stopName,
	service: serviceToAppend,
	hideUpdatedTime = false,
	hideAlternativeServices = false,
	children,
}: {
	stopName: string;
	service?: string;
	hideUpdatedTime?: boolean;
	hideAlternativeServices?: boolean;
	children?: React.ReactNode;
}) {
	const [updatedSecondsAgo, setUpdatedSecondsAgo] = useState<number | null>(
		null,
	);
	const {
		data: timings,
		error: timingsError,
		isLoading: timingsLoading,
		isValidating: timingsValidating,
	} = useSWR(stopName, getISBTimings, {
		refreshInterval: 1000 * 10, // every 10 seconds
	});
	const stop = useMemo(
		() => isbStops.find((s) => s.name === stopName),
		[stopName],
	);
	const oppositeStop = useMemo(
		() => isbStops.find((s) => s.name === stop?.opposite),
		[stop],
	);
	const [timingsValidatingDebounced, setTimingsValidatingDebounced] =
		useDebounceValue(false, 500);

	useEffect(() => {
		if (timingsValidating) {
			setTimingsValidatingDebounced(true);
			setTimeout(() => {
				setTimingsValidatingDebounced(false);
			}, 500);
		}
	}, [timingsValidating]);

	const fetchedTime = useMemo(() => {
		if (!timings) return null;
		const date = new Date(timings.TimeStamp);
		const now = new Date();
		const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
		setUpdatedSecondsAgo(seconds);
		return date;
	}, [timings]);

	const showInMinutesThreshold = 30;
	const showInMinutesCutoff = new Date(
		Date.now() + showInMinutesThreshold * 60 * 1000,
	);

	useInterval(
		() => {
			if (!fetchedTime) {
				setUpdatedSecondsAgo(null);
				return;
			}
			setUpdatedSecondsAgo(
				Math.floor((Date.now() - fetchedTime.getTime()) / 1000),
			);
		},
		fetchedTime ? 1000 : null,
	);
	if (timingsLoading) {
		return (
			<Text color="gray" as="p" mt="4" align="center">
				Loading...
			</Text>
		);
	}

	if (timingsError || !timings || !stop) {
		return (
			<Text color="gray" as="p" mt="4" align="center">
				An error occured
			</Text>
		);
	}

	return (
		<>
			<Box className={styles.timingsWrapper}>
				{timings.shuttles
					.filter((s) => !s.busstopcode.endsWith("-E")) // filter out terminating svcs
					.sort((a, b) => {
						// sort in the same order as isbServices
						const aIndex = isbServices.findIndex((s) => s.name === a.name);
						const bIndex = isbServices.findIndex((s) => s.name === b.name);
						return aIndex - bIndex;
					})
					// dedupe
					.filter(
						(service, i, arr) =>
							arr.findIndex((s) => s.name === service.name) === i,
					)
					.map((service) => {
						const isbServiceDetails: ISBService | undefined = isbServices.find(
							(s) => s.name === service.name,
						);
						if (!service._etas || !fetchedTime) return null;
						const { arriving, inMinutes, inTimestamps } = separateETAsByDisplay(
							// only show first two
							service._etas.slice(0, 2),
							fetchedTime,
							showInMinutesCutoff,
						);
						// stop names of next prominent stops
						let isbTowards: ISBStop[] = [];
						let isbOppositeServiceDetails: ISBService | undefined =
							isbServiceDetails;
						let isbOppositeTowards: ISBStop[] | null = null;
						if (isbServiceDetails) {
							const thisStopIndex = isbServiceDetails.stops.indexOf(stopName);
							if (oppositeStop?.shuttles.find((s) => s.name === service.name)) {
								// this route runs to the opposite stop;
								// figure out if this route is before or after the opposite stop
								const thisStopIndex = isbServiceDetails.stops.indexOf(stopName);
								const oppStopIndex = isbServiceDetails.stops.indexOf(
									oppositeStop.name,
								);

								const minStopIndex = Math.min(thisStopIndex, oppStopIndex);
								const maxStopIndex = Math.max(thisStopIndex, oppStopIndex);
								const allStopsReachableFromMin = isbServiceDetails.stops.slice(
									minStopIndex + 1,
									maxStopIndex,
								);
								const allStopsReachableFromMax = isbServiceDetails.stops.slice(
									maxStopIndex + 1,
								);

								// remove all stops that run back on itself

								let lastFromMinStopIndex = allStopsReachableFromMin.length - 1;
								while (true) {
									// find last stop's opp
									const lastFromMinStop =
										allStopsReachableFromMin[lastFromMinStopIndex];
									const lastFromMinStopOpp = isbStops.find(
										(s) => s.opposite === lastFromMinStop,
									);
									if (!lastFromMinStopOpp) break;
									// if opp is already in the list, remove all stops after it
									const oppIndex = allStopsReachableFromMin.indexOf(
										lastFromMinStopOpp.name,
									);
									if (oppIndex !== -1) {
										allStopsReachableFromMin.splice(lastFromMinStopIndex + 1);
									}
									lastFromMinStopIndex--;
								}

								const allNotableStopsReachableFromMin =
									allStopsReachableFromMin.filter((stop) =>
										isbServiceDetails.notableStops_extended.includes(stop),
									);
								const allNotableStopsReachableFromMax =
									allStopsReachableFromMax.filter((stop) =>
										isbServiceDetails.notableStops_extended.includes(stop),
									);

								// console.log(
								// 	"jeao stops2",
								// 	allStopsReachableFromMin,
								// 	allStopsReachableFromMax,
								// );
								if (thisStopIndex < oppStopIndex) {
									// this route is before the opposite stop
									isbTowards = getStopDetailsFromStopNames(
										allNotableStopsReachableFromMin,
									);
									isbOppositeTowards = getStopDetailsFromStopNames(
										allNotableStopsReachableFromMax,
									);
								} else {
									// this route is after the opposite stop
									isbTowards = getStopDetailsFromStopNames(
										allNotableStopsReachableFromMax,
									);
									isbOppositeTowards = getStopDetailsFromStopNames(
										allNotableStopsReachableFromMin,
									);
								}
							} else {
								// one way route

								const allNextStops = isbServiceDetails.stops.slice(
									thisStopIndex + 1,
								);
								const allNextNotableStops = allNextStops.filter((stop) =>
									isbServiceDetails.notableStops_extended.includes(stop),
								);
								isbTowards = getStopDetailsFromStopNames(allNextNotableStops);

								const matchingService = isbServices.find(
									(s) => s.name === isbServiceDetails.matchingService,
								);
								if (
									matchingService &&
									oppositeStop?.shuttles.find(
										(s) => s.name === isbServiceDetails.matchingService,
									)
								) {
									isbOppositeServiceDetails = matchingService;
									const oppStopIndex = matchingService.stops.indexOf(
										oppositeStop.name,
									);
									const allNextStopsOpp = matchingService.stops.slice(
										oppStopIndex + 1,
									);
									const allNextNotableStopsOpp = allNextStopsOpp.filter(
										(stop) =>
											matchingService.notableStops_extended.includes(stop),
									);
									isbOppositeTowards = getStopDetailsFromStopNames(
										allNextNotableStopsOpp,
									);
									// console.log("jeao", allNextStops, allNextStopsOpp);
									// both routes have the same terminal, so get rid of the terminal (last stop) from the one that takes longer
									if (allNextStops.length > allNextStopsOpp.length) {
										isbTowards.pop();
									} else {
										isbOppositeTowards.pop();
									}
								}
							}
						}
						return (
							<Box
								className={styles.serviceWrapper}
								mb="1"
								key={service.routeid + service.busstopcode + service.name}
								// asChild
							>
								<Reset>
									<Link
										href={
											serviceToAppend === service.name
												? `/stops/${stopName}`
												: `/stops/${stopName}/${service.name}`
										}
									>
										<Box
											// size="3"
											// variant="soft"
											className={styles.serviceHeader}
											// color="gray"
										>
											{isbServiceDetails ? (
												<>
													<Box
														className={clsx(
															styles.serviceName,
															isbServiceDetails.colorIsLight && styles.darkText,
															service.name.length > 2 && styles.smallText,
														)}
														style={{
															backgroundColor: isbServiceDetails.color,
														}}
													>
														{service.name}
													</Box>
													<Box className={styles.serviceDetailsWrapper}>
														<Box className={styles.serviceDetails}>
															<StopNameListing
																names={isbTowards.map((s) => s.ShortName)}
																stopNameProps={{
																	weight: "medium",
																	style: { whiteSpace: "nowrap" },
																}}
															/>
														</Box>
														{!hideAlternativeServices &&
															oppositeStop &&
															isbOppositeTowards &&
															isbOppositeTowards.length > 0 && (
																<Box className={styles.serviceSubDetails}>
																	<Text color="gray" size="1">
																		Cross to {oppositeStop.ShortName} for{" "}
																		{isbOppositeServiceDetails?.name !==
																			isbServiceDetails.name && (
																			<>
																				{"service "}
																				<Text
																					// className={styles.serviceTag}
																					// style={{
																					// 	backgroundColor:
																					// 		isbOppositeServiceDetails?.color,
																					// }}
																					weight="bold"
																				>
																					{isbOppositeServiceDetails?.name}
																				</Text>
																				{" towards "}
																			</>
																		)}
																		<StopNameListing
																			names={isbOppositeTowards.map(
																				(s) => s.ShortName,
																			)}
																			stopNameProps={{
																				weight: "medium",
																				style: { whiteSpace: "nowrap" },
																			}}
																		/>
																	</Text>
																</Box>
															)}
													</Box>
												</>
											) : (
												<Box className={styles.serviceName}>{service.name}</Box>
											)}
											<ETA
												arriving={arriving}
												inMinutes={inMinutes}
												inTimestamps={inTimestamps}
												fetchedTime={fetchedTime}
											/>
										</Box>
									</Link>
								</Reset>
								{serviceToAppend === service.name && (
									<Box className={styles.serviceContent}>{children}</Box>
								)}
							</Box>
						);
					})}
			</Box>
			{/* format timings.Timestamp into localized timestamp + how many seconds ago */}
			{!hideUpdatedTime && (
				<Text color="gray" as="p" mt="1" size="1">
					Updated at{" "}
					{fetchedTime?.toLocaleString(undefined, {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						hour12: false,
					})}
					{updatedSecondsAgo === null ? "" : ` (${updatedSecondsAgo} secs ago)`}
					{timingsValidatingDebounced ? (
						<IconRefresh size={12} className={styles.refreshIcon} />
					) : null}
				</Text>
			)}
		</>
	);
}

function ETA({
	arriving,
	inMinutes,
	inTimestamps,
	fetchedTime,
}: {
	fetchedTime: Date;
} & ReturnType<typeof separateETAsByDisplay>) {
	return (
		<Text color="gray" size="2" weight="medium" className={styles.serviceETA}>
			{arriving.length === 0 &&
				inMinutes.length === 0 &&
				inTimestamps.length === 0 &&
				"–"}

			{arriving.map((eta, i) => (
				<>
					{i === 0 && ""}
					{i > 0 && ", "}
					<Text weight="bold" className={styles.timing}>
						<CrowdIndicator plate={eta.plate} ts={eta.ts} />
						Arr
					</Text>
				</>
			))}

			{inMinutes.map((eta, i) => (
				<>
					{i === 0 && arriving.length > 0 && ", "}
					{i > 0 && ", "}
					<Text className={styles.timing}>
						<CrowdIndicator plate={eta.plate} ts={eta.ts} />
						{eta.eta}
					</Text>
					{i === inMinutes.length - 1 && " min"}
				</>
			))}
			{inTimestamps.map((eta, i) => {
				const arrivalInSeconds = eta.eta_s;
				const arrival = new Date(
					fetchedTime.getTime() + arrivalInSeconds * 1000,
				);
				const time = arrival.toLocaleTimeString(undefined, {
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
				});
				return (
					<>
						{i === 0 && arriving.length + inMinutes.length > 0 && ", "}
						{i > 0 && ", "}
						<Text className={styles.timing}>
							<CrowdIndicator plate={eta.plate} ts={eta.ts} />
							{time}
						</Text>
					</>
				);
			})}
		</Text>
	);
}

function CrowdIndicator({ plate, ts }: { plate: string; ts?: string }) {
	const {
		data: isbPositions,
		error: isbPositionsError,
		isLoading: isbPositionsLoading,
	} = useSWR("all", getISBPositionsAll, {
		refreshInterval: 1000 * 15, // every 15 seconds
	});

	if (isbPositionsLoading || isbPositionsError || !isbPositions) return null;

	const tripStart = ts && new Date(ts);
	const now = new Date();
	// if trip hasnt started yet, dont show crowd indicator
	if (tripStart && tripStart > now) return null;

	const bus = isbPositions
		.find((svc) => svc.activebus.find((bus) => bus.vehplate === plate))
		?.activebus.find((bus) => bus.vehplate === plate);

	if (!bus) return null;

	const dotsCount =
		bus.loadInfo.crowdLevel === "low"
			? 1
			: bus.loadInfo.crowdLevel === "medium"
				? 2
				: 3;
	return (
		<Text
			as="span"
			size="2"
			color="gray"
			className={clsx(
				bus.loadInfo.crowdLevel === "low" && styles.crowdLow,
				bus.loadInfo.crowdLevel === "medium" && styles.crowdMedium,
				bus.loadInfo.crowdLevel === "high" && styles.crowdHigh,
				styles.crowdDotWrapper,
			)}
		>
			{/* {bus.loadInfo.crowdLevel} */}
			{Array.from({ length: dotsCount }).map((_, i) => (
				<span key={i} className={styles.crowdDot} />
			))}
		</Text>
	);
}

function separateETAsByDisplay(
	etas: InferOutput<
		typeof ShuttleServiceResultSchema.entries.shuttles.item.entries._etas
	>,
	fetchedTime: Date,
	showInMinutesCutoff: Date,
	arrivalCutoff = 30,
) {
	// sort ETAs into two arrays: one to be shown in minutes, the other as timestamps
	const arriving = etas?.filter((eta) => eta.eta_s <= arrivalCutoff) || [];
	const inMinutes =
		etas?.filter((eta) => {
			if (eta.eta_s <= arrivalCutoff) return false;
			const arrivalInSeconds = eta.eta_s;
			const arrival = new Date(fetchedTime.getTime() + arrivalInSeconds * 1000);
			return arrival < showInMinutesCutoff;
		}) || [];
	const inTimestamps =
		etas
			?.filter((eta) => !inMinutes.includes(eta) && !arriving.includes(eta))
			?.slice(0, 1) || [];

	return {
		arriving,
		inMinutes,
		inTimestamps,
	};
}

function StopNameListing({
	names,
	max = 3,
	stopNameProps = { weight: "bold" },
}: {
	names: string[];
	max?: number;
	stopNameProps?: TextProps;
}) {
	const lastName = names[names.length - 1];
	const remaining = names.slice(0, Math.min(max - 1, names.length - 1));
	return (
		<>
			{remaining.map((name, i) => (
				<>
					<Text {...stopNameProps}>{name}</Text>
					{i === remaining.length - 1 ? " & " : ", "}
				</>
			))}
			<Text {...stopNameProps}>{lastName}</Text>
		</>
	);
}
