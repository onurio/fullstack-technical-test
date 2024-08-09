import { useState, useEffect } from "react";

const TOKEN_KEY = "token";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Load the token from local storage when the component mounts
    const storedToken = localStorage.getItem(TOKEN_KEY);
    setToken(storedToken);
  }, []);

  const saveToken = (userToken: string) => {
    localStorage.setItem(TOKEN_KEY, userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return { token, saveToken, removeToken };
};

export default useToken;
