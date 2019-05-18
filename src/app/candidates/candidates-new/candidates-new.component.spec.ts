import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesNewComponent } from './candidates-new.component';

describe('CandidatesNewComponent', () => {
  let component: CandidatesNewComponent;
  let fixture: ComponentFixture<CandidatesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
