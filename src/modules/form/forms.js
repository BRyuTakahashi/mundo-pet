import dayjs from "dayjs";
import { scheduleToggle } from "../schedule/schedule-toggle.js";
import { scheduleNew } from "../../services/new-schedule.js";
import { formatNumber } from "./format-phone.js";
import { scheduleDay } from "../schedule/load.js";

const form = document.getElementById("form");
const clientNameIpt = document.getElementById("client-name");
const petNameIpt = document.getElementById("pet-name");
const phoneIpt = document.getElementById("phoneIpt");
const serviceDescIpt = document.getElementById("service-desc");
const dateIpt = document.getElementById("date-input");
const timeIpt = document.getElementById("time-input");

const dateToday = dayjs(new Date()).format("YYYY-MM-DD");
const timeNow = dayjs(new Date()).format("HH:mm");

// inicia a date input com o dia atual e impede datas anteriores
dateIpt.value = dateToday;
dateIpt.min = dateToday;

// mascara e evita caracteres na input de telefone
phoneIpt.oninput = (e) => {
  // evita caracteres
  let number = e.target.value.replace(/\D/g, "");

  //   retorna o valor mascarado
  e.target.value = formatNumber(number);
};

form.onsubmit = async (event) => {
  // desabilita o evento padrão do submit
  event.preventDefault();

  try {
    //   obtendo os valores das inputs
    const id = new Date().getTime();
    const clientName = clientNameIpt.value.trim();
    const petName = petNameIpt.value;
    const phoneNumber = phoneIpt.value.replace(/\D/g, "");
    const serviceDesc = serviceDescIpt.value;
    const date = dateIpt.value;
    const time = timeIpt.value;

    // bloqueia horarios anteriores do dia atual
    if (date == dateToday && time < timeNow) {
      alert("Você não pode escolher um horario passado");
      return;
    }

    // requisição para criação no server.json
    await scheduleNew({
      id,
      clientName,
      petName,
      phoneNumber,
      serviceDesc,
      date,
      time,
    });

    // limpa as inputs
    clientNameIpt.value = "";
    petNameIpt.value = "";
    phoneIpt.value = "";
    serviceDescIpt.value = "";
    dateIpt.value = dateToday;
    timeIpt.value = "";

    // cria os elementos da agenda
    await scheduleDay();

    //   desaparece o formulário
    scheduleToggle();
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento");
  }
};
