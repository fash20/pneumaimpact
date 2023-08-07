import React, { FC } from 'react'
import { useLocation } from 'react-router-dom';

interface PDFReaderProps {
    pdfUrl: string;
    title: string;
  }

const PDFReader:FC = () => {
    const location = useLocation()
  const pdfUrl = (location.state as { pdfUrl: string })?.pdfUrl;
//   const pdfUrl = "";
  const title = (location.state as { title: string })?.title;
    
  return (
    <div style={{ width: '100%', height: '800px' }}>
    <iframe
      src={pdfUrl}
      title={title}
      width="100%"
      height="100%"
      style={{ border: 'none' }}
    ></iframe>
  </div>
  )
}

export default PDFReader