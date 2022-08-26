import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'CNC Machine Tool',
      icon: 'fa-solid fa-screwdriver-wrench',
    },
    {
      number: '3',
      name: 'Engine Predictive',
      icon: 'fa-solid fa-virus',
    },
    {
      number: '4',
      name: 'Customer Churn',
      icon: 'fa-solid fa-business-time',
    },
    {
      number: '5',
      name: 'Service Propensity Model',
      icon: 'fa-solid fa-hand-sparkles ',
    },
    {
      number: '6',
      name: 'Route plan for Service',
      icon: 'fa-solid fa-person-biking',
    },
    {
      number: '7',
      name: 'Market Basket Analysis',
      icon: 'fa-solid fa-book-journal-whills',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
