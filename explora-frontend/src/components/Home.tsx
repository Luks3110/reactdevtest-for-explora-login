import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UserState } from "../models/reduxStates";
import { navigate } from "gatsby";

const Home: React.FC = () => {
  const userLogin = useSelector<RootState, UserState>(
    (state) => state.userLogin
  );
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo === null || userInfo === undefined) {
      navigate("/login");
    }
  }, [userInfo]);

  const email = userInfo ? userInfo.email : "";
  const token = userInfo ? userInfo.token : "";
  return (
    <div>
      <h1 className="text-3xl">Email: {email}</h1>
      <h2 className="text-2xl">Token JWT: {token}</h2>
    </div>
  );
};

export default Home;
