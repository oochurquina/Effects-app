import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  usuario: User;
  loading: boolean;
  constructor(private _router: ActivatedRoute,
              private _store : Store<AppState>) { }

  ngOnInit(): void {

    this._store.select('usuario')
        .subscribe(({user,loading})=>{
          // console.log(user);
          this.usuario= user;
          this.loading = loading;
        })
    this._router.params.subscribe(({id})=>{
      // console.log(id)
      this._store.dispatch(cargarUsuario({id}))
    })
  }

}
