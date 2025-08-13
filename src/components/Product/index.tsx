import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  background: 'gray' | 'black'
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  background
}: Props) => {
  return (
    <S.Card background={background}>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Descricao>{description}</S.Descricao>
    </S.Card>
  )
}

export default Product
