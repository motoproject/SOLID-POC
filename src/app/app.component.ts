import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang9';
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
