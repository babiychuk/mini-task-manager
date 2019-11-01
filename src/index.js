import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Block from './components/block';
import './App.css'
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
ReactDOM.render(<Block/>, root);

serviceWorker.unregister();
