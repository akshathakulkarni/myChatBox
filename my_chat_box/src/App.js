import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    //projectID, userName and userSecret values used from chatengine.io - admin user
    <ChatEngine 
    height="100vh"
    projectID="5bb130f8-c18a-430a-bcc8-3260644715a0"
    userName="jsbuddies"
    userSecret="12345"
    renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} />  } />
  );
};

export default App;