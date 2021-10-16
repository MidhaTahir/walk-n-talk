import React, { useState, createContext, useMemo, FC } from 'react';
import { userApi } from './constants';
import { getRandomInt } from './helpers';

interface AppContextInterface {
  user: {
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    id: string | number;
  };
}

export const UserContext = createContext<AppContextInterface>();

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);

  useMemo(() => {
    const randomUser = getRandomInt(1, 5);

    const getUser = async () => {
      fetch(userApi)
        .then(response => response.json())
        .then(res => setUser(res.data[randomUser]))
        .catch(console.error);
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
