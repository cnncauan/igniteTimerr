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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minuteAmout: zod
    .number()
    .min(5, "o cliclo precisa ser de no minimo de 5 minutos")
    .max(60, "o ciclo precisa de ser no máximo 60min"),
});

// interface NewCycleFormData {
//   task: string;
//   minuteAmount: number;
// }

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minuteAmout: 0,
      task: "",
    },
  });

  function handleCreateNewSubmit(data: NewCycleFormData) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewSubmit)} action="">
        <FormConteiner>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
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
            //max={90}
            {...register("minuteAmout", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormConteiner>

        <CountdownContainer>
          <span>θ</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
