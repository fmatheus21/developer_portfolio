import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../core/service/app.service';
import { CommonModule } from '@angular/common';
import { ScriptService } from '../../../../script.service';

@Component({
  selector: 'app-section-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-slider.component.html',
  styleUrl: './section-slider.component.css',
})
export class SectionSliderComponent implements OnInit {
  personal: any[] = [];
  socialMedia: any[] = [];
  shapes: any[] = [];
  name: string = 'name';
  accost: string = 'accost';
  profession: string = 'developer';
  cv: string = 'cv';
  image: string = 'image';

  constructor(
    private appService: AppService,
    private scriptService: ScriptService
  ) {}

  ngOnInit(): void {
    this.load().then(() => {
      this.loadScripts();
    });
  }

  private loadScripts() {
    this.scriptService
      .loadExternalScript('./assets/js/typer.js')
      .then(() => {
        console.log('Script carregado com sucesso');
      })
      .catch(() => {
        console.log('Falha ao carregar o script');
      });
  }

  load(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.appService.findPresentation().subscribe({
        next: (data: any) => {
          this.personal = data['presentation'][0]['personal'];
          this.socialMedia = data['presentation'][0]['personal'][0]['socialMedia'];
          this.shapes = data['presentation'][0]['personal'][0]['shape'];
          this.name = this.personal[0].name;
          this.accost = this.personal[0].accost;
          this.profession = this.personal[0].profession;
          this.cv = this.personal[0].cv;
          this.image = this.personal[0].image;
        },
        error: error => {
          console.error(error);
          reject(error);
        },
        complete: () => {
          console.log('Observable completo.');
          resolve();
        },
      });
    });
  }
}
