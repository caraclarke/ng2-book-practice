import { Injectable } from "@angular/core";
import PassitSDK from "passit-sdk-js";
import Api from "./api";

/**
 * Angular wrapper of PassitSDK that swaps out the api class with one that uses
 * $http instead of fetch. This is done for better integration with angular
 * tooling like Protractor.
 */
@Injectable()
export default class NgPassitSDK extends PassitSDK {
    protected api: any;  // Is there a better way than any?

    constructor(api: Api) {
        super();
        this.api = api;
    }
}
