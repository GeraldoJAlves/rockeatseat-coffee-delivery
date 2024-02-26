import { ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeActions,
  CoffeeCard,
  CoffeeInfo,
  CoffeeList,
  PriceContainer,
  ProductContainer,
  RemoveButton,
  Tags,
} from './styles'

import withMilk from '../../assets/coffees/with-milk.png'
import { QuantityEntry } from '../quantity-entry'

export function Products() {
  return (
    <ProductContainer>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        {Array(6)
          .fill('')
          .map((_, i) => (
            <CoffeeCard key={i}>
              <CoffeeInfo>
                <img src={withMilk} alt="" />
                <Tags>
                  <li>Tradicional</li>
                  <li>Com leite</li>
                </Tags>
                <h3>Café com Leite</h3>
                <span>
                  Meio a meio de expresso tradicional com leite vaporizado
                </span>
              </CoffeeInfo>
              <CoffeeActions>
                <PriceContainer>
                  <span>{'R$ '}</span>
                  <strong>19,90</strong>
                </PriceContainer>
                <QuantityEntry
                  currentValue={1}
                  increaseAction={() => {}}
                  decreaseAction={() => {}}
                />
                <RemoveButton>
                  <ShoppingCart width={22} weight="fill" />
                </RemoveButton>
              </CoffeeActions>
            </CoffeeCard>
          ))}
      </CoffeeList>
    </ProductContainer>
  )
}
