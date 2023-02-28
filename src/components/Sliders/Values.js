import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AFFIRMATIVE from "../../images/our-values/affirmative.svg";
import DEPENDABLE from "../../images/our-values/dependable.svg";
import ENERGETIC from "../../images/our-values/energetic.svg";
import REFRESHING from "../../images/our-values/refreshing.svg";
import TACTICAL from "../../images/our-values/tactical.svg";

/**
 *
 * @param {*} param0
 * @returns
 * TACTICAL in our approach
 * REFRESHING with our ideation
 * AFFIRMATIVE in our outlook
 * DEPENDABLE in our relationships
 * ENERGETIC in our delivery
 */

function ValuesSlider() {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="w-full flex flex-row mx-auto items-center md:justify-center">
      <span className="w-full md:w-auto md:mr-8 flex md:block">
        <button
          className="hover:opacity-50 cursor-pointer disabled:opacity-25 mx-auto p-3 ring-1 ring-white active:ring-black"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}>
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 md:w-10 h-8 md:h-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </span>
      <div className="w-8/12 md:w-2/6 bg-white border border-black text-center p-6 md:py-10 px-8 uppercase">
        <div className="embla overflow-hidden" ref={viewportRef}>
          <div className="embla__container flex">
            {/*  */}
            {/*  */}
            <div className="embla__slide">
              <h3 className="text-xl md:text-2xl tracking-wide font-bold mb-2 mt-6 md:mt-10">
                Tactical
              </h3>
              <p className="text-sm mb-5">in our approach</p>
              <img
                src={TACTICAL}
                className="w-[80px] md:w-[140px] h-auto md:h-[200px] mx-auto object-contain"
                alt="TACTICAL"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide">
              <h3 className="text-xl md:text-2xl tracking-wide font-bold mb-2 mt-6 md:mt-10">
                REFRESHING
              </h3>
              <p className="text-sm mb-5">with our ideation</p>
              <img
                src={REFRESHING}
                className="w-[80px] md:w-[140px] h-auto md:h-[200px] mx-auto object-contain"
                alt="REFRESHING"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide">
              <h3 className="text-xl md:text-2xl tracking-wide font-bold mb-2 mt-6 md:mt-10">
                AFFIRMATIVE
              </h3>
              <p className="text-sm mb-5">in our outlook</p>
              <img
                src={AFFIRMATIVE}
                className="w-[80px] md:w-[140px] h-auto md:h-[200px] mx-auto object-contain"
                alt="AFFIRMATIVE"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide">
              <h3 className="text-xl md:text-2xl tracking-wide font-bold mb-2 mt-6 md:mt-10">
                DEPENDABLE
              </h3>
              <p className="text-sm mb-5">in our relationships</p>
              <img
                src={DEPENDABLE}
                className="w-[80px] md:w-[140px] h-auto md:h-[200px] mx-auto object-contain"
                alt="DEPENDABLE"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="embla__slide">
              <h3 className="text-xl md:text-2xl tracking-wide font-bold mb-2 mt-6 md:mt-10">
                ENERGETIC
              </h3>
              <p className="text-sm mb-5">in our delivery</p>
              <img
                src={ENERGETIC}
                className="w-[80px] md:w-[140px] h-auto md:h-[200px] mx-auto object-contain"
                alt="ENERGETIC"
              />
            </div>
          </div>
        </div>
      </div>
      <span className="w-full md:w-auto md:ml-8 flex md:block">
        <button
          className="hover:opacity-50 cursor-pointer disabled:opacity-25 mx-auto p-3 ring-1 ring-white active:ring-black"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}>
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 md:w-10 h-8 md:h-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}
export default ValuesSlider;
