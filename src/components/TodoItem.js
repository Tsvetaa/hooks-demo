import { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap"

import { TodoContext } from "../context/TodoContext";


export const TodoItem = ({
    _id,
    text,
    isCompleted,
    
}) => {
    const {onTodoDeleteClick} = useContext(TodoContext)
    return (
        <ListGroup.Item action style={{display:'flex', justifyContent:'space-between'}}>
            {text}
            <Button variant="danger" onClick ={() => onTodoDeleteClick(_id)}> X </Button>
        </ListGroup.Item>
    );
};