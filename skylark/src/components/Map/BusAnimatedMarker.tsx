import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import { Marker } from "react-map-gl/mapbox";

import styles from "./BusAnimatedMarker.module.css";

import NUSIsbMarker from "@/assets/NUSIsbMarker";
import isbServices from "@/data/isbServices";
import { useMapState } from "@/utils/mapState";

export default function BusAnimatedMarker() {
	const { focusedStop: stop } = useMapState();

	const dedupedServiceNames = useMemo(
		() =>
			Array.from(new Set(stop?.shuttles.map((s) => s.name))).sort((a, b) =>
				a.localeCompare(b),
			),
		[stop],
	);

	const services = useMemo(
		() =>
			dedupedServiceNames
				.map((name) => {
					const serviceDetails = isbServices.find(
						(service) => service.name === name,
					);
					if (!serviceDetails) return null;
					return serviceDetails;
				})
				.filter((service) => service !== null),
		[dedupedServiceNames],
	);

	// {isbStops.map((stop, i) => {
	// 	const spotlighted = stop?.name === stop.name;
	// 	// dedupe services, sort by name, then sort by color
	// 	const dedupedServiceNames = Array.from(
	// 		new Set(stop.shuttles.map((s) => s.name)),
	// 	).sort((a, b) => a.localeCompare(b));
	// 	const services = dedupedServiceNames
	// 		.map((name) => {
	// 			const serviceDetails = isbServices.find(
	// 				(service) => service.name === name,
	// 			);
	// 			if (!serviceDetails) return null;
	// 			return serviceDetails;
	// 		})
	// 		.filter((service) => service !== null);
	// 	return (
	// 		<Marker
	// 			key={stop.name}
	// 			latitude={stop.latitude}
	// 			longitude={stop.longitude}
	// 			anchor="center"
	// 		>
	// 			<div className={styles.busStopReactMarker}>
	// 				{/* <Card asChild> */}
	// 				<motion.div
	// 					transition={{
	// 						type: "spring",
	// 						bounce: 0.5,
	// 					}}
	// 					initial={{
	// 						scale: 0.7,
	// 						x: "-50%",
	// 						y: "-20%",
	// 						rotate: -6,
	// 						opacity: 0,
	// 					}}
	// 					animate={
	// 						spotlighted
	// 							? {
	// 									scale: 1,
	// 									x: "-50%",
	// 									y: "-100%",
	// 									rotate: 0,
	// 									opacity: 1,
	// 								}
	// 							: undefined
	// 					}
	// 					className={styles.busStopServices}
	// 				>
	// 					{services.map((service) => (
	// 						<div
	// 							key={service?.id}
	// 							className={clsx(
	// 								styles.busStopService,
	// 								service.colorIsLight && styles.darkText,
	// 								service.name.length > 2 && styles.smallText,
	// 							)}
	// 							style={{
	// 								backgroundColor: service?.color,
	// 							}}
	// 						>
	// 							{service?.name}
	// 						</div>
	// 					))}
	// 				</motion.div>
	// 				{/* </Card> */}
	// 				<motion.div
	// 					animate={{ scale: spotlighted ? 1 : 0 }}
	// 					initial={{ scale: 0 }}
	// 				>
	// 					<div className={styles.busStopMarker}>
	// 						<NUSIsbMarker width={48} height={48} />
	// 					</div>
	// 				</motion.div>
	// 				<motion.div
	// 					transition={{
	// 						type: "spring",
	// 						bounce: 0.5,
	// 					}}
	// 					initial={{
	// 						scale: 0.7,
	// 						x: "-50%",
	// 						y: "-100%",
	// 						rotate: 6,
	// 						opacity: 0,
	// 					}}
	// 					animate={
	// 						spotlighted
	// 							? {
	// 									scale: 1,
	// 									x: "-50%",
	// 									y: "-10%",
	// 									rotate: 0,
	// 									opacity: 1,
	// 								}
	// 							: undefined
	// 					}
	// 					className={styles.busStopName}
	// 				>
	// 					{stop.ShortName}
	// 				</motion.div>
	// 			</div>
	// 		</Marker>
	// 	);
	// })}
	if (!stop) return null;
	return (
		<>
			<Marker
				latitude={stop.latitude}
				longitude={stop.longitude}
				anchor="center"
			>
				<div className={styles.busStopReactMarker}>
					<AnimatePresence>
						<motion.div
							transition={{
								type: "spring",
								bounce: 0.5,
							}}
							initial={{
								scale: 0.7,
								x: "-50%",
								y: "-20%",
								rotate: -6,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								x: "-50%",
								y: "-100%",
								rotate: 0,
								opacity: 1,
							}}
							exit={{
								scale: 0.9,
								x: "-50%",
								y: "-100%",
								rotate: 0,
								opacity: 0,
							}}
							className={styles.busStopServices}
						>
							{services.map((service) => (
								<div
									key={service?.id}
									className={clsx(
										styles.busStopService,
										service.colorIsLight && styles.darkText,
										service.name.length > 2 && styles.smallText,
									)}
									style={{
										backgroundColor: service?.color,
									}}
								>
									{service?.name}
								</div>
							))}
						</motion.div>
					</AnimatePresence>
					<motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
						<div className={styles.busStopMarker}>
							<NUSIsbMarker width={48} height={48} />
						</div>
					</motion.div>
					<motion.div
						transition={{
							type: "spring",
							bounce: 0.5,
						}}
						initial={{
							scale: 0.7,
							x: "-50%",
							y: "-100%",
							rotate: 6,
							opacity: 0,
						}}
						animate={{
							scale: 1,
							x: "-50%",
							y: "-10%",
							rotate: 0,
							opacity: 1,
						}}
						className={styles.busStopName}
					>
						{stop.ShortName}
					</motion.div>
				</div>
			</Marker>
		</>
	);
}
