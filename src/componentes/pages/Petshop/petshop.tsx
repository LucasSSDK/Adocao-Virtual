import { useState } from 'react';
import { Card } from '../../atoms/card/card';
import { Select } from '../../atoms/select/select';
import { ClickedButton } from './styles';


export function Petshop() {
  const [selectedPet, setPet] = useState<string>('pets');
  const [selectedModule, setSelectModule] = useState<string>();

  const option = ['Pets 1', 'Pets 2', 'Pets 3'];
  console.log(selectedPet);

  const module = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  const PetsCategoria1 = ['Papagaio', 'Periquito', 'Tucano', 'Calopsita'];

  const PetsCategoria2 = ['Porquinho da india', 'Esquilo', 'Preá', 'Ramister'];

  console.log(selectedPet);

  function resultSelect(value: string) {
    setSelectModule(value);

    console.log(selectedModule);
  }

  const petsList = [
    {
      tipo: 'cachorro',
      nome: 'Buck',
      sexo: 'Macho',
      descricao:
        'Cachorro de medio porte da raça Pit Bull, na cor branco com manchas marrons',
    },
    {
      tipo: 'Passaro',
      nome: 'Pit',
      sexo: 'Femea',
      descricao:
        'Passaro de pequeno porte da raça papagaio, na cor verde, amarelo e pequenos detalhes vermelhos ',
    },
    {
      tipo: 'Gato',
      nome: 'Fifi',
      sexo: 'Femea',
      descricao:
        'Gata de pequeno porte da raça siamese, na cor branca com cinza e marron',
    },
  ];

  const [selectedPets, setSelectedPets] = useState<string[]>([]);

  function selectPet(value: string) {
    if (selectedPets.includes(value)) {
      setSelectedPets((state) => state.filter((petName) => petName != value));
    } else {
      setSelectedPets([...selectedPets, value]);
    }
  }
  console.log(selectedPets);
  return (
    <div>
      <h2>Petshop</h2>
      <Select options={option} selectedOption={setPet} />
      <Select options={module} selectedOption={resultSelect} />

      <form>
        {petsList.map((pet) => {
          return (
            <Card
              descricao={pet.descricao}
              nome={pet.nome}
              isSelected={selectedPets.includes(pet.nome)}
              selectCard={selectPet}
              key={pet.nome}
            />
          );
        })}
      </form>
      {selectedModule == 'Categoria 1' && (
        <>
          {PetsCategoria1.map((pets) => {
            return <h2>{pets}</h2>;
          })}
        </>
      )}
      {selectedModule == 'Categoria 2' && (
        <>
          {PetsCategoria2.map((pets) => {
            return <h2>{pets}</h2>;
          })}
        </>
      )}
    </div>
  );
}
