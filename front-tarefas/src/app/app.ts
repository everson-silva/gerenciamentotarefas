import { Component } from '@angular/core';
import { FormTarefasComponent } from './components/form-tarefas/form-tarefas.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormTarefasComponent, ListaTarefasComponent],
  templateUrl: './app.html'
})
export class App {
  title = 'Front Tarefas';
}
