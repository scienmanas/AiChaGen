import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ContentSide from './components/ContentSide';

function App() {
  return (
    <div className="app flex flex-row">
      <div className="sidebar w-fit">
        <SideBar />
      </div>
      <div className="content-bar">
        <ContentSide />
      </div>
    </div>
  );
}

export default App;
