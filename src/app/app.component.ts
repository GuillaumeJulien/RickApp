import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RickService} from './rick.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rickapp';
  private episodes: Observable<any[]>;
  constructor(private readonly rickService: RickService) {
  }

  ngOnInit(): void {
    this.episodes = this.rickService.getEpisodes();
  }
}
