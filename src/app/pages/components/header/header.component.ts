import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  socialMedia: any[] = [];
  personal: any[] = [];
  cv: string = 'cv';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.appService.findAll().subscribe((data: any) => {
      this.socialMedia = data['socialMedia'];
      this.personal = data['presentation'][0]['personal'];
      this.cv = this.personal[0].cv;
    });
  }
}
