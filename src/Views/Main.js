import React, { useState } from 'react';
import './Main.css';

import Select from '../components/Select/Select.js';
import Head from '../components/Head/Head.js';
import Middle from '../components/Middle/Middle.js';
import Bottom from '../components/Bottom/Bottom.js';

// add background //

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('white');

  return (
    <main className="main">
      <div>
        <Select {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
        <Head {...{ head }} />
        <Middle {...{ middle }} />
        <Bottom {...{ bottom }} />
      </div>
    </main>
  );
}
