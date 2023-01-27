import { useState } from 'react';
import { Select } from '../../atoms/select/select';

export function Petshop() {
  const [selectedpet, setPet] = useState<string>('pets');

  const options = ['Pets 1', 'Pets 2', 'Pets 3'];
  console.log(selectedpet);

  const module = ["Categoria 1", "Categoria 2", "Categoria 3"];

  function resultSelect(value: string) {
    console.log(value);
  }

  return (
    <div>
      <h2>Petshop</h2>
      <Select options={options} selectedOption={setPet} />
      <Select options={module} selectedOption={resultSelect} />
    </div>
  );
}
