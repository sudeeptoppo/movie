let allList =[
  {
    "title": "Dune: Part Two",
    "author": "Denis Villeneuve", 
    "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    "image": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    "rating": 8.7,
    "time": "2024-03-01T00:00:00.000Z" 
  },
  {
    "title": "Oppenheimer",
    "author": "Christopher Nolan", 
    "description": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "image": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
    "rating": 8.6,
    "time": "2023-07-21T00:00:00.000Z"
  },
  {
    "title": "Barbie",
    "author": "Greta Gerwig", 
    "description": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    "image": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v8_am.jpg",
    "rating": 7.0,
    "time": "2023-07-21T00:00:00.000Z"
  },
  {
    "title": "Spider-Man: Across the Spider-Verse",
    "author": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson", 
    "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    "image": "https://m.media-amazon.com/images/I/91x4nWCLbwL._UF1000,1000_QL80_.jpg",
    "rating": 8.7,
    "time": "2023-06-02T00:00:00.000Z"
  },
  {
    "title": "Past Lives",
    "author": "Celine Song", 
    "description": "Nora and Hae Sung, two deeply connected childhood friends, are separated after Nora's family emigrates from South Korea. Two decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
    "image": "https://m.media-amazon.com/images/M/MV5BYjQyMTNhNjUtN2VmYy00NWRhLTkwOTctMGVmNTBmNDIxYjZhXkEyXkFqcGc@._V1_.jpg",
    "rating": 8.0,
    "time": "2023-06-02T00:00:00.000Z"
  },
  {
    "title": "Killers of the Flower Moon",
    "author": "Martin Scorsese", 
    "description": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one – until the FBI steps in to unravel the mystery.",
    "image": "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_.jpg",
    "rating": 7.9,
    "time": "2023-10-20T00:00:00.000Z"
  },
  {
    "title": "Poor Things",
    "author": "Yorgos Lanthimos", 
    "description": "The incredible tale of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    "image": "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "rating": 7.9,
    "time": "2023-12-08T00:00:00.000Z"
  },
  {
    "title": "Anatomy of a Fall",
    "author": "Justine Triet", 
    "description": "A woman is suspected of murder after her husband's suspicious death, and their blind son faces a moral dilemma as the main witness.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw54snB5t0EN-3PA_-3oh6DtzZuY9CeQrsHA&s",
    "rating": 7.8,
    "time": "2023-08-23T00:00:00.000Z"
  },
  {
    "title": "Godzilla Minus One",
    "author": "Takashi Yamazaki", 
    "description": "In post-war Japan, a new terror emerges. Godzilla. Will the devastated people be able to survive... let alone fight back?",
    "image": "https://m.media-amazon.com/images/M/MV5BMjc5MjllMGUtMDIwMS00ZDVkLWEzODQtM2NlMTMwMTZhNThmXkEyXkFqcGc@._V1_.jpg",
    "rating": 8.4,
    "time": "2023-12-01T00:00:00.000Z"
  },
  {
    "title": "The Holdovers",
    "author": "Alexander Payne", 
    "description": "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break with a troubled student who has nowhere to go.",
    "image": "https://m.media-amazon.com/images/S/pv-target-images/272019642b1e0cafb50560abe6edd42b91b0c3a1d563859b89c3b5d60f3fbf31.jpg",
    "rating": 8.0,
    "time": "2023-10-27T00:00:00.000Z"
  },
  {
    "title": "Wonka",
    "author": "Paul King", 
    "description": "With the help of an Oompa Loompa, Willy Wonka, on his way to becoming the world's greatest inventor, must find a way to get his chocolate to the public.",
    "image": "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "rating": 7.3,
    "time": "2023-12-15T00:00:00.000Z"
  },
  {
    "title": "Mission: Impossible - Dead Reckoning Part One",
    "author": "Christopher McQuarrie", 
    "description": "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg/250px-Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
    "rating": 7.7,
    "time": "2023-07-12T00:00:00.000Z"
  },
  {
    "title": "Guardians of the Galaxy Vol. 3",
    "author": "James Gunn", 
    "description": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
    "image": "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "rating": 7.9,
    "time": "2023-05-05T00:00:00.000Z"
  },
  {
    "title": "The Super Mario Bros. Movie",
    "author": "Aaron Horvath, Michael Jelenic", 
    "description": "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLO0Sb1TuuDyFGXs0wuTVYJCc2zOHNgN_EsQ&s",
    "rating": 7.0,
    "time": "2023-04-05T00:00:00.000Z"
  },
  {
    "title": "Everything Everywhere All at Once",
    "author": "Daniel Kwan, Daniel Scheinert", 
    "description": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes and connecting with the lives she could have led.",
    "image": "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
    "rating": 7.8,
    "time": "2022-03-25T00:00:00.000Z"
  },
  {
    "title": "Top Gun: Maverick",
    "author": "Joseph Kosinski", 
    "description": "After more than thirty years of service as one of the Navy’s top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/250px-Top_Gun_Maverick_Poster.jpg",
    "rating": 8.3,
    "time": "2022-05-27T00:00:00.000Z"
  },
  {
    "title": "Avatar: The Way of Water",
    "author": "James Cameron", 
    "description": "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    "image": "https://m.media-amazon.com/images/S/pv-target-images/f0535dd61f56bddd6ee7f3bfb765645e45d78f373418ae37ee5103cf6eebbff0.jpg",
    "rating": 7.6,
    "time": "2022-12-16T00:00:00.000Z"
  },
  {
    "title": "Puss in Boots: The Last Wish",
    "author": "Joel Crawford", 
    "description": "Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "image": "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
    "rating": 7.8,
    "time": "2022-12-21T00:00:00.000Z"
  },
  {
    "title": "TÁR",
    "author": "Todd Field", 
    "description": "Set in the international world of classical music, the film centers on Lydia Tár, widely considered one of the greatest living composer-conductors and the first-ever female chief conductor of a major German orchestra.",
    "image": "https://m.media-amazon.com/images/M/MV5BNTQ2MDdmZDgtZDFiYy00ZGE1LTgzNTctMzUyNDVkNGZjODA2XkEyXkFqcGc@._V1_.jpg",
    "rating": 7.3,
    "time": "2022-10-07T00:00:00.000Z"
  },
  {
    "title": "The Banshees of Inisherin",
    "author": "Martin McDonagh", 
    "description": "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both.",
    "image": "https://m.media-amazon.com/images/M/MV5BOTkzMWI4OTEtMTk0MS00MTUxLWI4NTYtYmRiNWM4Zjc1MGRhXkEyXkFqcGc@._V1_.jpg",
    "rating": 7.7,
    "time": "2022-10-21T00:00:00.000Z"
  }
]

module.exports = {data: allList};