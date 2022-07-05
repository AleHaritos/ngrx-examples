import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ITodo, loadList } from '../store/api.state';

@Component({
  selector: 'app-api-comp',
  templateUrl: './api-comp.component.html',
  styleUrls: ['./api-comp.component.css']
})
export class ApiCompComponent implements OnInit {

  constructor(
    private store: Store<{ stateToDos: ITodo[] }>
  ) { }

  todos$ = this.store.select('stateToDos').pipe(
    map(toDo => toDo)
  )

  ngOnInit(): void {
    this.store.dispatch(loadList())
  }

}
