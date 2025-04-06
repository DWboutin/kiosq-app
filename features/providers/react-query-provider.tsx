import { ReactNode, useEffect } from "react";
import {
  focusManager,
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";

const queryClient = new QueryClient();

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

interface ReactQueryProviderProps {
  children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  useEffect(() => {
    focusManager.setFocused(true);
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
