import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientId = '530433419031-88uoscl18ukg7dc8vp7va05khbgcuaot.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
       <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
