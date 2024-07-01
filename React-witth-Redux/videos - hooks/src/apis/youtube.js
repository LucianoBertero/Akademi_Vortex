import axios from "axios";

const KEY = "AIzaSyBbF18Im6Am2Ob_ftU3H6BanpOPKLrZ94E";

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
