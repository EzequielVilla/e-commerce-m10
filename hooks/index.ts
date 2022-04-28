import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { getConfig, patchConfig, postConfig } from "../lib/api";

export const useGetAllProducts = (): Array<any> | undefined => {
  const { data, error } = useSWRImmutable(
    "/products",
    async () => await getConfig("products")
  );

  if (data) return data.result.hits;
};

interface SearchDataProp {
  page: number;
  offset: number;
  total: number;
}
export const usePagination = () => {
  // return { setOffset, offset };
};

export const useGetSearch = () => {
  const [searchData, setSearchData] = useState<SearchDataProp>({
    page: 1,
    offset: 0,
    total: 0,
  });
  const [q, setQ] = useState("");
  const { offset } = searchData;
  let limit = 2;
  useEffect(() => {
    setSearchData({
      page: 1,
      offset: 0,
      total: 0,
    });
  }, [q]);

  const { data, error } = useSWR(
    q ? [`search?q=${q}&offset=${offset}&limit=${limit}`] : null,
    getConfig,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (data) setSearchData({ ...searchData, total: data.pagination.total });
  }, [data]);

  return {
    data,
    setQ,
    searchData,
    setSearchData,
  };
};

export const useSendCodeToEmail = () => {
  const [email, setEmail] = useState("");
  const { data, error } = useSWR(
    email ? ["auth", { email }] : null,
    postConfig,
    { revalidateOnFocus: false }
  );
  return { isLoading: !error && !data, isError: error, setEmail, email };
};

export const useBuy = () => {
  const [buy, setBuy] = useState<boolean>();
  const [productId, setProductId] = useState<string>();
  const [token, setToken] = useState();
  const { setOrderId } = useCheckStatusOrder();
  const router = useRouter();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token") || ""));
    if (buy && !token) router.push("/logIn");
  }, [buy]);

  const { data, error } = useSWR(
    buy ? [`order?productId=${productId}`, "", token] : null,
    postConfig,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setOrderId(data.orderId);
      window.open(`${data.redirectTo}`, "_blank");
    }
  }, [data]);
  return { setBuy, setProductId, buy };
};

export const useCheckStatusOrder = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>();
  const router = useRouter();

  const { data, error } = useSWR(
    orderId ? [`order/${orderId}`] : null,
    getConfig,
    { refreshInterval: 2000, revalidateOnFocus: true }
  );

  useEffect(() => {
    if (!data) return;
    setStatus(data.data.status);
  }, [data]);

  useEffect(() => {
    if (status) {
      router.push("/");
      window.alert("Gracias por su compra");
    }
  }, [status]);
  return { status, setOrderId };
};

export const useCode = () => {
  const [code, setCode] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();
  const codeNumber = parseInt(code);

  const { data, error } = useSWR(
    code ? ["auth/token", { code: codeNumber, email: userEmail }] : null,
    postConfig,
    { revalidateOnFocus: false }
  );
  useEffect(() => {
    if (data) {
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("email", JSON.stringify(userEmail));
      router.push("/");
    }
  }, [data]);

  return {
    isLoading: !error && !data,
    isError: error,
    setUserEmail,
    setCode,
  };
};

export const useIsLogged = () => {
  const [logged, setLogged] = useState<boolean>();

  // const { action, setTokenAction, token: storageToken } = useToken();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      localStorage.setItem("token", JSON.stringify(""));
    }
    const token = JSON.parse(localStorage.getItem("token") || "");
    const exist = token ? true : false;

    if (exist) setLogged(true);
    else setLogged(false);
  }, []);

  return logged;
};

export const useLogOut = () => {
  const [logged, setLogged] = useState<boolean>();

  const router = useRouter();
  const tokenExist = useIsLogged();

  useEffect(() => {
    if (!logged && tokenExist) {
      localStorage.setItem("token", JSON.stringify(""));
      localStorage.setItem("email", JSON.stringify(""));
      if (window.location.pathname === "/") router.reload();
      else router.push("/");
    }
  }, [logged]);
  return setLogged;
};

export const useMe = () => {
  const [email, setEmail] = useState<string>();

  const { data, error } = useSWR(email ? ["me"] : null, getConfig, {
    revalidateOnFocus: false,
  });
  useEffect(() => {
    if (data?.email) {
      setEmail(data.email);
    }
  }, [data]);

  return { email };
};
interface ProfileInput {
  direction: string;
  name: string;
  phone: string;
}
export const useUpdateProfile = () => {
  const [inputData, setInputData] = useState<ProfileInput>();
  const [token, setToken] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState<boolean>();
  const router = useRouter();

  const patchInfo = { email, other: inputData };
  const { data, error } = useSWR(
    inputData ? ["me", patchInfo, token] : null,
    patchConfig,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      localStorage.setItem("email", JSON.stringify(""));
    }
    if (localStorage.getItem("token") === null) {
      localStorage.setItem("token", JSON.stringify(""));
    }
    setToken(JSON.parse(localStorage.getItem("token") || ""));
    setEmail(JSON.parse(localStorage.getItem("email") || ""));
  }, []);

  useEffect(() => {
    if (!data) return;
    if (data.upgraded) {
      setIsLoading(false);
      window.alert("Perfil actualizado");
      router.push("/");
    }
  }, [data]);
  return { setInputData, setIsLoading, isLoading };
};
type Action = "get" | "clean" | "set";
