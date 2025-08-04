import { apiConfig } from "./api-config";

export async function removeSchedule(scheduleId) {
  try {
    console.log(scheduleId);
    await fetch(`${apiConfig.baseUrl}/clients/${scheduleId}`, {
      method: "DELETE",
    });

    alert("Agendamento removido com sucesso");
  } catch (error) {
    console.log(error);
    alert("Erro ao tentar remover o agendamento");
  }
}
