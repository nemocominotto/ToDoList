import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaListComponent } from './thema-list.component';

describe('ThemaListComponent', () => {
  let component: ThemaListComponent;
  let fixture: ComponentFixture<ThemaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
