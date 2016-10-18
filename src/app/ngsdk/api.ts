import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export default class Api {

    public currentUser: string;
    public token: string;
    private baseUrl = "http://localhost:8000/api/";

    constructor(public http: Http) {}

    public jsonGet(url: string): Promise<{}> {
        return new Promise((resolve, reject) => {
            let headers = {
                "Accept": "application/json",
            };

            this.send("GET", url, headers).then(resp => {
                resolve(resp);
            }).catch(ex => {
                reject(ex);
            });
        });
    }

    public jsonPost(url: string, body?: any): Promise<any> {
        return this.sendJson("POST", url, body);
    }

    public jsonPatch(url: string, body?: any): Promise<any> {
        return this.sendJson("PATCH", url, body);
    }

    public jsonPut(url: string, body?: any): Promise<any> {
        return this.sendJson("PUT", url, body);
    }

    public delete(url: string): Promise<any> {
        return this.send("DELETE", url, null, null, false);
    }

    /**
     * Send a login request
     * @param {string} url - the uri to send the request to
     * @param {string} username - the users username
     * @param {string} hash - the hash of the password
     * @return {Promise<Response>} the response in a promise
     */
    public login(url: string, username: string, hash: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let base = btoa(username + ":" + hash);
            let headers = {
                "Accept": "application/json",
                "Authorization": "Basic " + base,
            };
            this.send("POST", url, headers).then(resp => {
                resolve(resp);
            }).catch(ex => {
                reject(ex);
            });
        });
    }

    private send(method: string, uri: string, headers?: any, body?: string, isJson = true): Promise<{}> {
        return new Promise((resolve, reject) => {
            let url = this.baseUrl + uri;
            if (this.token) {
                if (headers === undefined || headers === null) {
                    headers = {};
                }
                headers.Authorization = "Token " + this.token;
            }
            let requestOptions = new RequestOptions({
                body: body,
                headers: new Headers(headers),
                method: method,
            });
            this.http.request(url, requestOptions)
                .subscribe(
                    resp => {
                        if (isJson === true) {
                            resolve(resp.json());
                        } else {
                            resolve(resp);
                        }
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    private sendJson(method: string, url: string, body?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (body) {
                body = JSON.stringify(body);
            } else {
                body = null;
            }
            let headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
            };

            this.send(method, url, headers, body).then(resp => {
                resolve(resp);
            }).catch(ex => {
                reject(ex);
            });
        });
    }
}
