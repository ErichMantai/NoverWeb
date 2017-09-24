export class GenericClass {
  key: string;
  constructor() {
  }

  parseResponse(response: any): GenericClass {
    const obj = new GenericClass()
    Object.keys(response).forEach(key => {
      obj[key] = response[key]
    })
    return obj;
  }
}
