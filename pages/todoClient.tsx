import { useEffect, useState } from "react";
import { Todo } from "../types/Todo";

const Todo = () => {

    const [todolist, setTodoList] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const list: Todo[] = await response.json();
        setTodoList(list);
        setLoading(false);
    }
    return(
        <div>
            <h1>Lista de tarefas</h1>
            {loading && <div>Carregando...</div>}
            <ul>
                {todolist.map((todoItem, index)=> (
                    <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;

