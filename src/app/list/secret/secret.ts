/*
* id: secret id
* name: name of secret
* type: website, not URL
* visible_data: username
* secrets: key value store, run through decrypt to make more readable
* group_id: id for group secret is added to if applicable
*/

export class Secret {
  public id: number;
  public name: string;
  public type: string;
  public visible_data: {
    "username": string
  };
  public secrets: {
    "password": string
  };
  public group_id?: number;
}
