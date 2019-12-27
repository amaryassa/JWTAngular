import { Router } from '@angular/router';
import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
export interface Task {
  id: number;
  taskName: string;
}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

   tasks: Task[] = [];

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }


  ngOnInit() {
    this.authentificationService.getTasks().subscribe(
      data => {
        console.log(this.tasks);
        this.tasks = data;
        console.log(this.tasks);
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }

}
