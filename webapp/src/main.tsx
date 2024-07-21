import React from 'react'
import ReactDOM from 'react-dom/client'
import PageRouter from './routes/PageRouter.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
)
