import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

import ThemeProvider from "@/components/ThemeProvider";

import "@radix-ui/themes/styles.css";
import "normalize.css";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<head>
				<link rel="stylesheet" href="https://use.typekit.net/lqb5vep.css" />
				{/* prevent zooming on ios */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
			</head>
			<body>
				<ThemeProvider>
					<Theme panelBackground="solid" accentColor="plum">
						{children}
					</Theme>
				</ThemeProvider>
			</body>
		</html>
	);
}

const APP_NAME = "Skylark";
const APP_DEFAULT_TITLE = "Skylark";
const APP_TITLE_TEMPLATE = "%s - Skylark";
const APP_DESCRIPTION = "Kent Ridge, at your fingertips.";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
};

export const viewport: Viewport = {
	themeColor: "#AB4ABA",
	// width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	interactiveWidget: "overlays-content",
};
