import React from 'react'

const Notification = ({notification}) => {
    console.log(notification)

    if (notification === null || notification.message === null || notification.className === null) {
        return null
    }
    
    return (
        <div className={notification.className}>
            {notification.message}
        </div>
    )
}

export default Notification