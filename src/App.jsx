import { Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Layout from "./components/Layout";
import Property from "./routes/Property";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" />} />

      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="property" element={<Property />} />
      </Route>
    </Routes>
  );
}

export default App;
