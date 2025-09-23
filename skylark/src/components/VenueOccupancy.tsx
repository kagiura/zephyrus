"use client";

import {
	Box,
	Callout,
	Card,
	Flex,
	Separator,
	Tabs,
	Text,
} from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useMemo } from "react";

import useNUSMods from "@/utils/useNUSMods";
import {
	Day,
	eachHourOfInterval,
	format,
	nextDay,
	parse,
	roundToNearestHours,
} from "date-fns";
import { enUS } from "date-fns/locale";

function isWeekend(day: Day) {
	return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
}
const TIME_WIDTH = 36;
const HOUR_HEIGHT = 50; // Height of each hour block in pixels
const COLORS = [
	"ruby",
	"gray",
	"gold",
	"bronze",
	"brown",
	"yellow",
	"amber",
	"orange",
	"tomato",
	"red",
	"crimson",
	"pink",
	"plum",
	"purple",
	"violet",
	"iris",
	"indigo",
	"blue",
	"cyan",
	"teal",
	"jade",
	"green",
	"grass",
	"lime",
	"mint",
	"sky",
] as const;

export const LESSON_TYPE_ABBREV = {
	"Design Lecture": "DLEC",
	Laboratory: "LAB",
	Lecture: "LEC",
	"Packaged Laboratory": "PLAB",
	"Packaged Lecture": "PLEC",
	"Packaged Tutorial": "PTUT",
	Recitation: "REC",
	"Sectional Teaching": "SEC",
	"Seminar-Style Module Class": "SEM",
	Tutorial: "TUT",
	"Tutorial Type 2": "TUT2",
	"Tutorial Type 3": "TUT3",
	Workshop: "WS",
};
function randomColor(seed: string) {
	const i =
		seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
		COLORS.length;
	return COLORS[i];
}
export default function VenueOccupancy({ venueName }: { venueName: string }) {
	const { id } = useParams();

	const { venues, occupancies } = useNUSMods();
	const isVenue = useMemo(
		() => venues?.some((venue) => venue === venueName),
		[venues, venueName],
	);
	const occupancy = useMemo(() => {
		const occupancyData =
			occupancies?.[(venueName as keyof typeof occupancies) || ""] || null;
		if (!occupancyData) return null;
		const days = ([1, 2, 3, 4, 5, 6, 0] as Day[]).map((day) => {
			const dayName = format(nextDay(new Date(), day), "EEEE", {
				locale: enUS,
			});
			//start is min of 10AM and first class start time
			// end is max of 6PM and last class end time
			const occupancy = occupancyData.find((o) => o.day === dayName);
			if (!occupancy)
				return {
					day,
					dayName,
					occupancy: null,
				};
			const startTime = roundToNearestHours(
				occupancy.classes.reduce(
					(acc, cls) => {
						const startTime = parse(cls.startTime, "HHmm", new Date());
						return startTime < acc ? startTime : acc;
					},
					parse("1000", "HHmm", new Date()), // 10 AM
				),
				{ roundingMethod: "floor" },
			);
			const endTime = roundToNearestHours(
				occupancy.classes.reduce(
					(acc, cls) => {
						const endTime = parse(cls.endTime, "HHmm", new Date());
						return endTime > acc ? endTime : acc;
					},
					parse("1800", "HHmm", new Date()), // 6 PM
				),
				{
					roundingMethod: "ceil",
				},
			);
			const classes = occupancy.classes
				.map((cls) => {
					let weeks = "length" in cls.weeks ? cls.weeks : cls.weeks.weeks || [];
					const weeksString =
						weeks.length === 13
							? null
							: weeks.length === 1
								? weeks[0].toString()
								: weeks
										.sort((a, b) => a - b)
										.reduce((acc, week, index, arr) => {
											if (index === 0) return week.toString();
											if (week === arr[index - 1] + 1) {
												if (acc.endsWith("-")) {
													return acc + week;
												}
												return acc + "-" + week;
											}
											return acc + ", " + week;
										}, "");
					// if weeks is empty, set to null
					const weeksDisplay = weeksString || null;

					return {
						...cls,
						startTime: parse(cls.startTime, "HHmm", new Date()),
						endTime: parse(cls.endTime, "HHmm", new Date()),
						color: randomColor(cls.moduleCode),
						weeksDisplay,
					};
				})
				.sort((a, b) => a.moduleCode.localeCompare(b.moduleCode))
				.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

			// to show schedule, figure out maximum amount of classes overlapping throughout the day
			// to calculate, create different columns; put as many classes as possible in each column

			const columns: (typeof classes)[number][][] = [[]];
			classes.forEach((cls) => {
				let placed = false;
				for (const column of columns) {
					const lastClass = column[column.length - 1];
					if (!lastClass || cls.startTime >= lastClass.endTime) {
						column.push(cls);
						placed = true;
						break;
					}
				}
				if (!placed) {
					columns.push([cls]);
				}
			});
			// show weeks normally, eg [1,2,3,5,6] -> 1-3, 5-6
			// if all weeks (1-13), set as null

			return {
				day,
				dayName,
				occupancy: {
					...occupancy,
					classes,
				},
				startTime,
				endTime,
				columns,
			};
		});
		return days.filter((day) => !isWeekend(day.day) || day.occupancy !== null);
	}, [id, occupancies]);

	if (!isVenue) {
		return <div>Venue not found</div>;
	}
	if (!occupancy) {
		return <div>Occupancy data not found</div>;
	}
	return (
		<>
			{occupancy && (
				<Tabs.Root defaultValue={occupancy[0].dayName}>
					<Tabs.List>
						{occupancy.map((o) => (
							<Tabs.Trigger
								key={o.day}
								value={o.dayName}
								disabled={o.occupancy === null}
							>
								{/* display short day name */}
								{format(nextDay(new Date(), o.day), "EEE", { locale: enUS })}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					<Box pt="3">
						{occupancy.map(
							({ dayName, occupancy, columns, startTime, endTime }) => {
								if (!occupancy) {
									return (
										<Tabs.Content key={dayName} value={dayName}>
											<Text mb="2" as="p">
												No occupancy data available for {dayName}.
											</Text>
										</Tabs.Content>
									);
								}
								// every hour, from start to end
								const hoursWithMarkers = eachHourOfInterval({
									start: startTime,
									end: endTime,
								});
								return (
									<Tabs.Content key={dayName} value={dayName}>
										<Box
											style={{
												position: "relative",
												display: "grid",
												gridTemplateColumns: `${TIME_WIDTH}px repeat(${columns.length}, 1fr)`,
												gridTemplateRows: "1fr",
												height: (hoursWithMarkers.length - 1) * HOUR_HEIGHT,
												rowGap: 0,
												columnGap: "var(--space-1)",
											}}
											mb="9"
										>
											{hoursWithMarkers.map((hour, index) => (
												<Flex
													key={hour.toISOString()}
													style={{
														height: HOUR_HEIGHT,
														// borderTop: "1px solid #ccc",
														position: "absolute",
														top: index * HOUR_HEIGHT,
														width: "100%",
													}}
													direction="column"
												>
													<Separator size="4" />
													<Text size="1" color="gray" weight="medium">
														{format(hour, "HH:mm")}
													</Text>
												</Flex>
											))}
											{columns.map((column, colIndex) =>
												column.map((cls, index) => {
													// const lastTime =
													// 	index === 0
													// 		? startTime.getTime()
													// 		: column[index - 1].endTime.getTime();
													const lastTime = startTime.getTime();
													const minutesFromLast =
														(cls.startTime.getTime() - lastTime) / 60000; // convert to minutes
													const top = (minutesFromLast / 60) * HOUR_HEIGHT; // convert to pixels
													const height =
														((cls.endTime.getTime() - cls.startTime.getTime()) /
															60000 /
															60) *
															HOUR_HEIGHT -
														2; // convert to pixels

													console.log(
														startTime,
														cls.startTime,
														cls.endTime,
														height,
													);
													return (
														<Box key={cls.classNo} asChild px="3" py="2">
															<Callout.Root
																variant="surface"
																style={{
																	gridRow: "1 / -1",
																	gridColumn: colIndex + 2,
																	position: "relative",
																	top,
																	height,
																	backdropFilter: "blur(10px)",
																	borderRadius: "var(--radius-3)",
																}}
																color={cls.color}
															>
																<Flex direction="column" asChild>
																	<Callout.Text>
																		<Text weight="bold">{cls.moduleCode}</Text>
																		<Text size="1">
																			{/* @ts-ignore */}
																			{LESSON_TYPE_ABBREV[cls.lessonType] ||
																				cls.lessonType}{" "}
																			[{cls.classNo}]
																		</Text>
																		{cls.weeksDisplay && (
																			<Text size="1">
																				Weeks {cls.weeksDisplay}
																			</Text>
																		)}
																	</Callout.Text>
																</Flex>
															</Callout.Root>
														</Box>
													);
												}),
											)}
										</Box>
									</Tabs.Content>
								);
							},
						)}
					</Box>
				</Tabs.Root>
			)}
		</>
	);
}
