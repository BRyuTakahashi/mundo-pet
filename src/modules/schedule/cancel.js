import { removeSchedule } from "../../services/remove-schedule";
import { scheduleDay } from "./load";

const schedules = document.querySelectorAll(".client");

schedules.forEach((schedule) => {
  schedule.addEventListener("click", async (event) => {
    if (event.target.classList.contains("schedule-cancel")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;
      console.log(id);

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        );

        if (isConfirm) {
          await removeSchedule(id);
          scheduleDay();
        }
      }
    }
  });
});
