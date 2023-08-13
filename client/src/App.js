import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountContextProvider from './context/AccountContext';
import myData from './Data';


function App() {

  const clientId = myData.client_id;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountContextProvider>
       <Messenger/>
      </AccountContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
