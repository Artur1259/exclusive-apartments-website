import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const LoginPage = ({ t, setIsLoginOpen }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const agency = t("loggedIn.agency", { returnObjects: true });
  console.log(agency);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (email === agency[0].email && password === agency[0].password) {
        navigate("admin");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
      setIsLoginOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-[#0000004a] w-full h-full z-40">
      <div className="w-lg mx-auto bg-white rounded mt-16">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t">
          <p></p>
          <h1 className="text-2xl font-bold uppercase">{t("login.title")}</h1>
          <MdClose
            className=" cursor-pointer hover:text-blue-600"
            size={25}
            onClick={() => setIsLoginOpen(false)}
          />
        </div>
        <div>
          <form onSubmit={(e)=>handleClick(e)} className="flex flex-col gap-4 p-8">
            <input
              type="email"
              value={email}
              placeholder={t("login.email")}
              className="py-3 px-2 border-[1px] border-gray-200 focus:outline-4 focus:outline-sky-500 "
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder={t("login.password")}
              className="py-3 px-2 border-[1px] border-gray-200 focus:outline-4 focus:outline-sky-500 "
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <button className="hover:underline text-sky-500 cursor-pointer">
                {t("login.forgotPassword")}
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 cursor-pointer ${
                  loading ? "opacity-50" : ""
                }`}
              >
                {loading ? "Loading..." : t("login.button")}
              </button>
            </div>
          </form>
        </div>
        <div className="flex gap-2 justify-center p-4 border-t-[1px] border-t-gray-200">
          <p>{t("login.register")}</p>
          <Link
            to={`register`}
            className="text-sky-500 uppercase cursor-pointer hover:underline"
            onClick={() => setIsLoginOpen(false)}
          >
            {t("login.registerLink")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
