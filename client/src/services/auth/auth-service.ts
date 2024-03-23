import axios from "axios";
import config from "@config/config.json";

const httpAuth = axios.create({
  baseURL: config.apiEndpoint + "auth/",
  params: {}
});

const authService = {
  login: async ({ email, password }) => {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true
    });
    return data;
  }
};

export default authService;
