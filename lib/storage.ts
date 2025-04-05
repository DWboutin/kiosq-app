import AsyncStorage from "@react-native-async-storage/async-storage";

// Storage keys
export const STORAGE_KEYS = {
  USER_NAME: "user_name",
};

// Storage utility functions
export const storeUserName = async (name: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_NAME, name);
  } catch (error) {
    console.error("Error storing user name:", error);
  }
};

export const getUserName = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.USER_NAME);
  } catch (error) {
    console.error("Error getting user name:", error);
    return null;
  }
};

export const clearUserName = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_NAME);
  } catch (error) {
    console.error("Error clearing user name:", error);
  }
};

export const clearUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_NAME);
  } catch (error) {
    console.error("Error clearing user data:", error);
  }
};
