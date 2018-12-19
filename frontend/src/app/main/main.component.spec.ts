import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { FollowingComponent } from './following/following.component';
import { PostsComponent } from './posts/posts.component';
import { HeadlineComponent } from './headline/headline.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule ],
      declarations: [ MainComponent, FollowingComponent, PostsComponent, HeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out a user', () => {
    //pretend logging in
    localStorage.setItem('stgName', 'YouyiWei');

    //log out
    component.logOut();

    var stgName;
    if (window.localStorage) {
			stgName = localStorage.getItem('stgName');
		}
		else {
			window.alert('No localStorage support');
		}
    expect(stgName).toBe(null);
  });

  it('should fetch articles for current logged in user', () => {
    //pretend logging in
    localStorage.setItem('stgName', 'YouyiWei');

    var stgName;
    if (window.localStorage) {
			stgName = localStorage.getItem('stgName');
		}
		else {
			window.alert('No localStorage support');
    }

    var ret = component.getPostsTest(stgName).then(res => {
      let tmp = Object.values(res);
      for (var i = 0; i < tmp.length; i++)
        expect(tmp[i]).toBe(stgName);
    });
  });

  it('should update the search keyword', () => {
    component.filterArticle("Rice");
    expect(component.searchKeyword).toBe("Rice");
  });

  it('should filter displayed articles by the search keyword', () => {
    var ret = component.filterArticleTest("Rice").then(res => {
      let tmp = Object.values(res);
      for (var i = 0; i < tmp.length; i++)
        expect(tmp[i].toString().indexOf("Rice") > -1).toBe(true);
    });
  })

  it('should remove articles when removing a follower', () => {
    var ret = component.unfollowTest("Jane").then(res => {
      let tmp = Object.values(res);
      expect(tmp.length > 0).toBe(true);
      for (var i = 0; i < tmp.length; i++)
        expect(tmp[i] != "Jane").toBe(true);
    });
  })

});
