"use server";

import { BACKEND_URL } from "./constants";

export async function submitSymptom(data: FormData) {
  let submitData = {
    text: data.get("text"),
  };

  console.log(submitData);

  const response = await fetch(BACKEND_URL + "/predict-symptoms/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submitData),
  });

  if (response.ok) {
    const symptom = await response.json();
    console.log(symptom);
    const diagnosisProbabilities = symptom.diagnosis_probabilities as object;
    const symptoms = Object.entries(diagnosisProbabilities).map(
      ([name, probability]) => ({
        name,
        probability,
      }),
    );

    return symptoms;
  }
}
