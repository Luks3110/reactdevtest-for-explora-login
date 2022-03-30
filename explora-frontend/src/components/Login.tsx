import React, { SyntheticEvent, useState, useEffect } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IUser } from "../models/user";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { RootState } from "../redux/store";
import { UserState } from "../models/reduxStates";
import { Link, navigate } from "gatsby";
import { validEmail } from "../constants/validations";
import {
  SContainer,
  SMain,
  SCard,
  SLeft,
  SCompany,
  SContent,
  SDivisory,
  SLoginSocial,
  SLinks,
  SUseEmail,
  SForm,
  SField,
  SInput,
  SUtils,
  SLabel,
  SForgot,
  SLoginButton,
  SRight,
  STitle,
  SRegister,
} from "../styles/Login.style";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );

  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo !== null && userInfo !== undefined) {
      console.log(userInfo);
      navigate("/");
    }
  }, [userInfo]);

  const user: IUser = {
    email: email,
    password: password,
  };

  const handleSubmit = (e: SyntheticEvent) => {
    setError("");
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Preencha todos os campos");
    }
    if (!validEmail.test(email)) {
      setError("Email inválido");
    }
    if (!error) {
      dispatch(login(user));
      console.log(user);
    }
  };

  return (
    <SContainer>
      <SMain>
        <SCard>
          <SLeft>
            <SCompany>
              <span className="text-black">Explora</span>
            </SCompany>
            <SContent>
              <STitle>Sign in to your account</STitle>
              <SDivisory></SDivisory>
              <SLoginSocial>
                <SLinks href="#">
                  <FaFacebook className="text-sm" />
                </SLinks>
                <SLinks href="#">
                  <FaGoogle className="text-sm" />
                </SLinks>
                <SLinks href="#">
                  <FaTwitter className="text-sm" />
                </SLinks>
              </SLoginSocial>{" "}
              {/*Social login section*/}
              <SUseEmail className="text-gray-400 my-3">
                or use your email
              </SUseEmail>
              <SForm className="flex flex-col items-center ">
                <SField className="mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <SInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </SField>
                <SField>
                  <MdLockOutline className="text-gray-400 m-2" />
                  <SInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </SField>
                <SUtils>
                  <SLabel className="flex items-center text-xs my-1">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 w-full"
                    />
                    Remember password
                  </SLabel>
                  <SForgot href="#">Forgot password?</SForgot>
                </SUtils>
                {error && <div className="text-red-500">{error}</div>}
                <SLoginButton onClick={(e: SyntheticEvent) => handleSubmit(e)}>
                  Sign In
                </SLoginButton>
              </SForm>
            </SContent>
          </SLeft>
          {/*Sign in section*/}
          <SRight>
            <STitle> Hi, folk </STitle>
            <div className="border-2 w-10 inline-block mb-2"></div>
            <p className="mb-10">Not registered yet?</p>
            <SRegister to="/signup">Sign Up!</SRegister>
          </SRight>
        </SCard>
      </SMain>
    </SContainer>
  );
};
export default Login;
