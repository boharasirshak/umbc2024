"use client";

import SymptomTable from "@/components/SymptomTable";
import { useState } from "react";
import { getSuggestion, submitSymptom } from "../actions";

interface SymptomData {
  name: string;
  probability: number;
}

export default function SymptomAnalyzer() {
  const [symptom, setSymptom] = useState<SymptomData[]>();
  const [suggestion, setSuggestion] = useState<string>();

  async function handleSubmit(data: FormData) {
    const symptoms: SymptomData[] | undefined = await submitSymptom(data);
    if (symptoms) {
      setSymptom(symptoms);
      await createSuggestion(data);
    }
  }

  async function createSuggestion(data: FormData) {
    const sugg: string | null = await getSuggestion(data);
    if (sugg) {
      setSuggestion(sugg);
    }
  }

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add Symptoms
          </h2>
          <form action={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Height
                </label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Product brand"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="29"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  defaultValue={"male"}
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                >
                  <option>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="120"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Your symptoms
                </label>
                <textarea
                  id="text"
                  name="text"
                  rows={8}
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Enter your symptoms"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                <svg
                  className="-ml-1 mr-1 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Get Predictions
              </button>
            </div>
          </form>
        </div>
      </section>
      {symptom && <SymptomTable symptoms={symptom} />}

      {suggestion && (
        <div className="flex flex-row items-center justify-center gap-2.5">
          <div className="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Suggestion
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
            <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white"></p>
          </div>
        </div>
      )}
    </main>
  );
}
