import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions/users.actions';
import { UserService } from '../../services/user.service';
import { of } from "rxjs";

@Injectable()
export class UsuariosEffects{
 constructor(
     private actions$: Actions,
     private _userService: UserService 
 ){}

 cargarUsuarios$ = createEffect(
     ()=> this.actions$.pipe(
         ofType(usuariosActions.cargarUsuarios),
        //  tap(data => console.log('effects tap', data)),
         mergeMap(
             ()=> this._userService.getUsers()
                      .pipe(
                        //   tap(data=>console.log('getUsers effects', data))
                        map(users =>usuariosActions.cargarUsuariosSuccess({usuarios: users})),
                        catchError(err => of( usuariosActions.CargarUsuariosError({payload: err})))
                      )
         )
     )
 );
}