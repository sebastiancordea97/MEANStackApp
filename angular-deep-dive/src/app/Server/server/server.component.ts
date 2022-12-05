import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverCreationStatus:string = "No server was created";
  serverName = 'TestServer';

  constructor() {

  }

  onCeateServer():void {
    this.serverCreationStatus = "Server was Created!"
  }

  onUpdateServerName(eventData:Event):void {
    this.serverName = (<HTMLInputElement>eventData.target).value as string;
  }
}
