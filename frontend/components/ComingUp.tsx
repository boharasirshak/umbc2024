const ComingUp = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 ">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Coming Up Next
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              We are working on some amazing new features to further enhance the
              user experience and add functionalities.
            </p>
          </div>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            <div className="flex flex-col rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="images/alzimersDetection.webp"
                  alt="Alzheimer Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Alzheimers Analyzer</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  A continous and real-time analyzer.
                </span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  Analyze your eyes movements daily and get a prediction of
                  alzheimers in early stage.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/images/breastCancerDetection.webp"
                  alt="Breast Cancer Detection"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Breast Cancer Detection</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Analyze the ultrasound
                </span>
                <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                  Upload an image of your breast ultrasound and get a prediction
                  of whether you have breast cancer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingUp;
