import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RickService} from './rick.service';
import {Episode} from './episode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rickapp';
  private episodes: Episode[];
  private loadingState = false;
  constructor(private readonly rickService: RickService) {
  }

  ngOnInit(): void {
    this.episodes = [];
    this.rickService.getEpisodes().subscribe(data => {
     data.map(episode => {
       this.episodes.push(episode);
     });
    });
  }

  ngOnDestroy(): void {
  }
}
