import { Component, OnInit } from '@angular/core';
import { ConfigFreeipService } from './config-freeip.service';
import { ConfigFreeip } from './config-freeip';

@Component({
  selector: 'app-config-freeip',
  template: `
    <p>
      config-freeip works!
    </p>
  `,
  styles: []
})
export class ConfigFreeipComponent implements OnInit {
  config: ConfigFreeip;
  headers;
  error;

  constructor(private configFreeipService: ConfigFreeipService) { }

  ngOnInit(): void {
  }

  showConfig() {
    this.configFreeipService.getConfig()
      .subscribe(
        (data: ConfigFreeip) => this.config = {
        hostname: data['hostname'],
        path: data['path'],
      },
      error => this.error = error);
  }

  showConfigResponse() {
    this.configFreeipService.getConfigResponse()
      // resp is of type `HttpResponse<ConfigFreeip>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body };
      });
  }


}
