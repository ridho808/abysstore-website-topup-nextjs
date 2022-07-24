import React from 'react'
import MenuItems from './MenuItems'
import Profile from './Profile'
import SideBarFooter from './SidebarFooter'

export default function SideBar() {
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile/>
                <div className="menus">
                    <MenuItems Title='Overview' Icon='Menu-OverView' Active={true}/>
                    <MenuItems Title='Transaction' Icon='Menu-transaction'/>
                    <MenuItems Title='Messages' Icon='Menu-Message'/>
                    <MenuItems Title='Card' Icon='Menu-card'/>
                    <MenuItems Title='Rewards' Icon='Menu-Reward'/>
                    <MenuItems Title='Settings' Icon='Menu-Setting'/>
                    <MenuItems Title='Log Out' Icon='Menu-LogOut'/>
                </div>
                <SideBarFooter/>
            </div>
        </section>
  )
}
