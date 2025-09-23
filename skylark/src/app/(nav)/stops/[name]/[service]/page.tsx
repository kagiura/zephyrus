"use client";

import { Box, Button, Flex, Reset, TabNav, Text } from "@radix-ui/themes";
import clsx from "clsx";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { CSSProperties, useEffect, useMemo, useState } from "react";

import styles from "./page.module.css";

import StopTimingsProvider from "@/components/StopTimingProvider";
import isbServices from "@/data/isbServices";
import isbStops from "@/data/isbStops";
import { ISBService } from "@/types/schema";
import { useMapState } from "@/utils/mapState";
import useStopTimings from "@/utils/useStopTimings";

interface Trip {
	plate: string;
	eta_time: Date;
	ts: string;
}

export default function ServiceDetails() {
	const { name, service: serviceName } = useParams();
	const {
		flyTo,
		pullBackCard,
		setFocusedStopName,
		setFocusedSegments,
		setFocusedStops,
	} = useMapState();
	const stop = useMemo(
		() => isbStops.find((stop) => stop.name === name),
		[name],
	);
	const [showAllStops, setShowAllStops] = useState(false);

	const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
	// useEffect(() => {
	// 	// const stopFromName = isbStops.find((stop) => stop.name === name);
	// 	if (!stop) {
	// 		console.error("stop not found", name);
	// 		return;
	// 	}
	// 	if (!stop || stopFromName?.name !== stop.name) {
	// 		// setStop(stopFromName);
	// 		// console.log("stop found", name, stopFromName);
	// 		// console.log("jeao spotlighting");
	// 		flyTo([stopFromName.longitude, stopFromName.latitude]);
	// 		setFocusedStopName(stopFromName.name);
	// 		pullBackCard();
	// 	}
	// }, [name, flyTo, pullBackCard, setFocusedStopName, stop]);

	const oppStop = useMemo(
		() => isbStops.find((_stop) => _stop.name === stop?.opposite),
		[stop],
	);

	const timingsQuery = useStopTimings(stop?.name);

	const service = useMemo(() => {
		if (!serviceName) {
			return null;
		}
		const serviceData = isbServices.find(
			(_service) => _service.name === serviceName,
		);
		if (!serviceData) {
			return null;
		}
		return serviceData;
	}, [serviceName]);

	const stopPairs = useMemo(() => {
		if (!service) {
			return [];
		}
		// create a pair for each consecutive stops.
		// if the stop is the last stop, pair it with the first stop
		const pairs = service.stops.reduce<string[][]>(
			(acc, _stop, index, stops) => {
				if (index === stops.length - 1) {
					// last stop
					acc.push([_stop, stops[0]]);
				} else {
					acc.push([_stop, stops[index + 1]]);
				}
				return acc;
			},
			[],
		);

		return pairs;
	}, [service]);

	useEffect(() => {
		setFocusedSegments(
			stopPairs?.map(([from, to]) => ({
				from,
				to,
				color: service?.color || "black",
			})),
		);
	}, [stopPairs]);

	useEffect(() => {
		setFocusedStops(
			service?.stops
				.filter((s) => s !== name)
				.map((name) => ({
					name,
					color: service?.color || "black",
					service: service?.name,
				})) || [],
		);
	}, [service]);

	const upcomingTrips = useMemo(() => {
		if (timingsQuery.updating || timingsQuery.error) {
			return [];
		}
		const { timings } = timingsQuery;

		return (
			timings.shuttles
				.find((s) => s.name === service?.name)
				?._etas?.map((eta) => ({
					plate: eta.plate,
					eta_time: eta.eta_time,
					ts: eta.ts,
				})) || []
		);
	}, [timingsQuery]);

	useEffect(() => {
		if (
			upcomingTrips.length > 0 &&
			(!selectedTrip ||
				(selectedTrip &&
					!upcomingTrips.find((t) => t.plate === selectedTrip.plate)))
		) {
			setSelectedTrip(upcomingTrips[0]);
		}
	}, [upcomingTrips]);

	if (typeof name !== "string") {
		return <div>Invalid stop name</div>;
	}

	if (timingsQuery.updating || timingsQuery.error) return <div>Error</div>;

	const { timings } = timingsQuery;
	const serviceTimings =
		timings.shuttles.find((s) => s.name === service?.name)?._etas || [];

	if (!service) {
		return <div>Invalid service name</div>;
	}

	const currentStopIndex = service.stops.indexOf(name);

	const previousStops = service.stops.slice(0, currentStopIndex);
	// if 1 stops, show all
	// if 2 stops, show all
	// else, only show 1 previous stop
	const previousStopsShown =
		previousStops.length <= 2 ? previousStops : previousStops.slice(-1);
	const previousStopsHidden =
		previousStops.length > 2 ? previousStops.slice(0, -1) : [];
	const nextStops = service.stops.slice(currentStopIndex + 1);

	return (
		<Box mb="2" mt="-1">
			{/* {service?.name} */}
			{/* {upcomingTripPlates} */}
			{/* {JSON.stringify(serviceTimings, undefined, 2)}
			{JSON.stringify(serviceTimings, undefined, 2)} */}

			<TabNav.Root
				size="2"
				className={styles.tabNav}
				style={
					{
						"--accent-indicator": service.color,
					} as CSSProperties
				}
			>
				{upcomingTrips.map((trip) => (
					<TabNav.Link
						asChild
						active={
							selectedTrip?.plate === trip.plate && selectedTrip.ts === trip.ts
						}
					>
						<Box
							// size="1"
							// mr="1"
							// color="gray"
							// variant={
							// 	selectedTrip?.plate === trip.plate && selectedTrip.ts === trip.ts
							// 		? "solid"
							// 		: "surface"
							// }
							onClick={() => setSelectedTrip(trip)}
						>
							{trip.eta_time.toLocaleTimeString("en-US", {
								hour: "2-digit",
								minute: "2-digit",
								hour12: false,
							})}
							{/* {trip.plate} */}
						</Box>
					</TabNav.Link>
				))}
			</TabNav.Root>
			<Box px="1">
				{previousStopsHidden.length > 0 && (
					<>
						<Flex
							className={clsx(
								styles.showAllStopsWrapper,
								showAllStops && styles.shownAllStops,
							)}
						>
							<Box
								className={styles.stopDot}
								style={{ color: service.color }}
							/>
							<Box
								className={styles.stopLine}
								style={{ color: service.color }}
							/>
							<Button
								onClick={() => setShowAllStops((prev) => !prev)}
								variant="ghost"
								size="1"
								color="gray"
								className={styles.showAllStops}
								mt="2"
								mb="1"
								ml="2"
								// style={{ color: service.color }}
							>
								{showAllStops ? (
									<>Show less</>
								) : (
									<>Show {previousStopsHidden.length} more stops</>
								)}
							</Button>
						</Flex>
						{showAllStops &&
							previousStopsHidden.map((stopName, i) => {
								return (
									<ServiceStop
										key={stopName}
										stopName={stopName}
										service={service}
										selectedTrip={selectedTrip}
										passed
									/>
								);
							})}
					</>
				)}

				{previousStopsShown.map((stopName, i) => {
					return (
						<ServiceStop
							key={stopName}
							stopName={stopName}
							service={service}
							selectedTrip={selectedTrip}
							passed
						/>
					);
				})}
				<ServiceStop
					stopName={name}
					service={service}
					selectedTrip={selectedTrip}
					isEnd={currentStopIndex === service.stops.length - 1}
				/>
				{nextStops?.map((stopName, i) => {
					return (
						<ServiceStop
							key={stopName}
							stopName={stopName}
							service={service}
							selectedTrip={selectedTrip}
							isEnd={i === nextStops.length - 1}
						/>
					);
				})}
			</Box>
		</Box>
	);
}

