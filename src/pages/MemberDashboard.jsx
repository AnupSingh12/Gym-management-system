import React, { useState } from "react";
import ViewNotifications from "../components/Member/ViewNotifications";
import Cart from "../components/Member/Cart";

function MemberDashboard() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Member Dashboard</h1>
      <ViewNotifications />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default MemberDashboard;