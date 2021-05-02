import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 24;
  peso = 60;
  altura = 170;
  genero = 'Masculino';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura(event : any): void {
    this.altura = event.target.value;
  }

  genderMale(){
    this.genero = 'Masculino';
  }

  genderFemale(){
    this.genero = 'Femenino';
  }

}
