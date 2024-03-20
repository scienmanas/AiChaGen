import React from 'react'
import { useState } from 'react';
import { IoChatbubbleOutline } from "react-icons/io5";
import artificiumCvg from '../assets/icons/artificium_icon.png';
import { MdOutlineFolderOpen } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { RiShareLine } from "react-icons/ri";
import currentIndicator from '../assets/icons/current_indicator.png';

export default function ContentSide() {

  const project = [
    "Orbital Oddysey", "Marketting Campaign for a new TV series Launch"
  ]

  const shared = [

  ]

  const [currentTool, setCurrentTool] = useState("artificium")

  const handleTool = (tool) => {
    console.log(tool)
    setCurrentTool(tool)
  }

  return (
    <div className='m-3 rounded-xl  content-side bg-[#0D0F10] h-fit  pt-2 flex flex-col gap-7'>
      <div className="project-info p-4 flex flex-row items-center justify-between">
        <div className="info flex flex-col p-2">
          <div className="project-name h-[32px] text-white font-bold select-none">
            <h1>{project[0]}</h1>
          </div>
          <div className="project-details text-[#9B9C9E] h-[20px] select-none">
            <p>{project[1]}</p>
          </div>
        </div>
        <div className="share-actions text-white flex flex-row gap-7 items-center">
          <div className="people">

          </div>
          <div className="share-button text-[#686B6E] flex flex-row cursor-pointer items-center gap-2">
            <div className="svg">
              <RiShareLine />
            </div>
            <div className="text text-[20px] w-fit select-none ">
              Share
            </div>
          </div>
          <div className="edit-option bg-[#1e2125] py-[18px] px-[16px] rounded-lg cursor-pointer text-lg">
            <MdOutlineEdit />
          </div>
        </div>
      </div>
      <div className="action-type flex flex-row items-center gap-6 text-white">
        <div
          className="artificium flex flex-col items-center gap-4 group cursor-pointer "
          onClick={() => handleTool("artificium")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <img src={artificiumCvg} alt="" />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Artificium
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'artificium'?'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="chat flex flex-col items-center gap-4 group cursor-pointer"
          onClick={() => handleTool("chat")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <IoChatbubbleOutline />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Chat
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'chat'?'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="library flex flex-col items-center gap-4  group cursor-pointer"
          onClick={() => handleTool("library")}
        >
          <div className="text-content flex flex-row items-center gap-[9px]">
            <div className="svg">
              <MdOutlineFolderOpen />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Library
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'library'?'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
