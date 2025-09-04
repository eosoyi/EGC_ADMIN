import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  const startLogin = async (username: string, password: string) => {
    dispatch(onChecking());

    try {
      console.log({ username, password });
      sessionStorage.setItem("egc-admin-name", "Erick");
      sessionStorage.setItem("egc-admin-token", "fake-token");

      dispatch(onLogin());
    } catch (error) {
      sessionStorage.clear();
      dispatch(onLogout());
    }
  };

  const checkAuthToken = async () => {
    const token = sessionStorage.getItem("egc-admin-token");

    if (!token) return dispatch(onLogout());

    try {
      sessionStorage.setItem("egc-admin-name", "Erick");
      sessionStorage.setItem("egc-admin-token", "fake-token");
      dispatch(onLogin());
    } catch (error) {
      sessionStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    sessionStorage.clear();
    dispatch(onLogout());
  };

  return {
    // properties
    status,
    errorMessage,

    // methods
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
