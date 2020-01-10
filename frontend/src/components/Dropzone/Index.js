import React from 'react';
import { DropZoneCircle, Input } from './Style';

import UploadIcon from '../../assets/UploadIcon.png';

const Dropzone = ({ handleChange }) => {
    return (
        <DropZoneCircle>
            <img src={UploadIcon} alt='Drop here to upload'/>
            <Input type='file' multiple onChange={handleChange} />
        </DropZoneCircle>
    );
}

export default Dropzone;
