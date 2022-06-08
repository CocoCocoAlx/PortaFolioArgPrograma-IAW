import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoargprograma',
  templateUrl: './logoargprograma.component.html',
  styleUrls: ['./logoargprograma.component.css']
})
export class LogoargprogramaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logueo(): void {
    this.router.navigate(['/logueo'])
  }

}
