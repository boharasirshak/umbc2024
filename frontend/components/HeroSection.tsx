import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <a
          href="/dashboard/diabetic"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
            New Feature
          </span>{" "}
          <span className="text-sm font-medium">
            Diabetic Retinopathy Detection
          </span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          We Transform Lives of Patients and Doctors.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Here are whatthehealth.us we are dedicated to bring technologies like
          AI, NLP and Computer Vision to transform the healthcare industry by
          helping early detection of diseases.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <a
            href="#"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Get Scanned
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          {/* <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a> */}
        </div>
        <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold uppercase text-gray-400">
            FEATURED IN
          </span>
          <div className="mt-12 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <Image
                src={"/images/hackUMBC.png"}
                alt={"Hack UMBC Logo"}
                height={300}
                width={300}
              />
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <Image
                src={"/images/mlhLogo.png"}
                alt={"MLH Logo"}
                height={300}
                width={300}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
