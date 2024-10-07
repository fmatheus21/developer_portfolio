import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';

@Component({
  selector: 'app-section-about',
  standalone: true,
  imports: [],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.css',
})
export class SectionAboutComponent implements OnInit {
  about: any;
  age: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe((data: any) => {
      this.about = data['about'];
      var year = new Date().getFullYear();
      this.age = year - this.about.year + ' anos';
    });
  }
}
