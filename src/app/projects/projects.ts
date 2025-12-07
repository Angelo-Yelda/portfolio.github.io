import { Component, signal } from '@angular/core';
import { ProjectsItems } from '../projects-items/projects-items';
import { NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsItems, NgFor, MatDividerModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  isShown = signal(true);
  projectGames = [
    {
      title: 'Flesh Haven',
      description: 'A multiplayer survival horror game made in Godot.',
      image: 'fleshhaven.jpg',
      gif: 'fleshhaven.gif',
    },
    {
      title: 'BootDev Python Asteroids',
      description: 'Asteroids made using pygame.',
      image: 'pythonasteroid.png',
      gif: 'pythonasteroids.gif',
      url: 'https://github.com/iPhire/pygame_asteroids',
    },
    {
      title: 'Solar Clicker',
      description: 'A clicker game made in JavaFX.',
      image: 'solarclicker.png',
      gif: 'solarclicker.gif',
    },
  ];

  projectCode = [
    {
      title: 'BootDev BookBot',
      description: 'CLI application that does data analysis on text files.',
      image: 'bookbot.png',
      url: 'https://github.com/iPhire/bookbot',
    },
    {
      title: 'BootDev AI Agent',
      description:
        'LLM-powered command-line program capable of reading, updating, and running Python code using the Gemini API.',
      image: 'bootdevai.png',
      url: 'https://github.com/iPhire/buildAiAgent',
    },
    {
      title: 'Personal Website',
      description: 'Website I work on occasionally during my free time.',
      image: 'hollowsoul.png',
      gif: 'hollowsoul.gif',
      url: 'https://hollowsoul.neocities.org/home',
    },
  ];
}
