import styled from 'styled-components';

const DropZoneCircle = styled.div`
    width: 210px;
    height: 210px;
    border: 2px dashed rgba(168, 40, 253, .5);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    grid-column: span 3;
    grid-row: span 3;
    transition: 300ms;

    &:hover{
        border-color: rgba(168, 40, 253, 1);
        transform: rotateZ(10deg);

        &>img{
            opacity: .8;
            transform: rotateZ(-10deg);
        }    
    }

    &>img{
        width: 50%;
        opacity: .5;
        transition: 300ms;
    }
`;

const Input = styled.input`
    background: rgba(168, 40, 253, .2);
    position: absolute;
    width: 99%;
    height: 99%;
    border-radius: 100%;
    opacity: 0 !important;
    cursor: pointer !important;
`;

export { DropZoneCircle, Input };