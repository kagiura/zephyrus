import {
	IMDF_AMENITIES,
	IMDF_ANCHORS,
	IMDF_FOOTPRINTS,
	IMDF_LEVELS,
	IMDF_OCCUPANTS,
	IMDF_UNITS,
} from "@/data/imdf";
import {
	IMDF_UNIT_COLOR,
	IMDF_UNIT_SUBCATEGORIES,
	IMDF_UNIT_SUBCATEGORY,
} from "@/utils/imdf";
import { useMapState } from "@/utils/mapState";
import { newImdfCategories } from "@dazzlegarden/data/newImdfCategories";
import { slate, slateDark } from "@radix-ui/colors";
import chroma from "chroma-js";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useMemo } from "react";
import { Layer, Source, useMap } from "react-map-gl/mapbox";

const fullHeightSubCats = [
	// IMDF_UNIT_SUBCATEGORY.elevation,
	IMDF_UNIT_SUBCATEGORY.structure,
	// IMDF_UNIT_SUBCATEGORY.health,
	// IMDF_UNIT_SUBCATEGORY.restroom,
	IMDF_UNIT_SUBCATEGORY.nonpublic,
];

function IMDFLayer() {
	const { resolvedTheme } = useTheme();

	const { focusedUnits, levelOrdinal } = useMapState();
	const isDark = resolvedTheme === "dark";
	const activeLevels = useMemo(
		() =>
			IMDF_LEVELS.features.filter(
				(level) => level.properties.ordinal === levelOrdinal,
			),
		[levelOrdinal],
	);
	const activeLevelIDs = useMemo(
		() => activeLevels.map((level) => level.id),
		[activeLevels],
	);
	const activeUnits = useMemo(
		() =>
			IMDF_UNITS.features.filter((unit) =>
				activeLevels.some((level) => level.id === unit.properties.level_id),
			),
		[activeLevels],
	);
	const activeUnitIDs = useMemo(
		() => activeUnits.map((unit) => unit.id),
		[activeUnits],
	);

	const activeAmenities = useMemo(
		() =>
			IMDF_AMENITIES.features.filter((amenity) =>
				amenity.properties.unit_ids.some((id) => activeUnitIDs.includes(id)),
			),
		[activeUnits, activeUnitIDs],
	);

	const activeOccupants = useMemo(
		() =>
			IMDF_OCCUPANTS.features.filter((occupant) =>
				activeUnitIDs.includes(
					IMDF_ANCHORS.features.find(
						(anchor) => anchor.id === occupant.properties.anchor_id,
					)?.properties.unit_id ?? "",
				),
			),
		[activeUnitIDs],
	);
	// console.log("IMDFLayer activeLevels", activeLevels);
	// console.log("IMDFLayer activeUnits", activeUnits);
	// console.log("IMDFLayer activeAmenities", activeAmenities);

	return (
		<>
			<Layer type="slot" id="imdf-footprint" />
			<Layer type="slot" id="imdf-units" />
			<Layer type="slot" id="imdf-structure" />
			<Layer type="slot" id="imdf-unit-labels" />
			<Layer type="slot" id="imdf-symbols" />
			{IMDF_FOOTPRINTS.features.map((footprint) => (
				<Fragment key={footprint.id}>
					<Source
						type="geojson"
						data={footprint}
						id={`footprint-source-${footprint.id}`}
					>
						<Layer
							slot="imdf-footprint"
							key={footprint.id}
							id={`footprint-${footprint.id}`}
							type="fill"
							paint={{
								"fill-color": "#888",
							}}
							maxzoom={15}
						/>
					</Source>
				</Fragment>
			))}
			{activeLevels.map((level) => (
				<Fragment key={level.id}>
					<Source type="geojson" data={level} id={`level-source-${level.id}`}>
						<Layer
							slot="imdf-footprint"
							id={`level-${level.id}`}
							type="fill"
							paint={{
								"fill-color": "#fff",
								"fill-opacity": 0.5,
							}}
							minzoom={15}
						/>
					</Source>
				</Fragment>
			))}
			{activeUnits.map((unit) => {
				const subcategory =
					IMDF_UNIT_SUBCATEGORIES[unit.properties.category] ||
					IMDF_UNIT_SUBCATEGORY.unspecified;
				const color = IMDF_UNIT_COLOR[subcategory][isDark ? 1 : 0];
				const focused = focusedUnits?.some((u) => u?.id === unit.id);

				const fullHeight = fullHeightSubCats.includes(subcategory);
				const textColor = focused
					? resolvedTheme === "dark"
						? slateDark.slate11
						: slate.slate11
					: resolvedTheme === "dark"
						? slateDark.slate10
						: slate.slate10;
				// console.log(unit, unit.properties.category)
				return (
					<Fragment key={unit.id}>
						<Source type="geojson" data={unit} id={`unit-source-${unit.id}`}>
							{unit.properties?.name?.en &&
								unit.properties.display_point &&
								!fullHeight && (
									<Layer
										slot="imdf-unit-labels"
										id={`unit-label-${unit.id}`}
										type="symbol"
										layout={{
											"text-field": ["get", "en", ["get", "name"]],
											"text-font": [
												"DIN Pro Medium",
												"Arial Unicode MS Regular",
											],
											"text-size": 12,
											"text-anchor": "center",
											"text-justify": "auto",
											"text-rotation-alignment": "viewport",
											"text-pitch-alignment": "map",
										}}
										paint={{
											"text-color": textColor,
											"text-halo-width": 1,
											"text-halo-color": color,
										}}
										minzoom={18}
									/>
								)}
							{fullHeight ? (
								<Layer
									slot="imdf-structure"
									id={`unit-${unit.id}`}
									type={"fill-extrusion"}
									minzoom={15}
									paint={{
										"fill-extrusion-emissive-strength": 1,
										"fill-extrusion-color": color,
										"fill-extrusion-opacity": 1,
										"fill-extrusion-height": 1,
									}}
								/>
							) : (
								<Layer
									slot="imdf-units"
									id={`unit-${unit.id}`}
									type="fill"
									minzoom={15}
									paint={{
										"fill-emissive-strength": 1,
										"fill-color": focused
											? chroma(color).tint(0.025).hex()
											: color,
										"fill-opacity": 1,
									}}
								/>
							)}
						</Source>
					</Fragment>
				);
			})}
			{activeAmenities.map((amenity) => {
				const category = newImdfCategories.find(
					(c) =>
						c.category === amenity.properties.category && c.group === "amenity",
				);
				const icon = category
					? `${category.subcategory}-Icon${category.icon.displayName}`
					: "generic-IconMapPin";
				return (
					<Fragment key={amenity.id}>
						<Source type="geojson" data={amenity}>
							<Layer
								slot="imdf-symbols"
								id={`amenity-${amenity.id}`}
								type="symbol"
								minzoom={18}
								layout={{
									"icon-image": icon,
									"icon-size": 0.5,
									// "icon-rotation-alignment": "viewport",
									// "icon-pitch-alignment": "map",
									"text-field": ["get", "en", ["get", "name"]],
									"text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
									"text-size": 12,
									"text-variable-anchor": ["right", "left", "top", "bottom"],
									"text-justify": "auto",
									// "text-rotation-alignment": "viewport",
									// "text-pitch-alignment": "map",
									"text-radial-offset": 1,
									// "symbol-z-elevate": true,
								}}
								paint={{
									"text-color":
										resolvedTheme === "dark"
											? slateDark.slate12
											: slate.slate12,
									"text-halo-width": 1,
									"text-halo-color": isDark ? slateDark.slate1 : slate.slate1,
								}}
							/>
						</Source>
					</Fragment>
				);
			})}
		</>
	);
}
export default IMDFLayer;
