import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver'
  serverCreated = false
  servers = ['Test', 'Test 1']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created!' + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
