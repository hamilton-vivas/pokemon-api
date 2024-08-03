import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const BackLink = styled(Link)`
  align-self: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-size: 1.3rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin: 15px 0 10px;
`;

const ListNone = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 400px;
`;

const ListItem = styled.li`
  background-color: ${({ theme }) => theme.listItemBackground};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AbilityItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
`;

const AbilityName = styled.strong`
  font-weight: bold;
  margin-bottom: 5px;
`;

const MovesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

const MoveItem = styled.div`
  background-color: ${({ theme }) => theme.moveBackground};
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  width: 100px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [moves, setMoves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      const abilitiesDetails = await Promise.all(
        data.abilities.map(async (abilityInfo) => {
          const abilityResponse = await fetch(abilityInfo.ability.url);
          const abilityData = await abilityResponse.json();
          return {
            name: abilityData.name,
            description: abilityData.effect_entries.find((entry) => entry.language.name === 'en').short_effect,
          };
        })
      );

      setPokemon(data);
      setMoves(data.moves.map((moveInfo) => moveInfo.move.name));
      setAbilities(abilitiesDetails);
      setTypes(data.types.map((typeInfo) => typeInfo.type.name));
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <BackLink to="/">Voltar para a lista inicial</BackLink>
        <Title>{pokemon.name}</Title>
        <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />

        <SectionTitle>Tipo(s)</SectionTitle>
        <MovesContainer>
          {types.map((type, index) => (
            <MoveItem key={index}>{type}</MoveItem>
          ))}
        </MovesContainer>

        <SectionTitle>Movimentos</SectionTitle>
        <MovesContainer>
          {moves.map((move, index) => (
            <MoveItem key={index}>{move}</MoveItem>
          ))}
        </MovesContainer>

        <SectionTitle>Habilidades</SectionTitle>
        <ListNone>
          {abilities.map((ability, index) => (
            <AbilityItem key={index}>
              <AbilityName>{ability.name}</AbilityName>: {ability.description}
            </AbilityItem>
          ))}
        </ListNone>
      </Container>
    </div>
  );
};

export default PokemonDetail;
