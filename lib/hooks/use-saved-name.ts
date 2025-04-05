import { useEffect, useState, useCallback } from "react";
import { getUserName, clearUserName } from "@/lib/storage";
import { supabase } from "@/lib/supabase";

export interface UseSavedNameResult {
  savedName: string | null;
  hasExistingName: boolean;
  isLoading: boolean;
  resetUser: () => Promise<void>;
}

export function useSavedName(): UseSavedNameResult {
  const [savedName, setSavedName] = useState<string | null>(null);
  const [hasExistingName, setHasExistingName] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSavedName = async () => {
    try {
      setIsLoading(true);
      const name = await getUserName();
      setSavedName(name);
      setHasExistingName(!!name);
    } catch (error) {
      console.error("Error fetching saved name:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedName();
  }, []);

  const resetUser = useCallback(async () => {
    try {
      setIsLoading(true);
      // Clear saved name from storage
      await clearUserName();
      // Sign out from Supabase
      await supabase.auth.signOut();
      // Reset local state
      setSavedName(null);
      setHasExistingName(false);
    } catch (error) {
      console.error("Error resetting user:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    savedName,
    hasExistingName,
    isLoading,
    resetUser,
  };
}
