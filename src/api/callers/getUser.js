import api from "../../utils/api";

const getUser = async (token) => {
  try {
    const res = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  } catch (error) {
    window.localStorage.removeItem("token");
    return null
  }
};

export default getUser;
