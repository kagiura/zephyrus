"use client";

import { Flex, Heading } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import styles from "./page.module.css";

import VenueOccupancy from "@/components/VenueOccupancy";
import { IMDF_LEVELS, IMDF_UNITS } from "@/data/imdf";
import { useMapState } from "@/utils/mapState";
import pointOnFeature from "@turf/point-on-feature";

export default function Venue({ children }: { children: React.ReactNode }) {
	const { id } = useParams();
	const {
		flyTo,
		pullBackCard,
		setFocusedUnitIDs,
		resetFocusedState,
		setLevelOrdinal,
	} = useMapState();
	const unit = useMemo(
		() => IMDF_UNITS.features.find((u) => u.id === id),
		[id],
	);
	const associatedLevel = useMemo(
		() =>
			IMDF_LEVELS.features.find(
				(level) => level.id === unit?.properties.level_id,
			),
		[unit],
	);
	useEffect(() => {
		// const stopFromName = isbStops.find((unit) => unit.name === name);
		if (!unit) {
			console.error("unit not found", id);
			resetFocusedState();

			return;
		}
		if (associatedLevel) {
			setLevelOrdinal(associatedLevel.properties.ordinal);
		}
		flyTo(
			(unit.properties.display_point?.coordinates as [number, number]) ||
				pointOnFeature(unit.geometry),
		);
		setFocusedUnitIDs([unit.id]);
		pullBackCard();
	}, [id, flyTo]);

	if (!unit || !unit.properties.name) {
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
				{unit.properties.name.en}
			</Heading>
			{unit.properties.alt_name?.en && (
				<Flex gap="2" mb="3">
					<Heading
						as="h2"
						size="4"
						color="gray"
						mt="0"
						weight="medium"
						className={styles.shortName}
					>
						{unit.properties.alt_name?.en}
					</Heading>
				</Flex>
			)}
			<VenueOccupancy venueName={unit.properties.name.en} />
		</>
	);
}
