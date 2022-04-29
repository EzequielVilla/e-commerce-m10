import { Router } from "next/router";

interface RequestOptions {
  method: string;
  body?: any;
  headers: any;
}

const fetchApi = async (direction: string, config: RequestOptions) => {
  const BASE_API_URL = "https://m9-desafio.vercel.app/api/";
  // const BASE_API_URL = "http://localhost:3001/api/";

  const url = BASE_API_URL + direction;

  const fullConfig = {
    ...config,
  };
  const res = await fetch(url, fullConfig);
  const status = res.status;

  if (status >= 200 && status < 300) return await res.json();
  if (status >= 400) throw { error: res.status };
};

export const getConfig = async (direction: string, token?: string) => {
  return await fetchApi(direction, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
  });
};
export const postConfig = async (
  direction: string,
  data: any = {},
  token?: string
) => {
  return await fetchApi(direction, {
    method: "post",
    body: JSON.stringify({ ...data }),
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
  });
};
export const patchConfig = async (
  direction: string,
  data: any = {},
  token?: string
) => {
  return await fetchApi(direction, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `bearer ${token}` : "",
    },
  });
};

interface ProfileData {
  name: string;
  direction: string;
  phone: string;
}

export async function updateProfileData(data: ProfileData) {
  const token = JSON.parse(localStorage.getItem("token") || "");
  const email = JSON.parse(localStorage.getItem("email") || "");
  const patchInfo = { email, other: data };
  return await patchConfig("me", patchInfo, token);
}

export async function sendCode(email: string) {
  postConfig("auth", { email });
}

export async function checkCode(email: string, code: string) {
  const codeNumber = parseInt(code);
  const data = { email, code: codeNumber };
  return await postConfig("auth/token", data);
}

interface buyResData {
  orderId?: string;
  redirectTo?: string;
  error?: string;
}
interface buyApiResponse {
  orderId: string;
  redirectTo: string;
}
export async function buyItem(objectID: string): Promise<buyResData> {
  const token = JSON.parse(localStorage.getItem("token") || "");
  if (!token) return { error: "log-in" };
  const res: buyApiResponse = await postConfig(
    `order?productId=${objectID}`,
    "",
    token
  );
  return res;
}
