import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';
import { ScriptService } from '../../../../script.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  filters: any[] = [];
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
      this.projects = data['protfolio'][0]['projects'];
      this.filters = data['protfolio'][0]['filters'];
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
