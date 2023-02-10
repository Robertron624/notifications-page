import React from 'react'
import "./notification.css"

type Notification = {
    sender: string
    notificationType: "pm" | "follow" | "joined" | "reaction" | "comment" | "left"
    timeAgo: string
    description? : string
    senderProfile?: string
}

const Notification = ({sender, notificationType, timeAgo, description, senderProfile}:Notification) => {

  return (
    <div className='notification-contaier'>
        <img className='sender-profile' src={senderProfile} alt="sender profile pic" />
        <div className='notification-main--info'>
            <div className=''>
                <p className="sender-name">{sender}</p>
                <p>{notificationType}</p>
            </div>
            <span className='notification-timestamp'>{timeAgo}</span>
        </div>
    </div>
  )
}

export default Notification