import React, { useState } from "react";
import { Row, Tag, Checkbox } from "antd";
import { actions, useStore } from "../../provider";

interface TodoProps {
  id: string;
  name: string;
  priority: any;
  show: boolean;
}

interface priorityColors {
  [key: string]: string;
}

const priorityColorMapping: priorityColors = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority,show }: TodoProps) {
  const [, dispatch] = useStore();
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(actions.toggleTodo( id ));
  };

  return (
    <Row
      hidden={!show}
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  );
}
