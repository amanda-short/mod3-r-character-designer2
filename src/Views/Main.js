import React, { useState } from 'react';
import './Main.css';

import Select from '../components/Select/Select.js';
import Head from '../components/Head/Head.js';
import Middle from '../components/Middle/Middle.js';

// add background //

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');

  return (
    <main className="main">
      <div>
        <Select {...{ head, setHead, middle, setMiddle }} />
        <Head {...{ head }} />
        <Middle {...{ middle }} />
      </div>
    </main>
  );
}
