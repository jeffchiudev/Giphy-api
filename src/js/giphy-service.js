export default class GiphyService {
  static getGif(gif) {
    return new Promise(function(resolve, reject) {
      request.onload = function()  {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response)
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}