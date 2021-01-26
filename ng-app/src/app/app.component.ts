import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'ng-app';

  constructor(private renderer: Renderer2) {}
  @ViewChild('maps') mapElem: ElementRef;

  ngAfterViewInit() {
    const srciptElem = this.renderer.createElement('script');
    srciptElem.text =
      '!function(){var e,t="https://claimfound.com",r=document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1],n=document.querySelector("head"),s=document.createElement("link");s.rel="stylesheet",s.href=t+"/css/styles.css",n.appendChild(s);var c=document.createElement("script");c.type="text/javascript",c.src=t+"/js/webpack-runtime.js",r.parentNode.insertBefore(c,r.nextSibling);var a=document.createElement("script");a.type="text/javascript",a.src=t+"/js/styles.js",r.parentNode.insertBefore(a,r.nextSibling);var i=document.createElement("script");i.type="text/javascript",i.src=t+"/js/commons.js",r.parentNode.insertBefore(i,r.nextSibling);var p=document.createElement("script");p.type="text/javascript",p.src=t+"/js/use-map.js",r.parentNode.insertBefore(p,r.nextSibling)}();';
    this.renderer.appendChild(this.mapElem.nativeElement, srciptElem);
  }
}
