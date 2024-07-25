export const inputs = [
  {
    label: "Başlık",
    type: "text",
    name: "title",
  },
  {
    label: "Kategoriler ( ' , ' ile ayırınız)",
    type: "text",
    name: "genre",
  },
  {
    label: "Puan",
    type: "number",
    name: "rating",
    min: 0,
    max: 10,
  },
  {
    label: "Yıl",
    type: "number",
    name: "year",
  },
];
