import { ADD_TODO, PRIORITY_FILTER, SEARCH_FILTER, STATUS_FILTER, TOGGLE_TODO } from "./constants";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const toggleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload
});

export const searchFilter = (payload) => ({
    type: SEARCH_FILTER,
    payload
});

export const statusFilter = (payload) => ({
    type: STATUS_FILTER,
    payload
});

export const priorityFilter = (payload) => ({
    type: PRIORITY_FILTER,
    payload
});

