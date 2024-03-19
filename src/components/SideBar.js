import React from 'react'
import Team from './Team'
import General from './General'
import Projects from './Projects'
import Account from './Account'

export default function SideBar() {
    return (
        <div className='side-bar min-h-screen bg-[#131619] flex flex-col justify-between py-4 pl-2 pr-7'>
            <div className="top-items flex flex-col gap-8">
                <div className="project-setting">
                    <Team />
                </div>
                <div className="general">
                    < General />
                </div>
                <div className="project">
                    < Projects />
                </div>

            </div>
            <div className="down-items">
                <div className="account-settings">
                    < Account />
                </div>
            </div>
        </div>
    )
}
