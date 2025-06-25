let allList =[
  {
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "description": "A shocking psychological thriller about a woman's act of violence against her husband—and the psychotherapist obsessed with uncovering what happened.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f720077?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5
  },
  {
    "title": "Project Hail Mary",
    "author": "Andy Weir",
    "description": "An astronaut wakes up on a spaceship with amnesia and has to save humanity, even if he can't remember who he is.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ea7b7d7f76?q=80&w=2890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8
  },
  {
    "title": "Where the Crawdads Sing",
    "author": "Delia Owens",
    "description": "A wild child of the marsh becomes a suspect in a murder investigation in a quiet coastal town in North Carolina.",
    "image": "https://images.unsplash.com/photo-1521575107036-ed43c6867011?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "The Midnight Library",
    "author": "Matt Haig",
    "description": "Between life and death, Nora Seed has the chance to undo her regrets and try out different lives she could have lived.",
    "image": "https://images.unsplash.com/photo-1526219358210-e56d78701e6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "description": "Set in the distant future, this epic science fiction novel explores themes of politics, religion, ecology, technology, and human evolution.",
    "image": "https://images.unsplash.com/photo-1579761406606-d0a1b5d1e2e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.9
  },
  {
    "title": "Educated",
    "author": "Tara Westover",
    "description": "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and pursues education, discovering the power of knowledge.",
    "image": "https://images.unsplash.com/photo-1610414436815-534a62dc1404?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "Circe",
    "author": "Madeline Miller",
    "description": "A retelling of the Greek myth of Circe, a goddess of magic, as she navigates her immortal life and finds her own path.",
    "image": "https://images.unsplash.com/photo-1525043690664-50b89f36f600?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "description": "A sweeping narrative of the human species from its earliest origins to the present day, exploring how we came to dominate the planet.",
    "image": "https://images.unsplash.com/photo-1533618451968-3e91129b0f94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8
  },
  {
    "title": "The Vanishing Half",
    "author": "Brit Bennett",
    "description": "Twin sisters, inseparable as children, choose to live in two very different worlds, one passing as white, the other remaining in the Black community.",
    "image": "https://images.unsplash.com/photo-15324545938-29783f0ad9c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.4
  },
  {
    "title": "Pachinko",
    "author": "Min Jin Lee",
    "description": "A saga following a Korean family who immigrates to Japan, enduring discrimination and poverty, but clinging to their identity.",
    "image": "https://images.unsplash.com/photo-1549448378-002d2c1628d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "Normal People",
    "author": "Sally Rooney",
    "description": "A story of mutual fascination, friendship and love between two young people navigating adulthood in Ireland.",
    "image": "https://images.unsplash.com/photo-1587372275471-a4b8f5d7d3c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.3
  },
  {
    "title": "The Nightingale",
    "author": "Kristin Hannah",
    "description": "A powerful story of two sisters separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied France.",
    "image": "https://images.unsplash.com/photo-1529124456574-8d4e9c7d0d4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "Becoming",
    "author": "Michelle Obama",
    "description": "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.",
    "image": "https://images.unsplash.com/photo-1532012197267-da84d0b135c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "description": "On the day of his fifth wedding anniversary, Nick Dunne's wife, Amy, disappears, and he becomes the prime suspect.",
    "image": "https://images.unsplash.com/photo-1550541703-e8c895995574?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.2
  },
  {
    "title": "The Goldfinch",
    "author": "Donna Tartt",
    "description": "A novel about a boy who survives a terrorist bombing at an art museum and takes a priceless painting with him.",
    "image": "https://images.unsplash.com/photo-1587372275471-a4b8f5d7d3c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "description": "A fable about a young shepherd who travels from his homeland in Spain to the Egyptian desert in search of a treasure.",
    "image": "https://images.unsplash.com/photo-1522067768995-5d9c73b0606b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "A Gentleman in Moscow",
    "author": "Amor Towles",
    "description": "A count is sentenced to house arrest in a luxury hotel in Moscow, where he observes the profound changes taking place in Russia.",
    "image": "https://images.unsplash.com/photo-1517747808266-9d32d6f78f8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "description": "Narrated by Death, this story follows a young girl living in Nazi Germany who finds solace in stealing books.",
    "image": "https://images.unsplash.com/photo-1555543160-c3d3c8c7f9d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.9
  },
  {
    "title": "Before I Go to Sleep",
    "author": "S.J. Watson",
    "description": "A woman wakes up every day with amnesia and must piece together her past from a journal she keeps.",
    "image": "https://images.unsplash.com/photo-1522867083072-23c28a2a07c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.1
  },
  {
    "title": "Little Fires Everywhere",
    "author": "Celeste Ng",
    "description": "The story explores the intertwined fates of the picture-perfect Richardson family and an enigmatic mother and daughter who upend their lives.",
    "image": "https://images.unsplash.com/photo-1533228669480-1a74d5c90b6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.4
  },
  {
    "title": "The Road",
    "author": "Cormac McCarthy",
    "description": "A father and son trek across a post-apocalyptic landscape, trying to survive and maintain their humanity.",
    "image": "https://images.unsplash.com/photo-1549448378-002d2c1628d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.3
  },
  {
    "title": "Hamnet",
    "author": "Maggie O'Farrell",
    "description": "A reimagining of the lives of William Shakespeare's family, focusing on his wife, Agnes Hathaway, and the death of their son, Hamnet.",
    "image": "https://images.unsplash.com/photo-1588145248554-6e6b4e6b1d1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "The Henna Artist",
    "author": " Alka Joshi",
    "description": "Seventeen-year-old Lakshmi escapes an abusive marriage and becomes the most highly requested henna artist to the ladies of Jaipur's elite.",
    "image": "https://images.unsplash.com/photo-1520635398864-16a75f14e2d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5
  },
  {
    "title": "The Guest List",
    "author": "Lucy Fokley",
    "description": "A wedding celebration on a remote Irish island turns deadly when one of the guests is found murdered.",
    "image": "https://images.unsplash.com/photo-1574971879008-01d7e2e8e7c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.0
  },
  {
    "title": "The Lincoln Highway",
    "author": "Amor Towles",
    "description": "In 1954, an eighteen-year-old just released from a juvenile work farm finds his plans upended by the escape of two friends.",
    "image": "https://images.unsplash.com/photo-1533618451968-3e91129b0f94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "Eleanor Oliphant Is Completely Fine",
    "author": "Gail Honeyman",
    "description": "A socially awkward woman, content in her routine, finds her life changed when she helps a stranger.",
    "image": "https://images.unsplash.com/photo-1521575107036-ed43c6867011?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5
  },
  {
    "title": "The Seven Husbands of Evelyn Hugo",
    "author": "Taylor Jenkins Reid",
    "description": "A reclusive Hollywood movie icon, Evelyn Hugo, chooses an unknown magazine reporter, Monique Grant, to tell her life story.",
    "image": "https://images.unsplash.com/photo-15324545938-29783f0ad9c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  },
  {
    "title": "Red, White & Royal Blue",
    "author": "Casey McQuiston",
    "description": "The First Son of the United States and a British prince fall in love.",
    "image": "https://images.unsplash.com/photo-1579761406606-d0a1b5d1e2e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.6
  },
  {
    "title": "Anxious People",
    "author": "Fredrik Backman",
    "description": "A bank robbery gone wrong leads to a hostage situation at an open house, where a group of strangers are forced to confront their fears.",
    "image": "https://images.unsplash.com/photo-1526219358210-e56d78701e6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5
  },
  {
    "title": "The Four Winds",
    "author": "Kristin Hannah",
    "description": "During the Great Depression, a woman must choose between fighting for the land she loves or heading west to an uncertain future.",
    "image": "https://images.unsplash.com/photo-1529124456574-8d4e9c7d0d4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.7
  }
]

module.exports = {data: allList};