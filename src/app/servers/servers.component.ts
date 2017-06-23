import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  
  constructor() { 
    setTimeout (() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(e) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

}
