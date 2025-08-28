import { Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Layout from "./components/Layout";
import Property from "./routes/Property";
import PropertyDetailPage from "./components/property/PropertyDetailPage";
import RegistrationPage from "./components/RegistrationPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" />} />

      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="property" element={<Property />} />
        <Route path="property/:id" element={<PropertyDetailPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>
        <Route path="/:lang/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
