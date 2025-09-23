"use client";

import { ThemeProvider } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
