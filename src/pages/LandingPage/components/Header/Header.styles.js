import styled from "styled-components";
import Img from 'assets/img/barcelona-portada.jpg'

export const Container = styled.section`
    background-image: url(${Img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 5rem 1rem;
    position: relative;
    z-index: 0;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: -1;

    @media screen and (min-width: 640px) {
        padding: 5rem;
    }
}
`

export const Title = styled.h1`
    color: white;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    margin-bottom: 4rem;

    @media screen and (min-width: 640px) {
        font-size: 4.5rem;
        margin-top: 3rem;
        margin-bottom: 5rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 6rem;
    }
`

export const Subtitle = styled.p`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 2.125rem;
    margin-bottom: 3rem;
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8);
    width: 80%;

    @media screen and (min-width: 640px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }

    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`;



