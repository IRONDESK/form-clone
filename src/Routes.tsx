import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import App from "./pages/App";
import Create from "./pages/Create";

function AppRoutes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRoutes;
