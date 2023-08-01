import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgregarTareaPage } from '../agregar-tarea/agregar-tarea.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'agregar-tarea', component: AgregarTareaPage },
    ]),
  ],
})
export class HomePage {
  constructor() {}
}
