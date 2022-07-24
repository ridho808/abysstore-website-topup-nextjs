import React from 'react'
import Category from './Category'
import TableRow from './tableRow'

export default function OverViewContent() {
  return (
    <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category Nominal={12000930} Icon="ic-desktop">
                                Game <br /> Desktop
                            </Category>
                            <Category Nominal={8445000} Icon="Mobile">
                                Game <br /> Mobile
                            </Category>
                            <Category Nominal={5000000} Icon="ic-desktop">
                                Other <br /> Categories
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow Photo='overview-1' title='Mobile Lagend : Bambwang' Item={200} Price={3000000} Status='Pending' Categori='Mobile'/>
                                <TableRow Photo='overview-2' title='Call of Duty : Modern War' Item={550} Price={7400000} Status='Success' Categori='Desktop'/>
                                <TableRow Photo='overview-3' title='Clans of Clans' Item={150} Price={1200000} Status='Failed' Categori='Mobile'/>
                                <TableRow Photo='overview-4' title='League of legend' Item={350} Price={2200000} Status='Pending' Categori='Desktop'/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
  )
}
