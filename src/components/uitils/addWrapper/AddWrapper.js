import React, { useState } from "react";
import { addvText } from "../../../assest/img/dataFolder/AddText";
import AdNotification from "../AdNotifivation/AdNotification";

const AddWrapper = ({ children }) => {
  const [notificationMsg, setNotificatioMsg] = useState("");
  const [statusType, setStatusType] = useState("success");
  const [position, setPosition] = useState("top-center");
  const adText = [...addvText];
  let positionArray = [
    "top-center",
    "top-left",
    "top-right",
    "center-right",
    "center",
    "center-left",
    "bottom-left",
  ];
  let statusArray = ["success", "warrning", "error"];
  React.useEffect(() => {
    let x = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * (positionArray.length - 1));
      let randomNumberForText = Math.floor(Math.random() * (adText.length - 1));
      let randomNumberForStatus = Math.floor(
        Math.random() * (statusArray.length - 1)
      );
      console.log(adText[randomNumberForText]);
      setNotificatioMsg(adText[randomNumberForText]);
      setPosition(positionArray[randomNumber]);
      setStatusType(statusArray[randomNumberForStatus]);
    }, 10000);
    return () => clearInterval(x);
  }, []);
  return (
    <>
      {notificationMsg && (
        <AdNotification
          position={position}
          statusText={notificationMsg}
          status={statusType}
          setNotificatioMsg={setNotificatioMsg}
          setStatusType={setStatusType}
        ></AdNotification>
      )}
      <>{children}</>
    </>
  );
};

export default AddWrapper;
