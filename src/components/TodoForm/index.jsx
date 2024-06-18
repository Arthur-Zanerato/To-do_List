import { useState } from "react";
import { Button, List, SubTitle } from "../../defaultStyle/defaultComponents";
import { Form } from "./style";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <List>
      <SubTitle>Criar Tarefa</SubTitle>
      <Form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Digite o título..."
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <div>
        <Button type="submit">Criar Tarefa</Button>
        </div>
      </Form>
    </List>
  );
}
export default TodoForm;
