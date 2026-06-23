import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skills = [
    { name: 'HTML', category: 'Semantic page structure', icon: 'H5' },
    { name: 'CSS', category: 'Responsive user interfaces', icon: 'C3' },
    { name: 'JavaScript', category: 'Frontend programming', icon: 'JS' },
    { name: 'TypeScript', category: 'Type-safe development', icon: 'TS' },
    { name: 'Angular', category: 'Components, routing & CRUD', icon: 'A' },
    { name: 'Tally', category: 'Accounting software', icon: 'TL' },
  ];
}
