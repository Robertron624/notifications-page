export type NotificationType = {
    sender: string;
    notificationType:
        | "pm"
        | "follow"
        | "joined"
        | "reaction"
        | "comment"
        | "left";
    timeAgo: string;
    description?: string;
    senderProfile?: string;
    actionReciever?: string;
    postPhotoUrl?: string;
    read: boolean;
};