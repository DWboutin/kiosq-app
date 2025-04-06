import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/user-store";
import { User } from "@/types/app";
import { ReactNode, useEffect } from "react";

interface SupabaseProviderProps {
  children: ReactNode;
}

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const { updateUser, updateSession, checkSession } = useUserStore();

  useEffect(() => {
    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
      const user = newSession?.user as unknown as User;

      updateSession(newSession);
      updateUser(user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <>{children}</>;
};
