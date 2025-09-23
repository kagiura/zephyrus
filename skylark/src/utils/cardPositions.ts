export const CARD_POSITIONS = {
	DESKTOP: {
		LOW: (_height: number) => 0,
		HIGH: (height: number) => height - 150 - 24,
	},
	MOBILE: {
		LOW: (height: number) => 0,
		MEDIUM: (height: number) => height * 0.25,
		HIGH: (height: number) => height - 24,
	},
};
