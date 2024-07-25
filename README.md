<h1>Movie_App</h1>

Bu proje, film bilgilerini yönetmek için basit bir Node.js ve React uygulamasıdır. Aşağıda, projeyi nasıl kullanacağınıza dair bilgiler bulabilirsiniz.

<h2>Kurulum</h2>

<h2>Gereksinimler</h2>

Node.js (v12 veya üzeri)
npm (Node Paket Yöneticisi)

<h3>Adımlar</h3>

Bu projeyi yerel makinenize klonlayın veya indirin.
Proje dizinine gidin.
Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

bash
Kodu kopyala
npm install
Backend Kullanımı
Sunucuyu Başlatma
Aşağıdaki komutu kullanarak sunucuyu başlatın:

bash
Kodu kopyala
npm start
API Endpoints

<h3>Tüm Filmleri Getirme</h3>

URL: /api/movies
Metot: GET
Açıklama: Tüm filmleri getirir.
Yanıt:
json
Kodu kopyala
{
"movies": [
{
"id": "213976be-9157-4daa-992b-5b93f68540a6",
"title": "The Wolf of Wall Street",
"year": "2013",
"genre": ["Biography", "Comedy", "Crime"],
"rating": "9.4"
},
...
]
}

<h3>Yeni Film Oluşturma</h3>

URL: /api/movies
Metot: POST
Açıklama: Yeni bir film ekler.
Gövde:
json
Kodu kopyala
{
"title": "The Matrix",
"year": "2004",
"genre": ["Bilim Kurgu", " Macera", " Aksiyon"],
"rating": "9"
}
Yanıt:
json
Kodu kopyala
{
"id": "07621745-69f5-41b0-8207-a1988214e71b",
"title": "The Matrix",
"year": "2004",
"genre": ["Bilim Kurgu", " Macera", " Aksiyon"],
"rating": "9"
}

<h3>Belirli Bir Filmi Getirme</h3>

URL: /api/movies/:id
Metot: GET
Açıklama: Belirtilen ID'ye sahip filmi getirir.
Yanıt:
json
Kodu kopyala
{
"id": "213976be-9157-4daa-992b-5b93f68540a6",
"title": "The Wolf of Wall Street",
"year": "2013",
"genre": ["Biography", "Comedy", "Crime"],
"rating": "9.4"
}

<h3>Filmi Güncelleme</h3>

URL: /api/movies/:id
Metot: PUT
Açıklama: Belirtilen ID'ye sahip filmi günceller.
Gövde:
json
Kodu kopyala
{
"rating": "9.5"
}
Yanıt:
json
Kodu kopyala
{
"id": "213976be-9157-4daa-992b-5b93f68540a6",
"title": "The Wolf of Wall Street",
"year": "2013",
"genre": ["Biography", "Comedy", "Crime"],
"rating": "9.5"
}

<h3>Filmi Silme</h3>

URL: /api/movies/:id
Metot: DELETE
Açıklama: Belirtilen ID'ye sahip filmi siler.
Yanıt:
json
Kodu kopyala
{
"message": "Film silindi"
}

<h2>Frontend Kullanımı</h2>

<h3>Uygulamayı Başlatma</h3>

Projeyi çalıştırmak için aşağıdaki komutları kullanın:

bash
Kodu kopyala
cd frontend
npm start

<h3>React Bileşenleri</h3>

Card: Film kartını görüntüler.
Header: Uygulamanın üst kısmındaki başlık.
Hero: Ana sayfa üst kısmında yer alan karşılama bölümü.
InputField: Form giriş alanı bileşeni.
Loader: Yükleniyor bileşeni.
Error: Hata bileşeni.
Sayfalar
Main: Ana sayfa, tüm filmleri listeler.
Detail: Film detay sayfası.
Create: Yeni film oluşturma sayfası.

<h2>Yönlendirme</h2>

React Router kullanılarak sayfalar arasında geçiş sağlanır.

<h2>Katkıda Bulunma</h2>

Katkıda bulunmak için lütfen bir pull request gönderin veya bir issue açın.

<h2>Ekran Görüntüleri</h2>

![](movies.gif)
