import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { getConfig, patchConfig, postConfig } from "./api";
import { useToken, useEmailStorage } from "./localStorage";

export const useGetAllProducts = (): Array<any> | undefined => {
  const { data, error } = useSWRImmutable(
    "/products",
    async () => await getConfig("products")
  );

  if (data) return data.result.hits;
};
export const useGetSearch = () => {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [add, setAdd] = useState<boolean>();
  const [offset, SetOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [max, setMax] = useState<boolean>();
  const [min, setMin] = useState<boolean>();

  let limit = 2;
  //seteo todo a 0 por cada query que cambia dentro del mismo buscador
  useEffect(() => {
    setPage(1);
    setAdd(false);
    SetOffset(0);
    setTotal(0);
    setMax(false);
    setMin(true);
  }, [q]);

  useEffect(() => {
    if (add) SetOffset(offset + 2);
    else if (!add && offset > 0) SetOffset(offset - 2);
  }, [page]);

  const { data, error } = useSWR(
    q ? [`search?q=${q}&offset=${offset}&limit=${limit}`] : null,
    getConfig,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (data) setTotal(data.pagination.total);
  }, [data]);

  useEffect(() => {
    if (offset + 1 == total || offset + 2 == total) setMax(true);
    else setMax(false);
    if (offset == 0) setMin(true);
    else setMin(false);
  }, [offset]);

  return { min, max, data, error, setQ, setPage, page, total, setAdd };
};
export const useEmail = () => {
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
  const { token, setTokenAction } = useToken();
  const { setOrderId } = useCheckStatusOrder();

  const router = useRouter();
  useEffect(() => {
    setTokenAction("get");
    if (buy && !token) router.push("/logIn");
  }, [buy]);

  const { data, error } = useSWR(
    buy ? [`order?productId=${productId}`, "", token] : null,
    postConfig,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      console.log({ dataBuy: data });

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
  // const { orderId } = useBuy();

  const { data, error } = useSWR(
    orderId ? [`order/${orderId}`] : null,
    // orderId ? [`order/:${orderId}`] : null,
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

export const useCode = (email: string) => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { setTokenAction, setToken } = useToken();
  const { setEmailAction, setEmail } = useEmailStorage();

  const codeNumber = parseInt(code);

  const { data, error } = useSWR(
    code ? ["auth/token", { code: codeNumber, email }] : null,
    postConfig,
    { revalidateOnFocus: false }
  );
  useEffect(() => {
    if (data) {
      setTokenAction("set");
      setToken(data.token);
      setEmailAction("set");
      setEmail(email);
      router.push("/");
    }
  }, [data]);

  return {
    isLoading: !error && !data,
    isError: error,
    setCode,
  };
};

export const useIsLogged = () => {
  const [logged, setLogged] = useState<boolean>();
  const { action, setTokenAction, token: storageToken } = useToken();
  useEffect(() => {
    setTokenAction("get");

    const exist = storageToken;

    if (exist) setLogged(true);
    else setLogged(false);
  }, [storageToken]);

  return logged;
};

export const useLogOut = () => {
  const [logged, setLogged] = useState<boolean>();
  const { setTokenAction } = useToken();
  const { setEmailAction } = useEmailStorage();
  const router = useRouter();
  const tokenExist = useIsLogged();

  useEffect(() => {
    if (!logged && tokenExist) {
      setTokenAction("clean");
      setEmailAction("clean");
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
  const { setTokenAction, token } = useToken();
  const { setEmailAction, email } = useEmailStorage();

  const patchInfo = { email, other: inputData };
  const { data, error } = useSWR(
    inputData ? ["me", patchInfo, token] : null,
    patchConfig,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    setTokenAction("get");
    setEmailAction("get");
  }, []);
  useEffect(() => {
    // console.log({ data });
  }, []);
  return { setInputData };
};
