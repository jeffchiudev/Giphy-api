import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import GiphyService from './giphy-service.js'

$(document).ready(function() {
  $('#giphySearch').click(function() {
    let gif = $('#giphy').val();
    $('#giphy').val("");
    let giphyPromise = GiphyService.getGif(gif);
    giphyPromise.then(function(response) {
      const body = JSON.parse(response);
      let j = Math.floor(Math.random() * Math.floor(25))
      $('.showGif').append(`<img src="${response.data[j].images.original.url}">`);
    }, function(error) {
      $('.showGif').append(`There was an error finding your gif: $`);
    });
  });
});
/*
  $('#giphyTrending').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5&rating=g`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif').append(`<img src="${response.data[0].images.original.url}">`);
    }
  });
  
  $('#giphyRandom').click(function() {
    
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif').append(`<img src="${response.data.images.original.url}">`);
    }
  });

  $('#giphyTranslate').click(function() {
    const gif = $('#translateGiphy').val();
    $('#translateGiphy').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=${gif}&int=10`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif').append(`<img src="${response.data.images.original.url}">`);
    }
  });
}); 
*/