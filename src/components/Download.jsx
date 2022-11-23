import React from "react";
import { FaDownload } from "react-icons/fa";
import { saveAs } from 'file-saver';

export default function Download() {

    const handleDownload = () => { 
        const canvas = document.querySelector("canvas"); 
        canvas.toBlob(function (blob) { 
            saveAs(blob, "avatar.png"); 
        });
    };
    
  return (

    <div>
        <button
            className="
            absolute top-0 right-0 m-4 
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        >
            <FaDownload />
        </button>
    </div>
  );
}
