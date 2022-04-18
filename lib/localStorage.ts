import { useEffect, useState } from "react";
type Action = "get" | "clean" | "set";

export const useToken = () => {
  const [action, setAction] = useState<Action>();
  const [t, setT] = useState("");
  useEffect(() => {
    if (!action) return;
    if (!localStorage["token"])
      localStorage.setItem("token", JSON.stringify(""));
    if (action == "get") {
      const token = JSON.parse(localStorage.getItem("token") || "");
      if (token) setT(token);
    }
    if (action == "clean") localStorage.setItem("token", JSON.stringify(""));
    if (action == "set") {
      localStorage.setItem("token", JSON.stringify(t));
    }
  }, [action]);

  return { action, setTokenAction: setAction, token: t, setToken: setT };
};

export const useEmailStorage = () => {
  const [action, setAction] = useState<Action>();
  const [e, setE] = useState("");
  useEffect(() => {
    if (!localStorage["email"])
      localStorage.setItem("email", JSON.stringify(""));
    localStorage["email"];
    if (action == "get") {
      const email = JSON.parse(localStorage.getItem("email") || "");
      if (email) setE(email);
    }
    if (action == "clean") localStorage.setItem("email", JSON.stringify(""));
    if (action == "set") localStorage.setItem("email", JSON.stringify(e));
  }, [action]);
  return { setEmailAction: setAction, email: e, setEmail: setE };
};
