import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { LoginService } from '../login-page/login.service';
import { CrumbsService } from '../crumbs.service';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
  crumbs: Array<Breadcrumb> = [];

  constructor(private loginService: LoginService,
              private crumbsService: CrumbsService,
              private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
      this.crumbs = this.crumbsService.getBreadCrumbs();
    }, 1000);
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      this.crumbsService.addNewCrumb('Courses', ['/courses']);
    }
  }
}
