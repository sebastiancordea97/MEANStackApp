import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverCreationStatus = "No server was created";

  constructor() {

  }

  onCeateServer() {
    this.serverCreationStatus = "Server was Created!"
  }
}
