import { useState } from 'react';
import { Select } from '../../atoms/select/select';


export function Petshop() {
  const [selectedPet, setPet] = useState<string>('pets');
  const [selectedModule, setSelectModule] = useState<string>();

  const options = ['Pets 1', 'Pets 2', 'Pets 3'];
  console.log(selectedPet);

  const module = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

  
  const PetsCategoria1 = ['Papagaio', 'Periquito', 'Tucano', 'Calopsita'];
  
  const PetsCategoria2 = ['Porquinho da india', 'Esquilo', 'Preá', 'Ramister'];
  
  console.log(selectedPet);
  
  function resultSelect(value: string) {
    setSelectModule(value);

    console.log(selectedModule);
  }

  const  petsList = [{

    tipo: "cachorro",
    nome: "Buck",
    sexo: "Macho",
    descrição: "Cachorro de medio porte da raça Pit Bull, na cor branco com manchas marrons"
  },
  {
    tipo: "Passaro",
    nome: "Pit",
    sexo: "Femea",
    descrição: "Passaro de pequeno porte da raça papagaio, na cor verde, amarelo e pequenos detalhes vermelhos "
  },
  {
    tipo: "Gato",
    nome: "Fifi",
    sexo: "Femea",
    descrição: "Gata de pequeno porte da raça siamese, na cor branca com cinza e marron"

  }
];

function selectPet(value: string) {
  console.log(value);

}

  return (
    <div>
      <h2>Petshop</h2>
      <Select options={options} selectedOption={setPet} />
      <Select options={module} selectedOption={resultSelect} />
      
    <form>
        {petsList.map((pets) => {
          return(

          <div key={pets.nome}>
          <label htmlFor='pets.nome'>{pets.nome}</label>
          <button type='button' onClick={(e)=> {selectPet(e.currentTarget.value)} }>
            <h2>{pets.tipo}</h2>
            <h4>{pets.descrição}</h4>
      
          </button>
    </div>
          );
        })}
      
    </form>
    {selectedModule == "Categoria 1" && (
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
