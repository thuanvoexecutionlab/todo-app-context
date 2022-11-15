import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { actions, useStore } from "../../provider";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");
  const [state, dispatch] = useStore();
  const handleAddTodo = () => {
    dispatch(
      actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
        show: true,
      })
    );
    // Reset the input field
    setTodoName("");
  };
  
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {state.todos.map((todo: any) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            show={todo.show}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            onChange={(value) => setTodoPriority(value)}
            defaultValue={todoPriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddTodo} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
