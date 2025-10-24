import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://us-central1-clone-1aa8c.cloudfunctions.net/api",
});


export { axiosInstance };