import React , {useState} from 'react';
import Content from './Content'
import Sidebar from './Sidebar'


function App() {
  const [who,setWho] = useState('Algemeen');
  const [notActive,setNotActive]= useState('Cardiologie')
  const whoIsActive = (x) => {
    setWho(x)
  }
  const notActivated =(x)=>{
    setNotActive(x)
  }
  return (
    <div className="App">
      <Sidebar whoIsActive = {whoIsActive} notActivated = {notActivated}/>
      <Content whosIsActive = {who} notActivated = {notActive}/>
    </div>
  );
}

export default App;
