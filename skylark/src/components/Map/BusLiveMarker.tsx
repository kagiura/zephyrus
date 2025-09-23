import { useParams } from "next/navigation";
import { Marker } from "react-map-gl/mapbox";
import useSWR from "swr";

import styles from "./BusLiveMarker.module.css";

import NUSIsbHeading from "@/assets/NUSIsbHeading";
import isbServices from "@/data/isbServices";
import { getISBPositionsAll } from "@/utils/api";

export default function BusLiveMarker() {
	const { data, error, isLoading } = useSWR("all", getISBPositionsAll, {
		refreshInterval: 1000 * 15, // every 15 seconds
	});

	const { service: serviceParam } = useParams();

	if (isLoading || !data) {
		return null;
	}
	return data.map((service) =>
		service.activebus.map((bus) => {
			const serviceDetails = isbServices.find(
				(s) => s.name === service.service,
			);
			if (!serviceDetails) return null;
			if (
				typeof serviceParam === "string" &&
				serviceDetails.name !== serviceParam
			)
				return null;

			return (
				<Marker
					key={`marker-${bus.vehplate}`}
					longitude={bus.lng}
					latitude={bus.lat}
					anchor="center"
					onClick={(e) => {
						// If we let the click event propagates to the map, it will immediately close the popup
						// with `closeOnClick: true`
						e.originalEvent.stopPropagation();
						// setPopupInfo(city)
					}}
					rotation={bus.direction}
					rotationAlignment="map"
				>
					<div
						style={{
							// @ts-ignore
							"--color-primary": serviceDetails.color,
							"--color-secondary": "white",
							"--color-occupancy": `var(${
								bus.loadInfo.crowdLevel === "low"
									? "--green-10"
									: bus.loadInfo.crowdLevel === "medium"
										? "--orange-10"
										: "--red-10"
							})`,
							// filter: `drop-shadow(0 0 5px var(--${
							// 	bus.loadInfo.crowdLevel === "low"
							// 		? "green-10"
							// 		: bus.loadInfo.crowdLevel === "medium"
							// 		? "orange-10"
							// 		: "red-10"
							// }))`,
						}}
						className={styles.busMarker}
						// dangerouslySetInnerHTML={{
						// 	__html: NUSIsbHeadingIconSVG,
						// }}
					>
						<NUSIsbHeading width={16} height={16} />
					</div>
				</Marker>
			);
		}),
	);
}
