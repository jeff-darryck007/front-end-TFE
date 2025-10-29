import axios from "axios";
import { BASE_URL } from "../server/config.js";

export async function loginUser(email, password) {
  if (!email || !password) {
    throw new Error("Email et mot de passe obligatoires");
  }

  try {
    const response = await axios.post(`${BASE_URL}/api/login`, {
      email,
      password,
    });

    // Tu peux ici gérer le stockage du token si tu veux :
    // localStorage.setItem("token", response.data.token);

    return response.data; // renvoie la réponse au composant Vue
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Identifiants invalides");
    } else {
      throw new Error("Erreur serveur ou réseau");
    }
  }
}