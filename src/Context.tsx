import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type ContextProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

// Now you can create the context
const Theme = createContext<ContextProps>({
  theme: 'light',
  setTheme: () => {},
});

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const values = { theme, setTheme };

  return <Theme.Provider value={values}>{children}</Theme.Provider>;
};

const useTheme = () => {
  return useContext(Theme);
};

export default useTheme;
