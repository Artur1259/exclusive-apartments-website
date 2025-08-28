import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t } = useTranslation();
  const agency = t("loggedIn.agency", { returnObjects: true });

  return (
    <div className="w-full">
      <nav className="w-full bg-gray-300 flex items-center p-3 gap-5">
        <span className="cursor-pointer text-3xl">{agency[0].name}</span>
        <div className="relative">
          <ul className="flex gap-5">
            <li className="cursor-pointer group ">
              Գործակալներ
              <div className="hidden group-hover:block p-3 absolute -bottom-12 translate-y-[50%] left-0 bg-blue-500">
                <ul className="flex flex-col gap-2">
                  <li>Ավելացնել Գործակալ</li>
                  <li>Գործակալների Ցանկ</li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer group">
              Անշարժ Գույք
              <div className="hidden group-hover:block p-3 absolute -bottom-22 translate-y-[50%] left-8 translate-x-1/2 bg-blue-500">
                <ul className="flex flex-col gap-2 ">
                  <li>Նոր</li>
                  <li>Ավելացնել Անշարժ Գույք</li>
                  <li>Անշարժ Գույքի Ցանկ</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default AdminPage;
