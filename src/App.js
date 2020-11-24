import React , {useState} from 'react';
import Content from './Content'
import Sidebar from './Sidebar'


function App() {
  const [who,setWho] = useState('Algemeen');
  const whoIsActive = (x) => {
    setWho(x)
  }
  return (
    <div className="App">
      <Sidebar whoIsActive = {whoIsActive}/>
      <Content whosIsActive = {who}/>
    </div>
  );
}

export default App;
