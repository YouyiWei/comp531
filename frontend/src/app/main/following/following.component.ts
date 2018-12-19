import { Component, OnInit, Input, NgModule} from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})

@NgModule({
  declarations: [ HeadlineComponent ]
})

export class FollowingComponent implements OnInit {

  @Input() picsSrcF: string;
  @Input() followingName: string;
  @Input() statusF: string;

  constructor() { }

  ngOnInit() {
  }

}
