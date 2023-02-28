import * as React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import { Seo } from "../components/seo";

const ContactPage = () => {
  return (
    <>
      <main className="main-container--has-line pb-24">
        <section className="text-center tracking-wider uppercase px-6 md:px-14 md:max-w-5xl mx-auto py-16 md:pb-32 bg-white">
          <h1 className="font-extrabold text-2xl md:text-5xl">Contacts</h1>
          <hr className="border-black my-6" />
          <p>Do you know something we should know? Talk to us! </p>
        </section>

        <section className="flex flex-col md:flex-row md:flex-wrap gap-8 px-6 md:px-16 pt-32 md:pt-24 text-center md:text-left">
          <div className="w-full flex flex-col items-center text-center space-y-4 text-lg md:text-xl">
            <a
              href="tel:+234092910050"
              className="hover:text-gray-500 bg-white font-medium py-2">
              +234 (09) 291 0050
            </a>
            <a
              href="mailto:office@thecorporation.xyz"
              className="hover:text-gray-500 bg-white font-medium py-2">
              office@thecorporation.xyz
            </a>
            <address className="bg-white font-medium py-2 not-italic">
              8 IBM Haruna Street, Utako District Abuja, Nigeria 900211
            </address>
          </div>
          <div className="w-12/12"></div>
          <Contact />
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

export default ContactPage;

export const Head = () => <Seo title="Contacts - The Corporation" />;
