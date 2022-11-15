import { ADD_TODO, PRIORITY_FILTER, SEARCH_FILTER, STATUS_FILTER, TOGGLE_TODO } from "./constants";

export const initialState = {
  todos: [
    {
      id: "1",
      name: "Learn React",
      completed: false,
      priority: "High",
      show: true,
    },
    {
      id: "2",
      name: "Learn Redux",
      completed: false,
      priority: "Medium",
      show: true,
    },
    {
      id: "3",
      name: "Learn Redux-Toolkit",
      completed: false,
      priority: "Low",
      show: true,
    },
  ],
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case SEARCH_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
        todos: state.todos.map((todo) =>
          todo.name.toLowerCase().includes(action.payload.toLowerCase())
            ? { ...todo, show: true }
            : { ...todo, show: false }
        ),
      };
    case STATUS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
        todos: state.todos.map((todo) => {
          if (action.payload === "All") {
            return { ...todo, show: true };
          } else if (action.payload === "Completed") {
            return todo.completed ? { ...todo, show: true } : { ...todo, show: false };
          } else
            return todo.completed ? { ...todo, show: false } : { ...todo, show: true };
        }
        ),
      };
    case PRIORITY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          priority: action.payload,
        },
        todos: state.todos.map((todo) => {
          if (action.payload.length === 0) {
            return { ...todo, show: true };
          } else if (action.payload.includes(todo.priority)) {
            return { ...todo, show: true };
          } else {
            return { ...todo, show: false };
          } 
        }
        ),
      };

    default:
      return state;
  }
}

export default reducer;
