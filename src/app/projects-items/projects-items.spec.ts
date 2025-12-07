import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsItems } from './projects-items';

describe('ProjectsItems', () => {
  let component: ProjectsItems;
  let fixture: ComponentFixture<ProjectsItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
