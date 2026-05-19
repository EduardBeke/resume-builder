import { Component, Input } from '@angular/core';

import { WorkExperience } from '../types/resume-schema';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input({ required: true }) workExperience!: WorkExperience;
}
