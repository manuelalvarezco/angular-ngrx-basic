import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './contador/app.reducer';
import * as actions from './contador/contador.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contador: number = 10;

  constructor(private store: Store<AppState>){}



  ngOnInit(): void {
    this.store.select('count').subscribe( count => this.contador = count )
  }




  increment(){
    this.store.dispatch(actions.increment());
  }

  decrement(){
    this.store.dispatch(actions.decrement());
  }
}
