import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, tap } from 'rxjs';
import { ITodo, loadList, setList, success } from '../store/api.state';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private store: Store<{stateToDos: ITodo[]}>,
    private actions$: Actions,
  ) { }
  // https://jsonplaceholder.typicode.com/todos

    
  load$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadList),
      concatLatestFrom(() => this.store.select('stateToDos').pipe(
        map(toDos => toDos)
      )),
      switchMap(([ _ , toDos  ]) => {
        if (toDos.length == 0) {
          return this.http.get('https://jsonplaceholder.typicode.com/todos')
            .pipe(
              tap((todos: any) => {
                setTimeout(() => {
                  this.store.dispatch(setList({payload: todos}))
                }, 3000)
              }),
              map(() => success())
            )
        }
        return of(success())
      }) 
    )
  )
}
