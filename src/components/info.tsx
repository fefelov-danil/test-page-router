import {ICharacter} from "@/common/api";
import {Character} from "@/components/character";
import {Component1} from "@/components/component1";
import {Component2} from "@/components/component2";
import {Component3} from "@/components/component3";
import {Component4} from "@/components/component4";
import {Component5} from "@/components/component5";
import {Button} from "@/components/button/Button";
import Feedback from "@/components/feedback/Feedback";

interface Props {
  characters: ICharacter
}

export const Info = ({characters}: Props) => {

  return (
    <>
      <h2 className="text-center my-5">Количество пресонажей: {characters.info.count}</h2>
      <div className="grid grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {characters.results.map((character, i) => <Character key={i} character={character} />)}
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Button>Test</Button>
      <Feedback title="Title" info="text" />
    </>
  )
}