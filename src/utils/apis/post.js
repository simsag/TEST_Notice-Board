import axios from "axios";

export const getPostClick = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
