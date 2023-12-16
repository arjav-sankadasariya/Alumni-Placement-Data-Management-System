// ViewDataPage.js

import React, { useState, useEffect } from 'react';

const Dataview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/viewdata") // Assuming your backend API endpoint for fetching data is '/view'
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>View Data</h2>
      <table>
        <thead>
          <tr>
            {/* Add table header based on your data structure */}
            <th>Course</th>
            <th>Specialization</th>
            <th>RollNumber</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {/* Map over the data and display each row */}
              <td>{item.Course}</td>
              <td>{item.Specialization}</td>
              <td>{item.RollNumber}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dataview;
