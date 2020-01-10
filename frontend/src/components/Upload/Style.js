import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
    0%{ transform: scale(.92);}
    50%{ transform: scale(1); }
    100%{ transform: scale(.92); }
`;

const UploadContainer = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 0 30px;
    padding: 25px;
    border-radius: 7px;
    box-shadow: 0 4px 14px 0 rgba(168, 40, 253, .39);
    background: #fff;
`;

const EmptyList = styled.h1`
    text-align: center;
    font-size: 17px;
    color: rgba(40, 40, 40, .6);
    font-family: sans-serif;
    line-height: 47.234px;
    grid-column-start: 5;
    grid-row-start: 2;
    text-transform: uppercase;
    letter-spacing: 1px;

    animation-name: ${Animation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
`;

const UploadButton = styled.button`
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    border-radius: 7px;
    background-color: rgba(168, 40, 253, 1);
    box-shadow: 0 4px 14px 0 rgba(168, 40, 253, .39);
    color: white;
    grid-column: 4 / 7;
    margin: auto 0 0 0;
    cursor: pointer;
    grid-row-start: 3;
    border: none;
    transition: 300ms;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .5px;

    &:hover{
        background-color: rgba(168, 40, 253, .8);
        letter-spacing: 1.2px;
    }
`;

export { UploadContainer, EmptyList, UploadButton };