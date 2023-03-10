import { SelectProps } from "./types";
import { api } from "../../../utils/api/api";
import { Petshop } from "../../pages/Petshop/petshop"; 



export function Select(props: SelectProps) {
  return (
    <select
    defaultValue={"default"}
     
      onChange={(e) => props.selectedOption(e.currentTarget.value)}>
        <option value="default" disabled> Seecione uma opção </option>
  
      {props.options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
}