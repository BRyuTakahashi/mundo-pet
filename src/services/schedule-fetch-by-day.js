// importando as dependencias
import dayjs from "dayjs";
import { apiConfig } from "./api-config";

// função que receberá os dados pela API
export async function scheduleFetchByDay(date) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}/clients?date=${date}&_sort=time`
    );
    const data = await response.json();
    // const dailySchedule = data.filter((schedule) =>
    //   dayjs(date).isSame(schedule.date, "day")
    // );

    // return dailySchedule;
    return data;
  } catch (error) {
    alert("Erro ao tentar carregar os dados dos clientes");
    console(error);
  }
}
