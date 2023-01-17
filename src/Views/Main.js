import React, { useState } from 'react';
import './Main.css';

import Select from '../components/Select/Select.js';
import Head from '../components/Head/Head.js';

// add background //

export default function Main() {
  const [head, setHead] = useState('dog');

  return (
    <main className="main">
      <div>
        <Select {...{ head, setHead }} />
        <Head {...{ head }} />
      </div>
    </main>
  );
}
