import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../../models/user.model';
import { cargarUsuarios } from '../../store/actions/users.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  error: any

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select('usuarios')
      .subscribe(({users,loading,error})=>{
        this.users   = users;
        this.loading = loading;
        this.error   = error;
      });

    this._store.dispatch(cargarUsuarios())
    // this.userService.getUsers()
    //     .subscribe(users=>{
    //       // const datos = data.data;
    //       console.log(users);
    //       this.users = users;
    //     })
  }

}
