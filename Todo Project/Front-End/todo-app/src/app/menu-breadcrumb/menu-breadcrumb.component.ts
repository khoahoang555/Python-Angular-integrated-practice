import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-breadcrumb',
  templateUrl: './menu-breadcrumb.component.html',
  styleUrls: ['./menu-breadcrumb.component.scss']
})
export class MenuBreadcrumbComponent implements OnInit {
  @Input() namePath: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
