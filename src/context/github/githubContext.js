import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

export const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  const getRepos = async (loginId) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${loginId}/repos`);
    const data = await response.json();

    console.log("data", data);

    dispatch({ type: "GET_REPOS", payload: data });

  }

  const clearUsers = () => {
    dispatch({
      type: "GET_USERS",
      payload: [],
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
