import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import SearchMovies from "./components/SearchMovies";

function App() {
   return (
      <Provider store={store}>
         <div className="container">
            <SearchMovies />
         </div>
      </Provider>
   );
}

export default App;
