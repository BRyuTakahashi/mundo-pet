import dayjs from "dayjs";
import { createSchedule } from "./show";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";

const todayDate = dayjs(new Date()).format("YYYY-MM-DD");
const scheduleDate = document.getElementById("schedule-date");

scheduleDate.min = todayDate;
scheduleDate.value = todayDate;

export async function scheduleDay() {
  const date = scheduleDate.value;
  const todaySchedule = await scheduleFetchByDay(date);

  // console.log(todaySchedule);
  createSchedule(todaySchedule);
}

scheduleDate.onchange = () => {
  scheduleDay();
};
