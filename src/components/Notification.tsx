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
    postPhotoUrl,
    read,
}: NotificationType) => {

    return (
        <div className={`notification-container ${read ? 'read': 'not-read'}`}>
            <img
                className="sender-profile"
                src={senderProfile}
                alt="sender profile pic"
            />
            <div className="notification-main--info">
                <div className={`notification-text ${postPhotoUrl ? "justify-between": ""}`}>
                    <p className={`post-description`}>
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
                    <span className={`not-read--icon ${read ? 'hidden' : 'visssible'}`}></span>
                    {postPhotoUrl && (<img className="post-photo" src={postPhotoUrl}/>)}
                </div>
                <span className="notification-timestamp">{timeAgo}</span>
                {description && (
                    <div className="description-container">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notification;
