import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { aumentarContador, definirContador, IContador, reduzirContador } from '../store/main.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store<{ contador: IContador }>
  ) { }
  
  value$!: Observable<Number>

  ngOnInit(): void {
    this.value$ = this.store.select('contador')
        .pipe(
          map(res => res.value)
        )
  }

  add(): void {
    this.store.dispatch(aumentarContador())
  }

  reduzir(): void {
    this.store.dispatch(reduzirContador())
  }

  definir(value: string): void {
    this.store.dispatch(definirContador({ payload: parseFloat(value)}))
  }

}
