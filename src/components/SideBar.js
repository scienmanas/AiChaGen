import React from 'react'
import AccountProject from './AccountProject'
import General from './General'
import Projects from './Projects'
import AccountDownSettings from './AccountDownSettings'

export default function SideBar() {
    return (
        <div className='side-bar min-h-screen bg-[#131619] flex flex-col justify-between py-4 pl-2 pr-6 '>
            <div className="top-items flex flex-col gap-7">
                <div className="project-setting">
                    <AccountProject />
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
                    < AccountDownSettings />
                </div>
            </div>
        </div>
    )
}
