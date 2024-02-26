import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityEntryContainer } from './styles'

type QuantityEntryProps = {
  currentValue: number
  increaseAction: () => void
  decreaseAction: () => void
}

export function QuantityEntry({
  currentValue,
  increaseAction,
  decreaseAction,
}: QuantityEntryProps) {
  function increaseHandler() {
    increaseAction()
  }

  function decreaseHandler() {
    decreaseAction()
  }

  return (
    <QuantityEntryContainer>
      <button onClick={increaseHandler}>
        <Plus size={14} weight="bold" />
      </button>
      <span>{currentValue}</span>
      <button onClick={decreaseHandler}>
        <Minus size={14} weight="bold" />
      </button>
    </QuantityEntryContainer>
  )
}
