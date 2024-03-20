import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ContentSide from './components/ContentSide';
import Chat from './components/Chat';

function App() {

  document.body.style.backgroundColor = "#131619"

  return (
    <div className="app flex flex-row">
      <div className="sidebar min-w-72 min-h-screen">
        <SideBar />
      </div>
      <div className="content-side w-full flex flex-col justify-between">
        <div className="user-options-bar">
        <ContentSide />
        </div>
        <div className="text-area">

        </div>
        <div className="chat-area text-white">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;
