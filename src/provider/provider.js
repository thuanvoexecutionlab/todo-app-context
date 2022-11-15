import Context from "./context";
import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
}
