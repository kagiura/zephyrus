"use client";

import { Flex, Heading, Reset, Text } from "@radix-ui/themes";
import { IconArrowsRightLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import styles from "./layout.module.css";

import StopTimings from "@/components/StopTimings";
import isbStops from "@/data/isbStops";
import { useMapState } from "@/utils/mapState";

export default function Story({ children }: { children: React.ReactNode }) {
	const { name, service } = useParams();
	const {
		flyTo,
		pullBackCard,
		setFocusedStopName,
		setFocusedSegments,
		setFocusedStops,
	} = useMapState();
	const stop = useMemo(
		() => isbStops.find((stop) => stop.name === name),
		[name],
	);
	useEffect(() => {
		// const stopFromName = isbStops.find((stop) => stop.name === name);
		if (!stop) {
			console.error("stop not found", name);
			return;
		}
		// if (!stop || stopFromName?.name !== stop.name) {
		flyTo([stop.longitude, stop.latitude]);
		setFocusedStopName(stop.name);
		pullBackCard();
		// }
		if (!service) {
			setFocusedStops([]);
			setFocusedSegments([]);
		}
	}, [name, flyTo, service]);

	const oppStop = useMemo(
		() => isbStops.find((_stop) => _stop.name === stop?.opposite),
		[stop],
	);

	if (typeof name !== "string" || (service && typeof service !== "string")) {
		return <div>Invalid stop/service name</div>;
	}

	return (
		<>
			<Heading
				as="h1"
				size={{ initial: "7", sm: "8" }}
				mb="3"
				mt={{ initial: "2", sm: "4" }}
			>
				{stop?.LongName}
			</Heading>
			<Flex gap="2" mb="3">
				<Heading
					as="h2"
					size="4"
					color="gray"
					mt="0"
					weight="medium"
					className={styles.shortName}
				>
					{stop?.ShortName}
				</Heading>
				{oppStop && (
					<>
						<Text
							as="span"
							size="4"
							color="gray"
							mt="0"
							className={styles.oppIcon}
							asChild
						>
							<Link href={`/stops/${oppStop.name}`}>
								<IconArrowsRightLeft size={16} />
							</Link>
						</Text>

						<Heading
							as="h2"
							size="4"
							color="gray"
							mt="0"
							weight="medium"
							className={styles.oppName}
							asChild
						>
							<Reset>
								<Link href={`/stops/${oppStop.name}`}>
									{oppStop?.ShortName}
								</Link>
							</Reset>
						</Heading>
					</>
				)}
			</Flex>

			<StopTimings stopName={name} service={service}>
				{children}
			</StopTimings>
			{/* TIMINGS */}
		</>
	);
}
