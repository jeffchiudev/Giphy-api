import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

$(document).ready(function() {
  $('#giphySearch').click(function() {
    const gif = $('#giphy').val();
    $('#giphy').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${process.env.API_KEY}&limit=5`;

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