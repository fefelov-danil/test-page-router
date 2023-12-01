import {ICharacter} from "@/common/api";
import {Character} from "@/components/character";

interface Props {
  characters: ICharacter
}

export const Info = ({characters}: Props) => {

  return (
    <>
      <h1 className="text-2xl text-center my-5">Page router. Несколько клиентских компонент с инпутом.</h1>
      <h2 className="text-center my-5">Количество пресонажей: {characters.info.count}</h2>
      <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {characters.results.map((character, i) => <Character key={i} character={character} />)}
      </div>
    </>
  )
}