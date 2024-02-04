import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtasksComponent } from './showtasks.component';

describe('ShowtasksComponent', () => {
  let component: ShowtasksComponent;
  let fixture: ComponentFixture<ShowtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowtasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
