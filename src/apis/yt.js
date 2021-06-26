import axios from "axios";

const KEY = "AIzaSyDIMRWYM6Nr5iD6LSI4qwvi9iaxTtRh2eo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
