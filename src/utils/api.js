import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:32768/api/v1",
});
