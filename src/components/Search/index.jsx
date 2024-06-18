import { Form } from "../TodoForm/style";
import { List, Prg, SubTitle } from "../../defaultStyle/defaultComponents";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <List>
        <Prg>Pesquisar tarefa:</Prg>
        <Form>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite para pesquisar..."
          />
        </Form>
      </List>
    </>
  );
};

export default Search;
