const MD5 = require("crypto-js/md5");
const md5 = require("js-md5");

export const fetchCharacters = (success, error) => {
  let ts = Date.now().toString();
  let publicAPI = '6eb0cc95d26564f272ab91b35d67b7b8';
  let privateAPI = '1abcaa893f3f59fd6c9f1534ef107a1f974fae41';
  let hashValue = ts + privateAPI + publicAPI;
  let hash = md5(hashValue);

  $.ajax({
    type: "GET",
    url: `https://gateway.marvel.com/v1/public/characters?ts=` +
    ts + `&apikey=6eb0cc95d26564f272ab91b35d67b7b8` + `&hash=` + hash,
    success,
    error
  });
};

export const fetchCharacter = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=6eb0cc95d26564f272ab91b35d67b7b8`,
    success,
    error
  });
};

export const searchCharacter = (query, success, error) => {
  $.ajax({
    type: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=6eb0cc95d26564f272ab91b35d67b7b8`,
    success,
    error
  });
}
