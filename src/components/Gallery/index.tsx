import * as S from './styles'
import zelda from '../../assets/images/zelda.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'

import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import close from '../../assets/images/close.png'

import Section from '../Section'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/U2cqU6kt1QM?si=c3ph3ugdF39KQKbD'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item key={getMediaCover(media)}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt={media.type} />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="ícone de fechar" />
          </header>
          <img src={spiderman} />
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Gallery
