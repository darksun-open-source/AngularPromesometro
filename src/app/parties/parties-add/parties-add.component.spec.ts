import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesAddComponent } from './parties-add.component';

describe('PartiesAddComponent', () => {
  let component: PartiesAddComponent;
  let fixture: ComponentFixture<PartiesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
