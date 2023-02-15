import { useNavigate } from "react-router-dom";
import { UserCardButton } from "./styles";


export type CardProps = {
  id: string;
  name: string;
  theme: string;
  color: string;
};

export function userCard({ id, name, theme, color }: CardProps) {
  const navigate = useNavigate();

  return (
    <UserCardButton
      backgroundColor={color}
      onClick={() => {
        navigate("/user/" + id);
      }}
    >
      <h2>{name}</h2>
      <h3>{theme}</h3>
    </UserCardButton>
  );
}