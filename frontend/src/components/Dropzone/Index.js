import React from 'react';
import { DropZoneCircle, Input } from './Style';

import UploadIcon from '../../assets/UploadIcon.png';

const Dropzone = ({ handleChange, id, label }) => {
    return (
        <DropZoneCircle>
            {/* <img src={UploadIcon} alt='Drop here to upload'/> */}
            <h1 style={{ fontFamily: 'sans-serif', color: 'rgba(168, 40, 253, .5)' }} >{label}</h1>
            <Input type='file' multiple onChange={handleChange} id={id} />
        </DropZoneCircle>
    );
}

export default Dropzone;
