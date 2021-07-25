import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import * as usuarioActions from '../actions';
import { UserService } from '../../services/user.service';
import { of } from "rxjs";

@Injectable()
export class UsuarioEffects{
 constructor(
     private actions$: Actions,
     private _userService: UserService 
 ){}

 cargarUsuario$ = createEffect(
     ()=> this.actions$.pipe(
         ofType(usuarioActions.cargarUsuario),
        //  tap(data => console.log('effects tap', data)),
         mergeMap(
             (action)=> this._userService.getUserById(action.id)
                      .pipe(
                        //   tap(data=>console.log('getUsers effects', data))
                        map(user=>usuarioActions.cargarUsuarioSuccess({usuario: user})),
                        catchError(err => of( usuarioActions.CargarUsuarioError({payload: err})))
                      )
         )
     )
 );
}