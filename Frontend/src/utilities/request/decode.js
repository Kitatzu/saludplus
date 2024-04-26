import { jwtDecode } from "jwt-decode";

export const tokenDecode = (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  if (!token.state.userToken.data) {
    throw new Error("Invalid token format");
  }

  try {
    const payload = jwtDecode(token.state.userToken.data);

    return payload;
  } catch (error) {
    console.log(error);
  }
};
