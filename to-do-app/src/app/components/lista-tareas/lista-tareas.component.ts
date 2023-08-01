import { Component, NgModule, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
@NgModule({
  declarations: [],
  imports: [],
  providers: [TareasService],
})
export class ListaTareasComponent implements OnInit {
  tareas: string[] = this.dataProvider.obtenerTareas();
  constructor(private dataProvider: TareasService) {
    this.tareas.push('To do');
    this.tareas.push('To do');
  }

  eliminarTarea(indice: number): void {
    this.dataProvider.eliminarTarea(indice);
  }
  ngOnInit() {}

  onEliminarClick(event: any) {
    const btnEliminar = event.target;
    if (btnEliminar.classList.contains('btnEliminar')) {
      const liElement = btnEliminar.closest('.elemento');
      if (liElement) {
        const index = Array.from(liElement.parentElement.children).indexOf(
          liElement
        );
        this.tareas.splice(index, 1);
      }
    }
  }
}
