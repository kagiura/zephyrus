"use client";

import { Avatar, AvatarProps, Badge, Box } from "@radix-ui/themes";
import clsx from "clsx";

import styles from "./ServiceBadge.module.css";

import isbServices from "@/data/isbServices";

// TEMPORARY
type ISBService = (typeof isbServices)[number];

function ServiceBadge({
	service,
	size,
	...props
}: {
	service: ISBService;
	size: "0" | "1" | "2" | "3";
} & Omit<AvatarProps, "fallback" | "size">) {
	return (
		<Avatar
			{...props}
			className={clsx(styles.serviceBadge, size === "0" && styles.tiny)}
			size={size === "0" ? "1" : size}
			fallback={
				<>
					<Box
						style={{
							backgroundColor: service.color,
						}}
						className={clsx(
							styles.serviceName,
							service.colorIsLight && styles.darkText,
							service.name.length > 2 && styles.smallText,
						)}
					>
						{service.name}
					</Box>
				</>
			}
			// radius="small"
		></Avatar>
	);
}

export default ServiceBadge;
