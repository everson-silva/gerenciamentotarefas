import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tarefas.component.html'
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe({
      next: (dados: Tarefa[]) => this.tarefas = dados,
      error: (err: any) => console.error('Erro ao buscar tarefas:', err)
    });
  }

  excluir(id: number | undefined) {
    if (id && confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.excluirTarefa(id).subscribe({
        next: () => {
          alert('Tarefa excluída com sucesso!');
          this.carregarTarefas();
        }
      });
    }
  }

  concluir(tarefa: Tarefa) {
    const tarefaAtualizada = { ...tarefa, status: 'Concluída' };
    this.tarefaService.atualizarTarefa(tarefa.id!, tarefaAtualizada).subscribe({
      next: () => this.carregarTarefas()
    });
  }
}
