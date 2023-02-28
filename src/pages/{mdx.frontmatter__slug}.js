import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Seo } from "../components/seo";

export default function Template({ data, children }) {
  const {
    mdx,
    allMdx: { nodes },
  } = data || [];
  const { frontmatter, id } = mdx;
  const snapshot = nodes.filter((item) => item.id !== id);

  return (
    <main className="main-container--has-line">
      <section className="prose md:prose-xl mx-auto px-6 md:px-16 text-center mb-8 bg-white">
        <Link
          to="/blog"
          className="text-lg tracking-wide mb-3 inline-flex font-bold hover:text-gray-500">
          THE TRADERS' BLOG
        </Link>
        <h1 className="mb-0 leading-tight text-2xl md:text-6xl md:leading-tight">
          {frontmatter.title}
        </h1>
        <hr className="border-black my-6" />
        <p>{frontmatter.date}</p>
      </section>
      <GatsbyImage
        image={getImage(frontmatter.featuredImage)}
        className="w-full h-auto mx-auto"
        alt={frontmatter.title}
      />
      <article className="prose md:prose-xl mx-auto px-6 md:px-16 pt-10 pb-16 mb-10 bg-white">
        {children}
      </article>

      <article className="relative pb-16">
        {snapshot &&
          snapshot.map((node) => {
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
    </main>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        description
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
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
        parent {
          ... on File {
            modifiedTime
          }
        }
      }
    }
  }
`;

export const Head = ({ data: { mdx: post } }) => {
  return (
    <Seo
      title={`${post.frontmatter.title} - The Corporation`}
      description={post.frontmatter.description || post.excerpt}
      // image={post.frontmatter.featuredImage}
    />
  );
};
