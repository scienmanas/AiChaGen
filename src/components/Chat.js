import React from 'react'
import { IoMicOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import sendMessage from '../assets/icons/send_message.png';

export default function Chat() {
    return (
        <div className='chat-section flex flex-row w-full'>
            <div className="mic-button">
                <IoMicOutline />
            </div>
            <div className="text-area-to-chat">
                <textarea
                    placeholder='Type a message...'
                    name=""
                    id=""
                    className=''
                />
            </div>
            <div className="attachment-area">
                <ImAttachment />
            </div>
            <div className="send-button">
                <img
                    className=''
                    src={sendMessage}
                    alt=""
                />
            </div>
        </div>
    )
}
