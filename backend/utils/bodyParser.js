module.exports = (request) => {
  return new Promise((resolve, reject) => {
    try {
      // fonksiyonun göndereceği cevabı tanımla
      let body = "";

      // frontenden body'nin her parçası geldiğinde onu al ve yukardaki değişkene ekle
      request.on("data", (chunck) => {
        body += chunck;
      });

      // yükleme bittiğinde json verisini js verisine çevir
      request.on("end", () => {
        // fonksiyonun çağrıldığı yere bady kısmını return et
        resolve(JSON.parse(body));
      });
    } catch (err) {
      // hata olursa hatayı döndür
      reject(err);
    }
  });
};
