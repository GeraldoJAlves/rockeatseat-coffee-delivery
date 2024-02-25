import { Products } from '../../components/products'
import {
  IntroContainer,
  InfoContainer,
  TitleContainer,
  Items,
  ShoppingCartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
  Illustration,
} from './styles'
import coffeeIllustration from '../../assets/coffee-illustration.png'

export function Home() {
  return (
    <>
      <IntroContainer>
        <InfoContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <Items>
            <li>
              <ShoppingCartIcon size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </li>
            <li>
              <PackageIcon size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <TimerIcon size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <CoffeeIcon size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </li>
          </Items>
        </InfoContainer>
        <Illustration src={coffeeIllustration} />
      </IntroContainer>
      <Products />
    </>
  )
}
