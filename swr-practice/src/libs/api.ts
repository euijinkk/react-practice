import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetcher = (url: string) => client.get(url);
