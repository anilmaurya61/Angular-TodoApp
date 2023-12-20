import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {

  @Input()
  todoItem: any = {};

  @Output()
  isCompletedTodo = new EventEmitter<any>();
  @Output()
  deleteTodo  =  new EventEmitter<any>();
  @Output()
  editTodo = new EventEmitter<any>();

  public handleEditTodo(){
    this.editTodo.emit(this.todoItem);
  }

  public deleteTodoItem() {
    this.deleteTodo.emit(this.todoItem);
  }

  public handleIsCompleted(){
   this.isCompletedTodo.emit(this.todoItem);
  }
}
