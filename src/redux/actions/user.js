import { USER_LOGIN } from "../types";

/**
 * Login
 * @param {Object} data of the user
 */
export function login(data) {
  return { type: USER_LOGIN, data };
}
