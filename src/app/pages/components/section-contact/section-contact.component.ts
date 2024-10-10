import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.css',
})
export class SectionContactComponent implements OnInit {
  email: string = 'email';

  constructor() {}

  ngOnInit(): void {
    this.email = 'info@fmatheus.com.br';
  }
}
