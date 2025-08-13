import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/fifa.png'

const Jogos: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    system: 'PS5',
    title: 'FIFA 23'
  },
  {
    id: 4,
    category: 'Esportes',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    system: 'PS5',
    title: 'FIFA 23'
  }
]

const Categories = () => (
  <>
    <ProductsList games={Jogos} title="RPG" background="gray" />
    <ProductsList games={Jogos} title="Ação" background="black" />
    <ProductsList games={Jogos} title="Aventura" background="gray" />
    <ProductsList games={Jogos} title="FPS" background="black" />
  </>
)

export default Categories
