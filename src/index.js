import React from 'react'
import ReactDOM from 'react-dom'
import App from './base/App'
import './form/form_style.css'
import StudentApp from './student/StudentApp'

import FormApp from './form/FormApp'
import LifeCycleApp from './life_cycle/LifeCycleApp'

ReactDOM.render(
  <React.StrictMode>
    <LifeCycleApp />
  </React.StrictMode>,
  document.getElementById('root')
);
