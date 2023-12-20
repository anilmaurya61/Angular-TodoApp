import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TodoComponent } from "../todo/todo.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, TodoComponent]
})
export class HomeComponent {

}
