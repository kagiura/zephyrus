"use client";
import {
	Box,
	Flex,
	IconButton,
	Inset,
	Text,
	TextField,
} from "@radix-ui/themes";

import CampusSearchResults from "@/components/CampusSearchResults";
import ClosestBuilding from "@/components/ClosestBuilding";
import ClosestStops from "@/components/ClosestStops";
import { IconCross, IconSearch, IconX } from "@tabler/icons-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";

export default function Page() {
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearching, setIsSearching] = useState(false);

	return (
		<>
			<Box mb="5">
				<TextField.Root
					placeholder="Search NUS"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setIsSearching(true)}
					onBlur={() => {
						// searching false if query is empty
						if (searchQuery.trim() === "") {
							setIsSearching(false);
						}
					}}
					color="gray"
					variant="soft"
					radius="large"
				>
					<TextField.Slot side="left">
						<Text color="gray">
							<IconSearch width={12} height={12} />
						</Text>
					</TextField.Slot>
					<TextField.Slot side="right">
						{!!searchQuery && (
							<IconButton
								color="gray"
								variant="ghost"
								size="1"
								onClick={() => {
									setSearchQuery("");
									setIsSearching(false);
								}}
							>
								<IconX width={12} height={12} />
							</IconButton>
						)}
					</TextField.Slot>
				</TextField.Root>
			</Box>

			<AnimatePresence>
				{isSearching ? (
					<motion.div
						key="search-results"
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 10, position: "absolute" }}
						transition={{ damping: 120 }}
					>
						<CampusSearchResults searchQuery={searchQuery} />
					</motion.div>
				) : (
					<motion.div
						key="closest-info"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10, position: "absolute" }}
						transition={{ damping: 120 }}
					>
						<Flex direction="column" gap="0" mt="4">
							<LayoutGroup>
								<ClosestBuilding />
								<ClosestStops />
							</LayoutGroup>
						</Flex>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
