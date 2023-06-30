import { useReducer, createContext, useEffect } from "react";
import { LoginReducer } from "./Reducer.js";

const INIT_STATE = {
  user: localStorage.getItem("jwtToken")==="null"? null:localStorage.getItem("jwtToken"),
  isFetching: false,
  error: false,
};

export const Context = createContext();

export const ContextProvider = (props) => {
  //state--> the one we're tracking
  //dispatch to trigger action(LoginReducer Function)
  const [state, dispatch] = useReducer(LoginReducer, INIT_STATE);

  useEffect(() => {

    //Executes on receiving data after logging in.
    if(state.user &&
      state.user.user)
      {
      localStorage.setItem("profilePic", state.user.user.profilePic); localStorage.setItem("jwtToken", state.user.token);
      localStorage.setItem("userId", state.user.user._id);
      }

    console.log(state);
  }, [state]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
