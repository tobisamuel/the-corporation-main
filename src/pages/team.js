import * as React from "react";

import Blog from "../components/Blog";
import { Seo } from "../components/seo";
import Team from "../components/Team";

const TeamPage = () => {
  return (
    <>
      <main className="main-container--has-line pb-24">
        <section className="text-center tracking-wider uppercase px-6 md:px-14 md:max-w-5xl mx-auto py-16 md:pb-32 bg-white">
          <h1 className="font-extrabold text-2xl md:text-5xl">Team</h1>
          <hr className="border-black my-6" />
          <p className=" max-w-[90ch] mx-auto">
            Our team consists of people with different backgrounds,
            nationalities, and personalities. This combination makes it a strong
            team who will always collaborate to find ways to bundle each other’s
            strengths to the benefit of the client and customer.
          </p>
        </section>

        <section className="flex flex-col px-0 md:px-16 pt-24 md:pt-32">
          <Team />
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

export default TeamPage;

export const Head = () => <Seo title="Team - The Corporation" />;
