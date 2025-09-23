import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import { useDebounceValue, useInterval } from "usehooks-ts";
import { InferOutput } from "valibot";

import { getISBTimings } from "./api";

import isbStops from "@/data/isbStops";
import { ISBStop, ShuttleServiceResultWithDateSchema } from "@/types/schema";

interface StopTimings {
	stop: ISBStop;
	timings: InferOutput<typeof ShuttleServiceResultWithDateSchema>;
	updatedTime: Date | null;
	updatedSecondsAgo: number | null;
	updating: false;
	error: null;
}

interface StopTimingsLoading {
	updating: true;
}

interface StopTimingsError {
	error: true;
	message: any;
	updating: false;
}

export default function useStopTimings(stopName?: string | null) {
	const [updatedSecondsAgo, setUpdatedSecondsAgo] = useState<number | null>(
		null,
	);
	const {
		data: timings,
		error: timingsError,
		isLoading: timingsLoading,
		isValidating: timingsValidating,
	} = useSWR(stopName || "no-stop", getISBTimings, {
		refreshInterval: 1000 * 15, // every 15 seconds
	});
	const stop = useMemo(
		() => isbStops.find((s) => s.name === stopName),
		[stopName],
	);
	const [_timingsValidatingDebounced, setTimingsValidatingDebounced] =
		useDebounceValue(false, 500);

	useEffect(() => {
		if (timingsValidating) {
			setTimingsValidatingDebounced(true);
			setTimeout(() => {
				setTimingsValidatingDebounced(false);
			}, 500);
		}
	}, [timingsValidating]);

	const fetchedTime = useMemo(() => {
		if (!timings) return null;
		const date = new Date(timings.TimeStamp);
		const now = new Date();
		const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
		setUpdatedSecondsAgo(seconds);
		return date;
	}, [timings]);

	const showInMinutesThreshold = 30;
	// const showInMinutesCutoff = new Date(
	// 	Date.now() + showInMinutesThreshold * 60 * 1000,
	// );

	useInterval(
		() => {
			if (!fetchedTime) {
				setUpdatedSecondsAgo(null);
				return;
			}
			setUpdatedSecondsAgo(
				Math.floor((Date.now() - fetchedTime.getTime()) / 1000),
			);
		},
		fetchedTime ? 1000 : null,
	);

	if (timingsLoading) {
		return {
			updating: true,
		} as StopTimingsLoading;
	}

	if (!timings) {
		return {
			error: timingsError,
			updating: false,
		} as StopTimingsError;
	}

	return {
		stop,
		timings: {
			...timings,
			shuttles: timings.shuttles.map(({ _etas, ...shuttle }) => ({
				...shuttle,
				_etas: _etas?.map((e) => {
					// count up from fetched time
					const eta_time = new Date(fetchedTime || Date.now());
					eta_time.setSeconds(eta_time.getSeconds() + e.eta_s);

					return {
						...e,
						eta_time: eta_time,
					};
				}),
			})),
		},
		updatedTime: fetchedTime,
		updatedSecondsAgo,
		updating: false,
	} as StopTimings;
}
