const FAQSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does it work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Symptom Analyzer uses a machine learning model, Natural
                  Language Processing and AI to analyze your symptoms and
                  provide a list of possible conditions and recommended actions.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does the Diabetic Eye Detection work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Diabetic Eye Detection uses a machine learning model to
                  predict whether you have diabetic retinopathy based on an
                  image of your eye (retina).
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is it free to use?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Absolutely! Both Symptom Analyzer and Diabetic Eye Detection.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we will help you out as soon as we can.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is it reliable?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We have trained our models with very large dataset and the
                  model is designed to be more accurate over time.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we will help you out as soon as we can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
