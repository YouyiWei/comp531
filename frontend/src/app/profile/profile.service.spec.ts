import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });

  it('should fetch the logged in user\'s profile information', inject([ProfileService], (service: ProfileService) => {
    //pretend logging in
    //localStorage.setItem('stgName', 'YouyiWei');

    var ret = service.getProfileTest("Youyi Wei").then(res => {
      let tmp = Object.values(res);
      expect(tmp[0]).toBe("https://cpb-us-e1.wpmucdn.com/news-network.rice.edu/dist/c/2/files/2018/09/0904_HYDRAGAIN-b-1gilb80.jpg");
      expect(tmp[1]).toBe("Youyi Wei");
      expect(tmp[2]).toBe("yw76@rice.edu");
      expect(tmp[3]).toBe("832-661-5973");
      expect(tmp[4]).toBe("77005");
      expect(tmp[5]).toBe("weiyouyi");
      expect(tmp[6]).toBe("01/25/1996");
      
    });

  }));

});
