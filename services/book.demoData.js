/*
 The demo data started simple , and down below I added more and more details to each object
For example : in book #1 , game of thrones , there is no description or publish date or author etc etc
This is all added at the end of this file, using chat-gpt to generate all the data.
*/
import { utilService } from "./util.service.js";

const books = [
  {
    title: "A Game of Thrones",
    subtitle:
      "The first book in the epic fantasy series. A tale of power, intrigue, and betrayal set in a richly detailed world.",
    thumbnail: "https://i.harperapps.com/hcanz/covers/9780007459483/x293.jpg",
    listPrice: {
      amount: 14.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    title: "To Kill a Mockingbird",
    subtitle:
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
    title: "The Lord of the Rings",
    subtitle:
      "An epic fantasy trilogy in one volume. A sweeping tale of heroism, friendship, and the struggle between good and evil.",
    thumbnail:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    listPrice: {
      amount: 24.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    title: "Becoming",
    subtitle:
      "The memoir of former First Lady Michelle Obama. A candid, inspiring reflection on identity, family, and public service.",
    thumbnail: "https://m.media-amazon.com/images/I/81cJTmFpG-L.jpg",
    listPrice: {
      amount: 4.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    subtitle:
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
    title: "Moby-Dick",
    subtitle:
      "An epic tale of obsession and revenge. A complex exploration of humanity, nature, and the pursuit of the unattainable.",
    thumbnail:
      "https://m.media-amazon.com/images/I/81oleYUW3EL._AC_UF1000,1000_QL80_.jpg",
    listPrice: {
      amount: 14.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    title: "War and Peace",
    subtitle:
      "A sweeping novel of Russian society. A masterpiece blending historical events, personal struggles, and philosophical insights.",
    thumbnail: "https://images.penguinrandomhouse.com/cover/9781101003831",
    listPrice: {
      amount: 4.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    title: "The Hobbit",
    subtitle:
      "A fantastical journey in Middle-earth. A tale of adventure, bravery, and the discovery of unexpected strength within.",
    thumbnail:
      "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496538667/a/af/64/147470-ml-1141823.jpg",
    listPrice: {
      amount: 11.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    title: "The Kite Runner",
    subtitle:
      "A moving story of friendship and betrayal. A heartbreaking exploration of redemption, forgiveness, and human resilience.",
    thumbnail: "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg",
    listPrice: {
      amount: 10.49,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    title: "1984",
    subtitle:
      "A dystopian novel about a totalitarian regime. A chilling exploration of surveillance, propaganda, and individual freedom.",
    thumbnail: "https://images.booksense.com/images/123/958/9788194958123.jpg",
    listPrice: {
      amount: 4.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    title: "The Alchemist",
    subtitle:
      "A philosophical novel about following your dreams. A timeless story of hope, perseverance, and self-discovery.",
    thumbnail: "https://i.harperapps.com/hcanz/covers/9780062315007/y648.jpg",
    listPrice: {
      amount: 4.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    title: "The Catcher in the Rye",
    subtitle:
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
    title: "The Great Gatsby",
    subtitle:
      "A classic novel of the Jazz Age. A story of love, wealth, and tragedy, it explores themes of ambition and the American Dream.",
    thumbnail:
      "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
    listPrice: {
      amount: 4.99,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    title: "The Fault in Our Stars",
    subtitle:
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
    title: "Pride and Prejudice",
    subtitle:
      "A romantic novel about manners and marriage. A witty and humorous exploration of love, society, and class differences.",
    thumbnail: "https://images.penguinrandomhouse.com/cover/9780451530783",
    listPrice: {
      amount: 8.99,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
];

books.forEach((book) => {
  // Add some random pageCount to each book , 1-1000
  book.pageCount = Math.floor(Math.random() * 1000) + 1;

  // Add random ID for each book
  book.id = utilService.makeId();

  // Add the year the book was published

  const publishedDates = {
    "A Game of Thrones": 1996,
    "To Kill a Mockingbird": 1960,
    "The Lord of the Rings": 1954,
    /* ###################################################################################*/
    Becoming: 2018 /* NOTE FOR SELF :  In JavaScript, string keys that don't contain spaces or special characters can be written without quotes */,
    /* ###################################################################################*/
    "Harry Potter and the Sorcerer's Stone": 1997,
    "Moby-Dick": 1851,
    "War and Peace": 1869,
    "The Hobbit": 1937,
    "The Kite Runner": 2003,
    1984: 1949 /* Same thing happenes here*/,
    "The Alchemist": 1988,
    "The Catcher in the Rye": 1951,
    "The Great Gatsby": 1925,
    "The Fault in Our Stars": 2012,
    "Pride and Prejudice": 1813,
  };
  book.publishedDate = publishedDates[book.title];

  // Add meaningful and detailed descriptions
  const descriptions = {
    "A Game of Thrones":
      "'A Game of Thrones' begins the epic journey into Westeros, a land where summers span decades and winters last lifetimes. Amid political intrigue, betrayal, and shifting alliances, noble families compete for control of the Iron Throne. Through vivid storytelling, George R. R. Martin masterfully portrays a world teetering on the brink of chaos, with characters who are as flawed as they are captivating. From the icy North to the warm South, this tale of power and honor explores humanity’s darkest and most heroic instincts, making it a timeless fantasy saga that immerses readers in its richly imagined universe.",
    "To Kill a Mockingbird":
      "Harper Lee’s 'To Kill a Mockingbird' tells a moving story of justice and morality set in the racially segregated American South. Narrated by young Scout Finch, the book examines her father Atticus Finch’s courageous defense of a wrongfully accused Black man. With a blend of innocence and wisdom, Scout captures the beauty and contradictions of her community. This profound novel tackles issues of race, empathy, and integrity with grace, urging readers to confront the prejudices in their own lives. It’s a timeless exploration of humanity’s potential for compassion and the courage needed to uphold justice in the face of adversity.",
    "The Lord of the Rings":
      "'The Lord of the Rings' by J.R.R. Tolkien weaves a tale of friendship, courage, and sacrifice. Frodo Baggins, tasked with destroying the powerful One Ring, embarks on a perilous journey through Middle-earth. Alongside his loyal companions, Frodo faces insurmountable odds, encountering mystical creatures, epic battles, and inner struggles. Tolkien’s masterful prose creates a world brimming with history, culture, and wonder. More than just a fantasy, the story delves deep into the human spirit’s resilience against evil. A timeless classic, it continues to inspire readers with its message of hope, unity, and the enduring battle between light and darkness.",
    Becoming:
      "'Becoming' is a heartfelt and empowering memoir by Michelle Obama. From her modest upbringing in Chicago to her time in the White House, Michelle shares her journey with candor and wit. This inspiring narrative explores her triumphs and struggles, from her early career as a lawyer to her role as a mother and advocate. She reflects on the challenges of balancing public and private life and her mission to inspire change. With its themes of resilience, identity, and leadership, 'Becoming' is not just a personal story but also a call to action for readers to embrace their own journeys.",
    "Harry Potter and the Sorcerer's Stone":
      "'Harry Potter and the Sorcerer’s Stone' transports readers to a world of magic and wonder. On his 11th birthday, Harry learns he’s a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry. There, he discovers the joy of friendship, the thrill of Quidditch, and the weight of a legacy connected to the dark wizard Voldemort. As Harry unravels the mystery of the Sorcerer’s Stone, he learns the true meaning of bravery and love. J.K. Rowling’s debut is a spellbinding tale that captures the imaginations of readers, inviting them into a richly crafted world of endless possibilities.",
    "Moby-Dick":
      "'Moby-Dick' by Herman Melville is a sweeping narrative that explores obsession, revenge, and the human condition. Ishmael, a sailor aboard the whaling ship Pequod, recounts Captain Ahab’s relentless pursuit of Moby Dick, a legendary white whale. Ahab’s vengeance blinds him to reason, driving his crew into perilous waters. Through poetic prose and vivid imagery, Melville examines humanity’s relationship with nature, fate, and the unknown. The novel’s rich symbolism and philosophical undertones challenge readers to ponder the complexities of ambition and morality. 'Moby-Dick' remains a cornerstone of literature, celebrated for its depth and its portrayal of the human spirit.",
    "War and Peace":
      "Leo Tolstoy’s 'War and Peace' is a literary masterpiece that intertwines the personal and the historical. Set during the Napoleonic Wars, it follows the lives of aristocratic families as they navigate love, loss, and societal upheaval. Tolstoy captures the sweeping scope of war alongside intimate moments of humanity. With richly developed characters and profound philosophical insights, the novel delves into themes of destiny, free will, and the search for meaning. Through its intricate narrative and timeless wisdom, 'War and Peace' transcends eras, offering readers an unparalleled exploration of human existence and the forces that shape our lives.",
    "The Hobbit":
      "'The Hobbit' by J.R.R. Tolkien is a charming tale of adventure and self-discovery. Bilbo Baggins, a reluctant hero, is swept into a quest with thirteen dwarves to reclaim their homeland from the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, and the enigmatic Gollum, whose riddle game reveals a magical ring with mysterious powers. Through danger and triumph, Bilbo discovers inner courage and resourcefulness. Tolkien’s enchanting prose and vivid world-building transport readers to Middle-earth, blending whimsy with timeless themes of bravery and friendship. 'The Hobbit' is a beloved classic that continues to inspire generations of adventurers.",
    "The Kite Runner":
      "'The Kite Runner' by Khaled Hosseini is a poignant story of friendship, betrayal, and redemption. Set against the backdrop of Afghanistan’s tumultuous history, it follows Amir and Hassan, two boys from vastly different backgrounds whose lives are intertwined by loyalty and betrayal. As Amir seeks to atone for past wrongs, the narrative delves into themes of forgiveness, love, and the enduring power of friendship. Hosseini’s evocative prose brings to life the complexities of human emotions and the resilience of the human spirit. A heart-wrenching and hopeful tale, it continues to resonate with readers around the world.",
    "The Alchemist":
      "Paulo Coelho’s 'The Alchemist' is an enchanting tale about following one’s dreams and discovering a personal legend. The story follows Santiago, a shepherd boy, as he embarks on a journey to find a treasure located near the Egyptian pyramids. Along the way, he meets mystical guides, faces trials, and learns profound lessons about the universe and his destiny. With its timeless themes of self-discovery, courage, and the power of pursuing one’s dreams, this allegorical novel inspires readers to listen to their hearts and trust in the transformative journey of life. A modern classic, 'The Alchemist' resonates with universal appeal.",
    1984: "George Orwell’s dystopian masterpiece '1984' is a chilling portrayal of a totalitarian regime where individuality is crushed, and truth is manipulated. Set in Oceania, it follows Winston Smith, a man who questions the oppressive rule of Big Brother and the Party. Orwell’s vision of a society under constant surveillance and control is both unsettling and thought-provoking. The novel examines themes of freedom, resistance, and the power of language. With its haunting atmosphere and sharp political commentary, '1984' serves as a warning about the dangers of authoritarianism and remains a profound exploration of the human spirit’s capacity to endure oppression.",
    "Pride and Prejudice":
      "Jane Austen’s 'Pride and Prejudice' is a witty and romantic exploration of social class, love, and personal growth in early 19th-century England. The story follows Elizabeth Bennet as she navigates the expectations of her family and society while resisting the charms of the seemingly aloof Mr. Darcy. Through sharp dialogue and memorable characters, Austen highlights the intricacies of human relationships and the transformative power of understanding and self-reflection. A timeless classic, the novel delights readers with its humor and insightful portrayal of love’s challenges and triumphs, making it a cornerstone of English literature and romantic storytelling.",
    "The Catcher in the Rye":
      "J.D. Salinger’s 'The Catcher in the Rye' is a poignant and introspective coming-of-age tale. Narrated by the rebellious and disillusioned Holden Caulfield, the novel delves into themes of alienation, identity, and the loss of innocence. As Holden wanders the streets of New York City, he grapples with the complexities of adulthood and his desire to protect the purity of childhood. Salinger’s timeless prose captures the essence of teenage angst and the universal struggle to find meaning in a world full of contradictions. A classic work of American literature, it continues to resonate with readers across generations.",
    "The Great Gatsby":
      "F. Scott Fitzgerald’s 'The Great Gatsby' is a tragic tale of love, ambition, and the American Dream. Set during the Roaring Twenties, it follows the enigmatic Jay Gatsby as he strives to win back the love of Daisy Buchanan. Narrated by Nick Carraway, the novel explores the decadence and disillusionment of an era defined by materialism and excess. Through its vivid imagery and unforgettable characters, Fitzgerald weaves a cautionary tale about the cost of unbridled ambition and the fragility of human desires. A quintessential classic, 'The Great Gatsby' remains a timeless reflection on hope, identity, and the pursuit of happiness.",
    "The Fault in Our Stars":
      "Hazel Grace Lancaster, a 16-year-old with thyroid cancer that has spread to her lungs, attends a cancer patient support group at her mother's behest. At one meeting, Hazel meets a 17-year-old boy currently in remission named Augustus Waters, whose osteosarcoma caused him to lose his right leg. Augustus is at the meeting to support Isaac, his friend who has eye cancer. Hazel and Augustus strike a bond immediately and agree to read each other's favorite novels. Augustus gives Hazel The Price of Dawn, and Hazel recommends An Imperial Affliction, a novel about a cancer-stricken girl named Anna that parallels Hazel's own experience.",
  };

  book.description = descriptions[book.title] || "ERROR";

  // Add authors
  const authors = {
    "A Game of Thrones": "George R. R. Martin",
    "To Kill a Mockingbird": "Harper Lee",
    "The Lord of the Rings": "J.R.R. Tolkien",
    Becoming: "Michelle Obama",
    "Harry Potter and the Sorcerer's Stone": "J.K. Rowling",
    "Moby-Dick": "Herman Melville",
    "War and Peace": "Leo Tolstoy",
    "The Hobbit": "J.R.R. Tolkien",
    "The Kite Runner": "Khaled Hosseini",
    "The Alchemist": "Paulo Coelho",
    1984: "George Orwell",
    "Pride and Prejudice": "Jane Austen",
    "The Catcher in the Rye": "J.D. Salinger",
    "The Great Gatsby": "F. Scott Fitzgerald",
    "The Fault in Our Stars": "John Green",
  };

  book.author = authors[book.title] || ["Unknown Author"];

  const languages = {
    "A Game of Thrones": "English",
    "To Kill a Mockingbird": "English",
    "The Lord of the Rings": "English",
    Becoming: "English",
    "Harry Potter and the Sorcerer's Stone": "English",
    "Moby-Dick": "English",
    "War and Peace": "Russian",
    "The Hobbit": "English",
    "The Kite Runner": "English",
    1984: "English",
    "The Alchemist": "Portuguese",
    "The Catcher in the Rye": "English",
    "The Great Gatsby": "English",
    "The Fault in Our Stars": "English",
    "Pride and Prejudice": "English",
  };

  book.language = languages[book.title];
});

export default books;
