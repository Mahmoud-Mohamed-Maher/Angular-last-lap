import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProductsComponent } from './Component/products/products.component';
import { CategoryComponent } from './Component/category/category.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,NavComponent,FooterComponent,CategoryComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lap2';
}
