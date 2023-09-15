import React, { useState, useEffect } from "react";
import "./NotificationsPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const NotificationsPanel = ({ onClose }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Notification 1",
      link: null,
      visited: false,
    },
    {
      id: 2,
      message: "Notification 2",
      link: null,
      visited: false,
    },
    {
      id: 3,
      message:
        "Visit Medium for the latest blogs fsif sfjsof sljfsl osjfo fsfg dgas sa gs asfasa asfsg agasdgsfsafadsgddagaagsafs",
      link: "https://medium.com",
      visited: false,
    },
  ]);

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const visitNotificationLink = (link, id) => {
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab/window
      markAsVisited(id);
    }
  };

  const markAsVisited = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, visited: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  const [panelOpen, setPanelOpen] = useState(true);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
    onClose();
  };

  const panelStyle = {
    transform: panelOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  useEffect(() => {
    // Open the panel when the component first appears
    setPanelOpen(true);
  }, []);

  return (
    <div className="notifications-panel" style={panelStyle}>
      <div className="panel-header">
        <h2>Notifications</h2>
        <button
          className="close-button"
          onClick={togglePanel}
          style={{ color: "white", fontSize: "24px" }}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="no-notifications">No notifications</div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${
                notification.visited ? "visited" : ""
              }`}
              onClick={() =>
                visitNotificationLink(notification.link, notification.id)
              }
            >
              <div className="msg">{notification.message}</div>
              <div className="two-buttons">
                <button
                  className="mark-as-read"
                  onClick={() =>
                    visitNotificationLink(notification.link, notification.id)
                  }
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  className="delete-notificaton"
                  onClick={() => removeNotification(notification.id)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {notifications.length > 0 && (
        <div className="panel-footer">
          <button
            className="delete-all-button"
            onClick={deleteAllNotifications}
          >
            Delete All
          </button>
          <button className="mark-as-read-all-button">Marks as Read All</button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
