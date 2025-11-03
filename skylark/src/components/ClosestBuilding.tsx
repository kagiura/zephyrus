import { IMDF_BUILDINGS, IMDF_LEVELS } from "@/data/imdf";
import { useMapState } from "@/utils/mapState";
import { useDodgeUI } from "@/utils/useDodgeUI";
import { Building, Level } from "@dazzlegarden/types/imdf";
import { Card, Flex, Text } from "@radix-ui/themes";
import { point } from "@turf/helpers";
import pointToPolygonDistance from "@turf/point-to-polygon-distance";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const CLOSE_UP_ZOOM_THRESHOLD = 18;
const DISTANCE_THRESHOLD_METERS = 70;
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
					style={{ overflow: "visible" }}
				>
					<Card asChild>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ damping: 40 }}
						>
							<Flex gap="2">
								<Text color="gray" weight="medium">
									{closestBuildings
										?.map((b) => b.properties.name?.en)
										.join(", ")}
								</Text>

								<Text weight="bold">{closestLevel.properties.name?.en}</Text>
							</Flex>
						</motion.div>
					</Card>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
export default ClosestBuilding;
