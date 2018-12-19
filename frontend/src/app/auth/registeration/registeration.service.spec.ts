import { TestBed } from '@angular/core/testing';

import { RegisterationService } from './registeration.service';

import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],
  }));

  it('should be created', () => {
    const service: RegisterationService = TestBed.get(RegisterationService);
    expect(service).toBeTruthy();
  });
});
