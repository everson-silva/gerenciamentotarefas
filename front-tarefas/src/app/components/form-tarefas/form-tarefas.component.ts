import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-form-tarefas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-tarefas.component.html'
})
export class FormTarefasComponent {
  @Output() tarefaSalva = new EventEmitter<void>();

  novaTarefa: Tarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };

  constructor(private tarefaService: TarefaService) {}

  salvar() {
    if (!this.novaTarefa.titulo || !this.novaTarefa.descricao) {
      alert('Preencha o título e a descrição da tarefa!');
      return;
    }

    this.tarefaService.criarTarefa(this.novaTarefa).subscribe({
      next: () => {
        alert('Tarefa criada com sucesso!');
        this.novaTarefa = { titulo: '', descricao: '', status: 'Pendente' };
        this.tarefaSalva.emit(); 
      },
      error: (err: any) => {
        console.error(err);
        alert('Erro de comunicação com a API. Verifique se o back-end está rodando.');
      }
    });
  }
}
