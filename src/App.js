import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./page/ProductsPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import { useState } from "react";

// 1. Needed routes: All products page, product detail page and login page.
// 2. All products display on the products page.
// 2-1. There is navbar including logo, menu, search bar and login status on the top of website
// 3. User needs authentication to see product detail page.
// 4. To see product detail page, user navigate login page to login first.
// 5. When click the login button, navigate to login page.
// 6. When click the logout button, user has no authentication anymore.
// 7. If user is on product detail page, redirect to login page.
// 8. Indicate user's login status on the top nav section.
// 9. User can search the product on the search bar
// 10. If matched products exit, display the products, otherwise display message.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
