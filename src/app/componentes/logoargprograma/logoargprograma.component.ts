import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-logoargprograma',
  templateUrl: './logoargprograma.component.html',
  styleUrls: ['./logoargprograma.component.css']
})
export class LogoargprogramaComponent implements OnInit {
  isLogged = false;

  constructor(
    private router: Router, private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  logueo(): void {
    this.router.navigate(['/logueo'])
  }

  salir(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
