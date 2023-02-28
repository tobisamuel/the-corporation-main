import * as React from "react";
import Blog from "../components/Blog";
import { Seo } from "../components/seo";
import SlidersValue from "../components/Sliders/Values";

const AboutPage = () => {
  return (
    <>
      <main className="main-container--has-line pb-24">
        <section className="text-center tracking-wider uppercase px-6 md:px-14 md:max-w-5xl mx-auto py-16 md:pb-32 bg-white">
          <h1 className="font-extrabold text-2xl md:text-5xl">About</h1>
          <hr className="border-black my-6" />
          <p className=" max-w-[90ch] mx-auto">
            Headquartered in Abuja, Nigeria, The Corporation (TC), is one of
            Africa’s foremost trans-sectional Business, Project Ideation,
            Implementation, and Management Conglomerate. With over 10 years of a
            customer-focused focused approach and a continuous quest for
            world-class quality, TC has unmatched capabilities across
            Technology, Strategic Communications, Infrastructure Development and
            Financing, Hospitality Support and Services, Events production,
            Human Capital Development, Entertainment, and Political Consulting,
            and maintains a leadership in all its major lines of business To
            maintain our position as an industry leader, we rely on the immense
            talent of our workforce. We believe TC’s success is born from the
            contributions of each person, and we seek diverse individuals who
            bring rich experience, skill, talent, and perspective to our team.
            We will continue to pioneer the future of our industries through the
            power of our brands, our values, our employees, and our leadership.
            Above all else, we’ll build upon our history of success by
            understanding our customers and delivering exciting, new products
            that go beyond the expected. With an unwavering commitment to
            conducting business with integrity and fairness, TC remains fully
            dedicated to growing its businesses buying and selling ideas to make
            Africa and Africans better.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-1 items-start px-6 md:px-16 pt-32 md:pt-24 text-center md:text-left">
          <div className="bg-white mt-20 md:mt-0 md:pr-8 md:border-r border-black md:pt-14">
            <h4 className="font-bold text-[0.9375rem] uppercase tracking-widest mb-5">
              Purpose
            </h4>
            <p className="prose leading-loose">
              To be the HoldCo buying and selling ideas to make Africa and
              Africans better.
            </p>
          </div>
          <div className="bg-white md:px-8 md:pt-14">
            <h4 className="font-bold text-[0.9375rem] uppercase tracking-widest mb-5">
              Vision
            </h4>
            <p className="prose leading-loose">
              To be the Prime Afro-Centric HoldCo Distinguished for the
              Productive, Human-Centric Business Interests it holds.
            </p>
          </div>
          <div className="bg-white md:px-8 md:pt-14">
            <h4 className="font-bold text-[0.9375rem] uppercase tracking-widest mb-5">
              Mission
            </h4>
            <p className="prose leading-loose">
              To curate and create several Business Interests in Africa And for
              Africans by Instituting Lean Systems, Ideas-Driven Models, And
              Human-Centric Approaches to Execution.
            </p>
          </div>
          <div className="bg-white md:pl-8 md:border-l border-black md:pt-14">
            <h4 className="font-bold text-[0.9375rem] uppercase tracking-widest mb-5">
              In-Brief
            </h4>
            <p className="prose leading-loose">
              Headquartered in Abuja, Nigeria, The Corporation (TC), is one of
              Africa’s foremost trans-sectional Business, Project Ideation,
              Implementation, and Management Conglomerate.
              <br /> With over 10 years of a customer-focused focused approach
              and a continuous quest for world-class quality, TC has unmatched
              capabilities across Technology, Strategic Communications,
              Infrastructure Development and Financing, Hospitality Support and
              Services, Events production, Human Capital Development,
              Entertainment, and Political Consulting, and maintains a
              leadership in all its major lines of business.
            </p>
          </div>
        </section>

        <section className="flex flex-col px-6 md:px-16 pt-24 md:pt-32">
          <div className="w-full bg-white text-center py-16">
            <h2 className="text-[1.375rem] font-bold uppercase tracking-wide mb-2">
              Our Values
            </h2>
            <p className=" max-w-[90ch] mx-auto">
              Our five Core Values have shaped our corporate culture since the
              very beginning and they are still relevant today. Together with
              our corporate strategy, they act as our guiding light, our daily
              benchmark, ensuring we speak and act consistently across our
              business at all times.
            </p>
          </div>
          <SlidersValue />
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

export default AboutPage;

export const Head = () => <Seo title="About - The Corporation" />;
