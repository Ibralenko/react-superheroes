
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <div className="card">
        {data.map((hero) => {
          return (
            <div >
              <h1 className="card__title">{hero.name}</h1>
              <h3 className="card__info">Вселенная: {hero.universe}</h3>
              <h3 className="card__info">Альтер эго: {hero.alterego}</h3>
              <h3 className="card__info">Род деятельности: {hero.occupation}</h3>
              <h3 className="card__info">Друзья: {hero.friends}</h3>
              <h3 className="card__info">Суперсила: {hero.superpowers}</h3>
              <h3 className="card__info">Информация: {hero.info}</h3>
              <image className="card__image"  src={hero.url} alt={hero.name}></image>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
