import React from 'react';

import './notifications.styles.scss';

const personalizedNotification = (title, subtitle, styles) => { 
    return (
      <div className={`${styles}`}>
        <div>
          <span style={{ fontSize: 25 }}>{title}</span>
          <p style={{ fontSize: 15 }}>{subtitle} &#10003;</p>
        </div>
      </div>
    );
};

export default personalizedNotification;