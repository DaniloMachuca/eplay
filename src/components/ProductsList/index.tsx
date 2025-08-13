import Game from '../../models/Game'
import Product from '../Product'
import * as S from './styles'
import Section from '../Section'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Section title={title} background={background}>
      <S.List>
        {games.map((game) => {
          return (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
              background={background}
            />
          )
        })}
      </S.List>
    </Section>
  )
}

export default ProductsList
