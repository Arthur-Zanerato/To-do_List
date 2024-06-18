import { List, Prg, Select, Button } from "../../defaultStyle/defaultComponents"
import { FilterSelect } from "./style"

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <List>
        <FilterSelect>
            <div>
            <Prg>Status:</Prg>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value={"All"}>Todas</option>
                <option value={"Completed"}>Completas</option>
                <option value={"Incomplete"}>Incompletas</option>
            </Select>
            </div>
            <div>
                <Prg>Ordem alfabética:</Prg>
                <Button onClick={() => setSort("Asc")}>Asc</Button>
                <Button onClick={() => setSort("Desc")}>Desc</Button>
            </div>
        </FilterSelect>
    </List>
  )
}

export default Filter
