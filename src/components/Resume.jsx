import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [file, setFile] = useState('/assets/BensonPXavier_Resume.pdf');
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);


    return (
        <Container fixed>
            <h2 className='text-center text-white text-5xl p-6 font-mono'>RESUME</h2>
            <Document file={file} className="flex justify-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
        </Container>
    );
};

export default Resume;
