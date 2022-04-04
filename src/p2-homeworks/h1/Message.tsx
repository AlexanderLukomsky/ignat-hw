import React from 'react'
type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className='message'>
            <div className='message__column_img'>
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className='message__column_text'>
                <div>
                    <div className='message__title'>
                        {props.name}
                    </div>
                    <div className='message__text'>
                        {props.message}
                    </div>
                </div>
                <span>
                    {props.time}
                </span>

            </div>
        </div>
    )
}

export default Message
