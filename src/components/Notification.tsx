import React, { useState } from "react";
import "./notification.css";
import { NotificationType } from "../typings";

const notificationMessages = {
    pm: "sent you a private message",
    follow: "followed you",
    joined: "has joined your group ",
    reaction: "reacted to your recent post ",
    comment: "commented on your ",
    left: "left the group ",
};

const Notification = ({
    sender,
    notificationType,
    timeAgo,
    description,
    senderProfile,
    actionReciever,
}: NotificationType) => {

    const [isNotificationRead, setIsNotificationRead] = useState(false)

    return (
        <div className="notification-contaier">
            <img
                className="sender-profile"
                src={senderProfile}
                alt="sender profile pic"
            />
            <div className="notification-main--info">
                <div className="">
                    <p className={`post-description ${isNotificationRead ? 'read': 'not-read'}`}>
                        <span className="sender-name">{sender}</span>
                        {`${notificationMessages[notificationType]}`}{" "}
                        {notificationType == "joined" ||
                        notificationType == "left" ? (
                            <span className="group">{actionReciever}</span>
                        ) : notificationType == "reaction" ? (
                            <span className="post">{actionReciever}</span>
                        ) : (
                            actionReciever
                        )}
                    </p>
                </div>
                <span className="notification-timestamp">{timeAgo}</span>
            </div>
        </div>
    );
};

export default Notification;
