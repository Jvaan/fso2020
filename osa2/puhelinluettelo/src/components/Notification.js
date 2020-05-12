import React from 'react'

const Notification = ({notification}) => {
    if (notification === null || notification.message === null || notification.className === null) {
        return null
    }

    console.log(notification)
    
    return (
        <div className={notification.className}>
            {notification.message}
        </div>
    )
}

export default Notification