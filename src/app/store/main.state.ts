import { createAction, createReducer, on, props } from "@ngrx/store"

export interface IContador  {
    value: number
}

//State
export const contador: IContador = {
    value: 0
}

//Actions
export const aumentarContador = createAction('aumentaContadorMain')
export const reduzirContador = createAction('reduzirContadorMain')
export const definirContador = createAction('definirContadorMain', props<{ payload: number }>())

//Reducer e funcao das actions
export const mainReducer = createReducer(contador,
    on(aumentarContador, (state) => {
        return {
            ...state,
            value: state.value + 1
        }
    }),
    on(reduzirContador, (state) => {
        return {
            ...state,
            value: state.value - 1
        }
    }),
    on(definirContador, (state, { payload }) => {
        return {
            ...state,
            value: payload
        }
    })
    )