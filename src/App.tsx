import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Notification from "./components/Notification";
import "./App.css";
import avatarMarkWeber from "/avatar-mark-webber.webp";
import avatarAngelaGray from "/avatar-angela-gray.webp";
import avatarJacobThompson from "/avatar-jacob-thompson.webp";
import avatarRizkiHasanuddin from "/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "/avatar-nathan-peterson.webp";
import avatarAnnaKim from "/avatar-anna-kim.webp";
import chessImage from "/image-chess.webp"
import { NotificationType } from "./typings";

const notifications: NotificationType[] = [
    {
        sender: "Mark Webber",
        notificationType: "reaction",
        senderProfile: avatarMarkWeber,
        timeAgo: "1m ago",
        actionReciever: "My first tournament today!",
        read: false,
    },
    {
        sender: "Angela Gray",
        notificationType: "follow",
        senderProfile: avatarAngelaGray,
        timeAgo: "5m ago",
        read: false,
    },
    {
        sender: "Jacob Thompson",
        notificationType: "joined",
        senderProfile: avatarJacobThompson,
        timeAgo: "1 day ago",
        actionReciever: "Chess Club",
        read: false,
    },
    {
        sender: "Rizky Hasanuddin",
        notificationType: "pm",
        senderProfile: avatarRizkiHasanuddin,
        timeAgo: "5 days ago",
        description: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        read: true,
    },
    {
        sender: "Kimberly Smith",
        notificationType: "comment",
        senderProfile: avatarKimberlySmith,
        timeAgo: "1 week ago",
        actionReciever: "picture",
        postPhotoUrl: chessImage,
        read: true,
    },
    {
        sender: "Nathan Peterson",
        notificationType: "reaction",
        senderProfile: avatarNathanPeterson,
        timeAgo: "2 weeks ago",
        actionReciever: "5 end-game strategies to increase your win-rate",
        read: true,
    },
    {
        sender: "Anna Kim",
        notificationType: "left",
        senderProfile: avatarAnnaKim,
        timeAgo: "2 weeks ago",
        actionReciever: "Chess Club",
        read: true,
    },
];

function App() {
    const [unreadNotifications, setUnreadNotifications] = useState(
        notifications.filter((notification) => notification.read == false)
            .length
    );

    const [myNotifications, setMyNotifications] = useState(notifications);

    function markAllAsRead() {
        const newNotificationsArray = myNotifications.map((notification) => {
            return {
                ...notification,
                read: true,
            };
        });
        setMyNotifications(newNotificationsArray);
        setUnreadNotifications(0)
    }

    return (
        <div className="App">
            <div className="notifications-header" role={"app header"}>
                <h1>
                    Notifications <span>{unreadNotifications}</span>
                </h1>
                <p onClick={markAllAsRead} className="mark-button">
                    Mark all as read
                </p>
            </div>
            <div className="notifications-body">
                {myNotifications.map((notification, i) => (
                    <Notification
                        key={i}
                        timeAgo={notification.timeAgo}
                        sender={notification.sender}
                        notificationType={notification.notificationType}
                        senderProfile={notification.senderProfile}
                        actionReciever={notification.actionReciever}
                        read={notification.read}
                        description={notification.description}
                        postPhotoUrl={notification.postPhotoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
