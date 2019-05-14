import { Component, OnInit } from '@angular/core';
import { Log } from '../model/log';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs() : void {
    this.logService.getLogs().subscribe(logs => this.logs = logs);
  }

  delete(log : Log) : void {
    this.logs = this.logs.filter(l => l !== log);
    this.logService.delete(log).subscribe();
  }

  modify(log : Log) : void{
    this.logs = this.logs.filter(l => l !== log);
    this.logService.modifyLog(log);
  }

}
