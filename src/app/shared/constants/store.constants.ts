/**
 * Feature keys for feature store modules
 */
export const FEATURE_KEY = {
  Core: "core",
  Feature: "feature"
};



/**
 * @description - helper function to store data to localStorage
 * @param key - key used in localStorage
 * @param data - data to be stored in localStorage
 */
const storeDataToLocalStore = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
}
