import Image from 'next/image'
import React from 'react'
import Cx from 'classnames'
interface MenuItemProps{
    Title : string;
    Icon : string;
    Active ? : boolean;
}
export default function MenuItems ( props : MenuItemProps ) {
    const{Title,Icon,Active} = props;
    const ClassName = Cx({
        'item' : true,
        'mb-30' : true,
        'active' : Active
    })
        return (
                <div className={ClassName}>
                    <div className="me-3">
                    <Image src={`/icon/${Icon}.svg`} width={25} height={25} className="icon"/>
                    </div>
                        <p className="item-title m-0">
                            <a href="/sign-up" className="text-lg text-decoration-none">{Title}</a>
                        </p>
                </div>
        )
}
