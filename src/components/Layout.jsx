import { useTranslation } from "../i18n/useTranslation.js";
import { Outlet, useParams } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const { lang } = useParams();
  const { t } = useTranslation(lang);
  
  return (
    <div>
      <Navbar t={t} lang={lang} />
      <main>
        <Outlet context={{ t, lang }} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
};

export default Layout;
