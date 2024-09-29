interface CTASectionProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  right?: boolean;
}

const CTASection = ({
  title,
  description,
  image,
  ctaLink,
  ctaText,
  right = false,
}: CTASectionProps) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          {!right && <img className="w-full" src={image} alt="CTA image" />}
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              {description}
            </p>
            <a
              href={ctaLink}
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
            >
              {ctaText}
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
          </div>
          {right && (
            <img
              className="w-full md:col-start-2"
              src={image}
              alt="CTA image"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CTASection;
