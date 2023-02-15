# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC) by me [Robertron624](https://github.com/Robertron624).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   Distinguish between "unread" and "read" notifications
-   Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

Desktop



Mobile



### Links

-   Solution URL: [Solution URL here](https://github.com/Robertron624/notifications-page)
-   Live Site URL: [Live site URL here](https://leafy-fudge-90b3ab.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   Flexbox
-   Mobile-first workflow
-   [Vite](https://vitejs.dev/) - Web build tool
-   [React](https://reactjs.org/) - JS library
-   [react-router](https://reactrouter.com/en/main) - React framework

### What I learned

With this project I learned some new conditional styling (for handling read/unread notifications), I recap a little bit of
TypeScript types and handling arrays as state.

The logic I implemented for showing/hiding the not read icon and photos and descriptions attached to the notification:

```js
<div className="notification-main--info">
    <div
        className={`notification-text ${postPhotoUrl ? "justify-between" : ""}`}
    >
        <p className={`post-description`}>
            <span className="sender-name">{sender}</span>
            {`${notificationMessages[notificationType]}`} {notificationType == "joined" || notificationType == "left" ? <span className="group">{actionReciever}</span> : notificationType == "reaction" ? <span className="post">{actionReciever}</span> : actionReciever}
        </p>
        <span
            className={`not-read--icon ${read ? "hidden" : "visssible"}`}
        ></span>
        {postPhotoUrl && <img className="post-photo" src={postPhotoUrl} />}
    </div>
    <span className="notification-timestamp">{timeAgo}</span>
    {description && (
        <div className="description-container">
            <p>{description}</p>
        </div>
    )}
</div>
```

### Continued development

I want to keep improving my react state handling with more complex state, from now on I think I want to use as more as possible Typescript sin its provide useful error hinting I wouldn't have only with Javascript.

## Author

-   Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
-   Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
-   Twitter - [@robertdowny](https://www.twitter.com/robertdowny)
