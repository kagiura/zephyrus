import useSearchCampus, { SearchResults } from "@/utils/useSearchCampus";
import { Box, Flex, Link, Separator, Text } from "@radix-ui/themes";
import NextLink from "next/link";

export default function CampusSearchResults({
	searchQuery,
}: {
	searchQuery: string;
}): JSX.Element {
	const { results, loading } = useSearchCampus(searchQuery);

	if (loading) {
		return <div>Loading...</div>;
	}
	if (results.length === 0) {
		return <div>No results found</div>;
	}

	return (
		<>
			<Text size="1" color="gray" mt="3" mb="2" as="p">
				{results.length} result{results.length > 1 ? "s" : ""} for &quot;
				{searchQuery}&quot;
			</Text>
			<Flex direction="column">
				{results.map(({ item }, i) => {
					const feature = item.feature;
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
					return (
						<Box key={id}>
							<Link asChild>
								<NextLink href={href}>
									{isb ? feature.LongName : feature.properties.name?.en}
								</NextLink>
							</Link>
							{i !== results.length - 1 && <Separator size="4" my="2" />}
						</Box>
					);
				})}
			</Flex>
		</>
	);
}
