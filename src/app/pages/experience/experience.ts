import { Component, OnDestroy, OnInit } from '@angular/core';

type ExperienceCard = {
  title: string;
  organization: string;
  category: string;
  duration: string;
  employmentType: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
  logoText: string;
  logoSrc?: string;
  accent: 'teal' | 'blue' | 'purple';
};

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit, OnDestroy {
  activeIndex = 0;
  isPaused = false;
  private autoplayId?: ReturnType<typeof setInterval>;
  private touchStartX = 0;

  readonly cards: ExperienceCard[] = [
    {
      title: 'Angular Intern',
      organization: 'Sparkout Tech Solutions',
      category: 'Frontend Development',
      duration: '5 Months',
      employmentType: 'Internship',
      location: 'Coimbatore, India',
      description: 'Hands-on Angular internship focused on component architecture, responsive interfaces, CRUD workflows, and practical product development.',
      bullets: [
        'Built responsive Angular screens using reusable components and routing.',
        'Implemented CRUD functionality and connected UI flows to application data.',
        'Strengthened frontend delivery habits through practical feature work.',
      ],
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'REST APIs'],
      logoText: 'S',
      logoSrc: '/sparkout-logo.svg',
      accent: 'teal',
    },
    {
      title: 'Accounts Professional',
      organization: 'Sun Alloys',
      category: 'Accounting',
      duration: '2023-2025',
      employmentType: 'Full Time',
      location: 'Tamil Nadu, India',
      description: 'Managed financial operations with careful attention to accuracy, documentation, vendor coordination, payroll support, and statutory processes.',
      bullets: [
        'Handled accounts payable, receivable, cash records, and vendor coordination.',
        'Maintained ledger entries, journal records, and day-to-day reconciliations.',
        'Processed ESI and PF contributions with consistent documentation.',
      ],
      technologies: ['Tally', 'Excel', 'Ledger', 'Payroll', 'Compliance'],
      logoText: 'SA',
      accent: 'blue',
    },
    {
      title: 'Accounts Intern',
      organization: 'Naveenaprabhu & Association',
      category: 'Internship',
      duration: '3 Months',
      employmentType: 'Internship',
      location: 'Tamil Nadu, India',
      description: 'Supported accounting, taxation, payroll, and compliance work while building a strong foundation in structured professional processes.',
      bullets: [
        'Assisted with invoice processing, payment tracking, and documentation.',
        'Prepared supporting work for Income Tax Return filing.',
        'Supported payroll, ESI, PF, and compliance activities.',
      ],
      technologies: ['Accounting', 'Taxation', 'Payroll', 'Documentation'],
      logoText: 'NA',
      accent: 'purple',
    },
    {
      title: 'Angular Certification',
      organization: 'Frontend Development Track',
      category: 'Certification',
      duration: 'Certified',
      employmentType: 'Angular',
      location: 'Professional Learning',
      description: 'Certification focused on Angular fundamentals, component-based UI development, routing, data binding, services, and application structure.',
      bullets: [
        'Validated Angular component, template, and routing knowledge.',
        'Practiced building scalable single-page application interfaces.',
        'Strengthened TypeScript-driven frontend development patterns.',
      ],
      technologies: ['Angular', 'Components', 'Routing', 'Services'],
      logoText: 'A',
      accent: 'teal',
    },
    {
      title: 'TypeScript Certification',
      organization: 'Modern JavaScript Tooling',
      category: 'Certification',
      duration: 'Certified',
      employmentType: 'TypeScript',
      location: 'Professional Learning',
      description: 'Certification covering typed JavaScript, interfaces, reusable models, functions, classes, and reliable frontend application logic.',
      bullets: [
        'Applied types, interfaces, and structured data models.',
        'Improved code confidence through stronger compile-time checks.',
        'Used TypeScript patterns that support maintainable Angular apps.',
      ],
      technologies: ['TypeScript', 'Interfaces', 'Classes', 'Models'],
      logoText: 'TS',
      accent: 'blue',
    },
    {
      title: 'JavaScript Certification',
      organization: 'Web Development Foundation',
      category: 'Certification',
      duration: 'Certified',
      employmentType: 'JavaScript',
      location: 'Professional Learning',
      description: 'Certification focused on JavaScript fundamentals, DOM logic, functions, arrays, objects, events, and browser-based interactions.',
      bullets: [
        'Practiced core JavaScript syntax, control flow, and functions.',
        'Worked with arrays, objects, events, and interactive page behavior.',
        'Built stronger foundations for modern frontend frameworks.',
      ],
      technologies: ['JavaScript', 'DOM', 'ES6', 'Events'],
      logoText: 'JS',
      accent: 'purple',
    },
    {
      title: 'Frontend Development Certification',
      organization: 'Responsive Web Design',
      category: 'Certification',
      duration: 'Certified',
      employmentType: 'Frontend',
      location: 'Professional Learning',
      description: 'Certification centered on polished responsive layouts, semantic markup, styling systems, accessibility basics, and user-friendly interfaces.',
      bullets: [
        'Created responsive layouts for desktop, tablet, and mobile screens.',
        'Practiced semantic HTML, modern CSS, and clean interface structure.',
        'Improved recruiter-facing portfolio and product UI presentation skills.',
      ],
      technologies: ['HTML', 'CSS', 'Responsive UI', 'Accessibility'],
      logoText: 'FE',
      accent: 'teal',
    },
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  }

  previous(): void {
    this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }

  pauseAutoplay(): void {
    this.isPaused = true;
  }

  resumeAutoplay(): void {
    this.isPaused = false;
  }

  cardPosition(index: number): string {
    const previousIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
    const nextIndex = (this.activeIndex + 1) % this.cards.length;

    if (index === this.activeIndex) {
      return 'is-active';
    }

    if (index === previousIndex) {
      return 'is-previous';
    }

    if (index === nextIndex) {
      return 'is-next';
    }

    return 'is-hidden';
  }

  tiltCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.setProperty('--tilt-x', `${rotateX}deg`);
    card.style.setProperty('--tilt-y', `${rotateY}deg`);
    card.style.setProperty('--shine-x', `${x}px`);
    card.style.setProperty('--shine-y', `${y}px`);
  }

  resetTilt(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;

    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--shine-x', '50%');
    card.style.setProperty('--shine-y', '50%');
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? 0;
    this.pauseAutoplay();
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0]?.clientX ?? this.touchStartX;
    const distance = touchEndX - this.touchStartX;

    if (Math.abs(distance) > 45) {
      distance < 0 ? this.next() : this.previous();
    }

    this.resumeAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, 4000);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }
}