function ServiceStop({
	stopName,
	service,
	selectedTrip,
	isEnd = false,
	passed = false,
}: {
	stopName: string;
	service: ISBService;
	selectedTrip: Trip | null;
	isEnd?: boolean;
	passed?: boolean;
}) {
	const stop = isbStops.find((s) => s.name === stopName);
	if (!stop) {
		return <></>;
	}

	const isK = service.name === "K";
	const isE = service.name === "E";
	const isStart = service.stops[0] === stop.name;
	return (
		<Flex
			justify="between"
			className={clsx(
				styles.stopDetails,
				passed && styles.passed,
				isEnd && styles.isEnd,
			)}
			py="1"
		>
			<Flex gap="2">
				<Box className={styles.stopDot} style={{ color: service.color }} />
				<Box className={styles.stopLine} style={{ color: service.color }} />

				<Reset>
					<NextLink href={`/stops/${stop.name}/${service.name}`}>
						{stop.LongName}
					</NextLink>
				</Reset>
			</Flex>
			<Text>
				<StopTimingsProvider
					key={stop.name}
					stopName={stop.name}
					loading={<></>}
				>
					{({ stop, timings, updatedTime }) => {
						const trips = timings.shuttles
							.find(
								(s) =>
									s.name === service?.name &&
									(isEnd
										? isK || s.busstopcode.includes("-E")
										: isStart
											? isK || s.busstopcode.includes("-S")
											: true),
							)
							?._etas?.filter((eta) => eta.plate === selectedTrip?.plate)
							.filter((eta) =>
								// eta_time must be after this trip's start time
								{
									const selectedTripStartTime = new Date(selectedTrip?.ts || 0);

									const etaTime = eta.eta_time;
									const etaStartTime = new Date(eta.ts);
									const startAtSameTime =
										selectedTripStartTime.getTime() === etaStartTime.getTime();
									const startAfter =
										etaStartTime.getTime() > selectedTripStartTime.getTime();
									// if (stop.name === "MUSEUM") {
									// 	console.log(
									// 		"trips",
									// 		// etaTime,
									// 		etaStartTime,
									// 		selectedTripStartTime,
									// 		// ">",
									// 		// etaTime >= selectedTripStartTime,
									// 		// "startAtSameTime",
									// 		startAtSameTime,
									// 		// startAfter,
									// 		// ">",
									// 		// isE && isEnd ? startAfter : startAtSameTime,
									// 	);
									// }
									// TODO: ok i figured it out . please refactor this so it works even when youre not in SGT :sob:
									return (
										etaTime >= selectedTripStartTime &&
										(isE && isEnd ? startAfter : startAtSameTime)
									);
								},
							);

						const trip = trips?.[0];
						if (stop.name === "MUSEUM") {
							console.log(
								timings.shuttles,
								service.name,
								stop.name,
								selectedTrip,
							);
						}
						if (!trip) {
							return (
								<>
									{/* test */}
									{/* {/* test */}
									{/* {JSON.stringify(timings.shuttles, undefined, 2)} */}
								</>
							);
							return <></>;
						}

						return (
							// {/* <br /> */}
							<>
								{/* testt
								{JSON.stringify(trips, undefined, 2)} */}
								{trip.eta_time.toLocaleTimeString("en-US", {
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
								})}
								<br />
							</>
							// {/* {JSON.stringify(updatedTime, undefined, 2)} */}
							// {/* {JSON.stringify(trip?.map((t) => t.eta_time), undefined, 2)} */}
							// {/* ——————{trip?.eta} */}
							// {/* {JSON.stringify(trip)} */}
							// {/* {JSON.stringify(timings.shuttles, undefined, 2)} */}
						);
					}}
				</StopTimingsProvider>
			</Text>
		</Flex>
	);
}
