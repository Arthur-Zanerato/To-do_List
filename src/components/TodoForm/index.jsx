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
    <List style={{margin: "2rem 0"}}>
      <SubTitle>Criar Tarefa</SubTitle>
      <Form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
        <Button type="submit">Criar Tarefa</Button>
        </div>
      </Form>
    </List>
  );
}
export default TodoForm;
