import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.scss'],
})
export class SideInfoComponent {
  @Input({ required: true }) public title = '';
  @Input({ required: true }) public value = '';
  @Input() public icon: string | undefined = '';
}
