import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITodo, loadList } from '../store/api.state';
import { selectTodos } from '../store/selectors';

@Component({
  selector: 'app-api-comp',
  templateUrl: './api-comp.component.html',
  styleUrls: ['./api-comp.component.css']
})
export class ApiCompComponent implements OnInit {
  opa: any
  constructor(
    private store: Store<{ stateToDos: ITodo[] }>
  ) { }

  todos$ = this.store.select(selectTodos)
  ngOnInit(): void {
    this.store.dispatch(loadList())
  }

}
