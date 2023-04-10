import { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap"

import { TodoContext } from "../context/TodoContext";


export const TodoItem = ({
    _id,
    text,
    isCompleted,
}) => {
    const {onTodoDeleteClick, onTodoClick} = useContext(TodoContext)
    return (
        <ListGroup.Item action onClick={() => onTodoClick(_id)} style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{textDecoration: isCompleted ? 'line-through':'none'}}>{text}</p>
            <Button variant="danger" onClick ={() => onTodoDeleteClick(_id)}> X </Button>
        </ListGroup.Item>
    );
};