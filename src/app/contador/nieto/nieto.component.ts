import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../contador.action';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe( count => this.contador = count);
  }

  reset(){
    this.store.dispatch(actions.reset())
  }
}
