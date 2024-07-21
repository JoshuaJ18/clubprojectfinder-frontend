import { BrowserRouter as Router, Route, Routes, IndexRouteObject } from 'react-router-dom';
import HomePage from './HomePage';

function PageRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default PageRouter;