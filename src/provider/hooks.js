import { useContext } from "react";
import { Context } from "./index";

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};

export const useState = () => {
  const [state] = useContext(Context);
  return state;
};

export const useDispatch = () => {
  const [, dispatch] = useContext(Context);
  return dispatch;
}
