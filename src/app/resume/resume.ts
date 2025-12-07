import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
