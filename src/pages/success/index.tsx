import {
  Address,
  Container,
  EstimatedTime,
  OrderDetails,
  OrderDetailsWrapper,
  PaymentMethod,
  TitleContainer,
} from './styles'

import delivery from '../../assets/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <Container>
      <div>
        <TitleContainer>
          <h1>Uhuu! Pedido Confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <OrderDetailsWrapper>
          <OrderDetails>
            <Address>
              <MapPin size={16} weight="fill" />
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </Address>
            <EstimatedTime>
              <Timer size={16} weight="fill" />
              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </EstimatedTime>
            <PaymentMethod>
              <CurrencyDollar size={16} />
              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de crédio</strong>
                </span>
              </div>
            </PaymentMethod>
          </OrderDetails>
        </OrderDetailsWrapper>
      </div>
      <img src={delivery} alt="" />
    </Container>
  )
}
