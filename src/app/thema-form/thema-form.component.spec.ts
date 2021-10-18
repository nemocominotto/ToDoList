import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaFormComponent } from './thema-form.component';

describe('ThemaFormComponent', () => {
  let component: ThemaFormComponent;
  let fixture: ComponentFixture<ThemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
