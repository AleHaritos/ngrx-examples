import { Component, DoCheck, OnInit } from '@angular/core';
import { Actions, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable, takeUntil, tap } from 'rxjs';
import { ITodo, loadList } from '../store/api.state';
import { selectTodos } from '../store/selectors';

@Component({
  selector: 'app-api-comp',
  templateUrl: './api-comp.component.html',
  styleUrls: ['./api-comp.component.css']
})
export class ApiCompComponent implements OnInit, DoCheck{
  opa: boolean = false
  constructor(
    private store: Store<{ stateToDos: ITodo[] }>,
    private actions$: Actions
  ) { }

  todos$ = this.store.select(selectTodos)
  ngOnInit(): void {
    
    this.store.dispatch(loadList())
  }

  ngDoCheck() {
   
  }

  
}
