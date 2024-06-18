import { Button, Category, Prg } from "../../defaultStyle/defaultComponents";
import { Content, Todo } from "./style";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <>
      <Todo style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <Content>
          <div>
            <Prg>{todo.text}</Prg>
            <Category>({todo.category})</Category>
          </div>
          <div>
            <Button
              style={{ backgroundColor: "#0c9762" }}
              onClick={() => completeTodo(todo.id)}
            >
              Completar
            </Button>
            <Button
              style={{ backgroundColor: "#dd2525" }}
              onClick={() => removeTodo(todo.id)}
            >
              X
            </Button>
          </div>
        </Content>
      </Todo>
    </>
  );
};

export default TodoItem;
