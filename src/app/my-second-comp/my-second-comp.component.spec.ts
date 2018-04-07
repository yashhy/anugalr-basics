import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondCompComponent } from './my-second-comp.component';

describe('MySecondCompComponent', () => {
  let component: MySecondCompComponent;
  let fixture: ComponentFixture<MySecondCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
