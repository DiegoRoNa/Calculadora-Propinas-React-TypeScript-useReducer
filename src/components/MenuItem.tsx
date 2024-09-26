import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/orderReducer"

type MenuItemProps = {
    item: MenuItem // el type es el de MenyItem, ya que es un componente por obj de la BD
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}>
        <p>{item.name}</p>
        <p className=" font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
