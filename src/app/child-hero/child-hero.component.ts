import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-hero',
  templateUrl: './child-hero.component.html',
  styleUrls: ['./child-hero.component.css']
})
export class ChildHeroComponent implements OnInit {

  @Input() cHero!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
