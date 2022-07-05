import { createAction, createReducer, on, props } from "@ngrx/store"

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const stateToDos: ITodo[] = []

export const setList = createAction('setListAPI', props<{ payload: ITodo[]}>())
export const loadList = createAction('loadListAPI')
export const success = createAction('success')

export const reducerToDo = createReducer(stateToDos,
        on(setList, (state, { payload }) => {
            return state = payload
        })
    )