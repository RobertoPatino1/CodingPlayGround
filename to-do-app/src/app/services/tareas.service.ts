import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  tareas: string[] = [];
  constructor() {}

  agregarTarea(tarea: string): void {
    this.tareas.push(tarea);
  }

  obtenerTareas(): string[] {
    return this.tareas;
  }

  eliminarTarea(index: number): void {
    //Elimina la tarea en dicho indice
    this.tareas.splice(index);
  }
}
