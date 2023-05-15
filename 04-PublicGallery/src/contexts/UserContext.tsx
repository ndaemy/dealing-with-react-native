import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { User } from '~/lib/users';

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContextProvider not found');
  }

  return userContext;
};
