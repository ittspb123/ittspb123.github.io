"use strict";

const form = document.getElementById("survey-form");
const statusMessage = document.getElementById("survey-status");

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusMessage.textContent =
      "Your survey is complete! This demonstration does not send your answers.";
  });

  form.addEventListener("reset", () => {
    statusMessage.textContent = "";
  });
}