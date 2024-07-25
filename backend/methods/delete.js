const fs = require("fs");

module.exports = async (req, res) => {
  // yapılan isteğin temel adresi
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));

  // url'in sonundaki id değerini bir değişkene aktar.
  const id = req.url.split("/")[3];

  if (baseUrl === "/api/movies" && id) {
    // bütün filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // id'li filmi dizide ara
    const isFound = data.movies.find((i) => i.id === id);

    // diziden id'si bilinen film yoksa hata yolla
    if (!isFound) {
      res.writeHead(404);
      return res.end("ID Geçersiz");
    }

    // diziden id'si bilinen filmi kaldır
    const filtered = data.movies.filter((item) => item.id != id);

    // json dosyasına yeni diziyi aktar
    fs.writeFileSync(
      "./data/movies.json",
      JSON.stringify({ movies: filtered })
    );

    // client'a cevap gönder
    res.writeHead(204, { "Content-Type": "application/json" });
    res.end();
  } else {
    res.writeHead(404);
    return res.end("Yol Bulunamadı");
  }
};
