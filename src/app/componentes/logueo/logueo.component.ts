import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicio/auth.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  mensajeError!: string;

  constructor(private tokenService: TokenService, private AuthService: AuthService, private Router: Router) {
    
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.AuthService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.Router.navigate(['principal']);
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.mensajeError = err.error.mensaje;
      console.log(this.mensajeError);
      
      
      
      
    }
    )
  }
}
