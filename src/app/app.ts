import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Experience } from './pages/experience/experience';
import { Home } from './pages/home/home';
import { Footer } from './pages/layout/footer/footer';
import { Navbar } from './pages/layout/navbar/navbar';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Experience,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
