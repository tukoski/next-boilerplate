/**
 * Read localStorage data
 */
export function getDataInStorage(key = "RL-TD-u-data") {
  if (supportLocalStorage()) {
    return localStorage.getItem(key);
  } else {
    return null;
  }
}

/**
 * Save data in localStorage
 * @param {Object} data Data to be saved in localStorage
 */
export function saveInLocalStorage(data, key = "RL-TD-u-data") {
  if (typeof data === "object") {
    data = JSON.stringify(data);
  }

  if (supportLocalStorage()) {
    localStorage.setItem(key, data);
  }
}

/**
 * Verify if the browser supports localStorage
 */
function supportLocalStorage() {
  if (typeof window === "object" && window.localStorage) {
    return true;
  } else {
    if (typeof window === "object") {
      alert(
        "You are using a very old version of your browser !, for the application to work correctly you should update it"
      );
    }
    return false;
  }
}
