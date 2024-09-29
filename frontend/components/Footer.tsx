const Footer = () => {
  return (
    <div>
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <img src="/images/logo.png" className="h-8" alt="Logo" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                WhatTheHealth.AI
              </span>
            </a>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              WhatTheHealth.AI™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
