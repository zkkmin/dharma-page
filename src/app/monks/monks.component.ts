import { Component, OnInit } from '@angular/core';
import { MONKS } from '../monk-list';

@Component({
  selector: 'app-monks',
  templateUrl: './monks.component.html',
  styleUrls: ['./monks.component.css']
})
export class MonksComponent implements OnInit {

  monks = MONKS;

  constructor() { }

  ngOnInit() {
  }

}
