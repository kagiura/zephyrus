import {
	IMDF_ANCHORS,
	IMDF_BUILDINGS,
	IMDF_LEVELS,
	IMDF_UNITS,
} from "@/data/imdf";
import isbServices from "@/data/isbServices";
import { ISBService } from "@/types/schema";
import formatDistance from "@/utils/formatDistance";
import useLocation from "@/utils/useLocation";
import useSearchCampus, { SearchResults } from "@/utils/useSearchCampus";
import {
	newImdfCategories,
	newImdfCategoriesColors,
} from "@dazzlegarden/data/newImdfCategories";
import { Building, Level, Unit } from "@dazzlegarden/types/imdf";
import {
	Badge,
	Box,
	Flex,
	IconButton,
	IconButtonProps,
	Link,
	Reset,
	Separator,
	Text,
} from "@radix-ui/themes";
import { IconBus, IconLocation, IconPin } from "@tabler/icons-react";
import distance from "@turf/distance";
import pointToPolygonDistance from "@turf/point-to-polygon-distance";
import { useGeolocation } from "@uidotdev/usehooks";
import clsx from "clsx";
import NextLink from "next/link";
import ServiceBadge from "./ServiceBadge";

export default function CampusSearchResults({
	searchQuery,
}: {
	searchQuery: string;
}): JSX.Element {
	const { isLocationActive, latitude, longitude } = useLocation();
	const { results, loading } = useSearchCampus(searchQuery);

	if (loading) {
		return <div>Loading...</div>;
	}
	if (results.length === 0) {
		return <div>No results found</div>;
	}

	return (
		<>
			<Text size="1" color="gray" mt="4" mb="4" as="p">
				{results.length} result{results.length > 1 ? "s" : ""} for &quot;
				{searchQuery}&quot;
			</Text>
			<Flex direction="column">
				{results.map(({ item, score }, i) => {
					const isIndoor =
						item.type === "occupant" ||
						item.type === "amenity" ||
						item.type === "unit";

					const { feature } = item;
					const isb = "LongName" in feature; // Check if it's an ISB stop
					const id = "id" in feature ? feature.id : feature.name;
					const href = isb
						? `/stops/${id}`
						: item.type === "unit"
							? `/venue/${id}`
							: item.type === "amenity"
								? `/facility/${id}`
								: item.type === "occupant"
									? `/s/${id}`
									: `/venue/${id}`;

					let building: Building[] | null = null;
					let level: Level | null = null;
					let unit: Unit | null = isIndoor
						? item.type === "unit"
							? item.feature
							: null
						: null;

					let dist = 0;

					switch (item.type) {
						case "stop":
							if (isLocationActive)
								dist = distance(
									[longitude, latitude],
									[item.feature.longitude, item.feature.latitude],
									{
										units: "meters",
									},
								);

							break;
						case "occupant":
							const anchorId = item.feature.properties.anchor_id;
							const anchor = IMDF_ANCHORS.features.find(
								(a) => a.id === anchorId,
							);
							if (anchor) {
								unit =
									IMDF_UNITS.features.find(
										(u) => u.id === anchor.properties.unit_id,
									) || null;
								if (isLocationActive)
									dist = distance(
										[longitude, latitude],
										anchor?.geometry.coordinates,
										{
											units: "meters",
										},
									);
							}

							break;
						case "amenity":
							unit =
								IMDF_UNITS.features.find((u) =>
									item.feature.properties.unit_ids.includes(u.id),
								) || null;

							if (isLocationActive)
								dist = distance(
									[longitude, latitude],
									item.feature.geometry.coordinates,
									{
										units: "meters",
									},
								);

							break;
						case "unit":
							if (isLocationActive)
								dist = pointToPolygonDistance(
									[longitude, latitude],
									item.feature.geometry,
									{
										units: "meters",
									},
								);
					}

					if (unit) {
						const levelId = unit.properties.level_id;
						const thisLevel =
							IMDF_LEVELS.features.find((l) => l.id === levelId) || null;
						const buildingId = thisLevel?.properties.building_ids;
						const thisBuilding =
							IMDF_BUILDINGS.features.filter((b) =>
								buildingId?.includes(b.id),
							) || null;

						console.log({ unit, thisLevel, thisBuilding });
						if (thisBuilding && thisLevel) {
							building = thisBuilding;
							level = thisLevel;
						}
					}

					// const building = isIndoor ? item.type === 'occupant' ? item.feature.properties : item.feature. : null;
					return (
						<Box key={id}>
							<Reset>
								<NextLink href={href}>
									<Flex direction="row" gap="3">
										<SearchItemIconWrapper item={item} />

										<Flex direction="column">
											<Text as="p" size="3" weight="bold" trim="both" mb="2">
												{isb ? feature.LongName : feature.properties.name?.en}
												{/* {" "}{score} {typeof score} */}
											</Text>
											<Text as="p" size="2" color="gray" trim="both">
												{isLocationActive && (
													<>
														{formatDistance(dist)}
														{" · "}
													</>
												)}
												{isIndoor && building && level && (
													<>
														{building
															.map((b) => b.properties?.name?.en)
															.join(", ")}{" "}
														{level.properties.name?.en}
													</>
												)}
												{item.type === "stop" && (
													<Flex
														gap="1"
														display="inline-flex"
														style={{
															verticalAlign: 2,
															marginLeft: 2,
														}}
													>
														{item.feature.shuttles.map(({ name }) => {
															const service = isbServices.find(
																(s) => s.name === name,
															);
															if (!service) return null;
															return (
																<ServiceBadge service={service} size="0" />
															);
														})}
													</Flex>
												)}
											</Text>
										</Flex>
									</Flex>
								</NextLink>
							</Reset>
							{i !== results.length - 1 && <Separator size="4" my="3" />}
						</Box>
					);
				})}
			</Flex>
		</>
	);
}

