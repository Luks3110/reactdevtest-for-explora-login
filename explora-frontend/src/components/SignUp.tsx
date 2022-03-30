import React, { SyntheticEvent, useState, useEffect } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { IUser } from "../models/user";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { UserState } from "../models/reduxStates";
import { validEmail } from "../constants/validations";
import { register } from "../redux/actions/registerAction";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;

  useEffect(() => {
    console.log("userInfo", userInfo);
    if (userInfo !== null && userInfo !== undefined) {
      console.log(userInfo);
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
      dispatch(register(user));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl font-roboto">
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-black">Explora</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-black mb-2">
                Sign up and start exploring
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              <div className="flex justify-center my-2 ">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200 transition duraton200 ease-in-out"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200 transition duraton200 ease-in-out"
                >
                  <FaGoogle className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-gray-200 transition duraton200 ease-in-out"
                >
                  <FaTwitter className="text-sm" />
                </a>
              </div>{" "}
              {/*Social login section*/}
              <p className="text-gray-400 my-3">or use your email</p>
              <div className="flex flex-col items-center ">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm
                  flex-1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm
                  flex-1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                  className="border-2 border-black text-black rounded-full mt-2 px-12 py-2 inline-block font-semibold hover:bg-black transition delay-150 duration-200 ease-in-out hover:text-white"
                  onClick={(e: SyntheticEvent) => handleSubmit(e)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignUp;
