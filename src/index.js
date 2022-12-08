import React from 'react'
import ReactDOM from 'react-dom'
import App from './base/App'
import './form/form_style.css'
import StudentApp from './student/StudentApp'

import FormApp from './form/FormApp'

ReactDOM.render(
  <React.StrictMode>
    <StudentApp />
  </React.StrictMode>,
  document.getElementById('root')
);
