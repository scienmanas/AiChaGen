import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ContentSide from './components/ContentSide';

function App() {
  return (
    <div className="app flex flex-row">
      <div className="sidebar min-w-72">
        <SideBar />
      </div>
      <div className="content-bar w-full">
        <ContentSide />
      </div>
    </div>
  );
}

export default App;
