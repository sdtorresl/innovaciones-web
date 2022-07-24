import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gtag from 'src/app/core/analytics';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  name: String;

  constructor(private route: ActivatedRoute) {
    gtag('event', 'conversion', { 'send_to': `${environment.googleAdsId}/${environment.googleAdsConversionEvent}` });
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
  }

}
