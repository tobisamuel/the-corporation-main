import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

import useEmblaCarousel from "embla-carousel-react";

const SLIDES = [
  {
    imgPath: "team/kechi.jpg",
    name: "THE BIZ DEV TRADER – KECHI OKPALA",
    bio: "Kechi is a creative, persistent, agile, and driven business development manager who is more than able to nurture relationships with existing clients and develop new business opportunities. She has an enthusiastic approach to business development and possesses a proven track record of achieving targets in a competitive environment. ",
  },
  {
    imgPath: "team/abubakar.jpg",
    name: "THE LEAD TRADER – ABUBAKAR ABDULLAHI",
    bio: "Abubakar is a creative and energetic jack-of-all-trader, with an eye for uncharted market frontiers. As a serial entrepreneur with excellent leadership and cognitive skills, he has been responsible for midwifing numerous profitable cross-sectoral business interests within and around the African continent.",
  },
  {
    imgPath: "team/jamila.jpg",
    name: "THE FINANCE TRADER - JAMILA YUSUF",
    bio: "Jamila is a highly accomplished Finance executive with excellence in reducing costs, increasing efficiency, and stimulating bottom-line growth for start-up, midsize, and multimillion-dollar organizations. She offers a blend of finance & accounting leadership backed by operations, HR, marketing, and technological expertise.",
  },
];

const TeamCarousel = ({ slides, images }) => {
  const {
    allFile: { edges },
  } = images;
  /**
   * Embla Carousel
   */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    draggable: false,
    startIndex: 1,
  });
  const [currentIndex, setIndex] = React.useState(1);

  /**
   * Function to scroll to selected image from carousel on click
   */
  const onSlideClick = React.useCallback(
    (index) => {
      if (emblaApi && emblaApi.clickAllowed()) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  /**
   * Function to set selected index so that it can be used to
   * pick up content of selected image
   */
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="relative has--line__middle">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex flex-row md:grid md:grid-cols-3 py-10 gap-x-8">
            {slides.map((slide, index) => {
              const snapshot = edges.find(
                (item) => item.node.relativePath === slide.imgPath
              );
              const image = getImage(snapshot.node);
              return (
                <div
                  key={index}
                  className="embla__slide h-[400px] bg-white flex place-items-center cursor-pointer hover:ring-1 hover:ring-gray-100 transition-all !basis-1/4 md:basis-full"
                  onClick={() => onSlideClick(index)}>
                  <GatsbyImage
                    image={image}
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="bg-white w-[240px] md:w-[200px] xl:w-[300px] h-[240px] md:h-[200px] xl:h-[300px] border-black border mx-auto"
                    alt="404 Cards"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div className="md:col-start-2 px-10 text-center md:px-8 bg-white py-4">
          <h5 className="uppercase tracking-wide font-semibold mb-2">
            {SLIDES[currentIndex].name}
          </h5>
          <p className="">{SLIDES[currentIndex].bio}</p>
        </div>
      </div>
    </>
  );
};

function Team() {
  return (
    <>
      <StaticQuery
        query={graphql`
          query ImagesQuery {
            allFile(filter: { relativeDirectory: { eq: "team" } }) {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData
                  }
                  relativePath
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <TeamCarousel slides={SLIDES} images={data} />
          </>
        )}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <clipPath id="svg_team" clipPathUnits="objectBoundingBox">
            <path d="M0.008,0.556 C-0.045,0.336,0.164,0.203,0.336,0.063 C0.453,-0.033,0.664,-0.013,0.794,0.08 c0.182,0.13,0.256,0.384,0.171,0.586 C0.877,0.873,0.643,1,0.397,0.999 C0.135,0.987,0,0.845,0.008,0.556"></path>
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export default Team;
