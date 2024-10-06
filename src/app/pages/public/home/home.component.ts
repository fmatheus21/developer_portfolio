import { Component } from '@angular/core';
import { SectionSliderComponent } from '../../components/section-slider/section-slider.component';
import { SectionIntroComponent } from '../../components/section-intro/section-intro.component';
import { SectionAboutComponent } from '../../components/section-about/section-about.component';
import { SectionPortfolioComponent } from '../../components/section-portfolio/section-portfolio.component';
import { SectionFactComponent } from '../../components/section-fact/section-fact.component';
import { SectionAwardComponent } from '../../components/section-award/section-award.component';
import { SectionExperienceComponent } from '../../components/section-experience/section-experience.component';
import { SectionEducationComponent } from '../../components/section-education/section-education.component';
import { SectionSkillComponent } from '../../components/section-skill/section-skill.component';
import { SectionServiceComponent } from '../../components/section-service/section-service.component';
import { SectionPricingComponent } from '../../components/section-pricing/section-pricing.component';
import { SectionTestimonialComponent } from '../../components/section-testimonial/section-testimonial.component';
import { SectionBrandComponent } from '../../components/section-brand/section-brand.component';
import { SectionContactComponent } from '../../components/section-contact/section-contact.component';
import { SectionBlogComponent } from '../../components/section-blog/section-blog.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionSliderComponent,
    SectionIntroComponent,
    SectionAboutComponent,
    SectionPortfolioComponent,
    SectionFactComponent,
    SectionAwardComponent,
    SectionExperienceComponent,
    SectionEducationComponent,
    SectionSkillComponent,
    SectionServiceComponent,
    SectionPricingComponent,
    SectionTestimonialComponent,
    SectionBrandComponent,
    SectionContactComponent,
    SectionBlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
