import { BrowserRouter, Route, Routes } from "react-router-dom"

import { BlogCardShowCase } from "~/pages/showcases/blog-card"
import { ProfileCardShowcase } from "~/pages/showcases/profile-card"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/showcase/blog-card"
          element={<BlogCardShowCase/>}
        />
        <Route
          path="/showcase/profile-card"
          element={<ProfileCardShowcase/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
