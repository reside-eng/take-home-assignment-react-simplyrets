import PropertyListingsPage from 'pages/property-listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  axios.defaults.headers.common['Authorization'] = `Basic ${btoa(
    'simplyrets:simplyrets',
  )}`;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/property-listings"
          element={<PropertyListingsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
