import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudformComponent } from './studform.component';

describe('StudformComponent', () => {
  let component: StudformComponent;
  let fixture: ComponentFixture<StudformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
