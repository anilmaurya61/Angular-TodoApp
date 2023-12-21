import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [TodoItemComponent, CommonModule]
})

export class TodoComponent {
    Todo: any[] = [];
    todoTitle: string = "";
    item:any = {};
    isEdit : boolean = false;

    public getUniqueId(){
        return (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds();
     }
     
     
    public addTodo() {
        this.Todo.push({
            "id": this.getUniqueId(),
            "todoTitle": this.todoTitle,
            "isCompleted": false,
        });
        this.todoTitle = "";
        console.log(this.Todo)
    }
    public updateTodo(){
        console.log("save")
        this.Todo.map((todo)=>{
            if(todo.id === this.item?.id){
                todo.todoTitle = this.todoTitle;
            }
        })
        this.isEdit = !this.isEdit;
    }
    public editTodo(event: any) {
        this.isEdit = !this.isEdit;
        this.item = event;
        this.todoTitle = event.todoTitle;
        console.log(this.item)
    }

    public onChangeTodo(event: any) {
        this.todoTitle = event.target.value;
    }

    public deleteTodoItem(event:any) {
        this.Todo = this.Todo.filter(item => item.id !== event.id);
    }

    public isCompletedTodoItem(event:any) {
        console.log(event)
        this.Todo.map((item)=>{
            if(item.id = event.id){
                item.isCompleted = !item.isCompleted;
            }
        })
    }
}
