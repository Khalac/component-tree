import React from "react";
import { logout } from "../../../../../features/redux/Auth/AuthSlice";
import { useDispatch, UseDispatch } from "react-redux";

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logout())}>Logout</button>;
};

export default HeaderNavigation;
