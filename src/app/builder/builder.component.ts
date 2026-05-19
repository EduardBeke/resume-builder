import { Component, inject, signal } from '@angular/core';

import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from '../resume/resume.component';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { NgxPrintModule } from 'ngx-print';
import { getResume, setResume } from '../get-resume';
import { MenubarModule } from 'primeng/menubar';
import { NgxPrinterModule } from 'ngx-printer';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    MonacoEditorModule,
    FormsModule,
    ResumeComponent,
    FileUploadModule,
    TranslocoDirective,
    NgxPrintModule,
    MenubarModule,
    NgxPrinterModule,
    Select,
  ],
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  providers: [{ provide: NGX_MONACO_EDITOR_CONFIG, useValue: { baseUrl: '/public/monaco/min/vs' } }],
})
export class BuilderComponent {
  protected readonly translocoService = inject(TranslocoService);

  protected readonly editorOptions = { theme: 'vs-dark', language: 'json' };
  protected readonly languages = [
    { key: 'german', value: 'de' },
    { key: 'english', value: 'en' },
    { key: 'romanian', value: 'ro' },
  ].sort(({ value }) => (value === this.translocoService.getActiveLang() ? -1 : 1));
  protected resumeString = JSON.stringify(getResume());

  protected resume = signal(getResume());
  protected pictureURL = signal('');
  protected signatureURL = signal('');

  public onMonacoInit(): void {
    const { jsonDefaults } = (<any>window).monaco.languages.json;
    jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemaValidation: 'error',
      enableSchemaRequest: true,
      schemas: [
        {
          fileMatch: ['*'],
          schema: {
            $ref: `${window.location.origin}/resume-builder.json`,
          },
        },
      ],
    });
  }

  public onResumeChange(newResume: string): void {
    this.resume.set(JSON.parse(newResume));
    setResume(this.resume());
  }

  protected onSelectPicture(event: FileSelectEvent): void {
    this.pictureURL.set(
      (event.currentFiles[0] as any)['objectURL']['changingThisBreaksApplicationSecurity'],
    );
  }

  protected onSelectSignature(event: FileSelectEvent): void {
    this.signatureURL.set(
      (event.currentFiles[0] as any)['objectURL']['changingThisBreaksApplicationSecurity'],
    );
  }

  protected updateLanguage(lang: string): void {
    localStorage.setItem('selectedLanguage', lang);
    this.translocoService.setActiveLang(lang);
  }
}
