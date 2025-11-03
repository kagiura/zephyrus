"use client";
import { Card, ScrollArea } from "@radix-ui/themes";
import { useDebounce, useGeolocation } from "@uidotdev/usehooks";
import Head from "next/head";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapProvider } from "react-map-gl/mapbox";
import { useWindowSize } from "usehooks-ts";

import styles from "./layout.module.css";

import IMDFLevelSelect from "@/components/IMDFLevelSelect";
import Map from "@/components/Map";
import { CARD_POSITIONS } from "@/utils/cardPositions";
import { MapStateProvider } from "@/utils/mapState";

const DEFAULT_LNG = 103.77547580534053;
const DEFAULT_LAT = 1.295994380007258;

export default function Page({
	title,
	children,
}: {
	title?: string;
	children: React.ReactNode;
}) {
	const { width, height } = useWindowSize();
	const scrollAreaRef = useRef<HTMLDivElement>(null);

	const [mapLoaded, setMapLoaded] = useState(false);

	useEffect(() => {
		if (scrollAreaRef.current) {
			// smoothly scroll to 40vh
			scrollAreaRef.current.scrollTo({
				top: desktop
					? CARD_POSITIONS.DESKTOP.HIGH(height)
					: CARD_POSITIONS.MOBILE.MEDIUM(height),
				behavior: "smooth",
			});
		}
	}, []);

	const desktop = useMemo(() => width > 768, [width]);

	const pushAwayCard = useCallback(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTo({
				top: CARD_POSITIONS.DESKTOP.LOW(height),
				behavior: "smooth",
			});
		}
	}, [height]);

	const pullBackCard = useCallback(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTo({
				top: desktop
					? CARD_POSITIONS.DESKTOP.HIGH(height)
					: CARD_POSITIONS.MOBILE.MEDIUM(height),
				behavior: "smooth",
			});
		}
	}, [width, height]);

	const [lng, setLng] = useState(DEFAULT_LNG);
	const [lat, setLat] = useState(DEFAULT_LAT);
	const [zoom, setZoom] = useState(14.7);

	return (
		<>
			{title ? (
				<Head>
					<title>OmoteNUS | {title}</title>
				</Head>
			) : null}

			{/* <Appbar /> */}
			<MapProvider>
				<MapStateProvider
					loaded={mapLoaded}
					pushAwayCard={pushAwayCard}
					pullBackCard={pullBackCard}
					lng={lng}
					lat={lat}
					zoom={zoom}
				>
					<ScrollArea
						type="always"
						scrollbars="vertical"
						asChild
						className={styles.pageWrapper}
						ref={scrollAreaRef}
					>
						<main>
							<Map
								pushAwayCard={pushAwayCard}
								pullBackCard={pullBackCard}
								mapLoaded={mapLoaded}
								setMapLoaded={setMapLoaded}
								lat={lat}
								setLat={setLat}
								lng={lng}
								setLng={setLng}
								zoom={zoom}
								setZoom={setZoom}
							/>

							<div className={styles.scrollSnapPoint1} />
							<div className={styles.scrollSnapPoint2}>
								<IMDFLevelSelect
									lat={lat}
									lng={lng}
									zoom={zoom}
									className={styles.levelSelect}
									mb="4"
									mr="4"
								/>
							</div>
							{/* {mapLoaded && ( */}
							<div className={styles.pageWrapperInner}>
								<Card className={styles.mainCard}>
									<div className={styles.grabber} />
									{children}
								</Card>
							</div>
							{/* )} */}
						</main>
					</ScrollArea>
				</MapStateProvider>
			</MapProvider>

			{/* <BottomNav /> */}
		</>
	);
}
