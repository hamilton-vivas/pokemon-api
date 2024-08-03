import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px;
  background-color: ${({ theme }) => theme.background};
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  cursor: pointer;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonName = styled.h1`
  text-transform: capitalize;
  font-size: 20px;
`;

const LoadMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

async function getPokemons(limit) {
  const promises = [];
  for (let i = 1; i <= limit; i++) {
    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
  }
  return Promise.all(promises);
}

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        async function fetchData() {
            const data = await getPokemons(limit)
            setPokemons(data)
        }
        
        fetchData()
    }, [limit]);

    const loadMorePokemons = () => {
      setLimit(prevLimit => prevLimit + 10);
    };

    if (pokemons.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <section>
          <PokemonContainer>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id}>
                  <DetailsLink to={`/pokemon/${pokemon.id}`}>
                    <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <PokemonName>{pokemon.name}</PokemonName>
                  </DetailsLink>
                </PokemonCard>
            ))}
          </PokemonContainer>
          <LoadMoreButton onClick={() => loadMorePokemons()}>Carregar mais</LoadMoreButton>
      </section>
    )
}

export default PokemonsList
