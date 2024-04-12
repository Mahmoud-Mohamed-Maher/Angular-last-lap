import { Component } from '@angular/core';
import { ProserviceService } from '../../service/proservice.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  providers:[ProserviceService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
constructor(private proservice:ProserviceService){}
}
