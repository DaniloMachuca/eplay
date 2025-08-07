import Tag from '../Tag'
import * as S from './styles'

const Product = () => {
  return (
    <S.Card>
      <img src="https://placehold.co/222x250" />
      <S.Titulo>Nome do Jogo</S.Titulo>
      <Tag>Categoria</Tag>
      <Tag>Sistema</Tag>
      <S.Descricao>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit
        beatae et fuga. Vitae deserunt reprehenderit cumque natus, beatae
        possimus pariatur! Saepe ipsam est, unde exercitationem accusantium quis
        officiis blanditiis.
      </S.Descricao>
    </S.Card>
  )
}

export default Product
