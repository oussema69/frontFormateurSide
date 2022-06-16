import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'securite'
})
export class SecuritePipe implements PipeTransform {
  url="https://elearning.yourvideo.live/host/6267382387ef77f582094955"
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
