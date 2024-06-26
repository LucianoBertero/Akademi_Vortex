import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID nbO7M6JbyPXN0B0RZoUNTEjicB0c45VeA0liPe7Grts",
  },
});
