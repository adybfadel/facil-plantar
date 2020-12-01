export const loadLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('error while loading ' + key + ' from local storage: ' + err);
    return undefined;
  }
};

export const saveLocalStorage = (key, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('error while saving ' + key + ' on local storage: ' + err);
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error('error while removing ' + key + ' on local storage: ' + err);
  }
};