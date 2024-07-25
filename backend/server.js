const http = require("http");

const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");

// 1) server oluştur
const server = http.createServer((req, res) => {
  console.log("😀😀 İSTEK GELDİ", req.method);
  // frontende gönderilecek bütün cevaplara eklenecek ve cros hatasını engelleyecek

  res.setHeader("Access-Control-Allow-origin", "*");

  // istek atılan method türüne göre client'a cevap vericek fonksiyonu belirledik. Fonksiyonları module yapısı sayesinde kod kalabalığı olmaması için ayrı dostalarda tanımladık.
  switch (req.method) {
    // Frontend'ten bir post/put/patch/delete isteği atıldığı zaman tarayıcı öncelikle server'ın bu istek tiplerini kabul edip etmediğini kontrol etmek amacıyala options methoduyla istek atıyor. Eğer options isteği gelince cevap göndermezsek diğer isteği hiç atmıyor options gelince doğru header'lar ile cevap verirsek options'ın ardından asıl isteği gönderiyor.

    case "OPTIONS":
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, PUT, PATCH, OPTIONS"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.end();
      break;

    case "GET":
      getRequest(req, res);
      break;

    case "POST":
      postRequest(req, res);
      break;

    case "DELETE":
      deleteRequest(req, res);
      break;

    default:
      // cevabın durum kodunu beliler
      res.statusCode = 404;

      // gönderilecek cevaba içeriğin tipini headers olarak ekle
      res.setHeader("Content-Type", "application/json");

      // cevabın içeriğini belirleme
      res.write(
        JSON.stringify({
          message: "İstek yapılan adres tanımsız",
        })
      );
      // client'a cevabı gönder
      res.end();
  }
});

// 2) berlirli porta gelen istekleri dinle

const port = 5005;

server.listen(port, () => {
  console.log(`Server ${port} 'a gelen istekleri dinlemeye başladı.`);
});
