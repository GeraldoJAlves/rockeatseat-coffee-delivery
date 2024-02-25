import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityEntryContainer } from './styles'

export function QuantityEntry() {
  return (
    <QuantityEntryContainer>
      <button>
        <Plus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Minus size={14} weight="bold" />
      </button>
    </QuantityEntryContainer>
  )
}
