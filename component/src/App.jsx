
import './App.css';
import Card from './Card';
import Superheroes from './Superheroes';

function App() {
  return (
    <div className="App">
      <div className='Cards-list'>
      {
        Superheroes.map((superhero)=>
          <Card name={superhero.name} universe={superhero.universe} alterego={superhero.alterego} occupation={superhero.occupation} friends={superhero.friends} superpowers={superhero.superpowers} url={superhero.url} info={superhero.info}></Card>
        )
      }
        </div>
    </div>
  );
}

export default App;
