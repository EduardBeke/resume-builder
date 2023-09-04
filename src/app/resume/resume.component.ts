import { Component, inject, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ResumeSchema } from '../types/resume-schema';
import { SideInfoComponent } from '../side-info/side-info.component';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { EducationComponent } from '../education/education.component';
import { SkillGroupComponent } from '../skill-group/skill-group.component';
import { map } from 'rxjs';
import { getResume } from '../get-resume';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    SideInfoComponent,
    TranslocoDirective,
    WorkExperienceComponent,
    EducationComponent,
    SkillGroupComponent,
    NgOptimizedImage,
    CertificateComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  @Input() public resume: ResumeSchema = getResume();
  @Input() public picture = '';
  @Input() public signature = '';

  private readonly translocoService = inject(TranslocoService);
  protected getToday$ = this.translocoService.langChanges$.pipe(
    map((lang) => new Date().toLocaleDateString(lang))
  );
}
