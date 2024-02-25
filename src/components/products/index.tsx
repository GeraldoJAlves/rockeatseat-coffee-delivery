import {
  CoffeeActions,
  CoffeeCard,
  CoffeeInfo,
  CoffeeList,
  ProductContainer,
  QuantityItems,
  Tags,
} from './styles'

import withMilk from '../../assets/coffees/with-milk.png'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

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
                <div>
                  <span>{'R$ '}</span>
                  <strong>9,90</strong>
                </div>
                <QuantityItems>
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                </QuantityItems>
                <button>
                  <ShoppingCart width={22} weight="fill" />
                </button>
              </CoffeeActions>
            </CoffeeCard>
          ))}
      </CoffeeList>
    </ProductContainer>
  )
}
