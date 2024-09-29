"use client";

import SymptomTable from "@/components/SymptomTable";
import { useState } from "react";
import { submitSymptom } from "../actions";

interface SymptomData {
  name: string;
  probability: number;
}

interface SymptomTableProps {
  symptoms: SymptomData[];
}

export default function DashboardPage() {
  const [symptom, setSymptom] = useState<SymptomData[]>();

  async function handleSubmit(data: FormData) {
    const symptoms: SymptomData[] | undefined = await submitSymptom(data);
    if (symptoms) {
      setSymptom(symptoms);
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
                className="bg-primary-700 focus:ring-primary-200 mt-4 flex rounded-lg border border-black object-center px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-100 focus:ring-4 sm:mt-6"
              >
                Add data
              </button>
            </div>
          </form>
        </div>
      </section>
      {symptom && <SymptomTable symptoms={symptom} />}
    </main>
  );
}
