import { Todo } from "../types/Todo";

type Props = {
    todo: Todo[]
}


const Todo = ({ todo }: Props) => {
    return(
        <div>
            <h1>Lista de tarefas</h1>
            <ul>
                {todo.map((todoItem, index)=> (
                    <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;

export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoList: Todo[] = await response.json();

    return{
        props: {
            todo: todoList
        }
    }
}