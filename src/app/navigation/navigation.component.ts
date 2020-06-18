import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './../auth/guard/auth.guard';
import { AuthService } from './../auth/service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faUserFriends, faHome, faGraduationCap, faUserGraduate, faUsers, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy{

  subscription$: Subscription;
  studentsIcon = faUserGraduate;
  instructorsIcon = faUsers;
  homeIcon = faHome;
  lessonsIcon = faMoneyCheck

  constructor(public authService: AuthService,
              public router: Router,
              public route: ActivatedRoute) { }



  logout(){
    this.subscription$ = this.authService.invalidateToken().subscribe();
    // this.router.navigateByUrl ('/login');
  }

  ngOnDestroy(){
    this.subscription$ ? this.subscription$.unsubscribe() : null;
  }

}
