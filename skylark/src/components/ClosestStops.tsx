import { Badge, Box, Heading, Inset, Text } from "@radix-ui/themes";
import { useGeolocation } from "@uidotdev/usehooks";
import { Accordion } from "radix-ui";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

import styles from "./ClosestStops.module.css";
import StopTimings from "./StopTimings";

import { DEFAULT_LAT, DEFAULT_LNG } from "@/data/geographicDefaults";
import { ISBStop } from "@/types/schema";
import getClosestStops from "@/utils/getClosestStops";

const IT_LAT = 1.29731;
const IT_LNG = 103.77281;
export default function ClosestStops() {
	const { latitude, longitude, error, loading } = useGeolocation({
		enableHighAccuracy: true,
		maximumAge: 1000 * 20, // 20 secs
	});
	const [closestStops, setClosestStops] = useLocalStorage<
		(ISBStop & { distance: number })[]
	>("closest", []);
	// const closestStops = useMemo(() => {
	// 	if (!currentLocation) return [];
	// 	return getClosestStops(currentLocation.lat, currentLocation.lng);
	// }, [currentLocation]);

	// if user's location became available,zoom to user location
	useEffect(() => {
		if (!latitude || !longitude || loading || error) return;
		setClosestStops(getClosestStops(latitude, longitude));
	}, [latitude, longitude, loading]);

	if (error || (!loading && (!latitude || !longitude))) {
		return (
			<Box>
				<Heading as="h2" size={{ initial: "6", sm: "7" }} mb="3" mt="4">
					Closest stops
				</Heading>
				<Text>Unable to retrieve your location.</Text>
			</Box>
		);
	}

	return (
		<>
			<Heading as="h2" size={{ initial: "6", sm: "7" }} mb="3" mt="4">
				Closest stops
			</Heading>
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
												{stop.distance > 300
													? `${(stop.distance / 1000).toFixed(1)}km`
													: `${stop.distance.toFixed(0)}m`}
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
		</>
	);
}
