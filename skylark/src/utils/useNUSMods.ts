// swr wrapper for nusmods api

// GET
// ​/{acadYear}​/semesters​/{semester}​/venues.json
// Get a list of all venues
// GET
// ​/{acadYear}​/semesters​/{semester}​/venueInformation.json
// Get detailed information on all venues

import { VenueInfo } from "@/types/nusmods/venue";
import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import useAcadYear from "./useAcadYear";
// env variable NUSMODS_API_URL

export default function useNUSMods() {
	const { year: acadYear, sem: semester } = useAcadYear();
	const fetchUrl = useMemo(() => {
		const year = acadYear
			.split("/")
			.map((s) => "20" + s)
			.join("-");
		const semNumber =
			semester === "Semester 1"
				? 1
				: semester === "Semester 2"
					? 2
					: semester === "Special Sem 1"
						? 3
						: 4;
		return (key: string) =>
			`${process.env.NEXT_PUBLIC_NUSMODS_API_URL}/${year}/semesters/${semNumber}/${key}.json`;
	}, [acadYear, semester]);
	const venues = useSWRImmutable<string[]>(fetchUrl("venues"), (url: string) =>
		fetch(url).then((res) => res.json()),
	);
	const occupancy = useSWRImmutable<VenueInfo>(
		fetchUrl("venueInformation"),
		(url: string) => fetch(url).then((res) => res.json()),
	);
	// console.log("useNUSMods", venues.data, occupancy.data);
	return {
		venues: venues.data,
		occupancies: occupancy.data,
		isLoading:
			!venues.data && !venues.error && !occupancy.data && !occupancy.error,
		error: venues.error || occupancy.error,
	};
}
