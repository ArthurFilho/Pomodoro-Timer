import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount"></label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  )
}
