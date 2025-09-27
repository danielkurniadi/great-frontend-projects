import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MarketingLandingPage } from "~/pages/landing/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketingLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
