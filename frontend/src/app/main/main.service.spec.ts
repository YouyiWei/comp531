import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});
