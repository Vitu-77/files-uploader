import React from 'react';

import { FilesListContainer, ListItem, ProgressBar, FileInfo } from './Style';

const FilesList = ({ filesArray, progress }) => {
    return (
        <FilesListContainer>
            {filesArray.map((file) => {
                return (
                    <ListItem key={file.name}>
                        <FileInfo>{file.name}</FileInfo>
                        <ProgressBar progress={progress}>{Math.round(progress)}%</ProgressBar>
                    </ListItem>
                );
            })}
        </FilesListContainer>
    );
}

export default FilesList;