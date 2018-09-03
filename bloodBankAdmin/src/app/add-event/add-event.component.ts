import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  today:any;


  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.adminservice.currentDateBehavoiur.subscribe(today => this.today = today);
  }

}
