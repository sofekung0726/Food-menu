import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Categories from './components/Categories'
import Menu from './components/Menu'

function App() {
  const [menuitem, setmenuitem] = useState(data);
  const allCategories = [
    'All',
    ...new Set(
      data.map((item) => {
        return item.category
      }
      )
    )
  ]
  // console.log(allCategories);
  const filterItems = (category) =>{
    if(category === 'All'){
      setmenuitem(data)
    }else{
      const newItems = data.filter((item)=> item.category === category);
      setmenuitem(newItems)
    } 
  }
  return (
    <div>
      <h2>Workshop 2 : FoodMenu</h2>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>
          <Categories allCategories={allCategories}  filterItems={filterItems}/>
          <Menu items={menuitem}/>
        </section>
      </main>
    </div>
  )
}

export default App
