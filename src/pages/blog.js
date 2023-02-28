import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Seo } from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <>
      <main className="main-container--has-line pb-24">
        <section className="text-center tracking-wider uppercase px-6 md:px-14 md:max-w-5xl mx-auto py-16 md:pb-32 bg-white">
          <h1 className="font-extrabold text-2xl md:text-5xl">Traders' Blog</h1>
          <hr className="border-black my-6" />
          <p className="max-w-[90ch] mx-auto">Find all we have written here!</p>
        </section>

        <section className="flex flex-col pt-24 md:pt-32">
          <article className="relative mt-16">
            {data &&
              data.allMdx.nodes.map((node) => {
                const image = getImage(node.frontmatter.featuredImage);
                return (
                  <Link
                    key={node.id}
                    to={node.frontmatter.slug}
                    className="group hover:text-gray-400 uppercase tracking-wide flex flex-col py-4 mb-8 text-center bg-white">
                    <div className="w-full mx-auto flex flex-col px-6 space-y-2 pb-4">
                      <span className="font-medium leading-relaxed uppercase text-2xl md:text-4xl max-w-[46ch] mx-auto">
                        {node.frontmatter.title}
                      </span>
                      <span className="text-sm">{node.frontmatter.date}</span>
                    </div>
                    <figure className="w-full min-h-[500px] border-y border-black bg-gray-100">
                      <GatsbyImage
                        image={image}
                        className="w-[100vw] h-[500px]"
                        objectFit="cover"
                      />
                    </figure>
                  </Link>
                );
              })}
          </article>
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          description
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        parent {
          ... on File {
            modifiedTime
          }
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <Seo title="Traders' Blog - The Corporation" />;
