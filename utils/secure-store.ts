import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveSecureValue(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

export async function getSecureValue(key: string) {
  return await AsyncStorage.getItem(key);
}

export const secureStorage = {
  setItem(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  },

  getItem(key: string) {
    return AsyncStorage.getItem(key);
  },

  removeItem(key: string) {
    return AsyncStorage.removeItem(key);
  },
};
