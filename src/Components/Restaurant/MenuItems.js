import React from 'react'
import { Card } from 'react-bootstrap'

import MenuItemInstance from './MenuItemInstance'

export default function MenuItems({ restaurant, handleAddToCart }) {
  return (
    <Card className="mt-auto">
      {restaurant.menu.map((currentMenuItem, key) => {
        return <MenuItemInstance currentMenuItem={currentMenuItem} handleAddToCart={handleAddToCart} key={key}/>
      })}
    </Card>
  )
}