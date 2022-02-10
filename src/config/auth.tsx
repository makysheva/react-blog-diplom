import { instance } from "./axios"
// @ts-ignore
interface ResponseApi {
  data: any
}

export const authAPI = {
  // @ts-ignore
  login(email, password) {
    return instance.post("/auth/login", { email, password });
  },
  // @ts-ignore
  registration(fullName, email, password) {
    return instance.post("/auth/register", {
      fullName,
      email,
      password,
    });
  },
  checkAuth() {
    return instance.get("/auth/me");
  },
}