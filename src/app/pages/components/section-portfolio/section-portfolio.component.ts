import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe((data: any) => {
      this.projects = data['protfolio'][0]['projects'].slice(0, 4);
    });
  }

  openModal(project: any) {
    this.selectedProject = project;
  }
}
