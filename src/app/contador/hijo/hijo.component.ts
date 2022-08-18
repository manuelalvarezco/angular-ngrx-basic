import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('count').subscribe( count => this.contador = count);
  }

  multiply(){
    this.store.dispatch(actions.multiply({ numero: 2}))
  }


  divide(){
    this.store.dispatch(actions.divide({ numero: 2}))
  }
}
