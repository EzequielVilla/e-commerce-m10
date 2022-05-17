import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { getConfig, patchConfig, postConfig } from "../lib/api";

//Uso swr para que solo cargue los items destacados la primera vez que entra el user a la pagina.
export const useGetAllProducts = (): Array<any> | undefined => {
  const { data, error } = useSWRImmutable(
    "/products",
    async () => await getConfig("products")
  );

  return data?.result?.hits;
};

//Uso swr para "cachear" la respuesta si el usuario va y viene con el offset.
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

// Uso swr para hacer un refresh en intervalos de tiempo.
export const useCheckStatusOrder = () => {
  const [orderId, setOrderId] = useState<string>();

  const { data, error } = useSWR(
    orderId ? [`order/${orderId}`] : null,
    getConfig,
    { refreshInterval: 2000, revalidateOnFocus: true }
  );

  return { setOrderId, status: data?.data?.status };
};

// abstraigo logica que se repite en varios componentes.
export const useIsLogged = () => {
  const [logged, setLogged] = useState<boolean>();

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

// abstraigo logica que se repite en varios componentes.
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
