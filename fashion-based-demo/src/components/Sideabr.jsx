import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";


const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext)

    const { cart, clearCart, total } = useContext(CartContext)

    return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className="flex items-cneter justify-between py-6 border-b">
            <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
            <div onClick={handleClose} className="cursor pointer w-8 h-8 flex justify-center items-center">
                <span className="cursor pointer text-2xl"> ⃯</span>
            </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} />
            })}
        </div>
        {/* total price */}
        <div className="flex flex-col gap-y-3 py-4 mt-4">
            <div className="flex w-full justify-between items-center">
                <div className="uppercase font-semibold">
                    <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
                </div>
                <div onClick={clearCart} className="cursor-pointe py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                    <span>🗑️</span>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar