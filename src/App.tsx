import { useQuery } from 'react-query';
import { Pokemon, PokemonService } from './app/api';
import toast from 'react-hot-toast';
import './App.css'
import { useState } from 'react';

function App() {
  const [id, setId] = useState(1);
  const [isError, setIsError] = useState(false);

  const {data, isLoading} = useQuery('pokemon' + id,
  async (): Promise<Pokemon> => {
    return PokemonService.pokemonRead(id);
  }, {
    onSettled: (_, error) => {
        if (error) {
          setIsError(true);
          toast.error('Error oh no ahhhhhh :(');
        }
    }
  });

  const handleSelectedPokemon = (event: any): void => {
    setId(event?.target.value);
  }

  const options = [1, 2, 3, 4, 5, 799989];

  return (
      <div className="main-container">
        <div className="pokemon-of-the-day-container">
        <p>Pokemon of the day:</p>
        {isLoading && <p>Loading...</p>}
        {data && data.name}
        {isError && <p>They all ran away, sorry :(</p>}
        </div>
        <p>or</p>
        <p>Choose your pokemon!</p>
        <select onChange={handleSelectedPokemon}>
          {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
        </select>
      </div>
  )
}

export default App
