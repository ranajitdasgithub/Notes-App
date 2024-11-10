import * as types from "./actionType";

const initState = {
  isAuth: localStorage.getItem("tokenKey") ? true : false,
  isLoading: false,
  isError: false,
  token: localStorage.getItem("tokenKey") || "",
  logOutError: false,
};

const reducer = (oldState = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      console.log(payload);
      localStorage.setItem("tokenKey", JSON.stringify(payload));
      return {
        ...oldState,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case types.LOGIN_FAILED:
      return {
        ...oldState,
        isAuth: false,
        isLoading: false,
        isError: true,
      };

    case types.LOGOUT_SUCCESS:
      localStorage.removeItem("tokenKey");
      return {
        ...oldState,
        isAuth: false,
        isError: false,
        token: "",
      };

    case types.LOGOUT_FAILED:
      return {
        ...oldState,
        logOutError: payload,
      };

    default:
      return oldState;
  }
};

export { reducer };
