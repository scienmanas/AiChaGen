import React from 'react'
import { IoMicOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import sendMessage from '../assets/icons/send_message.png';

export default function Chat() {
    return (
        <div className='chat-section flex flex-row items-center bg-[#0D0F10] m-3 rounded-2xl p-3'>
            <div className="mic-button">
                <IoMicOutline />
            </div>
            <div className="text-area-to-chat">
                <textarea
                    id="chat-input"
                    class="h-24 w-full resize-none px-3 py-2 bg-[#0D0F10]"
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
