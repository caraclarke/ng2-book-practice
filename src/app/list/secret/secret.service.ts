/*
* @angular
*/
import { Injectable } from "@angular/core";

/*
* Passit
*/
import NgPassitSDK from "../../ngsdk/sdk.ts";
import { Secret } from "./secret";

@Injectable()
export class SecretService {

  constructor(public sdk: NgPassitSDK) {}

  /*
  * send create secret post to sdk
  */
  public createSecrets(secret: Secret) {
    let data = {
      name: secret.name,
      type: secret.type,
      visible_data: {
        "username": secret.visible_data
      },
      secrets: {
        "password": secret.secrets
      }
    };

    return this.sdk.create_secret(data)
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      console.error(err);
    });

  }

  /*
  * get secrets
  */
  public getSecrets(): Promise<Secret[]> {
    let tempArray = [];

    return this.sdk.list_secrets()
      .then((resp) => {
        // console.log(resp)
        resp.map((item) => {

          tempArray.push({
            id: item.id,
            name: item.name,
            type: item.type,
            visible_data: {
              "username": item.data.username
            },
            secrets: {
              "password": item.secret_through_set[0].data.password
            },
            group_id: item.secret_through_set[0].group
          }); // end push

        });

        return tempArray;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /*
  * edit/update secret
  */
  public updateSecret(secret: Secret) {

    // console.log("secret passed in: ", secret);

    return this.sdk.update_secret(secret)
      .then(resp => resp)
      .catch((err) => {
        console.error(err);
      });
  }

  /*
  * delete seccret
  */

  public deleteSecret(secretId: number) {
    console.log(secretId);

    // return this.sdk.delete_secret(secretId)
    //   .then((resp) => {
    //     console.log(resp);
    //     return resp;
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  /*
  * get secret from id
  * then decrypt secret
  * so user can see unencrypted secret
  */
  public showSecret(secret) {

    return this.sdk.get_secret(secret.id)
      .then((data) => {
        return this.sdk.decrypt_secret(data)
          .then((resp) => {
            return resp;
          })

      })
      .catch(err => console.error(err));
  }

}
