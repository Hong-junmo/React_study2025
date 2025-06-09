import React, { useState } from 'react'
import MenuNav from './MenuNav'
import Menuitem from './Menuitem'
import MenuData from '../assets/data/coffee_menu.json'

const   MenuBoard = () => {

  //메뉴버튼 클릭 시, 조건에 맞는 메뉴만 출력되는 기능구현 해보기
  //ex) '커피' 클릭 -> 아메리카노만 출력
  //    '디저트' 클릭 -> 마카롱만 출력
  //    '전체' 클릭 -> 모든 메뉴 출력
  
  const [menus, setMenus] = useState(MenuData);

  const button = (category) => {
    if (category === "All"){
      setMenus(MenuData);
    } else {
      const menu = MenuData.filter(item => item.category === category);
      setMenus(menu);
    }
  }
  
  const menuFilter = MenuData.map((menu) => {
    return {
      name : menu.name,
      img : menu.img,
      price : menu.price,
      category : menu.category
    }
  })

  return (
    <div className='menu-board'>
        <h1>메뉴판</h1>
        <MenuNav onfilter={button}/>
        <div className='menu-list'>
            {menus.map((menu, index) => (
                <Menuitem key={index} info={menu}/>
            ))}
        </div>
    </div>
  )
}

export default MenuBoard