import "@screens/resume/index.scss";
import { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


export default () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isDocumentVisible, setIsDocumentVisible] = useState(false);
    function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
        setNumPages(numPages);
      setTimeout(() => {
        setIsDocumentVisible(true);
      }, 500)
    }
    return (
    <div className="resume">
        <div className="resume__heading">

        </div>
        <div className={`resume__document ${isDocumentVisible ? 'resume__document--visible' : ''}`}>
            <Document file="pdf/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    </div>)
}