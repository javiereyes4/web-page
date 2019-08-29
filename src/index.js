import React from 'react';
import { render } from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import AppRoutes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';


render(<AppRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
