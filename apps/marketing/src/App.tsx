import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ProfileCardShowcase } from "~/pages/showcases/profile-card"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/showcase/profile-card"
          element={<ProfileCardShowcase/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
