import { Beehive } from './components/Beehive/Beehive'
import './App.scss';

const initialState = [
  { health: 100 },
  { health: 100 },
  { health: 100 },
  { health: 100 },
  { health: 100 },
];

const App = () => {
  
  return (
    <div className="bee-app">
     <Beehive beehive={initialState} />
    </div>
  );
}

export default App;
