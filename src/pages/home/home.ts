import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PegSDK } from "../../providers/pegsdk/pegsdk";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  tracker = "9HRHEHH0";
  event = {
    latitude: 25.783748,
    longitude: -80.293418,
    mph: 0,
    altitude: 0,
    heading: 0,
    label: "panic",
    use_server_time: true
  };
  constructor(public navCtrl: NavController, public pegsdk: PegSDK) {}

  login() {
    console.log();
    this.pegsdk
      .login(this.tracker)
      .then((resp) => {
        console.log(resp);
      })
      .catch(console.error);
  }

  sendEvent() {
    this.pegsdk
      .sendEvent(this.event)
      .then((resp) => {
        this.pegsdk.alert
          .create({
            title: "Event Sent Successfully",
            message: JSON.stringify(resp),
            buttons: ["OK"]
          })
          .present();
      })
      .catch((err) => {
        this.pegsdk.ErrorDefault(err);
      });
  }

  logout() {
    this.pegsdk.logout();
  }
}
