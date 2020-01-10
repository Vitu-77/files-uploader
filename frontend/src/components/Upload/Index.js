import React, { useState } from 'react';
import Dropzone from '../Dropzone/Index';
import FilesList from '../FilesList/Index';
import Axios from 'axios';

import { UploadContainer, EmptyList, UploadButton } from './Style';

const Upload = () => {

    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);

    const storeFiles = () => {

        const filesList = document.querySelector('input').files;
        const filesArray = Array.from(filesList);

        setFiles((files) => [...files, ...filesArray]);
    }

    const uploadFiles = async (fileType) => {

        const promises = [];

        if (fileType === 1) {
            files.forEach((file) => {
                promises.push(sendPodcast(file));
            });
        }
        else if (fileType === 2) {
            files.forEach((file) => {
                promises.push(sendUser(file));
            });
        }

        try {
            await Promise.all(promises);
        } catch (error) {
            console.log(error);
        }
    }

    const sendPodcast = (podcast) => {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const podcastName = 'Podcast 5';

            req.upload.addEventListener('progress', (e) => {
                const percentage = (e.loaded / e.total) * 100;
                setProgress(percentage);
            });

            const formData = new FormData();
            formData.append("podcast", podcast, podcastName);

            req.open("post", "http://localhost:3333/podcasts/new");
            req.send(formData);
        });
    }

    //? NOVO USER
    const sendUser = (userAvatar) => {
        console.log('novo user');
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();

            const user = {
                username: 'john123',
                password: '111',
                name: 'João das Neves',
                acess_level: 1,
            }

            req.upload.addEventListener('progress', (e) => {
                const percentage = (e.loaded / e.total) * 100;
                setProgress(percentage);
            });

            const formData = new FormData();

            formData.append("userAvatar", userAvatar);
            formData.append("username", user.username);
            formData.append("password", user.password);
            formData.append("name", user.name);
            formData.append("acess_level", user.acess_level);

            req.open("post", "http://localhost:3333/users/new");
            req.send(formData);
        });
    }

    return (
        <React.Fragment>
            <UploadContainer>
                <Dropzone handleChange={storeFiles} />
                {files.length > 0 ? <FilesList filesArray={files} progress={progress} /> : <EmptyList>Empty</EmptyList>}
                <UploadButton
                    onClick={() => uploadFiles(1)}
                    disabled={!files.length}
                    style={!files.length ? { opacity: '.5', pointerEvents: 'none' } : null}
                >Upload</UploadButton>
            </UploadContainer>
        </React.Fragment>
    )
}

export default Upload;