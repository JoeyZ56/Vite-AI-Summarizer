import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiiKey = import.meta.env.VITE_RAPID_ARITCLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),

  //query is a function that takes a builder and returns an object
  //builder is an object that has a query function
  //endpoint is a function that takes a builder and returns an object
  //encodeURIComponent: Encodes a text string as a valid component of a Uniform Resource Identifier (URI). anything a user imputs should be wrapped in this.
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

//"LAZY" fires hook on demand not when app loads
export const { useLazyGetSummaryQuery } = articleApi;
