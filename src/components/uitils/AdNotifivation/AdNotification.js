import React, { useState } from "react";
import notificationStyle from "./Notification.module.css";

const notificationType = (type) => {
  let notificationObject = {
    success: "success",
    error: "error",
    warrning: "warrning",
  };

  return notificationObject[type];
};

/**
 *
 * @param {string} position where notification show in screen  *'top-center'*, *top-left*,*top-right*,*center-right*,*center*,*center-left*,*bottom-left*,*bottom-center*,*bottom-right* `by default it's top-center `
 *  @param {string} status notification Type it must be  **success** or **warrning** or **error** `by default it's  success`
 * @param {string} statusText notification message ` by default it's Welcome`
 * @returns {void}
 */
const AdNotification = ({
  position = "top-center",
  status = "success",
  statusText = "Welcome",
  setNotificatioMsg,
  setStatusType,
}) => {
  // console.log('commoing');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const openNotifcation = () => {
    setIsNotificationOpen(true);
    setTimeout(() => {
      setIsNotificationOpen(false);
      setNotificatioMsg("");
      setStatusType("success");
    }, 5000);
  };

  React.useEffect(() => {
    openNotifcation();
  }, []);
  const textContainer = {
    display: "flex",
    fontWeight: 700,
    fontSize: "2rem",
    width: "100%",
    textAlign: "center",
  };
  return (
    <>
      {isNotificationOpen && (
        <a href="https://www.highrevenuegate.com/i365467kq?key=b7099188327fe544d3f9fb857505232c">
          <div className={notificationStyle.container} position={position}>
            <header
              className={`${notificationStyle["notification"]} ${
                notificationStyle[notificationType(status)]
              }`}
            >
              <div
                className={notificationStyle.celebration}
                style={textContainer}
              >
                {statusText}
              </div>
            </header>
          </div>
        </a>
      )}
    </>
  );
};

export default AdNotification;
