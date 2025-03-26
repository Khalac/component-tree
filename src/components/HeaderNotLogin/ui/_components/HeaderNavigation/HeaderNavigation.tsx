import React from "react";
import { login } from "../../../../../features/redux/Auth/AuthSlice";
import { useDispatch } from "react-redux";

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(login())}>Login</button>;
};

export default HeaderNavigation;
