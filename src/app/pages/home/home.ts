import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeStat {
  label: string;
  target: number;
  suffix: string;
  value: ReturnType<typeof signal<number>>;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  readonly typedRole = signal('');
  readonly roles = ['Angular Frontend Developer', 'Frontend Developer', 'Web Developer'];
  readonly techStack = ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Git', 'REST APIs'];
  readonly particles = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    x: (index * 37 + 11) % 100,
    y: (index * 53 + 17) % 100,
    size: 2 + (index % 4),
    delay: (index % 7) * -0.8,
    duration: 7 + (index % 6),
  }));

  readonly stats: HomeStat[] = [
    { label: 'Featured Angular Projects', target: 2, suffix: '+', value: signal(0) },
    { label: 'Months of Angular Internship', target: 3, suffix: '', value: signal(0) },
    { label: 'Core Frontend Skills', target: 7, suffix: '+', value: signal(0) },
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;
  private statsTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.typeRole();
    this.animateStats();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    clearInterval(this.statsTimer);
  }

  private typeRole(): void {
    const role = this.roles[this.roleIndex];
    this.charIndex += this.deleting ? -1 : 1;
    this.typedRole.set(role.slice(0, this.charIndex));

    let delay = this.deleting ? 42 : 82;
    if (!this.deleting && this.charIndex === role.length) {
      this.deleting = true;
      delay = 1500;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 320;
    }

    this.typingTimer = setTimeout(() => this.typeRole(), delay);
  }

  private animateStats(): void {
    const startedAt = Date.now();
    const duration = 1600;

    this.statsTimer = setInterval(() => {
      const progress = Math.min((Date.now() - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats.forEach((stat) => stat.value.set(Math.round(stat.target * eased)));

      if (progress === 1) {
        clearInterval(this.statsTimer);
      }
    }, 30);
  }
}
