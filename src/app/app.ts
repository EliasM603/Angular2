import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estudiante: Estudiante = {
    id: 1,
    nombre: 'Ana López',
    correo: 'ana.lopez@ues.edu.sv',
    carrera: 'Ingeniería en Sistemas Informáticos'
  };

  estudiante2: Estudiante = {
    id: 2,
    nombre: 'Carlos Ramírez',
    correo: 'carlos.ramirez@ues.edu.sv',
    carrera: 'Ingeniería en Sistemas Informáticos'
  };

  // Parte de investigación: arreglo para usar @for
  estudiantes: Estudiante[] = [this.estudiante, this.estudiante2];
}