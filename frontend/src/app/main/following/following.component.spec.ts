import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingComponent } from './following.component';

import { HeadlineComponent } from '../headline/headline.component'

describe('FollowingComponent', () => {
  let component: FollowingComponent;
  let fixture: ComponentFixture<FollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingComponent, HeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
