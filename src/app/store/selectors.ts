import { createSelector } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { ITodo } from "./api.state";

export const selectTodo = createFeatureSelector<ITodo[]>('stateToDos')

export const selectTodos = createSelector(
    selectTodo,
    (todos) => {
        return todos
    }
)