import React, { useState } from 'react';
import './Main.css';

import Select from '../components/Select/Select.js';
import Head from '../components/Head/Head.js';
import Middle from '../components/Middle/Middle.js';
import Bottom from '../components/Bottom/Bottom.js';
import Catchphrase from '../components/Catchphrase/Catchphrase.js';

// add background //

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('white');
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <main className="main">
      <div>
        <Select {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
        <Head {...{ head }} />
        <Middle {...{ middle }} />
        <Bottom {...{ bottom }} />
        <Catchphrase {...{ catchphrase, catchphrases, setCatchphrase, setCatchphrases }} />
      </div>
    </main>
  );
}
