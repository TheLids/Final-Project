import './App.css';
import GameBoard from './board';

function App() 
{
  return (
    <div className="App" style={{border: '5px solid hotpink', width:'500px', height:'700px'}}>
      <GameBoard/>
    </div>
  );
}

export default App;
