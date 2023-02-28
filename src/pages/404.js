import * as React from "react";

const NotFoundPage = () => {
  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
      <div className="w-full mx-auto lg:w-1/3">
        <a href="/" className="flex items-center">
          The Corporation
        </a>
        <p className="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">
          Page not found (404)
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
