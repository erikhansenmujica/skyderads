const URL = "https://www.skyderdigital.com";

export default async function sitemap() {
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
