import React from 'react'
import MenuItems from './MenuItems'
import Profile from './Profile'
import SideBarFooter from './SidebarFooter'
interface SideBarProps{
  ActiveMenu : 'Overview' | 'Transaction' | 'Settings';
}
export default function SideBar(props : SideBarProps) {
  const {ActiveMenu} = props;
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile/>
                <div className="menus">
                    <MenuItems Title='Overview' Icon='Menu-OverView' Active={ActiveMenu === 'Overview'} href='/member'/>
                    <MenuItems Title='Transaction' Icon='Menu-transaction' Active={ActiveMenu === 'Transaction'} href='/member/transaction'/>
                    <MenuItems Title='Messages' Icon='Menu-Message' href='/member'/>
                    <MenuItems Title='Card' Icon='Menu-card' href='/member'/>
                    <MenuItems Title='Rewards' Icon='Menu-Reward' href='/member'/>
                    <MenuItems Title='Settings' Icon='Menu-Setting' Active={ActiveMenu === 'Settings'} href='/member/edit-profile'/>
                    <MenuItems Title='Log Out' Icon='Menu-LogOut' href='/member'/>
                </div>
                <SideBarFooter/>
            </div>
        </section>
  )
}
