import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate } from '../types/resume-schema';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  @Input({ required: true }) certificate!: Certificate;
}
