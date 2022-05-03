import logo from './logo.svg';
import './App.css';
import { Profile } from './components/profile/Profile';
import store from "./redux/index"
import { Form } from './components/Form/form';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { user } = useSelector((state) => state.user);
 
  return (
    <div className="App">
 {user.set ? <Profile /> : 
    <Form />
  }

    </div>
  );
}

export default App;
