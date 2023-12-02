import {Character} from "@/components/character";
import {ICharacter} from "@/common/api";

interface Props {
  characters: ICharacter
}

export const Info = ({characters}: Props) => {

  return (
    <div className="p-10 bg-gray-600">
      <h1 className="text-2xl text-center mb-5">Page router.</h1>
      <h2 className="text-center my-5">Количество пресонажей: {characters.info.count}</h2>
      <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {characters.results.map((character, i) => <Character key={i} character={character} />)}
      </div>
    </div>
  )
}