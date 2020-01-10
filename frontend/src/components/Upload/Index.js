import React, { useState } from 'react';
import Dropzone from '../Dropzone/Index';
import FilesList from '../FilesList/Index';
import Axios from 'axios';

import { UploadContainer, EmptyList, UploadButton } from './Style';

const Upload = () => {

    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);

    const [logo, setLogo] = useState();
    const [bg, setBg] = useState();

    // const [logo, setLogo] = useState()

    const storeLogo = () => {
        const logo = document.querySelector('#logo').files[0];
        setLogo(logo);
    }

    const storeBg = () => {
        const bg = document.querySelector('#bg').files[0];
        setBg(bg);
    }

    const uploadFiles = async () => {
        try {
            const req = new XMLHttpRequest();
            const formData = new FormData();

            const office = {
                username: 'Office 001',
                password: '123',
                name: 'Office 001',
            }

            req.upload.addEventListener('progress', (e) => {

                const percentage = (e.loaded / e.total) * 100;

                if (percentage < 100) {
                    setProgress(percentage);
                }
                else {
                    setProgress(0);
                }
            });

            formData.append('logo_image', logo);
            formData.append('background_image', bg);
            formData.append('username', office.username);
            formData.append('password', office.password);
            formData.append('name', office.name);
            formData.append('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWQiOnsidXNlcm5hbWUiOiJoaXRhbG8iLCJpZCI6ImFkbWluaXN0cmF0b3IxIiwidHlwZSI6ImFkbWluaXN0cmF0b3IifSwiaWF0IjoxNTc4NjcwNjkzfQ.AgO3r7ihFXrpAbocsMiAiArBPF152_ESWtPYJ70VhFM');

            req.open('POST', 'http://localhost:3333/upload');
            await req.send(formData);
        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <React.Fragment>
            <UploadContainer>
                <Dropzone id='logo' handleChange={() => storeLogo()} label='LOGO' />
                <Dropzone id='bg' handleChange={() => storeBg()} label='BG' />
                <UploadButton onClick={uploadFiles}>
                    Upload
                </UploadButton>
            </UploadContainer>
        </React.Fragment>
    )
}

export default Upload;