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
  mailto: string = 'mailto';
  phone: string = 'phone';
  linkWhatsapp: string = 'linkWhatsapp';

  constructor() {}

  ngOnInit(): void {
    this.email = 'info@fmatheus.com.br';
    this.mailto = 'mailto:info@fmatheus.com.br?subject=Contato&body=Mensagem personalizada"';
    this.phone = '21 98196-4019';
    this.linkWhatsapp =
      'https://api.whatsapp.com/send/?phone=5521981964019&amp;text=Eu+gostaria+de+fazer+um+orçamento.&amp;type=phone_number&amp;app_absent=0';
  }
}
