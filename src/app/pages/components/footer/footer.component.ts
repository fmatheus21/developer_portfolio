import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  copyright: string = 'copyright';

  constructor() {}

  ngOnInit(): void {
    this.initCopyright();
  }

  initCopyright() {
    const ano = new Date().getFullYear();
    this.copyright = '© 2017 - ' + ano;
  }
}
