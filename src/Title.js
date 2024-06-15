import './App.css';
import React, { useState } from 'react';

function Title() {
  const [showTitle, setShowTitle] = useState(true);

  return (
    <>
      {showTitle && <h1 className='header1'>Routing Lab Activity</h1>}
    </>
  );
}

export default Title;
