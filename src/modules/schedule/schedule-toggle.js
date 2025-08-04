const newschedule = document.getElementById("new-schedule");
const form = document.getElementById("overlay");

export const scheduleToggle = () => {
  form.classList.toggle("d-none");
};

newschedule.onclick = () => {
  scheduleToggle();
};
