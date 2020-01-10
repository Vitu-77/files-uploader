import styled from 'styled-components';

const FilesListContainer = styled.div`

    border: 1px solid #ccc;
    border-radius: 2px;

    grid-column: 4 / 7;
    grid-row: 1 / 3;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-height: 140.656px;
    overflow-x: hidden;
    overflow-y: scroll !important;
`;

const ListItem = styled.div`
    width: 100%;
    padding: 4px;
    margin: 1px 0;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    box-sizing: border-box;
`;

const FileInfo = styled.span`
    max-width: 100% !important;
    font-family: sans-serif;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(40, 40, 40, .5);
    text-align: left;
    box-sizing: border-box;
    margin: 3px 0;
`;

const ProgressBar = styled.div`
    width: ${props => props.progress > 96 ? '100%' : `${props.progress}%`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    padding: 6px 0;
    height: 6px;
    border: none;
    border-radius: 7px;
    color: #fff;
    font-size: 8px;
    background: rgba(168, 40, 253, 1);
    box-sizing: border-box;
    margin: 3px 0;
`;


export { FilesListContainer, ListItem, ProgressBar, FileInfo };