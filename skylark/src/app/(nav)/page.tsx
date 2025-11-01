"use client";
import { TextField } from "@radix-ui/themes";

import CampusSearchResults from "@/components/CampusSearchResults";
import ClosestBuilding from "@/components/ClosestBuilding";
import ClosestStops from "@/components/ClosestStops";
import { useState } from "react";

export default function Page() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<TextField.Root
				placeholder="Search NUS"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			{searchQuery ? (
				<CampusSearchResults searchQuery={searchQuery} />
			) : (
				<>
					<ClosestBuilding />
					<ClosestStops />
				</>
			)}
		</>
	);
}
