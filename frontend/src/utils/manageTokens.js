import Cookies from "js-cookie";

const getTokens = () => {
  const access = localStorage.getItem("access");
  const refresh = Cookies.get("refresh");

  return { access, refresh };
};

const setTokens = (data) => {
  localStorage.setItem("access", data?.access);
  Cookies.set("refresh", data?.refresh, { expires: 14 });
};

const nullifyTokens = () => {
  localStorage.removeItem("access");
  Cookies.remove("refresh", { path: "/" });
};

export { getTokens, setTokens, nullifyTokens };
