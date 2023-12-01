import {ICharacter} from "@/common/api";

interface Props {
  character: ICharacter
}

export const Character = ({character}: Props) => {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.created}</p>
      <img src={character.image} alt=""/>
    </div>
  )
}