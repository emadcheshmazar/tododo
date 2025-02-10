export const storeLocalData = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log("error in storing Data", err);
  }
};

export const getLocalData = (key: string): unknown | null => {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const clearStorage = () => {
  localStorage.clear();
};

export const removeLocalData = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log("error in removing Data", err);
  }
};
