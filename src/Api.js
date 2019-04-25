/**
 * Api.js
 *
 * Promise based http requests to the users api
 */
import axios from "axios";

const baseUrl = "https://5cbf460006a6810014c664b8.mockapi.io/users/";

// fetches the list of users
const fetchUsers = async () => {
  // concat baseUrl with users
  let url = baseUrl + "/users";
  return await axios.get(url);
};

/**
 * Fetches a user by user id
 *
 * @param {String} userId
 */
const findUser = async userId => {
  // concat baseUrl with users and user id
  let url = baseUrl + "/users/" + userId;
  return await axios.get(url);
};

/**
 * Saves a user record
 *
 * @param {Object} user
 */
const saveUser = async user => {
  // concat baseUrl with users and user id
  let url = baseUrl + "/users/" + user.id;
  return await axios.put(url, user);
};

export default { fetchUsers, findUser, saveUser };
