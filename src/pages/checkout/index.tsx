import { Bank, CreditCard, Money, Trash } from '@phosphor-icons/react'
import {
  AddresesFields,
  CardTitle,
  CheckoutContainer,
  ConfirmButton,
  CurrencyDollarIcon,
  FormCard,
  ItemPrice,
  ItemTitle,
  MapPinLineIcon,
  OrderFields,
  OrderItem,
  OrderItemActions,
  OrderItemDetails,
  PaymentMethods,
  RemoveButton,
  TotalContainer,
} from './styles'

import { QuantityEntry } from '../../components/quantity-entry'
import latte from '../../assets/coffees/latte.png'
import espresso from '../../assets/coffees/espresso.png'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormCard>
        <h2>Complete seu pedido</h2>
        <AddresesFields>
          <CardTitle>
            <MapPinLineIcon />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o desejo onde deseja receber seu pedido</span>
            </div>
          </CardTitle>
          <input name="cep" placeholder="CEP" />
          <input name="street" placeholder="Rua" />
          <input name="number" placeholder="Número" />
          <input name="complement" placeholder="Complemento" />
          <input name="neighborhood" placeholder="Bairro" />
          <input name="city" placeholder="Cidade" />
          <input name="uf" placeholder="UF" />
        </AddresesFields>
        <div>
          <CardTitle>
            <CurrencyDollarIcon />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CardTitle>
          <PaymentMethods>
            <input
              type="radio"
              name="payment_method"
              id="credit_card"
              value="credit_card"
            />
            <label htmlFor="credit_card">
              <CreditCard size={16} />
              Cartão de Crédito
            </label>
            <input
              type="radio"
              name="payment_method"
              id="debit_card"
              value="debit_card"
            />
            <label htmlFor="debit_card">
              <Money size={16} />
              Cartão de Debito
            </label>
            <input
              type="radio"
              name="payment_method"
              id="money"
              value="money"
            />
            <label htmlFor="money">
              <Bank size={16} />
              Dinheiro
            </label>
          </PaymentMethods>
        </div>
      </FormCard>
      <FormCard>
        <h2>Cafés Selecionados</h2>
        <OrderFields>
          <OrderItem>
            <OrderItemDetails>
              <img src={latte} alt="" />
              <div>
                <ItemTitle>Latte</ItemTitle>
                <OrderItemActions>
                  <QuantityEntry
                    currentValue={1}
                    increaseAction={() => {}}
                    decreaseAction={() => {}}
                  />
                  <RemoveButton>
                    <Trash size={16} />
                    Remover
                  </RemoveButton>
                </OrderItemActions>
              </div>
            </OrderItemDetails>
            <ItemPrice>R$ 9,90</ItemPrice>
          </OrderItem>
          <OrderItem>
            <OrderItemDetails>
              <img src={espresso} alt="" />
              <div>
                <ItemTitle>Expresso Tradicional</ItemTitle>
                <OrderItemActions>
                  <QuantityEntry
                    currentValue={1}
                    increaseAction={() => {}}
                    decreaseAction={() => {}}
                  />
                  <RemoveButton>
                    <Trash size={16} />
                    Remover
                  </RemoveButton>
                </OrderItemActions>
              </div>
            </OrderItemDetails>
            <ItemPrice>R$ 9,90</ItemPrice>
          </OrderItem>
          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 18,80</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 2,90</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 21,70</span>
            </div>
          </TotalContainer>
          <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
        </OrderFields>
      </FormCard>
    </CheckoutContainer>
  )
}
