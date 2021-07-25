import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const cargarUsuario = createAction(
    '[Usuario] Cargar Usuario',
    props<{id: string}>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuario Success',
props<{usuario: User}>()
);
export const CargarUsuarioError = createAction(
    '[Usuarios] Cargar Usuario Error',
    props<{payload: any}>()
)
