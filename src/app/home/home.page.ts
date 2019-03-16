import { Task } from './../models/task.model';
import { Component } from '@angular/core';
import { List } from '../models/list.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public list: List;
  constructor() {
    const tasks: Task[] = [];
    tasks.push(new Task('Passear com o cachorro', false));
    tasks.push(new Task('Ir ao super Mercado', false));
    tasks.push(new Task('Ir ao super Mercado', true));
    this.list = new List('Minha Lista de Tarefas', tasks);
  }

  showAddList() {

  }

  showAddTask() {

  }
}
