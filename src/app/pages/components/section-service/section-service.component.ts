import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-service.component.html',
  styleUrl: './section-service.component.css',
})
export class SectionServiceComponent implements OnInit {
  services: any[] = [];
  selectedService: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe((data: any) => {
      this.services = data['services'];
    });
  }

  openModal(service: any) {
    this.selectedService = service;
  }
}
