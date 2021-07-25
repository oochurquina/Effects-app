import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction('[Usuarios] Cargar Usuarios Success',
props<{usuarios: User[]}>()
);
export const CargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{payload: any}>()
)
