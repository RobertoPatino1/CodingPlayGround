import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: AgregarTareaPage },
      { path: 'home', component: HomePage },
    ]),
  ],
  providers: [TareasService],
})
export class AgregarTareaPage implements OnInit {
  nuevaTarea: string;
  constructor(private dataProvider: TareasService) {}

  ngOnInit() {}

  agregarTarea() {
    this.dataProvider.agregarTarea(this.nuevaTarea);
  }
}
