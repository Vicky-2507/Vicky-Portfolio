import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  buttonText = 'Send message →';

  sendMessage(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const values = new FormData(form);
    const subject = encodeURIComponent(String(values.get('subject') ?? 'Portfolio enquiry'));
    const message = encodeURIComponent(
      `Hi Vignesh,\n\n${String(values.get('message') ?? '')}\n\nFrom: ${String(values.get('name') ?? '')}\nEmail: ${String(values.get('email') ?? '')}`,
    );

    window.location.href = `mailto:msvicky904@gmail.com?subject=${subject}&body=${message}`;
    this.buttonText = 'Opening your email app…';
    setTimeout(() => (this.buttonText = 'Send message →'), 2500);
  }
}
