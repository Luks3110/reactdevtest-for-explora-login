import { Link } from "gatsby";
import styled from "styled-components";
import tw from "twin.macro";
export const SContainer = styled.div`
  ${tw`
        flex 
        flex-col 
        items-center 
        justify-center 
        min-h-screen 
        py-2 
        bg-gray-100
    `}
`;

export const SMain = styled.main`
  ${tw`
        flex 
        flex-col 
        items-center 
        justify-center 
        w-full 
        flex-1 
        px-20 
        text-center
    `}
`;

export const SCard = styled.div`
  ${tw`
        bg-white 
        rounded-2xl 
        shadow-2xl 
        flex 
        w-2/3 
        max-w-4xl 
        font-roboto
    `}
`;

export const SLeft = styled.div`
  ${tw`
        w-3/5
        p-5
    `}
`;

export const SCompany = styled.div`
  ${tw`
        text-left
        font-bold
    `}
`;

export const SContent = styled.div`
  ${tw`
        py-10
    `}
`;

export const STitle = styled.h2`
  ${tw`
        text-3xl
        font-bold
        mb-2
    `}
`;

export const SDivisory = styled.div`
  ${tw`
        border-2
        w-10
        border-black
        inline-block
        mb-2
    `}
`;

export const SLoginSocial = styled.div`
  ${tw`
        flex
        justify-center
        my-2
    `}
`;

export const SLinks = styled.a`
  ${tw`
        border-2
        border-gray-200
        rounded-full
        p-3
        mx-1
    `}
`;

export const SUseEmail = styled.p`
  ${tw`
        text-gray-400
        my-3
    `}
`;

export const SForm = styled.div`
  ${tw`
        flex
        flex-col
        items-center
    `}
`;

export const SField = styled.div`
  ${tw`
        bg-gray-100 
        w-64 
        p-2 
        flex 
        items-center 
        mb-3
    `}
`;

export const SInput = styled.input`
  ${tw`
        bg-gray-100
        outline-none
        text-sm
        flex-1
    `}
`;

export const SUtils = styled.div`
  ${tw`
        flex
        justify-between
        w-64
        mb-5
    `}
`;

export const SLabel = styled.div`
  ${tw`
        flex
        items-center
        text-xs
        my-1
    `}
`;

export const SForgot = styled.a`
  ${tw`
        text-xs
        text-gray-500
        ml-auto
        mt-1
    `}
`;

export const SLoginButton = styled.button`
  ${tw`
        border-2 
        border-black 
        text-black 
        rounded-full 
        px-12 
        py-2 
        inline-block 
        font-semibold 
        hover:bg-black 
        transition delay-150 
        duration-200 
        ease-in-out 
        hover:text-white
    `}
`;

export const SRight = styled.div`
  ${tw`
    w-2/5 
    bg-black 
    text-white 
    rounded-tr-2xl 
    rounded-br-2xl 
    py-36 
    px-12
    `}
`;

export const SRegister = styled(Link)`
  ${tw`
        border-2 
        border-white 
        rounded-full 
        px-12 
        py-2 
        inline-block 
        font-semibold 
        hover:bg-white 
        transition 
        delay-150 
        duration-200 
        ease-in-out 
        hover:text-gray-500 
        hover:border-black
    `}
`;
