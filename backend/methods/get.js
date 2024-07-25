const fs = require("fs");

module.exports = async (req, res) => {
  // yapılan isteğin temel adresi
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // url'in sonundaki id değerini bir değişkene aktar.
  const id = req.url.split("/")[3];

  if (req.url === "/api/movies") {
    //1) durum kodu belirle
    res.statusCode = 200;

    //2) headerleri belirle
    res.setHeader("Content-Type", "application/json");

    //3) json dosyasından bütün filmleri al
    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    //4) client'a cevap gönder
    return res.end(movies);

    return res.end("Bütün filmleri gönder");
  } else if (baseUrl === "/api/movies" && id) {
    //1) bütün filmerli al (javascript formatında)
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    //2) url'e eklenen id'ye karşılık gelen filmi dizide bul
    const movie = data.movies.find((movie) => movie.id === id);
    console.log(movie);

    if (movie) {
      //3) eğerki film bulunursa client'a gönder
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(movie));
    } else {
      //4) film bulunamazsa client'a hata gönder
      return res.end("Geçersiz Id");
    }
  } else {
    return res.end("Yol bulunamadı");
  }
};
