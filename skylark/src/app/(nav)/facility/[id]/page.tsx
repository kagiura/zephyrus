"use client";

import { Flex, Heading } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import styles from "./page.module.css";

import VenueOccupancy from "@/components/VenueOccupancy";
import { IMDF_AMENITIES, IMDF_LEVELS, IMDF_UNITS } from "@/data/imdf";
import { useMapState } from "@/utils/mapState";
import { AMENITY_CATEGORY } from "@dazzlegarden/types/imdf";
import pointOnFeature from "@turf/point-on-feature";

export default function Facility({ children }: { children: React.ReactNode }) {
	const { id } = useParams();
	const {
		flyTo,
		pullBackCard,
		setFocusedUnitIDs,
		resetFocusedState,
		setLevelOrdinal,
	} = useMapState();
	const amenity = useMemo(
		() => IMDF_AMENITIES.features.find((u) => u.id === id),
		[id],
	);
	const associatedUnits = useMemo(
		() =>
			IMDF_UNITS.features.filter((unit) =>
				amenity?.properties.unit_ids.includes(unit.id),
			),
		[amenity],
	);
	const associatedLevel = useMemo(
		() =>
			IMDF_LEVELS.features.find(
				(level) => level.id === associatedUnits[0]?.properties.level_id,
			),
		[id],
	);
	useEffect(() => {
		// const stopFromName = isbStops.find((amenity) => amenity.name === name);
		if (!amenity) {
			console.error("amenity not found", id);
			resetFocusedState();

			return;
		}
		if (associatedLevel) {
			setLevelOrdinal(associatedLevel.properties.ordinal);
		}
		flyTo(
			(amenity.geometry.coordinates as [number, number]) ||
				pointOnFeature(amenity.geometry),
		);
		setFocusedUnitIDs(amenity.properties.unit_ids);
		pullBackCard();
	}, [id, flyTo]);

	// const oppStop = useMemo(
	// 	() => isbStops.find((_stop) => _stop.name === amenity?.opposite),
	// 	[amenity],
	// );

	// if (typeof name !== "string" || (service && typeof service !== "string")) {
	// 	return <div>Invalid amenity/service name</div>;
	// }
	if (!amenity) {
		return <div>Unit not found</div>;
	}

	return (
		<>
			<Heading
				as="h1"
				size={{ initial: "7", sm: "8" }}
				mb="3"
				mt={{ initial: "2", sm: "4" }}
			>
				{amenity.properties.name?.en || "Unnamed Facility"}
			</Heading>
			{amenity.properties.alt_name?.en && (
				<Flex gap="2" mb="3">
					<Heading
						as="h2"
						size="4"
						color="gray"
						mt="0"
						weight="medium"
						className={styles.shortName}
					>
						{amenity.properties.alt_name?.en}
					</Heading>
				</Flex>
			)}

			{amenity.properties.category === AMENITY_CATEGORY.amphitheater && (
				<VenueOccupancy venueName={amenity.properties.name?.en || ""} />
				// <VenueOccupancy venueName={"AS1-0205"} />
				// <VenueOccupancy venueName={"SDE3-BARM"} />
			)}
		</>
	);
}
