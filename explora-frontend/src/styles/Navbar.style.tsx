import { Link } from "gatsby";
import styled from "styled-components";
import tw from "twin.macro";

export const SNav = styled.nav`
  ${tw`
    flex
    bg-black
    justify-between
    p-4
    z-10
    relative
    text-white
    font-roboto
  `}
`;

export const SLink = styled(Link)`
  ${tw`
    text-2xl
    mr-2
    no-underline
    hover:text-gray-400 transition delay-150 duration-200 ease-in-out
  `}
`;

export const SLeftSide = styled.div`
  ${tw`
    flex
    justify-start
  `}
`;

export const SNavItem = styled.div`
  ${tw`
    mr-3
    hover:text-gray-400 transition delay-150 duration-200 ease-in-out
 `}
`;

export const SRightSide = styled.div`
  ${tw`
    flex
    justify-between
    items-end
    mr-4
    h-full
  `}
`;
