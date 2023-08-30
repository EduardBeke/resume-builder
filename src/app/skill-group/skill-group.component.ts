import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from '../types/resume-schema';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.scss'],
})
export class SkillGroupComponent {
  @Input({ required: true }) skillGroup!: SkillGroup;
}
