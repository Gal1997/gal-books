// src/data/books.js

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    description:
      "A classic novel of the Jazz Age. A story of love, wealth, and tragedy, it explores themes of ambition and the American Dream.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/634px-The_Great_Gatsby_Cover_1925_Retouched.jpg?20201214221805",
    listPrice: {
      amount: 10.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    description:
      "A powerful story about racial injustice. A deeply moving tale of integrity, courage, and human dignity in the face of prejudice.",
    thumbnail:
      "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/t/o/to_kill_a_mockingbird_cover-t34.jpg",
    listPrice: {
      amount: 7.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 3,
    title: "1984",
    description:
      "A dystopian novel about a totalitarian regime. A chilling exploration of surveillance, propaganda, and individual freedom.",
    thumbnail: "https://images.booksense.com/images/123/958/9788194958123.jpg",
    listPrice: {
      amount: 12.49,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    description:
      "A romantic novel about manners and marriage. A witty and humorous exploration of love, society, and class differences.",
    thumbnail: "https://images.penguinrandomhouse.com/cover/9780451530783",
    listPrice: {
      amount: 8.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    description:
      "A story about teenage rebellion and identity. An iconic tale capturing the struggles of adolescence and self-discovery.",
    thumbnail:
      "https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF894,1000_QL80_.jpg",
    listPrice: {
      amount: 6.49,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 6,
    title: "Moby-Dick",
    description:
      "An epic tale of obsession and revenge. A complex exploration of humanity, nature, and the pursuit of the unattainable.",
    thumbnail:
      "https://m.media-amazon.com/images/I/81oleYUW3EL._AC_UF1000,1000_QL80_.jpg",
    listPrice: {
      amount: 14.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 7,
    title: "War and Peace",
    description:
      "A sweeping novel of Russian society. A masterpiece blending historical events, personal struggles, and philosophical insights.",
    thumbnail: "https://images.penguinrandomhouse.com/cover/9781101003831",
    listPrice: {
      amount: 19.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 8,
    title: "The Hobbit",
    description:
      "A fantastical journey in Middle-earth. A tale of adventure, bravery, and the discovery of unexpected strength within.",
    thumbnail:
      "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496538667/a/af/64/147470-ml-1141823.jpg",
    listPrice: {
      amount: 11.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 9,
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "The first book in the Harry Potter series. A magical journey of friendship, courage, and the fight against darkness.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg",
    listPrice: {
      amount: 9.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    description:
      "An epic fantasy trilogy in one volume. A sweeping tale of heroism, friendship, and the struggle between good and evil.",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    listPrice: {
      amount: 24.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 11,
    title: "The Alchemist",
    description:
      "A philosophical novel about following your dreams. A timeless story of hope, perseverance, and self-discovery.",
    thumbnail: "https://i.harperapps.com/hcanz/covers/9780062315007/y648.jpg",
    listPrice: {
      amount: 13.49,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 12,
    title: "The Kite Runner",
    description:
      "A moving story of friendship and betrayal. A heartbreaking exploration of redemption, forgiveness, and human resilience.",
    thumbnail: "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg",
    listPrice: {
      amount: 10.49,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 13,
    title: "A Game of Thrones",
    description:
      "The first book in the epic fantasy series. A tale of power, intrigue, and betrayal set in a richly detailed world.",
    thumbnail: "https://i.harperapps.com/hcanz/covers/9780007459483/x293.jpg",
    listPrice: {
      amount: 14.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: 14,
    title: "The Fault in Our Stars",
    description:
      "A story about love and loss. A touching exploration of life, love, and the impact of impermanence.",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg",
    listPrice: {
      amount: 8.49,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: 15,
    title: "Becoming",
    description:
      "The memoir of former First Lady Michelle Obama. A candid, inspiring reflection on identity, family, and public service.",
    thumbnail: "https://m.media-amazon.com/images/I/81cJTmFpG-L.jpg",
    listPrice: {
      amount: 18.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
];

export default books;
