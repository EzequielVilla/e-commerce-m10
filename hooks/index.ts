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

export const useGetSearch = () => {
  const [offset, setOffset] = useState<number>();
  const [q, setQ] = useState("");

  let limit = 2;

  const { data, error } = useSWR(
    q ? [`search?q=${q}&offset=${offset}&limit=${limit}`] : null,
    getConfig,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    setQ,
    setOffset,
  };
};
export const useCheckStatusOrder = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>();
  const router = useRouter();

  const { data, error } = useSWR(
    orderId ? [`order/${orderId}`] : null,
    getConfig,
    { refreshInterval: 2000, revalidateOnFocus: false }
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
