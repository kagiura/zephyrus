// wrapper for nusmods' getAcadWeekInfo

import NUSModerator from "nusmoderator";
import { useMemo } from "react";

const academicYear = NUSModerator.academicCalendar;

export default function useAcadYear(date: Date = new Date()) {
	const acadYear = useMemo(() => {
		return academicYear.getAcadYear(date);
	}, [date]);

	const acadWeekInfo = useMemo(() => {
		return academicYear.getAcadWeekInfo(date);
	}, [date]);

	return {
		year: acadYear.year,
		startDate: acadYear.startDate,
		sem: acadWeekInfo.sem,
		type: acadWeekInfo.type,
		num: acadWeekInfo.num ?? null,
	};
}
