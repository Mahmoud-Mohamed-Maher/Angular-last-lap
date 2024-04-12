import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeborder]',
  standalone: true
})
export class ChangeborderDirective {

  @Input('appChangeborder') Border: string="3px solid  red";
  constructor(private ele:ElementRef) 
  {
    this.ele.nativeElement.style.boxShadow= "2px 5px #888888";

   }

   ngOnChanges() {
   
      this.ele.nativeElement.style.border= this.Border;
    
  }

@HostListener('mouseover') over()
{
  this.ele.nativeElement.style.boxShadow= "7px 14px #888888";
}

@HostListener('mouseleave') leave()
{
  this.ele.nativeElement.style.boxShadow= "2px 5px #888888";
}


}
