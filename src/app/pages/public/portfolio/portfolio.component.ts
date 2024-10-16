import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';

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

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findPortfolio().subscribe((data: any) => {
      this.projects = data['protfolio'][0]['projects'];
      this.filters = data['protfolio'][0]['filters'];
    });
  }

  openModal(project: any) {
    this.selectedProject = project;
  }
}
