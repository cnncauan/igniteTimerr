import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormConteiner,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";
import { useState } from "react";

export function Home() {
  const [task, setTaks] = useState("");

  return (
    <HomeContainer>
      <form action="">
        <FormConteiner>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            name="task"
            placeholder="Dê um nome para o seu projeto"
            onChange={(e) => setTaks(e.target.value)}
          />

          <datalist id="task-suggestions">
            <option value="Projeto escola" />
            <option value="Projeto faculdade" />
            <option value="Projeto rotina" />
            <option value="Estudo diário" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={90}
          />

          <span>minutos.</span>
        </FormConteiner>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={!task} type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
