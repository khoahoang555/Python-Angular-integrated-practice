import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.scss']
})
export class MenuNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}