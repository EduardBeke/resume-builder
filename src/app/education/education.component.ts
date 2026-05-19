import { Component, Input } from '@angular/core';

import { Education } from '../types/resume-schema';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input({ required: true }) education!: Education;
}
