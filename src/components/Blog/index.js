import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function Blog() {
  return (
    <article className="relative mt-16">
      <Link
        to="/posts/jack-of-all-trades"
        className="group hover:text-gray-400 uppercase tracking-wide flex flex-col py-4 mb-8 text-center bg-white">
        <div className="w-full mx-auto flex flex-col px-6 space-y-2 pb-4">
          <span className="font-medium leading-relaxed uppercase text-2xl md:text-4xl max-w-[46ch] mx-auto">
            The Highs and Lows of Being a Jack of All Trades
          </span>
          <span className="text-sm">Sepetember 29th, 2022</span>
        </div>
        <figure className="w-full min-h-[500px] border-y border-black bg-gray-100">
          <StaticImage
            src="../../images/posts/jack.jpeg"
            placeholder="tracedSVG"
            layout="constrained"
            className="w-full h-[500px]"
            alt=""
          />
        </figure>
      </Link>
      <Link
        to="/posts/generalists-vs-specialists"
        className="group hover:text-gray-400 uppercase tracking-wide flex flex-col py-4 mb-8 text-center bg-white">
        <div className="w-full mx-auto flex flex-col px-6 space-y-2 pb-4">
          <span className="font-medium leading-relaxed uppercase text-2xl md:text-4xl max-w-[46ch] mx-auto">
            Don’t Underestimate Generalists: They Bring Value to Your Team
          </span>
          <span className="text-sm">Sepetember 29th, 2022</span>
        </div>
        <figure className="w-full min-h-[500px] border-y border-black bg-gray-100">
          <StaticImage
            src="../../images/posts/generalists.jpg"
            placeholder="tracedSVG"
            layout="constrained"
            className="w-full h-[500px]"
            alt=""
          />
        </figure>
      </Link>
    </article>
  );
}
export default Blog;
