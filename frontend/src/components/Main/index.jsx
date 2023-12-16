// Main.js

import React, { useState } from 'react';
import styles from './styles.module.css';
import Dashboard from '../Dashboard'; // Import your dashboard content component
import Upload from '../Upload';
import Signup from '../Signup';
import Dataview from '../Dataview';
// Import your view data content component
 // Import your upload data content component

const Main = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const handleMenuClick = (page) => {
    setSelectedPage(page);
  };


  return (
    <>
      <div className={styles.main_container}>
        {/* Left Side: Dashboard Menu */}
        <div className={styles.left_side}>
          <h1>Dashboard</h1>
          <div>
            <ul>
              <li>
                <button className={styles.btn} onClick={() => handleMenuClick('dashboard')}>
                  Dashboard
                </button>
              </li>
              <li>
                <button className={styles.btn} onClick={() => handleMenuClick('upload')}>
                  Upload Data
                </button>
              </li>
			  <li>
                <button className={styles.btn} onClick={() => handleMenuClick('dataview')}>
                  View Data
                </button>
              </li>
			  <li>
                <button className={styles.btn} onClick={() => handleMenuClick('signup')}>
				Register new user
                </button>
              </li>
              <li>
                <button className={styles.btn} onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.right_side}>
          {selectedPage === 'dashboard' && <Dashboard />}
          {selectedPage === 'upload' && <Upload />}
		  {selectedPage === 'signup' && <Signup />}
		  {selectedPage === 'dataview' && <Dataview />}
          {/* Add other content components based on menu selections */}
        </div>
      </div>
    </>
  );
};

export default Main;
