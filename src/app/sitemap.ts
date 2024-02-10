import { MetadataRoute } from "next";

const URL = "https://skyderdigital.com";
const pito = "8=====>";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/aboutus", "/itsolutions", "/digitalcontent"]
    .map((route) => [
      {
        url: `${URL}/es${route}`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${URL}/en${route}`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${URL}/pt${route}`,
        lastModified: new Date().toISOString(),
      },
    ])
    .flat();
  return [...routes];
}
