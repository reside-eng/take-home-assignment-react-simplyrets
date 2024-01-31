import PropertyListings from 'pages/property-listings/property-listings';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PropertyListings />} />
        <Route
          path="/property-listings"
          element={
            <React.Suspense fallback={<>...</>}>
              <PropertyListings />
            </React.Suspense>
          }
        />
        {/* Possible Route to show more details about property */}
        {/* <Route
          path="/property-details"
          element={
            <React.Suspense fallback={<>...</>}>
              <>Property Details...</>
            </React.Suspense>
          }
        /> */}

        <Route path="*" element={<>{`Does Not exist`}</>} />
      </Routes>
    </div>
  );
}

export default App;
