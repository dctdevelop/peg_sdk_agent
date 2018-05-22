import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";

@Injectable()
export class PegSDK {
  url = "https://api.pegasusgateway.com";
  user = null;
  token = null;
  objects = {};
  constructor(public http: HttpClient, public alert: AlertController) {
    console.log("Hello PegsdkProvider Provider");
  }

  mapCollection(array, key = "id") {
    var collection = {};
    array.forEach((element) => {
      collection[element[key]] = element;
    });
    return collection;
  }

  logout() {
    this.objects = {};
    this.user = null;
    this.token = null;
  }

  load(resource) {
    var data;
    var promise = new Promise((resolve, reject) => {
      if (this.objects[resource]) {
        return resolve(this.objects[resource]);
      }
      console.info("loading " + resource);
      this.get(resource + "?set=500")
        .then((resp: any) => {
          if (resource == "user") {
            data = this.objects[resource] = resp;
            resolve(data);
          } else {
            console.log(resp);
            data = this.objects[resource] = resp.data;
            if (resp.pages > 1) {
              for (let index = 2; index <= resp.pages; index++) {
                this.get(resource + "?set=500&page=" + index)
                  .then((resp: any) => {
                    this.objects[resource] = this.objects[resource].concat(resp.data);
                    if (this.objects[resource].length == resp.total) {
                      this.objects[resource].collection = this.mapCollection(this.objects[resource]);
                      resolve(this.objects[resource]);
                    }
                  })
                  .catch((err) => {
                    reject(err);
                  });
              }
            } else {
              this.objects[resource].collection = this.mapCollection(this.objects[resource]);
              resolve(data);
            }
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  get(uri) {
    var symbol = "?";
    if (uri.indexOf("?") > -1) {
      symbol = "&";
    }
    return new Promise((resolve, reject) => {
      this.http.get("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + this.token, { headers: this.headers() }).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  post(uri, params) {
    var symbol = "?";
    if (uri.indexOf("?") > -1) {
      symbol = "&";
    }
    return new Promise((resolve, reject) => {
      this.http
        .post("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + this.token, params, { headers: this.headers() })
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  put(uri, params) {
    var symbol = "?";
    if (uri.indexOf("?") > -1) {
      symbol = "&";
    }
    return new Promise((resolve, reject) => {
      this.http
        .put("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + this.token, params, { headers: this.headers() })
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  delete(uri) {
    var symbol = "?";
    if (uri.indexOf("?") > -1) {
      symbol = "&";
    }
    return new Promise((resolve, reject) => {
      this.http.delete("https://api.pegasusgateway.com/" + uri + symbol + "tracker=" + this.token, { headers: this.headers() }).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  login(token) {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.pegasusgateway.com/assets/query?tracker=" + token, { headers: this.headers() }).subscribe(
        (data) => {
          this.user = data;
          this.token = token;
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  sendEvent(eventData) {
    return this.post("assets/event", eventData);
  }

  headers() {
    var headers: HttpHeaders = new HttpHeaders();
    headers.append("token", this.token);
    return headers;
  }

  ErrorDefault(e, title = null, message = null) {
    console.error(e);
    if (!title) {
      if (e.status == 500) title = "Internal Server Error";
      else if (e.status == 400) title = "Bad Request";
      else title = e.statusText;
    }
    console.error(e);
    try {
      if (e._body) {
        message = JSON.parse(e._body).message;
      }
    } catch (error) {
      message = JSON.stringify(e);
    }
    this.alert
      .create({
        title: title,
        subTitle: e.errorStatus || null,
        message: message,
        buttons: ["OK"]
      })
      .present();
  }
}
