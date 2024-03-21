import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

function CartWithItems() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, itemPrice) => {
    return quantity * itemPrice;
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + calcPrice(quantity, item.price),
    0
  );

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItems.length !== 0 ? (
            cartItems.map((item, id) => (
              <CartItem
                key={id}
                item={item}
                quantity={quantity}
                increase={increase}
                decrease={decrease}
                calcPrice={calcPrice}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalCartPrice.toFixed(2)}$</p>
        </div>
        <div className="sub-left">Go to Checkout</div>
      </div>
    </>
  );
}

export default CartWithItems;
