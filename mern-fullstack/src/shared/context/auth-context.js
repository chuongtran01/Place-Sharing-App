import { createContext } from 'react';

// share data between components
export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {},
});
