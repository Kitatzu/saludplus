import axios from "axios";
import { jwtDecode } from "jwt-decode";

const url = process.env.NEXT_PUBLIC_URL;

export const addAppoiment = async (data) => {
  if (!data || data.length === 0) {
    throw new Error("No data submited");
  }

  try {
    const response = await axios.post(`${url}appoiment`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

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
        ? `${url}?idDoctor=${payload.id}`
        : `${url}?idPatient=${payload.id}`;

    const response = await axios.get(URL);

    if (!response.data || response.data.length === 0) {
      return "No hay datos";
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSpecialities = async () => {
  try {
    const response = await axios.get(`${url}speciality`);

    if (!response.data || response.data.length === 0) {
      throw new Error("No specialities founded");
    }

    return response.data;
  } catch (error) {
    throw new Error("Error fetching specialities");
  }
};

export const fetchAvailableDoctors = async (speciality) => {
  try {
    const response = await axios.get(
      `${url}available?speciality=${speciality}`
    );

    if (!response.data || response.data.length === 0) {
      throw new Error("No doctors available for speciality");
    }

    return response.data;
  } catch (error) {
    throw new Error("Error fetching available doctors");
  }
};
