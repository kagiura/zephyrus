"use client";
import { Box, Flex, TextField } from "@radix-ui/themes";

import CampusSearchResults from "@/components/CampusSearchResults";
import ClosestBuilding from "@/components/ClosestBuilding";
import ClosestStops from "@/components/ClosestStops";
import { LayoutGroup } from "motion/react";
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
				<Flex direction="column" gap="0" mt="4">
					<LayoutGroup>
						<ClosestBuilding />
						<ClosestStops />
					</LayoutGroup>
				</Flex>
			)}
		</>
	);
}
