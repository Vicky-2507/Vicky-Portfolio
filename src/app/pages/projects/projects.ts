import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
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
      accent: 'teal',
      icon: 'cart',
    },
    {
      title: 'Women\'s Fashion E-commerce',
      preview: 'Style. Browse. Buy.',
      description: 'A women\'s fashion e-commerce website with a polished storefront, product sections, and responsive layouts.',
      tags: ['Angular', 'Fashion UI', 'E-commerce'],
      href: 'https://vicky-2507.github.io/Womens-fashion-Ecommerce/',
      accent: 'purple',
      icon: 'fashion',
    },
    {
      title: 'Event Management System',
      preview: 'Book. Manage. Celebrate.',
      description: 'An event booking and management application for browsing events, managing details, and handling event workflows.',
      tags: ['Angular', 'Event Booking', 'Management'],
      href: 'https://vicky-2507.github.io/Event-Booking-App/',
      accent: 'orange',
      icon: 'calendar',
    },
    {
      title: 'Student Task Manager App',
      preview: 'Assign. Study. Finish.',
      description: 'A student-focused task manager for organizing academic work, tracking tasks, and staying on top of daily priorities.',
      tags: ['Angular', 'Task Manager', 'Student UI'],
      href: 'https://vicky-2507.github.io/Student-Task-Manager-App/',
      accent: 'blue',
      icon: 'graduation',
    },
  ];

  tiltCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  resetTilt(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;

    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  }
}
