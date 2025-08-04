// importação de arquivos
import { apiConfig } from "./api-config.js";

// função que cria novo objeto no server.json
export async function scheduleNew({
  id,
  clientName,
  petName,
  phoneNumber,
  serviceDesc,
  date,
  time,
}) {
  try {
    await fetch(`${apiConfig.baseUrl}/clients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        clientName,
        petName,
        phoneNumber,
        serviceDesc,
        date,
        time,
      }),
    });

    alert("Agendamento realizado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde");
  }
}
