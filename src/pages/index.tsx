import {GetServerSideProps} from "next";
import {ICharacter, rickAndMortyApi} from "@/common/api";
import {Info} from "@/components/info";

interface Props {
  res: ICharacter
}

export default function Home({res}: Props) {
  return <Info characters={res} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await rickAndMortyApi.getCharacters().then(res => res.data)

  return {
    props: {
      res
    }
  }
}
