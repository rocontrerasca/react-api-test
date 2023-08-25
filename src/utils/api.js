import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:32780/api/v1",
});
