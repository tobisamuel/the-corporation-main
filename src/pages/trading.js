import * as React from "react";

import Blog from "../components/Blog";
import Partners from "../components/Partners";
import { Seo } from "../components/seo";

const TradingPage = () => {
  return (
    <>
      <main className="main-container--has-line pb-24">
        <section className="text-center tracking-wider uppercase px-6 md:px-14 md:max-w-5xl mx-auto py-16 md:pb-32 bg-white">
          <h1 className="font-extrabold text-2xl md:text-5xl">
            Trading Partners
          </h1>
          <hr className="border-black my-6" />'
          <p className=" max-w-[90ch] mx-auto">
            Our network of subsidiaries cuts across multiple sectors and
            industries extending from strategic communications consulting,
            through digital transformation, to human capital development and,
            ultimately on to hospitality services and support and more…
          </p>
        </section>

        <section className="flex flex-col px-6 md:px-16 pt-24 md:pt-32">
          <Partners />
        </section>

        <section className="flex flex-col pt-24 md:pt-32">
          <div className="w-full bg-white text-center py-16">
            <h2 className="text-[1.375rem] font-bold uppercase tracking-wide mb-2">
              The Traders' Blog
            </h2>
          </div>
          <Blog />
        </section>
      </main>
    </>
  );
};

export default TradingPage;

export const Head = () => <Seo title="Trading Partners - The Corporation" />;
