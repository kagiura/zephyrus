import { Building, Level } from "@dazzlegarden/types/imdf";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
	Box,
	BoxProps,
	Card,
	Dialog,
	Flex,
	IconButton,
	Text,
	VisuallyHidden,
} from "@radix-ui/themes";
import cleanCoords from "@turf/clean-coords";
import pointToPolygonDistance from "@turf/point-to-polygon-distance";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

import { IMDF_BUILDINGS, IMDF_LEVELS } from "@/data/imdf";
import { useMapState } from "@/utils/mapState";

interface BuildingWithLevels {
	building: Building;
	levels: Level[];
}

const levelOrdinals = IMDF_LEVELS.features
	.reduce<number[]>((acc, level) => {
		if (
			level.properties.ordinal !== null &&
			acc.indexOf(level.properties.ordinal) === -1
		) {
			acc.push(level.properties.ordinal);
		}
		return acc;
	}, [] as number[])
	.sort((a, b) => b - a);

const buildingWithLevels = IMDF_BUILDINGS.features.map((building) => {
	const levels = IMDF_LEVELS.features.filter((level) =>
		level.properties.building_ids?.includes(building.id),
	);
	return { building, levels };
}) as BuildingWithLevels[];

const iconSize = 40;

function IMDFLevelSelect({
	lat,
	lng,
	zoom,
	...props
}: BoxProps & {
	lat: number;
	lng: number;
	zoom: number;
}) {
	const [expanded, setExpanded] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const { setLevelOrdinal, levelOrdinal } = useMapState();

	const activeLevels = useMemo(() => {
		return IMDF_LEVELS.features.filter(
			(level) => level.properties.ordinal === levelOrdinal,
		);
	}, [levelOrdinal]);

	const closestLevel = useMemo(() => {
		if (!lat || !lng) return null;
		const closest = activeLevels.reduce(
			(closest, level) => {
				const distance = pointToPolygonDistance(
					[lng, lat],
					cleanCoords(level.geometry),
					// TODO: remove this cleancoords
				);
				if (!closest || distance < closest.distance) {
					return { level, distance };
				}
				return closest;
			},
			null as { level: (typeof activeLevels)[0]; distance: number } | null,
		);
		return closest ? closest.level : null;
	}, [lat, lng, activeLevels]);

	const activeBuildingWithLevels = useMemo(() => {
		if (!closestLevel) return null;
		return buildingWithLevels.find((b) =>
			b.levels.some((l) => l.id === closestLevel.id),
		);
	}, [closestLevel]);

	const activeBuildingLevels = useMemo(
		() =>
			activeBuildingWithLevels
				? activeBuildingWithLevels.levels.sort(
						(a, b) => b.properties.ordinal - a.properties.ordinal,
					)
				: [],
		[activeBuildingWithLevels],
	);
	return (
		<Box {...props}>
			<Dialog.Root
				open={isDialogOpen}
				onOpenChange={(open) => {
					setIsDialogOpen(open);
					if (!open) {
						setExpanded(false);
					}
				}}
			>
				{/* <Dialog.Trigger><Button>Edit profile</Button></Dialog.Trigger> */}

				<Dialog.Content maxWidth="450px">
					<VisuallyHidden>
						<Dialog.Title>Select level</Dialog.Title>
					</VisuallyHidden>

					<Flex gap="3" justify="center">
						{buildingWithLevels.map(({ building, levels }) => {
							const isActiveBuilding = levels.some(
								(level) => level.id === closestLevel?.id,
							);
							return (
								<Flex
									key={building.id}
									direction="column"
									gap="2"
									style={{
										opacity: isActiveBuilding ? 1 : 0.5,
									}}
									align="center"
								>
									{levelOrdinals.map((ordinal) => {
										const level = levels.find(
											(level) => level.properties.ordinal === ordinal,
										);
										if (!level)
											return (
												<IconButton
													key={ordinal}
													disabled
													style={{ opacity: 0, pointerEvents: "none" }}
												>
													{ordinal}
												</IconButton>
											);
										const isActive = level.properties.ordinal === levelOrdinal;
										return (
											<IconButton
												key={level.id}
												onClick={() => {
													setLevelOrdinal(level.properties.ordinal);
													setExpanded(false);
													setIsDialogOpen(false);
												}}
												// radius="full"
												variant={isActive ? "solid" : "soft"}
											>
												{level.properties.short_name?.en ||
													level.properties.ordinal}
											</IconButton>
										);
									})}

									<Text size="2" weight="medium">
										{building.properties.name?.en}
									</Text>
								</Flex>
							);
						})}
					</Flex>

					{/* <Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="soft" color="gray">
								Cancel
							</Button>
						</Dialog.Close>
						<Dialog.Close>
							<Button>Save</Button>
						</Dialog.Close>
					</Flex> */}
				</Dialog.Content>
			</Dialog.Root>
			<Box asChild p="0">
				<Card asChild>
					<motion.div
						style={{ boxSizing: "content-box" }}
						animate={{
							width: iconSize,
							height: expanded ? "auto" : iconSize,
						}}
						transition={{
							type: "spring",
							damping: 34,
							stiffness: 315,
						}}
					>
						{activeBuildingWithLevels && (
							<Flex asChild direction="column">
								<motion.div
									animate={{
										y: expanded
											? 0
											: activeBuildingLevels.findIndex(
													(level) => level.properties.ordinal === levelOrdinal,
												) *
												iconSize *
												-1,
									}}
									transition={{
										type: "spring",
										damping: 34,
										stiffness: 315,
									}}
								>
									{activeBuildingWithLevels.levels
										.sort((a, b) => b.properties.ordinal - a.properties.ordinal)
										.map((level) => {
											const isActive =
												level.properties.ordinal === levelOrdinal;
											return (
												<Flex
													align="center"
													justify="center"
													key={level.id}
													style={{ width: iconSize, height: iconSize }}
												>
													<IconButton
														size="3"
														onClick={() => {
															if (expanded) {
																setLevelOrdinal(level.properties.ordinal);
																setExpanded(false);
															} else {
																setExpanded(true);
															}
														}}
														variant={isActive && expanded ? "soft" : "ghost"}
														radius="none"
														style={{
															width: iconSize,
															height: iconSize,
															margin: 0,
															boxSizing: "border-box",
														}}
													>
														{level.properties.short_name?.en ||
															level.properties.ordinal}
													</IconButton>
												</Flex>
											);
										})}

									<IconButton
										size="3"
										onClick={() => {
											setIsDialogOpen(true);
										}}
										variant="ghost"
										radius="none"
										style={{
											width: iconSize,
											height: iconSize,
											margin: 0,
											boxSizing: "border-box",
										}}
									>
										<DotsHorizontalIcon />
									</IconButton>
								</motion.div>
							</Flex>
						)}
					</motion.div>
				</Card>
			</Box>
		</Box>
	);
}
export default IMDFLevelSelect;
