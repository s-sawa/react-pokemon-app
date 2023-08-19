export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    // fetch でurlのデータを、resで受け取り、それをJSON形式に変換し
    // json化したものをdataで受け取り、resolve関数で引数にdataを与えると
    // return でJSON形式で返す
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        // console.log(data)
      });
  });
};
