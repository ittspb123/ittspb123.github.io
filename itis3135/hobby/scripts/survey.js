"use strict";

const surveyForm = document.getElementById("survey-form");
const surveyStatus = document.getElementById("survey-status");

surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  surveyStatus.textContent =
    "Your survey passed the form checks. " +
    "This demonstration did not send or save your answers.";
});

surveyForm.addEventListener("reset", () => {
  surveyStatus.textContent = "";
});