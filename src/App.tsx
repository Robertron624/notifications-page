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
import { NotificationType } from "./typings";


const notifications: NotificationType[] = [
    {
        sender: "Mark Webber",
        notificationType: "reaction",
        senderProfile: avatarMarkWeber,
        timeAgo: "1m ago",
        actionReciever: "My first tournament today!"
    },
    {
        sender: "Angela Gray",
        notificationType: "follow",
        senderProfile: avatarAngelaGray,
        timeAgo: "5m ago",
    },
    {
        sender: "Jacob Thompson",
        notificationType: "joined",
        senderProfile: avatarJacobThompson,
        timeAgo: "1 day ago",
        actionReciever: "Chess Club"
    },
    {
        sender: "Rizky Hasanuddin",
        notificationType: "pm",
        senderProfile: avatarRizkiHasanuddin,
        timeAgo: "5 days ago",
        description: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`
    },
    {
        sender: "Kimberly Smith",
        notificationType: "comment",
        senderProfile: avatarKimberlySmith,
        timeAgo: "1 week ago",
        actionReciever: "picture"
    },
    {
        sender: "Nathan Peterson",
        notificationType: "reaction",
        senderProfile: avatarNathanPeterson,
        timeAgo: "2 weeks ago",
        actionReciever: "5 end-game strategies to increase your win-rate",
    },
    {
        sender: "Anna Kim",
        notificationType: "left",
        senderProfile: avatarAnnaKim,
        timeAgo: "2 weeks ago",
        actionReciever: "Chess Club"
    },
];

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="notifications-header">
                <h1>
                    Notifications <span>3</span>
                </h1>
                <p className="mark-button">Mark all as read</p>
            </div>
            <div className="notifications-body">
                {notifications.map((notification, i) => (
                    <Notification
                        key={i}
                        timeAgo={notification.timeAgo}
                        sender={notification.sender}
                        notificationType={notification.notificationType}
                        senderProfile={notification.senderProfile}
                        actionReciever={notification.actionReciever}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
