import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/user-store";
import { User } from "@/types/app";
import { Session } from "@supabase/supabase-js";
import { useEffect } from "react";

export interface UserAuthSelectors {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  name: string | null;
  error: string | null;
}

export interface UserAuthActions {
  connectWithOtp: (email: string, code: string) => Promise<void>;
  signInWithOtp: (email: string, name: string) => Promise<void>;
  disconnectUser: () => Promise<void>;
  updateName: (name: string | null) => void;
}

export interface UserAuthHook {
  selectors: UserAuthSelectors;
  actions: UserAuthActions;
}

export function useUserAuth(): UserAuthHook {
  const isAuthenticating = useUserStore((state) => state.isAuthenticating);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const user = useUserStore((state) => state.user);
  const session = useUserStore((state) => state.session);
  const name = useUserStore((state) => state.name);
  const error = useUserStore((state) => state.error);
  const connectUserWithOtp = useUserStore((state) => state.connectWithOtp);
  const signInWithOtp = useUserStore((state) => state.signInWithOtp);
  const updateName = useUserStore((state) => state.updateName);
  const disconnectUser = useUserStore((state) => state.disconnectUser);

  const connectWithOtp = async (email: string, code: string) => {
    connectUserWithOtp(email, code);
  };

  return {
    selectors: { isAuthenticating, isAuthenticated, user, session, name, error },
    actions: { connectWithOtp, signInWithOtp, disconnectUser, updateName },
  };
}
