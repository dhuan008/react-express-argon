import axios from "axios";
import { ROOT_URL } from "../utils/constants";

export const API_signin = (email, password) =>
  axios({
    method: "post",
    url: "/api/signin",
    data: {
      email,
      password
    }
  });

export const API_register = values =>
  axios({
    method: "post",
    url: `${ROOT_URL}/api/register`,
    data: {
      ...values
    }
  });
