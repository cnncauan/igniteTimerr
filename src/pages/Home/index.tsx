import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormConteiner,
  HomeContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormConteiner>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormConteiner>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play />
          Começar
        </button>
      </form>
    </HomeContainer>
  );
}
