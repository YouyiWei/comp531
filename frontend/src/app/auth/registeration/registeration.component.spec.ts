import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationComponent } from './registeration.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('RegisterationComponent', () => {
  let component: RegisterationComponent;
  let fixture: ComponentFixture<RegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule ],
      declarations: [ RegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
