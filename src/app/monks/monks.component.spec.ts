import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonksComponent } from './monks.component';

describe('MonksComponent', () => {
  let component: MonksComponent;
  let fixture: ComponentFixture<MonksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
