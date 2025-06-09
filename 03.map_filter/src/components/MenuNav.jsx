import React from 'react'
import Menuitem from './Menuitem'

const MenuNav = ({onfilter}) => {

    const categorys = ['All', '커피', '디저트', '에이드', '베이커리'];

  return (
    <div>
        <ul className='menu-nav'>
            {categorys.map((cate, index) => (
                <li onClick={ () => onfilter(cate) }key={index}>
                    {cate}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default MenuNav