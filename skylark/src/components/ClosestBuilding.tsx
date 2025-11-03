import { IMDF_BUILDINGS, IMDF_LEVELS } from "@/data/imdf";
import { useMapState } from "@/utils/mapState";
import { useDodgeUI } from "@/utils/useDodgeUI";
import { Building, Level } from "@dazzlegarden/types/imdf";
import { Box, Card, Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import {
	IconBowlChopsticks,
	IconBus,
	IconDroplet,
	IconToiletPaper,
} from "@tabler/icons-react";
import { point } from "@turf/helpers";
import pointToPolygonDistance from "@turf/point-to-polygon-distance";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const CLOSE_UP_ZOOM_THRESHOLD = 18;
const DISTANCE_THRESHOLD_METERS = 70;

// reminder to self this is closest to map centerpoint not user location
function ClosestBuilding() {
	const { levelOrdinal, debouncedZoom } = useMapState();
	const { correctedCenter } = useDodgeUI();

	const closeUp = debouncedZoom >= 18;
	const visibleLevels = useMemo(() => {
		return IMDF_LEVELS.features
			.filter((l) => {
				return closeUp ? l.properties.ordinal === levelOrdinal : false;
			})
			.map((l) => ({
				...l,
				properties: {
					...l.properties,
					distance: correctedCenter
						? pointToPolygonDistance(point(correctedCenter), l, {
								units: "meters",
							})
						: Infinity,
				},
			}))
			.filter((l) => l.properties.distance <= DISTANCE_THRESHOLD_METERS)
			.sort((a, b) => a.properties.distance - b.properties.distance);
	}, [correctedCenter, levelOrdinal, closeUp]);
	const closestLevel = useMemo(() => {
		return visibleLevels.length > 0 ? visibleLevels[0] : null;
	}, [visibleLevels]);
	const closestBuildings = useMemo(() => {
		if (!closestLevel) return null;
		// find all buildings for this level
		return IMDF_BUILDINGS.features.filter((b) =>
			closestLevel.properties.building_ids?.includes(b.id),
		);
	}, [closestLevel, correctedCenter]);

	return (
		<AnimatePresence>
			{closestLevel && (
				<motion.div
					key={closestLevel.id}
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					layout
					style={{ overflow: "visible", position: "relative" }}
				>
					<motion.div
						initial={{ opacity: 0, y: -4, zIndex: 10 }}
						animate={{ opacity: 1, y: 0, zIndex: 10 }}
						transition={{ damping: 40 }}
						style={{ position: "absolute", top: 0, left: 0, right: 0 }}
					>
						<Box px="2">
							<Text
								color="gray"
								weight="bold"
								size="1"
								style={{
									letterSpacing: 1,
									textTransform: "uppercase",
									background: "var(--color-panel)",
									padding: "0 0.5rem",
									position: "absolute",
									top: "-0.5rem",
									zIndex: 10,
								}}
							>
								Indoor View
							</Text>
						</Box>
					</motion.div>
					<Card asChild>
						<Box asChild py="3" px="4">
							<motion.div
								initial={{ opacity: 0, y: 10, zIndex: 9 }}
								animate={{ opacity: 1, y: 0, zIndex: 9 }}
								transition={{ damping: 40 }}
								style={{ zIndex: 9, position: "relative" }}
							>
								<Flex gap="2">
									<Text weight="medium" size="4" color="plum">
										{closestBuildings
											?.map((b) => b.properties.name?.en)
											.join(", ")}
									</Text>

									<Text weight="bold" size="4">
										{closestLevel.properties.name?.en}
									</Text>
								</Flex>
								{/* common things to search */}
								<Grid columns="4" mt="3">
									<Flex direction="column" align="center">
										<IconButton
											variant="solid"
											color="plum"
											size="4"
											radius="full"
										>
											<IconToiletPaper />
										</IconButton>
										<Text size="2" mt="2" align="center" weight="medium">
											Toilets
										</Text>
									</Flex>
									<Flex direction="column" align="center">
										<IconButton
											variant="solid"
											color="cyan"
											size="4"
											radius="full"
										>
											<IconDroplet />
										</IconButton>
										<Text size="2" mt="2" align="center" weight="medium">
											Water Coolers
										</Text>
									</Flex>
									<Flex direction="column" align="center">
										<IconButton
											variant="solid"
											color="orange"
											size="4"
											radius="full"
										>
											<IconBus />
										</IconButton>
										<Text size="2" mt="2" align="center" weight="medium">
											ISB Stops
										</Text>
									</Flex>
									<Flex direction="column" align="center">
										<IconButton
											variant="solid"
											color="amber"
											size="4"
											radius="full"
										>
											<IconBowlChopsticks />
										</IconButton>
										<Text size="2" mt="2" align="center" weight="medium">
											Food & Drinks
										</Text>
									</Flex>
								</Grid>
							</motion.div>
						</Box>
					</Card>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
export default ClosestBuilding;
