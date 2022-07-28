import * as Prismic from "@prismicio/client";

export const client = Prismic.createClient(
  `${process.env.REACT_APP_PRISMIC_REPOSITORY_NAME}`,
  {
    accessToken: process.env.REACT_APP_PRISMIC_TOKEN,
  }
);
