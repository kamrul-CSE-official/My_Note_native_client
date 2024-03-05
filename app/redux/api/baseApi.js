import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({}),
  tagTypes: ["note"],
});

// https://bohubrihi.com/my-courses/react-native-app/video/644a47f1cb56fdf3d3f6abf7?module=644a4f04cb56fdf3d3f6c479

// https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-50-2-create-baseapi-endpoints-for-authentication-using-rtk-query
