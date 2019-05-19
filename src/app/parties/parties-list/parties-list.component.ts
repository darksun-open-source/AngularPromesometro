import { Component, OnInit } from '@angular/core';
import { HackathonService } from 'src/app/services/hackathon.service';
import { Partido } from 'src/app/models/party';

@Component({
  selector: 'app-parties-list',
  templateUrl: './parties-list.component.html',
  styleUrls: ['./parties-list.component.scss'],
  providers: [HackathonService]
})
export class PartiesListComponent implements OnInit {
  public parties: [Partido];

  constructor(private hackathonService: HackathonService) {
    
  }

  ngOnInit() {
    this.getTodo()
  }
  
  getTodo(){
    this.hackathonService.listarPartidos().subscribe(response => {
      console.log(response);
      
      this.parties = response.data.Items
      console.log(this.parties)
    })
  }

}
