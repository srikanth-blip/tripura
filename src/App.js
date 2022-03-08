import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import classes from "./globalStyles.css";
import Header from './modules/layout/components/Header/Header';
import Home from './modules/layout/components/Home/Home';
import Cart from './modules/orders/components/Cart/Cart';
import Footer from './modules/layout/components/Footer/Footer';
import Notification from './modules/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';
import { fetchItems, sendItem } from './store/add-cart-slice';

function App() {
  const dispatch = useDispatch();
const cart = useSelector((state) => state.addItemToCart);
let notification = useSelector(state => state.addItemToCart.notification);


useEffect(() => {
dispatch(fetchItems())
}, [dispatch])

// useEffect(() =>{
// dispatch(fetchCartData())
// }, [dispatch])

// useEffect(()=>{
// if(cart.changed){
//   dispatch(sendCartData(cart));
// }
// }, [cart, dispatch])

useEffect(() => {

 if(cart.changed){
  dispatch(sendItem());
}

}, [cart, dispatch]);


  return (
    <Fragment>
     { notification && <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />}
      <Header />
      <Home />
      {/* <Cart /> */}
     <Footer />
    </Fragment>
  );
}

export default App;
