import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaTareasComponent } from './lista-tareas.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ListaTareasComponent],
  exports: [ListaTareasComponent],
})
export class ListaTareasComponentModule {}
