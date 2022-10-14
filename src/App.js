import "./App.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./toolkit/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>...loading</div>}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
