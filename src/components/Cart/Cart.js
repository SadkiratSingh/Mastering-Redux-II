import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartVisible = useSelector((state) => state.ui.cartVisible);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    cartVisible && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map(({ id, quantity, price, name, totalPrice }) => (
            <CartItem
              key={id}
              item={{
                id: id,
                title: name,
                quantity: quantity,
                total: totalPrice,
                price: price,
              }}
            />
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;
