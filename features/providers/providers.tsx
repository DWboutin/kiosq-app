import { ReactQueryProvider } from "@/features/providers/react-query-provider";
import { SupabaseProvider } from "@/features/providers/supabase-provider";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReactQueryProvider>
      <SupabaseProvider>{children}</SupabaseProvider>
    </ReactQueryProvider>
  );
};
