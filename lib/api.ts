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
  data: any,
  token?: string
) => {
  return await fetchApi(direction, {
    method: "post",
    body: JSON.stringify(data),
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
