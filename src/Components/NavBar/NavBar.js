import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import iconLogin from '../../image/enter.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299b01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LoginButton = styled.button`
    background-color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 2px;
    text-transform: uppercase;
    color: #4caf50;
    font-weight: bold;
    margin-right: 15px;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    transition-duration: 0.4s;
    &:hover {
        background-color: #eeeeee;
        box-shadow: 8px 8px 15px rgb(55, 55, 55, 0.5);
        outline: none;
    }
    &:active {
        box-shadow: 1px 1px 10px rgb(55, 55, 55, 0.5);
    }
`;

const LoginIcon = styled.img`
    width: 20px;
    margin-left: 5px;
    color: white;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="лого" />
            <H1>MrDonald's</H1>
        </Logo>
        <LoginButton>
            войти
            <LoginIcon src={iconLogin} alt="войти" />
        </LoginButton>
    </NavBarStyled>
);
