import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";

export function useSupabaseAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error checking auth session:", error);
        return;
      }

      setSession(data.session);
      setUser(data.session?.user ?? null);
    } catch (err) {
      console.error("Unexpected error in auth check:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkSession();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
      console.log("Auth state changed:", event);
      setSession(newSession);
      setUser(newSession?.user ?? null);
      setLoading(false);
    });

    // Clean up
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
      }
    } catch (err) {
      console.error("Unexpected error during sign out:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    session,
    user,
    isAuthenticated: !!user,
    loading,
    signOut,
  };
}
