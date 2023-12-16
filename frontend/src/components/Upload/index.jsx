import React, { useState } from 'react';
import './UploadPage.css';
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const notifySuccess = () => toast('File Uploaded Successfully!');

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [year, setYear] = useState('');

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const uploadFile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('excelFile', file);
    formData.append('year', year);

    try {
      // Adjust the endpoint based on your server configuration
    //   const url = "http://localhost:3000/api/users";
	// 		const { data: res } = await axios.post(url, data);
      await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
        // notifySuccess();
        // window.location.reload();
        alert("File Uploaded Successfully!");
        window.location.reload();

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    
    <div className="upload-page">
      <form className="upload-form" onSubmit={uploadFile}>
        <label htmlFor="year">Enter Batch Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)} 
        />

        <label htmlFor="file">Upload Excel File:</label>
        <input type="file" id="file" name="file" accept=".xls,.xlsx" onChange={onFileChange} />
        
        <button type="submit" className="upload-button">
        Upload
        </button>
        {/* <Toaster /> */}
      </form>
    </div>
  );
};

export default UploadPage;
