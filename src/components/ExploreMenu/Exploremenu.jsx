import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Prajwal Special Dishes</h1>
        <p className='explore-menu-text'>Vegetarian options typically include dishes made from fruits, vegetables, grains, 
            and dairy products, while non-vegetarian options include meat,
             poultry, and seafood. Both types of cuisine can be found in
              various styles, from casual cafe fare to more elaborate dishes, 
              depending on the cafe's specialization. </p>
              <div className='explore-menu-list'>
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>

                        </div>
                    
                    )
                })}


              </div>
              <hr />
    </div>
  )
}

export default Exploremenu