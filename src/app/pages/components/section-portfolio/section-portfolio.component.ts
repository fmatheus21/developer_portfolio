import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScriptService } from '../../../../script.service';

@Component({
  selector: 'app-section-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-portfolio.component.html',
  styleUrl: './section-portfolio.component.css',
})
export class SectionPortfolioComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any;

  constructor(
    private appService: AppService,
    private scriptService: ScriptService
  ) {}

  ngOnInit(): void {
    this.load();
    this.loadScripts();
  }

  load() {
    this.appService.findAll().subscribe((data: any) => {
      this.projects = data['protfolio'][0]['projects'].slice(0, 4);
    });
  }

  private loadScripts() {
    this.scriptService
      .loadExternalScript('./assets/js/portfolio.js')
      .then(() => {})
      .catch(() => {});
  }

  openModal(project: any) {
    this.selectedProject = project;
  }
}
