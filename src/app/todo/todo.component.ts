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
    id:number = 1;
    error:boolean = false;
     
     
    public addTodo() {
        if(this.todoTitle.trim() !=''){
            this.Todo.push({
                "id": this.id++,
                "todoTitle": this.todoTitle,
                "isCompleted": false,
            });
            this.todoTitle = "";
            console.log(this.Todo)
        }
        else{
            this.error = true
        }
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
        this.error = false;
        this.todoTitle = event.target.value;
    }

    public deleteTodoItem(event:any) {
        this.Todo = this.Todo.filter(item => item.id !== event.id);
    }

    public isCompletedTodoItem(event:any) {
        this.Todo.map((item)=>{
            if(item.id === event.id){
                item.isCompleted = !item.isCompleted;
            }
        })
    }
}
