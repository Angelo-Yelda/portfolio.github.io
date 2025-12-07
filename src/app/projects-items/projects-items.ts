import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects-items',
  imports: [NgIf],
  templateUrl: './projects-items.html',
  styleUrl: './projects-items.scss',
})
export class ProjectsItems {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() gif?: string;
  @Input() url?: string;

  isHover = false;
}
