import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs"
import Home from "./pages/Home"
import NoPage from "./pages/Nopage"
import Layout from "./pages/Layout"
import Contact from "./pages/contact"
export default function App() {
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="blogs" element={<Blogs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
  </Route>
</Routes>
</BrowserRouter>);}