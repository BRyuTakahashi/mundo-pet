// seleciona a div dos horarios da manhã, tarde e noite
const morningPeriod = document.getElementById("morning");
const afternoonPeriod = document.getElementById("afternoon");
const nightPeriod = document.getElementById("night");

// recebe os objetos e cria os componentes para exibir
export function createSchedule(dailySchedule) {
  try {
    // limpa a lista de agendamentos
    morningPeriod.innerHTML = "";
    afternoonPeriod.innerHTML = "";
    nightPeriod.innerHTML = "";

    //   cria x componentes para x objetos devolvidos
    dailySchedule.forEach((schedule) => {
      // criando variaveis dos componentes
      const li = document.createElement("li");
      const timeSpan = document.createElement("span");
      const nameDiv = document.createElement("div");
      const petNameSpan = document.createElement("span");
      const clientNameSpan = document.createElement("span");
      const processSpan = document.createElement("span");
      const cancelSpan = document.createElement("span");

      li.classList.add("client-data");
      li.setAttribute("data-id", schedule.id);
      timeSpan.classList.add("schedule-time");
      timeSpan.textContent = schedule.time;

      nameDiv.classList.add("schedule-name");

      petNameSpan.classList.add("pet-name");
      petNameSpan.textContent = schedule.petName;

      clientNameSpan.classList.add("client-name");
      clientNameSpan.textContent = ` / ${schedule.clientName}`;

      processSpan.classList.add("schedule-service");
      processSpan.textContent = schedule.serviceDesc;

      cancelSpan.classList.add("schedule-cancel");
      cancelSpan.textContent = "Remover Agendamento";

      nameDiv.append(petNameSpan, clientNameSpan);
      li.append(timeSpan, nameDiv, processSpan, cancelSpan);

      if (schedule.time <= 12) {
        morningPeriod.appendChild(li);
      } else if (schedule.time >= 13 && schedule.time <= 18) {
        afternoonPeriod.appendChild(li);
      } else {
        nightPeriod.appendChild(li);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Erro ao tentar criar os componentes da agenda");
  }
}
