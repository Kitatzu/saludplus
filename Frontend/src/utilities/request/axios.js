import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const axiosUser = axios.create({
  baseURL: `${process.env.API_URL}`,
});

export const fetchAppoiments = async (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  if (!token.state.userToken.data) {
    throw new Error("Invalid token format");
  }

  try {
    const payload = jwtDecode(token.state.userToken.data);
    const URL =
      payload.rol === "doctor"
        ? `http://localhost:3001/appoiment/?idDoctor=${payload.id}`
        : `http://localhost:3001/appoiment/?idPatient=${payload.id}`;

    const response = await axios.get(URL);

    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
