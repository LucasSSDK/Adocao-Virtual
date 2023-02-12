import { Component, ReactNode, useState } from 'react';
import { ClickedButton } from '../../pages/Petshop/styles';

export type CardProps = {
  nome: string;
  descricao: string;
  isSelected: boolean;
  // selectCard: (data: string) => void;
};

export function Card({ nome, descricao,  }: CardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);


  return (
    <ClickedButton isSelect={isActive}onClick = {() => {
      setIsActive(!isActive);
    }}
      type="button"
    >
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </ClickedButton>
  );
}
