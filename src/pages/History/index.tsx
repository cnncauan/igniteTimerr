import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>tarefa</td>
              <td>28 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
