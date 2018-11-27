import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  CssTemplate: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CssTemplate = this.sanitizer.bypassSecurityTrustHtml(this.getCssTemplate());
  };


  getCssTemplate() {
    return '<span style="color:brown">\
              body<span style="color:black"> {\
          </span><span style="color:red">\
            <br>\
              &nbsp;&nbsp;    background-color <span style="color:mediumblue;"> <span style="color:black">: </span> lightblue<span style="color:black">;</span> </span><br>\
              </span><span style="color:black">}</span> <br>\
              h1 <span style = "color:black"> {</span><span style="color:red">\
                <br>\
                &nbsp;&nbsp; color <span style = "color:mediumblue"> <span style="color:black">: </span> white<span style="color:black">;</span> </span><br>\
            &nbsp;&nbsp; text-align <span style = "color:mediumblue"> <span style="color:black">: </span> center<span style="color:black">;</span> </span><br>\
              </span><span style="color:black">}</span> <br>\
              p <span style = "color:black"> {</span><span style="color:red">\
                <br>\
               &nbsp;&nbsp; font-family <span style = "color:mediumblue"> <span style="color:black">: </span> verdana<span style="color:black">;</span> </span><br>\
            &nbsp;&nbsp; font-size <span style = "color:mediumblue"> <span style="color:black">: </span> 20px<span style="color:black">;</span> </span><br>\
              </span><span style="color:black">}</span>\
              </span>';
  }


}
