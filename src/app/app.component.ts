import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.loadScripts();
  }

  private loadScripts() {
    this.scriptService
      .loadExternalScript('./assets/js/main.js')
      .then(() => {})
      .catch(() => {});
  }
}
