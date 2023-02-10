import { useNavigate } from "react-router-dom";
import { PetShopCardButton } from "./styles";

export type CardProps = {
  id: string;
  name: string;
  theme: string;
  color: string;
};

export function PetshopCard({ id, name, theme, color }: CardProps) {
  const navigate = useNavigate();

  return (
    <PetShopCardButton
      backgroundColor={color}
      onClick={() => {
        navigate("/petshop/" + id);
      }}
    >
      <h2>{name}</h2>
      <h3>{theme}</h3>
    </PetShopCardButton>
  );
}