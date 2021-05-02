import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Insertar el ruteo
  constructor(private router: Router) { }

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

  calcularBMI(){
    const BMI = this.peso / Math.pow((this.altura/100), 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

}
