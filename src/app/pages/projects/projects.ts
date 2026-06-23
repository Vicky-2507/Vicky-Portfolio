import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = [
    {
      title: 'E-commerce App',
      preview: 'Shop. Login. Checkout.',
      description: 'A live e-commerce storefront with a login page, product browsing, and responsive shopping experience.',
      tags: ['Angular', 'E-commerce', 'Responsive UI'],
      href: 'https://vicky-2507.github.io/E-commerce-App/login',
    },
    {
      title: 'Women\'s Fashion E-commerce',
      preview: 'Style. Browse. Buy.',
      description: 'A women\'s fashion e-commerce website with a polished storefront, product sections, and responsive layouts.',
      tags: ['Angular', 'Fashion UI', 'E-commerce'],
      href: 'https://vicky-2507.github.io/Womens-fashion-Ecommerce/',
    },
    {
      title: 'Event Management System',
      preview: 'Book. Manage. Celebrate.',
      description: 'An event booking and management application for browsing events, managing details, and handling event workflows.',
      tags: ['Angular', 'Event Booking', 'Management'],
      href: 'https://vicky-2507.github.io/Event-Booking-App/',
    },
    {
      title: 'Student Task Manager App',
      preview: 'Assign. Study. Finish.',
      description: 'A student-focused task manager for organizing academic work, tracking tasks, and staying on top of daily priorities.',
      tags: ['Angular', 'Task Manager', 'Student UI'],
      href: 'https://vicky-2507.github.io/Student-Task-Manager-App/',
    },
  ];
}
