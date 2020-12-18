import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToListComponent } from './return-to-list.component';

describe('ReturnToListComponent', () => {
  let component: ReturnToListComponent;
  let fixture: ComponentFixture<ReturnToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnToListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
