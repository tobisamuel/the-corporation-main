import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const Seo = ({ title, description, image, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ``}`,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link
        rel="icon"
        href="data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M268.26,74.43A182,182,0,1,1,74,256a184.59,184.59,0,0,1,4.21-38.92h74.21a110.49,110.49,0,1,0,103.36-71.29H74V74l194.33.43Z' fill='%23029e8e' fillRule='evenodd'/></svg>"
      />
      {children}
    </>
  );
};
