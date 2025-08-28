import { useState } from "react";
import { useOutletContext } from "react-router";
import { IoIosWarning } from "react-icons/io";
import { FaPlus, FaTimes } from "react-icons/fa";

const RegistrationPage = () => {
  const { t } = useOutletContext();
  const [phoneFields, setPhoneFields] = useState([
    { phone: "", messengers: [] },
  ]);
  const arrayOfIcons = {
    viber: "https://cdn-icons-png.flaticon.com/128/2111/2111705.png",
    telegram: "https://cdn-icons-png.flaticon.com/128/2111/2111644.png",
    whatsapp: "https://cdn-icons-png.flaticon.com/128/3536/3536445.png",
    messenger: "https://cdn-icons-png.flaticon.com/128/3670/3670042.png",
  };

  const handleAddPhone = () => {
    setPhoneFields([...phoneFields, { phone: "", messengers: [] }]);
  };
  const handleRemovePhone = (index) => {
    const newPhoneFields = phoneFields.filter((_, i) => i !== index);
    setPhoneFields(newPhoneFields);
  };

  const handlePhoneChange = (index, value) => {
    const newPhoneFields = [...phoneFields];
    newPhoneFields[index].phone = value;
    setPhoneFields(newPhoneFields);
  };

  const handleMessengerToggle = (phoneIndex, messenger) => {
    const newPhoneFields = [...phoneFields];
    const messengerIndex =
      newPhoneFields[phoneIndex].messengers.indexOf(messenger);

    if (messengerIndex === -1) {
      newPhoneFields[phoneIndex].messengers.push(messenger);
    } else {
      newPhoneFields[phoneIndex].messengers.splice(messengerIndex, 1);
    }

    setPhoneFields(newPhoneFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());


    try {
      const response = fetch("/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
       const data = response.json();

      if (response.ok) {
        console.log("The registration was successful");
      }
    } catch (error) {
      console.log("The registration failed", error);
    }
  };

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[820px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto bg-gray-100">
      <div className="w-full border-b-[2px] border-b-gray-300 py-5">
        <h1 className="text-3xl font-bold ">{t("registration.title")}</h1>
      </div>
      <div className="flex gap-2 items-center p-3">
        <IoIosWarning className="text-yellow-400 " size={25} />
        <p>{t("registration.warning")}</p>
      </div>
      <p className="flex items-center gap-2 border-b-[1px] border-gray-300 px-3">
        <span className="text-red-600 text-2xl ">*</span>
        {t("registration.fieldsRequired")}
      </p>

      <form action="submit" className="p-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="text"
            placeholder={t("registration.companyName")}
            className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
          />
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="name"
              placeholder={t("registration.name")}
              className="w-full py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
            />
            <input
              type="text"
              name="lastName"
              className="w-full py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
              placeholder={t("registration.lastName")}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t("registration.email")}
            className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder={t("registration.address")}
            className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
          />
          <input
            type="text"
            name="inn"
            placeholder={t("registration.inn")}
            className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
          />

          {/* Phone fields section */}
          {phoneFields.map((field, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="tel"
                name="phone"
                placeholder={t("registration.phone")}
                className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500 flex-grow"
                value={field.phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />

              {index === phoneFields.length - 1 ? (
                <button
                  type="button"
                  className="p-[13px] bg-blue-100 text-blue-700 cursor-pointer"
                  onClick={handleAddPhone}
                >
                  <FaPlus size={20} />
                </button>
              ) : (
                <button
                  type="button"
                  className="p-[13px] bg-red-100 text-red-700 cursor-pointer"
                  onClick={() => handleRemovePhone(index)}
                >
                  <FaTimes size={20} />
                </button>
              )}

              <div className="flex gap-2">
                {Object.entries(arrayOfIcons).map(([key, icon]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 p-3 bg-white border border-gray-200"
                  >
                    <input
                      type="checkbox"
                      name="messengers"
                      className="w-4 h-4 rounded accent-blue-500"
                      checked={field.messengers.includes(key)}
                      onChange={() => handleMessengerToggle(index, key)}
                    />
                    <img src={icon} className="w-[25px]" alt={key} />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <input
            type="password"
            name="password"
            className="py-3 px-2 border-[1px] border-gray-200 bg-white focus:outline-blue-500"
            placeholder={t("registration.password")}
          />

          <button className="bg-blue-500 hover:bg-blue-600 w-full py-3 text-white cursor-pointer">
            {t("registration.button")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
