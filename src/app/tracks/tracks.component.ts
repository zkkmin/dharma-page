import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Track } from '../track';
import { MONKS } from '../monk-list';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  tracks: Track [];
  monkName: String;
  monkImage: String;

  selectedTrack: Track;
  
  onSelect(track: Track): void {
    this.selectedTrack = track;
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id <= MONKS.length) {
      const monk = MONKS.find(monk => monk.id == id);
      this.tracks = monk.tracks;
      this.monkImage = monk.image;
      this.monkName = monk.name;
      this.selectedTrack = this.tracks[0];
    }
    else {
      this.tracks = [];
    }
  }

  goBack(): void {
    this.location.back();
  }

}
