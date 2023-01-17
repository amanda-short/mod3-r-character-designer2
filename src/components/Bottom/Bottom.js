import React from 'react';

import './Bottom.css';

export default function Bottom(props) {
  const classes = `${props.bottom}`;
  return (
    <div className={classes}>
      <img
        style={{ height: '155px' }}
        src={`${process.env.PUBLIC_URL}/assets/pants-${props.bottom}.png`}
      />
    </div>
  );
}
