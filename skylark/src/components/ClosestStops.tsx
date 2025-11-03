import { Badge, Box, Heading, Inset, Text } from "@radix-ui/themes";
import { Accordion } from "radix-ui";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

import styles from "./ClosestStops.module.css";
import StopTimings from "./StopTimings";

import { ISBStop } from "@/types/schema";
import formatDistance from "@/utils/formatDistance";
import getClosestStops from "@/utils/getClosestStops";
import useLocation from "@/utils/useLocation";
import { motion } from "motion/react";

export default function ClosestStops() {
	const { latitude, longitude, error, isLocationActive, withinNusBounds } =
		useLocation();
	const [closestStops, setClosestStops] = useLocalStorage<
		(ISBStop & { distance: number })[]
	>("closest", []);

	// if user's location became available,zoom to user location
	useEffect(() => {
		if (!isLocationActive) return;
		setClosestStops(getClosestStops(latitude, longitude));
	}, [latitude, longitude, isLocationActive]);

	if (error) {
		return (
			<ClosestStopsTitleWrapper>
				<Text>Unable to retrieve your location.</Text>
			</ClosestStopsTitleWrapper>
		);
	}
	if (!withinNusBounds) {
		return (
			<ClosestStopsTitleWrapper>
				<Text>
					Your location is outside the NUS campus. Search for an ISB stop with
					the search bar above.
				</Text>
			</ClosestStopsTitleWrapper>
		);
	}

	return (
		<ClosestStopsTitleWrapper>
			<Accordion.Root
				type="multiple"
				key={closestStops
					.slice(0, 3)
					.map((stop) => stop.name)
					.join("--")}
				defaultValue={closestStops.slice(0, 3).map((stop) => stop.name)}
			>
				{closestStops
					.filter((s) => s.distance < 300)
					.map((stop) => (
						<Accordion.Item value={stop.name} key={stop.name} asChild>
							<Box mb="1" className={styles.stop} px="4">
								<Accordion.Trigger asChild>
									<Inset side="y" px="0">
										<Box py="2">
											<Text size="3" weight="medium" mr="2">
												{stop.LongName}
											</Text>
											<Badge size="1" color="gray">
												{formatDistance(stop.distance)}
											</Badge>
										</Box>
									</Inset>
								</Accordion.Trigger>
								<Accordion.Content asChild>
									<Box pb="1">
										<StopTimings
											stopName={stop.name}
											hideUpdatedTime
											hideAlternativeServices
										/>
									</Box>
								</Accordion.Content>
							</Box>
						</Accordion.Item>
						// </Box>
					))}
			</Accordion.Root>
		</ClosestStopsTitleWrapper>
	);
}

function ClosestStopsTitleWrapper({ children }: { children: React.ReactNode }) {
	return (
		<Box
			mb="2"
			asChild
			style={{
				// contain all margins of children in this box to avoid layout shift
				overflow: "visible",
			}}
		>
			<motion.div layout>
				<Heading as="h2" size={{ initial: "6", sm: "7" }} mb="3" mt="4">
					Closest stops
				</Heading>
				{children}
			</motion.div>
		</Box>
	);
}
