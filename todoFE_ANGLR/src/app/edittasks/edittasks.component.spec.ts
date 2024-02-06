import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittasksComponent } from './edittasks.component';

describe('EdittasksComponent', () => {
  let component: EdittasksComponent;
  let fixture: ComponentFixture<EdittasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdittasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