const ICON_SIZE = 16;

// function SearchItemIcon({ item }: { item: SearchResults[number]["item"] }) {
// 	if (item.type === "stop") {
// 		return <IconBus size={ICON_SIZE} />;
// 	}
// 	if (item.type === "amenity") {
// 		const Icon = newImdfCategories.find(
// 			(cat) =>
// 				cat.group === "amenity" &&
// 				cat.category === item.feature.properties.category,
// 		)?.icon;
// 		if (!Icon) return null;
// 		return <Icon size={16} />;
// 	}
// 	if (item.type === "occupant") {
// 		const Icon = newImdfCategories.find(
// 			(cat) =>
// 				cat.group === "occupant" &&
// 				cat.category === item.feature.properties.category,
// 		)?.icon;
// 		if (!Icon) return null;
// 		return <Icon size={16} />;
// 	}
// 	if (item.type === "unit") {
// 		const Icon = newImdfCategories.find(
// 			(cat) =>
// 				cat.group === "unit" &&
// 				cat.category === item.feature.properties.category,
// 		)?.icon;
// 		if (!Icon) return null;
// 		return <Icon size={16} />;
// 	}
// 	return null;
// }

const ICON_BUTTON_PROPS: IconButtonProps = {
	variant: "surface",
	radius: "full",
	style: { pointerEvents: "none" },
};
function SearchItemIconWrapper({
	item,
}: {
	item: SearchResults[number]["item"];
}) {
	if (item.type === "stop") {
		return (
			<IconButton {...ICON_BUTTON_PROPS} color="indigo">
				<IconBus size={ICON_SIZE} />
			</IconButton>
		);
	}
	const imdfCategory = newImdfCategories.find(
		(cat) =>
			cat.group === item.type &&
			cat.category === item.feature.properties.category,
	);
	if (!imdfCategory) {
		return (
			<IconButton {...ICON_BUTTON_PROPS} color="gray">
				<IconLocation size={ICON_SIZE} />
			</IconButton>
		);
	}
	const color =
		newImdfCategoriesColors.find(
			(cat) => cat.subcategory === imdfCategory.subcategory,
		)?.color || "gray";
	const Icon = imdfCategory.icon;
	return (
		<IconButton {...ICON_BUTTON_PROPS} color={color}>
			<Icon size={ICON_SIZE} />
		</IconButton>
	);
}
