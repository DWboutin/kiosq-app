import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { secureStorage } from "@/utils/secure-store";
import { User } from "@/types/app";
import { checkSession, getUser, signInWithOtp, signOut, verifyOtpCode } from "@/lib/supabase-auth";
import { Session } from "@supabase/supabase-js";

type UserState = {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  isSigningWithOtp: boolean;
  user: User | null;
  session: Session | null;
  name: string | null;
  error: string | null;
};

type UserActions = {
  updateUser: (user: User | null) => void;
  updateSession: (session: Session | null) => void;
  updateName: (name: string | null) => void;
  getUser: () => Promise<void>;
  signInWithOtp: (email: string, name: string) => Promise<void>;
  connectWithOtp: (email: string, code: string) => Promise<void>;
  checkSession: () => Promise<Session | null>;
  disconnectUser: () => Promise<void>;
};

const initialState: UserState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isSigningWithOtp: false,
  user: null,
  session: null,
  name: null,
  error: null,
};

export const useUserStore = create<UserState & UserActions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      updateUser: (user: User | null) => {
        set((state) => {
          state.user = user;
        });
      },
      updateSession: (session: Session | null) => {
        set((state) => {
          state.session = session;
        });
      },
      updateName: (name: string | null) => {
        set((state) => {
          state.name = name;
        });
      },
      getUser: async () => {
        const user = await getUser();

        set((state) => {
          state.user = user;
        });
      },
      signInWithOtp: async (email: string, name: string) => {
        try {
          set((state) => {
            state.isSigningWithOtp = true;
          });

          const usedName = get().name || name;

          await signInWithOtp(email, usedName);
        } catch (error) {
          set((state) => {
            state.error = error as string;
          });
        } finally {
          set((state) => {
            state.isSigningWithOtp = false;
          });
        }
      },
      connectWithOtp: async (email: string, code: string) => {
        try {
          set((state) => {
            state.isAuthenticating = true;
          });

          const session = await verifyOtpCode(email, code);
          await get().getUser();

          set((state) => {
            state.session = session || null;
            state.user = session?.user || null;
            state.isAuthenticated = true;
          });
        } catch (error) {
          set((state) => {
            state.error = error as string;
          });
        } finally {
          set((state) => {
            state.isAuthenticating = false;
          });
        }
      },
      checkSession: async () => {
        const session = await checkSession();

        set((state) => {
          state.session = session;
          state.user = session?.user || null;
          state.isAuthenticated = !!session;
        });

        return session;
      },
      disconnectUser: async () => {
        try {
          set((state) => {
            state.isAuthenticating = true;
          });

          await signOut();
        } catch (error) {
          set((state) => {
            state.error = error as string;
          });
        } finally {
          set((state) => {
            state.isAuthenticated = false;
            state.session = null;
            state.user = null;
            state.name = null;
            state.isAuthenticating = false;
          });
        }
      },
    })),
    {
      name: "user-storage",
      storage: createJSONStorage(() => secureStorage),
    }
  )
);
