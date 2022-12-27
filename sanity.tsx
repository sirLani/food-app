import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "vv2kypft",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-10-19",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export default client;
