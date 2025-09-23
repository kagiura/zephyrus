"use client";

import { Text } from "@radix-ui/themes";
import { InferOutput } from "valibot";

import { ISBStop, ShuttleServiceResultWithDateSchema } from "@/types/schema";
import useStopTimings from "@/utils/useStopTimings";
import { ReactNode } from "react";

export default function StopTimingsProvider({
	stopName,
	children: Children,
	loading,
}: {
	stopName: string;
	children: (props: {
		stop: ISBStop;
		timings: InferOutput<typeof ShuttleServiceResultWithDateSchema>;
		updatedTime: Date | null;
		updatedSecondsAgo: number | null;
		updating: boolean;
	}) => JSX.Element;
	loading?: ReactNode;
}) {
	const timings = useStopTimings(stopName);
	if (timings.updating) {
		if (loading) {
			return loading;
		}
		return (
			<Text color="gray" as="p" mt="4" align="center">
				Loading...
			</Text>
		);
	}

	if (timings.error) {
		return (
			<Text color="gray" as="p" mt="4" align="center">
				An error occured
			</Text>
		);
	}

	const {
		stop,
		timings: fetchedTimings,
		updatedTime,
		updatedSecondsAgo,
	} = timings;
	return (
		<Children
			stop={stop}
			timings={fetchedTimings}
			updatedTime={updatedTime}
			updatedSecondsAgo={updatedSecondsAgo}
			updating={false}
		/>
	);
}
