import { getYesterdayDateTimestamp, isMonday } from "../helpers";
import { runAndSaveMultiDayAnalysis } from "./multi-day-analysis";

/**
 * This functions checks and runs multi-day analysis
 */
const analysisChecker = async (): Promise<void> => {
  const date = new Date();
  if (isMonday(date)) {
    await runAndSaveMultiDayAnalysis(new Date(getYesterdayDateTimestamp() * 1000), "week");
  }

  if (date.getDate() === 1) {
    await runAndSaveMultiDayAnalysis(new Date(getYesterdayDateTimestamp() * 1000), "month");
  }
};

export { analysisChecker };
