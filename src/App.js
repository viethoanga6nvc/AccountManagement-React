import { Provider } from "react-redux";
import AccountPage from "./Page/AccountPage";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <AccountPage />
    </Provider>
  );
}

export default App;