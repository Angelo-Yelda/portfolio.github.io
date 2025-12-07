import { Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  imports: [MatDividerModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  isShown = signal(true);
}
