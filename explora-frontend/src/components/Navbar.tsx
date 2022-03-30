import * as React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { UserState } from "../models/reduxStates";
import { signOut } from "../redux/actions/authAction";
import {
  SNav,
  SLeftSide,
  SLink,
  SNavItem,
  SRightSide,
} from "../styles/Navbar.style";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const handleSignoff = () => {
    dispatch(signOut());
  };
  const userLogin = useSelector<RootState, UserState>(
    (state) => state.userLogin
  );
  const { userInfo } = userLogin;

  return (
    <SNav>
      <SLeftSide>
        <SLink to="/">Home</SLink>
      </SLeftSide>
      <SRightSide>
        <SNavItem>
          <a href="https://github.com/Luks3110/reactdevtest-for-explora-login">
            <FaGithub className="text-3xl" />
          </a>
        </SNavItem>
        <SNavItem>
          <a href="http://www.linkedin.com/in/Luks3110">
            <FaLinkedin className="text-3xl" />
          </a>
        </SNavItem>
        {userInfo !== undefined && (
          <SNavItem>
            <Link to="/" onClick={() => handleSignoff()}>
              <FiLogOut className="text-3xl" />
            </Link>
          </SNavItem>
        )}
      </SRightSide>
    </SNav>
  );
};

export default Navbar;
