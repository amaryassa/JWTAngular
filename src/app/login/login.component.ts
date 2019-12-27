import { AuthentificationService } from './../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur = false;

  constructor(
            private authentificationService: AuthentificationService,
            private router: Router
            ) { }

  ngOnInit() {
  }


  onLogin(user) {
    this.authentificationService.login(user)
      .subscribe(
        resp => {
          // console.log(resp);
          const jwtToken = resp.headers.get('Authorization');
          this.authentificationService.saveToken(jwtToken);
          this.router.navigate(['/tasks']);
        },
        err => {
          this.erreur = true;
        },
      );
  }

}
