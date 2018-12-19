import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in a previously registered user', () => {
    spyOn(component, 'isRegistered').and.callFake((a, b) => ((a === 'Youyi Wei') && (b === 'weiyouyi')));
    component.login('Youyi Wei', 'weiyouyi');
    expect(component.loginStatus).toBe('user logged in');
    expect(component.loginMes).toBe('Login success');
  });

  it('should not log in an invalid user', () => {
    component.login('Youyi', 'weiyouyi');
    expect(component.loginStatus).toBe('user not logged in');
    expect(component.loginMes).toBe('Login error');
  });

});
