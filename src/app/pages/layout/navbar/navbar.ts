import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 24;
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    let currentSection = 'home';

    for (const sectionName of sections) {
      const section = document.getElementById(sectionName);

      if (section && section.offsetTop - 130 <= window.scrollY) {
        currentSection = section.id;
      }
    }

    this.activeSection = currentSection;
  }
}
