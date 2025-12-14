import { Perfume } from '../types/perfume';

export const perfumes: Perfume[] = [
  {
    id: '1',
    name: 'Bleu de Chanel',
    house: 'Chanel',
    notes: {
      top: ['Grapefruit', 'Lemon', 'Mint', 'Pink Pepper'],
      heart: ['Ginger', 'Jasmine', 'Melon', 'Nutmeg'],
      base: ['Incense', 'Amber', 'Cedar', 'Sandalwood']
    },
    price: 135,
    rating: 4.5,
    reviewCount: 2847,
    image: '/images/perfumes/bleu-de-chanel.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'A sophisticated aromatic woody fragrance'
  },
  {
    id: '2',
    name: 'Santal 33',
    house: 'Le Labo',
    notes: {
      top: ['Cardamom', 'Iris', 'Violet'],
      heart: ['Papyrus', 'Ambrox'],
      base: ['Sandalwood', 'Cedar', 'Leather']
    },
    price: 240,
    rating: 4.7,
    reviewCount: 1923,
    image: '/images/perfumes/santal-33.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Iconic woody leather scent with spicy accents'
  },
  {
    id: '3',
    name: 'Black Orchid',
    house: 'Tom Ford',
    notes: {
      top: ['Truffle', 'Gardenia', 'Black Currant', 'Ylang-Ylang'],
      heart: ['Orchid', 'Spices', 'Gardenia', 'Fruity Notes'],
      base: ['Patchouli', 'Vanilla', 'Incense', 'Sandalwood']
    },
    price: 145,
    rating: 4.4,
    reviewCount: 3421,
    image: '/images/perfumes/black-orchid.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Luxurious blend of rich dark accords and seductive florals'
  },
  {
    id: '4',
    name: 'La Vie Est Belle',
    house: 'Lancôme',
    notes: {
      top: ['Black Currant', 'Pear'],
      heart: ['Iris', 'Jasmine', 'Orange Blossom'],
      base: ['Praline', 'Vanilla', 'Tonka Bean', 'Patchouli']
    },
    price: 98,
    rating: 4.6,
    reviewCount: 5632,
    image: '/images/perfumes/la-vie-est-belle.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Sweet and elegant gourmand floral'
  },
  {
    id: '5',
    name: 'Acqua di Gio',
    house: 'Giorgio Armani',
    notes: {
      top: ['Lime', 'Lemon', 'Bergamot', 'Jasmine'],
      heart: ['Calone', 'Peach', 'Jasmine', 'Coriander'],
      base: ['Musk', 'Amber', 'Patchouli', 'Oakmoss']
    },
    price: 92,
    rating: 4.3,
    reviewCount: 4821,
    image: '/images/perfumes/acqua-di-gio.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aquatic fragrance inspired by Mediterranean Sea'
  },
  {
    id: '6',
    name: 'Coco Mademoiselle',
    house: 'Chanel',
    notes: {
      top: ['Orange', 'Mandarin', 'Orange Blossom'],
      heart: ['Jasmine', 'Rose', 'Ylang-Ylang'],
      base: ['Patchouli', 'Vetiver', 'Vanilla', 'Tonka Bean']
    },
    price: 135,
    rating: 4.8,
    reviewCount: 6234,
    image: '/images/perfumes/coco-mademoiselle.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Modern fresh oriental fragrance'
  },
  {
    id: '7',
    name: 'Sauvage',
    house: 'Dior',
    notes: {
      top: ['Calabrian Bergamot', 'Pepper'],
      heart: ['Sichuan Pepper', 'Lavender', 'Pink Pepper', 'Vetiver'],
      base: ['Ambroxan', 'Cedar', 'Labdanum']
    },
    price: 110,
    rating: 4.5,
    reviewCount: 7821,
    image: '/images/perfumes/sauvage.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Parfum',
    description: 'Radically fresh composition with raw notes'
  },
  {
    id: '8',
    name: 'Aventus',
    house: 'Creed',
    notes: {
      top: ['Pineapple', 'Black Currant', 'Apple', 'Bergamot'],
      heart: ['Birch', 'Patchouli', 'Moroccan Jasmine', 'Rose'],
      base: ['Musk', 'Oakmoss', 'Ambergris', 'Vanilla']
    },
    price: 445,
    rating: 4.9,
    reviewCount: 3921,
    image: '/images/perfumes/aventus.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Parfum',
    description: 'Legendary fruity and smoky masculine fragrance'
  },
  {
    id: '9',
    name: 'Light Blue',
    house: 'Dolce & Gabbana',
    notes: {
      top: ['Sicilian Lemon', 'Apple', 'Cedar', 'Bellflower'],
      heart: ['Jasmine', 'Bamboo', 'White Rose'],
      base: ['Amber', 'Musk', 'Cedar']
    },
    price: 88,
    rating: 4.4,
    reviewCount: 5234,
    image: '/images/perfumes/light-blue.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh fruity floral Mediterranean escape'
  },
  {
    id: '10',
    name: 'Good Girl',
    house: 'Carolina Herrera',
    notes: {
      top: ['Almond', 'Coffee'],
      heart: ['Jasmine', 'Tuberose', 'Bulgarian Rose'],
      base: ['Tonka Bean', 'Cacao', 'Vanilla', 'Sandalwood']
    },
    price: 115,
    rating: 4.6,
    reviewCount: 4521,
    image: '/images/perfumes/good-girl.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Intoxicating blend of addictive sweet notes'
  },
  {
    id: '11',
    name: 'Oud Wood',
    house: 'Tom Ford',
    notes: {
      top: ['Rosewood', 'Cardamom', 'Chinese Pepper'],
      heart: ['Oud', 'Sandalwood', 'Vetiver'],
      base: ['Tonka Bean', 'Vanilla', 'Amber']
    },
    price: 245,
    rating: 4.7,
    reviewCount: 2134,
    image: '/images/perfumes/oud-wood.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Rare oud wood with exotic spices and vanilla'
  },
  {
    id: '12',
    name: 'J\'adore',
    house: 'Dior',
    notes: {
      top: ['Pear', 'Melon', 'Magnolia', 'Peach'],
      heart: ['Jasmine', 'Lily-of-the-Valley', 'Tuberose', 'Freesia'],
      base: ['Musk', 'Vanilla', 'Blackberry', 'Cedar']
    },
    price: 120,
    rating: 4.7,
    reviewCount: 6789,
    image: '/images/perfumes/jadore.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Luminous floral bouquet celebrating femininity'
  },
  {
    id: '13',
    name: 'The One',
    house: 'Dolce & Gabbana',
    notes: {
      top: ['Bergamot', 'Mandarin', 'Peach', 'Lychee'],
      heart: ['Jasmine', 'Lily', 'Plum'],
      base: ['Vanilla', 'Musk', 'Amber', 'Vetiver']
    },
    price: 95,
    rating: 4.5,
    reviewCount: 3421,
    image: '/images/perfumes/the-one.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Elegant oriental floral with warm base'
  },
  {
    id: '14',
    name: 'Tobacco Vanille',
    house: 'Tom Ford',
    notes: {
      top: ['Tobacco Leaf', 'Spicy Notes'],
      heart: ['Vanilla', 'Cocoa', 'Tonka Bean'],
      base: ['Dried Fruits', 'Woody Notes']
    },
    price: 250,
    rating: 4.8,
    reviewCount: 2891,
    image: '/images/perfumes/tobacco-vanille.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Opulent and warm oriental gourmand'
  },
  {
    id: '15',
    name: 'Flowerbomb',
    house: 'Viktor & Rolf',
    notes: {
      top: ['Tea', 'Bergamot', 'Osmanthus'],
      heart: ['Sambac Jasmine', 'Orchid', 'Freesia', 'Rose'],
      base: ['Patchouli', 'Musk']
    },
    price: 135,
    rating: 4.6,
    reviewCount: 5621,
    image: '/images/perfumes/flowerbomb.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Explosive floral bouquet'
  },
  {
    id: '16',
    name: 'Terre d\'Hermès',
    house: 'Hermès',
    notes: {
      top: ['Orange', 'Grapefruit'],
      heart: ['Pepper', 'Pelargonium', 'Flint'],
      base: ['Vetiver', 'Cedar', 'Patchouli', 'Benzoin']
    },
    price: 130,
    rating: 4.6,
    reviewCount: 4231,
    image: '/images/perfumes/terre-hermes.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Woody chypre exploring earth and sky'
  },
  {
    id: '17',
    name: 'Angel',
    house: 'Mugler',
    notes: {
      top: ['Melon', 'Coconut', 'Mandarin', 'Cassia'],
      heart: ['Honey', 'Apricot', 'Blackberry', 'Plum'],
      base: ['Patchouli', 'Chocolate', 'Vanilla', 'Caramel']
    },
    price: 110,
    rating: 4.3,
    reviewCount: 4892,
    image: '/images/perfumes/angel.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Sweet gourmand oriental with chocolate notes'
  },
  {
    id: '18',
    name: 'Versace Eros',
    house: 'Versace',
    notes: {
      top: ['Mint', 'Green Apple', 'Lemon'],
      heart: ['Tonka Bean', 'Ambroxan', 'Geranium'],
      base: ['Madagascar Vanilla', 'Virginian Cedar', 'Atlas Cedar']
    },
    price: 85,
    rating: 4.4,
    reviewCount: 5892,
    image: '/images/perfumes/versace-eros.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aromatic fougère with vanilla base'
  },
  {
    id: '19',
    name: 'Baccarat Rouge 540',
    house: 'Maison Francis Kurkdjian',
    notes: {
      top: ['Saffron', 'Jasmine'],
      heart: ['Amberwood', 'Ambergris'],
      base: ['Fir Resin', 'Cedar']
    },
    price: 325,
    rating: 4.9,
    reviewCount: 3124,
    image: '/images/perfumes/baccarat-rouge.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Luminous and sophisticated amber floral'
  },
  {
    id: '20',
    name: 'Libre',
    house: 'Yves Saint Laurent',
    notes: {
      top: ['Lavender', 'Mandarin', 'Black Currant'],
      heart: ['Lavender', 'Orange Blossom', 'Jasmine'],
      base: ['Madagascar Vanilla', 'Musk', 'Cedar', 'Ambergris']
    },
    price: 125,
    rating: 4.5,
    reviewCount: 4521,
    image: '/images/perfumes/libre.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Bold floral lavender with sensual vanilla'
  },
  {
    id: '21',
    name: 'Invictus',
    house: 'Paco Rabanne',
    notes: {
      top: ['Marine Accord', 'Grapefruit', 'Mandarin'],
      heart: ['Bay Leaf', 'Hedione', 'Jasmine'],
      base: ['Guaiac Wood', 'Patchouli', 'Ambergris', 'Oakmoss']
    },
    price: 82,
    rating: 4.3,
    reviewCount: 6234,
    image: '/images/perfumes/invictus.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Powerful marine woody fragrance'
  },
  {
    id: '22',
    name: 'Si',
    house: 'Giorgio Armani',
    notes: {
      top: ['Black Currant', 'Mandarin'],
      heart: ['Freesia', 'Rose', 'May Rose'],
      base: ['Vanilla', 'Patchouli', 'Ambroxan', 'Woody Notes']
    },
    price: 105,
    rating: 4.5,
    reviewCount: 3892,
    image: '/images/perfumes/si.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Modern chypre with blackcurrant nectar'
  },
  {
    id: '23',
    name: 'Lost Cherry',
    house: 'Tom Ford',
    notes: {
      top: ['Cherry', 'Bitter Almond'],
      heart: ['Turkish Rose', 'Jasmine Sambac'],
      base: ['Tonka Bean', 'Sandalwood', 'Vetiver', 'Cedar']
    },
    price: 360,
    rating: 4.7,
    reviewCount: 2134,
    image: '/images/perfumes/lost-cherry.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Decadent cherry liqueur with rich florals'
  },
  {
    id: '24',
    name: 'Olympéa',
    house: 'Paco Rabanne',
    notes: {
      top: ['Green Mandarin', 'Water Jasmine', 'Ginger Flower'],
      heart: ['Salted Vanilla', 'Salty Accord'],
      base: ['Ambergris', 'Sandalwood', 'Cashmere Wood']
    },
    price: 88,
    rating: 4.4,
    reviewCount: 4721,
    image: '/images/perfumes/olympea.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Salty fresh oriental with vanilla accord'
  },
  {
    id: '25',
    name: 'A*Men',
    house: 'Mugler',
    notes: {
      top: ['Coffee', 'Caramel'],
      heart: ['Lavender', 'Honey'],
      base: ['Patchouli', 'Vanilla', 'Tonka Bean']
    },
    price: 95,
    rating: 4.2,
    reviewCount: 3421,
    image: '/images/perfumes/amen.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Toilette',
    description: 'Sweet oriental with coffee and patchouli'
  },
  {
    id: '26',
    name: 'Bright Crystal',
    house: 'Versace',
    notes: {
      top: ['Yuzu', 'Pomegranate', 'Ice'],
      heart: ['Peony', 'Magnolia', 'Lotus Flower'],
      base: ['Amber', 'Musk', 'Mahogany']
    },
    price: 78,
    rating: 4.5,
    reviewCount: 5234,
    image: '/images/perfumes/bright-crystal.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Luminous floral with fruity accents'
  },
  {
    id: '27',
    name: 'Noir de Noir',
    house: 'Tom Ford',
    notes: {
      top: ['Saffron', 'Black Truffle'],
      heart: ['Black Rose', 'Black Plum', 'Oud'],
      base: ['Vanilla', 'Patchouli', 'Sandalwood']
    },
    price: 265,
    rating: 4.8,
    reviewCount: 1892,
    image: '/images/perfumes/noir-de-noir.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Dark and sensual rose with truffle'
  },
  {
    id: '28',
    name: 'Guilty',
    house: 'Gucci',
    notes: {
      top: ['Pink Pepper', 'Mandarin', 'Bergamot'],
      heart: ['Lilac', 'Peach', 'Geranium'],
      base: ['Patchouli', 'Amber']
    },
    price: 92,
    rating: 4.3,
    reviewCount: 4521,
    image: '/images/perfumes/guilty.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Warm floral chypre with patchouli'
  },
  {
    id: '29',
    name: 'Spicebomb',
    house: 'Viktor & Rolf',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Elemi', 'Cinnamon'],
      heart: ['Saffron', 'Paprika', 'Chili'],
      base: ['Tobacco', 'Leather', 'Vetiver']
    },
    price: 108,
    rating: 4.6,
    reviewCount: 3891,
    image: '/images/perfumes/spicebomb.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Explosive spicy leather fragrance'
  },
  {
    id: '30',
    name: 'Mon Paris',
    house: 'Yves Saint Laurent',
    notes: {
      top: ['Strawberry', 'Raspberry', 'Bergamot', 'Pear'],
      heart: ['Peony', 'Datura', 'Jasmine', 'Orange Blossom'],
      base: ['Patchouli', 'White Musk', 'Ambroxan', 'Moss']
    },
    price: 118,
    rating: 4.5,
    reviewCount: 5621,
    image: '/images/perfumes/mon-paris.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Romantic fruity floral chypre'
  },
  {
    id: '31',
    name: 'Tuscan Leather',
    house: 'Tom Ford',
    notes: {
      top: ['Raspberry', 'Saffron', 'Thyme'],
      heart: ['Olibanum', 'Jasmine'],
      base: ['Leather', 'Suede', 'Amber', 'Woody Notes']
    },
    price: 250,
    rating: 4.7,
    reviewCount: 2341,
    image: '/images/perfumes/tuscan-leather.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Luxurious leather with smoky depth'
  },
  {
    id: '32',
    name: 'CK One',
    house: 'Calvin Klein',
    notes: {
      top: ['Lemon', 'Mandarin', 'Papaya', 'Bergamot'],
      heart: ['Nutmeg', 'Violet', 'Rose', 'Jasmine'],
      base: ['Sandalwood', 'Amber', 'Musk', 'Cedar']
    },
    price: 42,
    rating: 4.2,
    reviewCount: 8921,
    image: '/images/perfumes/ck-one.jpg',
    scentFamily: 'Citrus',
    concentration: 'Eau de Toilette',
    description: 'Fresh citrus unisex classic'
  },
  {
    id: '33',
    name: 'My Way',
    house: 'Giorgio Armani',
    notes: {
      top: ['Bergamot', 'Orange Blossom'],
      heart: ['Tuberose', 'Jasmine'],
      base: ['Vanilla', 'Cedarwood', 'White Musk']
    },
    price: 115,
    rating: 4.6,
    reviewCount: 3421,
    image: '/images/perfumes/my-way.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'White floral with creamy vanilla'
  },
  {
    id: '34',
    name: 'One Million',
    house: 'Paco Rabanne',
    notes: {
      top: ['Blood Mandarin', 'Grapefruit', 'Mint', 'Peppermint'],
      heart: ['Cinnamon', 'Rose', 'Spicy Notes'],
      base: ['Leather', 'Amber', 'Patchouli', 'Indian Sandalwood']
    },
    price: 85,
    rating: 4.4,
    reviewCount: 7821,
    image: '/images/perfumes/one-million.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Sweet and spicy masculine scent'
  },
  {
    id: '35',
    name: 'Miss Dior',
    house: 'Dior',
    notes: {
      top: ['Blood Orange', 'Mandarin'],
      heart: ['Grasse Rose', 'Peony'],
      base: ['White Musk', 'Patchouli']
    },
    price: 125,
    rating: 4.7,
    reviewCount: 5234,
    image: '/images/perfumes/miss-dior.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Elegant floral with rose and peony'
  },
  {
    id: '36',
    name: 'Soleil Blanc',
    house: 'Tom Ford',
    notes: {
      top: ['Bergamot', 'Cardamom', 'Pink Pepper', 'Pistachio'],
      heart: ['Tuberose', 'Jasmine', 'Ylang-Ylang'],
      base: ['Coconut', 'Amber', 'Tonka Bean', 'Benzoin']
    },
    price: 245,
    rating: 4.6,
    reviewCount: 2891,
    image: '/images/perfumes/soleil-blanc.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Solar floral with coconut and amber'
  },
  {
    id: '37',
    name: 'Cool Water',
    house: 'Davidoff',
    notes: {
      top: ['Mint', 'Lavender', 'Coriander', 'Rosemary'],
      heart: ['Geranium', 'Neroli', 'Jasmine', 'Sandalwood'],
      base: ['Musk', 'Amber', 'Tobacco', 'Oakmoss']
    },
    price: 38,
    rating: 4.1,
    reviewCount: 9821,
    image: '/images/perfumes/cool-water.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aromatic aquatic classic'
  },
  {
    id: '38',
    name: 'Scandal',
    house: 'Jean Paul Gaultier',
    notes: {
      top: ['Blood Orange', 'Mandarin'],
      heart: ['Honey', 'Gardenia', 'Orange Blossom', 'Peach'],
      base: ['Caramel', 'Patchouli', 'Licorice']
    },
    price: 108,
    rating: 4.5,
    reviewCount: 3892,
    image: '/images/perfumes/scandal.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Seductive honey gourmand'
  },
  {
    id: '39',
    name: 'Rose 31',
    house: 'Le Labo',
    notes: {
      top: ['Cumin'],
      heart: ['Rose', 'Olibanum'],
      base: ['Cedar', 'Vetiver', 'Musk', 'Amber']
    },
    price: 240,
    rating: 4.6,
    reviewCount: 1723,
    image: '/images/perfumes/rose-31.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Spicy unisex rose with woody base'
  },
  {
    id: '40',
    name: 'Polo Blue',
    house: 'Ralph Lauren',
    notes: {
      top: ['Cucumber', 'Melon', 'Mandarin'],
      heart: ['Basil', 'Geranium', 'Suede'],
      base: ['Musk', 'Patchouli', 'Woodsy Notes']
    },
    price: 75,
    rating: 4.3,
    reviewCount: 5621,
    image: '/images/perfumes/polo-blue.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aquatic woody fragrance'
  },
  {
    id: '41',
    name: 'Daisy',
    house: 'Marc Jacobs',
    notes: {
      top: ['Wild Strawberry', 'Violet Leaf', 'Blood Grapefruit'],
      heart: ['Gardenia', 'Violet'],
      base: ['Musk', 'Vanilla', 'White Woods']
    },
    price: 98,
    rating: 4.4,
    reviewCount: 6234,
    image: '/images/perfumes/daisy.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Fresh and youthful floral'
  },
  {
    id: '42',
    name: 'Jazz Club',
    house: 'Maison Margiela',
    notes: {
      top: ['Pink Pepper', 'Primofiore Lemon', 'Neroli'],
      heart: ['Rum', 'Java Vetiver', 'Clary Sage'],
      base: ['Tobacco Leaf', 'Vanilla', 'Styrax']
    },
    price: 135,
    rating: 4.7,
    reviewCount: 2891,
    image: '/images/perfumes/jazz-club.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Smoky jazz club atmosphere with rum and tobacco'
  },
  {
    id: '43',
    name: 'Hypnotic Poison',
    house: 'Dior',
    notes: {
      top: ['Coconut', 'Plum', 'Apricot'],
      heart: ['Brazilian Rosewood', 'Jasmine', 'Caraway', 'Tuberose'],
      base: ['Vanilla', 'Almond', 'Sandalwood', 'Musk']
    },
    price: 112,
    rating: 4.5,
    reviewCount: 4521,
    image: '/images/perfumes/hypnotic-poison.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Intoxicating vanilla almond oriental'
  },
  {
    id: '44',
    name: 'Club de Nuit Intense',
    house: 'Armaf',
    notes: {
      top: ['Pineapple', 'Lemon', 'Black Currant', 'Apple'],
      heart: ['Birch', 'Jasmine', 'Patchouli', 'Rose'],
      base: ['Musk', 'Vanilla', 'Oakmoss', 'Ambergris']
    },
    price: 45,
    rating: 4.4,
    reviewCount: 6821,
    image: '/images/perfumes/club-de-nuit.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Parfum',
    description: 'Sophisticated fruity smoky fragrance'
  },
  {
    id: '45',
    name: 'Delina',
    house: 'Parfums de Marly',
    notes: {
      top: ['Rhubarb', 'Lychee', 'Bergamot', 'Nutmeg'],
      heart: ['Turkish Rose', 'Peony', 'Vanilla'],
      base: ['Incense', 'Cashmeran', 'Musk', 'Vetiver']
    },
    price: 325,
    rating: 4.8,
    reviewCount: 2341,
    image: '/images/perfumes/delina.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Refined fruity rose with vanilla'
  },
  {
    id: '46',
    name: 'Ultra Male',
    house: 'Jean Paul Gaultier',
    notes: {
      top: ['Pear', 'Bergamot', 'Black Lavender', 'Mint'],
      heart: ['Cinnamon', 'Cumin', 'Sage'],
      base: ['Vanilla', 'Amber', 'Cedar', 'Patchouli']
    },
    price: 95,
    rating: 4.6,
    reviewCount: 4892,
    image: '/images/perfumes/ultra-male.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Sweet spicy masculine fragrance'
  },
  {
    id: '47',
    name: 'Ombre Nomade',
    house: 'Louis Vuitton',
    notes: {
      top: ['Oud', 'Incense', 'Raspberry'],
      heart: ['Oud', 'Birch', 'Geranium'],
      base: ['Oud', 'Amber', 'Benzoin']
    },
    price: 395,
    rating: 4.7,
    reviewCount: 1456,
    image: '/images/perfumes/ombre-nomade.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Intense oud with smoky accents'
  },
  {
    id: '48',
    name: 'Burberry Her',
    house: 'Burberry',
    notes: {
      top: ['Red Berries', 'Blackberry', 'Blueberry'],
      heart: ['Jasmine', 'Violet'],
      base: ['Musk', 'Amber', 'Dry Woods']
    },
    price: 105,
    rating: 4.4,
    reviewCount: 3621,
    image: '/images/perfumes/burberry-her.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Fruity gourmand with berry notes'
  },
  {
    id: '49',
    name: 'Molecule 01',
    house: 'Escentric Molecules',
    notes: {
      top: ['Iso E Super'],
      heart: ['Iso E Super'],
      base: ['Iso E Super']
    },
    price: 135,
    rating: 4.2,
    reviewCount: 2891,
    image: '/images/perfumes/molecule-01.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Minimalist woody molecule fragrance'
  },
  {
    id: '50',
    name: 'Chloe Nomade',
    house: 'Chloé',
    notes: {
      top: ['Mirabelle', 'Bergamot', 'Lemon', 'Orange'],
      heart: ['Freesia', 'Peach', 'Plum'],
      base: ['Oakmoss', 'Patchouli', 'White Musk', 'Sandalwood']
    },
    price: 112,
    rating: 4.5,
    reviewCount: 3421,
    image: '/images/perfumes/chloe-nomade.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Fruity chypre with oakmoss'
  },
  {
    id: '51',
    name: 'Reflection Man',
    house: 'Amouage',
    notes: {
      top: ['Rosemary', 'Bitter Orange', 'Red Pepper'],
      heart: ['Jasmine', 'Orris', 'Neroli'],
      base: ['Sandalwood', 'Patchouli', 'Vetiver', 'Cedar']
    },
    price: 295,
    rating: 4.8,
    reviewCount: 1234,
    image: '/images/perfumes/reflection-man.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Elegant floral woody fragrance'
  },
  {
    id: '52',
    name: 'Carolina Herrera 212',
    house: 'Carolina Herrera',
    notes: {
      top: ['Orange', 'Mandarin', 'Bergamot'],
      heart: ['Gardenia', 'Lily-of-the-Valley', 'Rose'],
      base: ['Musk', 'Sandalwood']
    },
    price: 85,
    rating: 4.3,
    reviewCount: 5234,
    image: '/images/perfumes/212.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Modern urban floral fragrance'
  },
  {
    id: '53',
    name: 'Nuit d\'Issey',
    house: 'Issey Miyake',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Grapefruit'],
      heart: ['Leather', 'Spices', 'Vetiver'],
      base: ['Black Leather', 'Patchouli', 'Incense', 'Tonka Bean']
    },
    price: 92,
    rating: 4.4,
    reviewCount: 2891,
    image: '/images/perfumes/nuit-dissey.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Dark leather with woody accents'
  },
  {
    id: '54',
    name: 'La Nuit de L\'Homme',
    house: 'Yves Saint Laurent',
    notes: {
      top: ['Cardamom', 'Bergamot'],
      heart: ['Lavender', 'Cedar', 'Cumin'],
      base: ['Vetiver', 'Caraway']
    },
    price: 95,
    rating: 4.6,
    reviewCount: 5621,
    image: '/images/perfumes/la-nuit-de-lhomme.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Seductive spicy woody fragrance'
  },
  {
    id: '55',
    name: 'Narciso Rodriguez For Her',
    house: 'Narciso Rodriguez',
    notes: {
      top: ['Rose', 'Peach'],
      heart: ['Musk', 'Osmanthus', 'Orange Blossom'],
      base: ['Amber', 'Sandalwood', 'Vanilla', 'Patchouli']
    },
    price: 98,
    rating: 4.5,
    reviewCount: 4521,
    image: '/images/perfumes/narciso-rodriguez.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Sensual musk with floral heart'
  },
  {
    id: '56',
    name: 'Grand Soir',
    house: 'Maison Francis Kurkdjian',
    notes: {
      top: ['Cistus Labdanum', 'Amber'],
      heart: ['Benzoin', 'Tonka Bean'],
      base: ['Vanilla', 'Peru Balsam']
    },
    price: 325,
    rating: 4.9,
    reviewCount: 1892,
    image: '/images/perfumes/grand-soir.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Opulent amber with vanilla and tonka'
  },
  {
    id: '57',
    name: 'Alien',
    house: 'Mugler',
    notes: {
      top: ['Jasmine'],
      heart: ['Cashmere Wood', 'Amber'],
      base: ['White Amber']
    },
    price: 110,
    rating: 4.5,
    reviewCount: 5234,
    image: '/images/perfumes/alien.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Mystical woody floral amber'
  },
  {
    id: '58',
    name: 'By the Fireplace',
    house: 'Maison Margiela',
    notes: {
      top: ['Pink Pepper', 'Orange Blossom', 'Clove Oil'],
      heart: ['Guaiac Wood', 'Juniper', 'Chestnut'],
      base: ['Vanilla', 'Peru Balsam', 'Cashmeran']
    },
    price: 135,
    rating: 4.6,
    reviewCount: 3421,
    image: '/images/perfumes/by-the-fireplace.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Cozy fireplace with smoky vanilla'
  },
  {
    id: '59',
    name: 'Gentleman',
    house: 'Givenchy',
    notes: {
      top: ['Pear', 'Cardamom', 'Black Pepper'],
      heart: ['Lavender', 'Orris', 'Cinnamon'],
      base: ['Patchouli', 'Black Vanilla', 'Tonka Bean']
    },
    price: 108,
    rating: 4.5,
    reviewCount: 3892,
    image: '/images/perfumes/gentleman.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Elegant aromatic iris with vanilla'
  },
  {
    id: '60',
    name: 'Kilian Love',
    house: 'Kilian',
    notes: {
      top: ['Neroli', 'Bergamot'],
      heart: ['Jasmine', 'Iris', 'Orange Blossom'],
      base: ['Tonka Bean', 'Vanilla', 'Marshmallow']
    },
    price: 295,
    rating: 4.7,
    reviewCount: 1823,
    image: '/images/perfumes/kilian-love.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Sweet floral with marshmallow softness'
  },
  {
    id: '61',
    name: 'Prada L\'Homme',
    house: 'Prada',
    notes: {
      top: ['Neroli', 'Black Pepper', 'Cardamom', 'Carrot Seeds'],
      heart: ['Iris', 'Geranium', 'Violet', 'Mate'],
      base: ['Patchouli', 'Amber', 'Sandalwood', 'Cedar']
    },
    price: 115,
    rating: 4.6,
    reviewCount: 3421,
    image: '/images/perfumes/prada-lhomme.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Sophisticated iris with amber'
  },
  {
    id: '62',
    name: 'Neon',
    house: 'Mugler',
    notes: {
      top: ['Mandarin', 'Ginger'],
      heart: ['Sambac Jasmine', 'Peony', 'Orange Blossom'],
      base: ['White Musk', 'Cashmeran', 'Patchouli']
    },
    price: 95,
    rating: 4.3,
    reviewCount: 2891,
    image: '/images/perfumes/neon.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Vibrant white floral with ginger'
  },
  {
    id: '63',
    name: 'Eros Flame',
    house: 'Versace',
    notes: {
      top: ['Mandarin', 'Madagascar Pepper', 'Lemon', 'Rosemary'],
      heart: ['Rose', 'Geranium', 'Pepperwood'],
      base: ['Tonka Bean', 'Vanilla', 'Sandalwood', 'Patchouli']
    },
    price: 88,
    rating: 4.4,
    reviewCount: 4521,
    image: '/images/perfumes/eros-flame.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Fiery citrus with sweet vanilla base'
  },
  {
    id: '64',
    name: 'Wood Sage & Sea Salt',
    house: 'Jo Malone',
    notes: {
      top: ['Ambrette Seeds'],
      heart: ['Sea Salt'],
      base: ['Sage', 'Grapefruit']
    },
    price: 145,
    rating: 4.5,
    reviewCount: 3621,
    image: '/images/perfumes/wood-sage-sea-salt.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Cologne',
    description: 'Fresh coastal escape with sage'
  },
  {
    id: '65',
    name: 'Elysium',
    house: 'Roja Parfums',
    notes: {
      top: ['Grapefruit', 'Lime', 'Bergamot', 'Lemon'],
      heart: ['Lavender', 'Thyme', 'Artemisia', 'Musk'],
      base: ['Vetiver', 'Cedar', 'Juniper', 'Galbanum']
    },
    price: 425,
    rating: 4.8,
    reviewCount: 892,
    image: '/images/perfumes/elysium.jpg',
    scentFamily: 'Fresh',
    concentration: 'Parfum',
    description: 'Luxurious aromatic citrus blend'
  },
  {
    id: '66',
    name: 'Coco Noir',
    house: 'Chanel',
    notes: {
      top: ['Grapefruit', 'Bergamot', 'Orange'],
      heart: ['Rose', 'Jasmine', 'Narcissus', 'Peach'],
      base: ['Patchouli', 'Sandalwood', 'Vanilla', 'Tonka Bean']
    },
    price: 145,
    rating: 4.6,
    reviewCount: 3234,
    image: '/images/perfumes/coco-noir.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Modern sensual oriental with patchouli'
  },
  {
    id: '67',
    name: 'Olympia',
    house: 'Paco Rabanne',
    notes: {
      top: ['Green Mandarin', 'Ginger', 'Water Jasmine'],
      heart: ['Salted Vanilla', 'Salty Accord'],
      base: ['Ambergris', 'Cashmere Wood', 'Sandalwood']
    },
    price: 88,
    rating: 4.4,
    reviewCount: 4123,
    image: '/images/perfumes/olympia-intense.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Addictive salted vanilla oriental'
  },
  {
    id: '68',
    name: 'Valentino Donna Born in Roma',
    house: 'Valentino',
    notes: {
      top: ['Black Currant', 'Violet'],
      heart: ['Jasmine Sambac', 'Jasmine Tea'],
      base: ['Bourbon Vanilla', 'White Musk']
    },
    price: 125,
    rating: 4.5,
    reviewCount: 3421,
    image: '/images/perfumes/born-in-roma.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Modern floral with vanilla twist'
  },
  {
    id: '69',
    name: 'Dylan Blue',
    house: 'Versace',
    notes: {
      top: ['Calabrian Bergamot', 'Grapefruit', 'Fig Leaf', 'Aquatic Notes'],
      heart: ['Violet Leaf', 'Papyrus', 'Black Pepper', 'Ambrox'],
      base: ['Mineral Musk', 'Tonka Bean', 'Saffron', 'Incense']
    },
    price: 82,
    rating: 4.5,
    reviewCount: 5621,
    image: '/images/perfumes/dylan-blue.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Mediterranean fougère with aquatic notes'
  },
  {
    id: '70',
    name: 'L\'Interdit',
    house: 'Givenchy',
    notes: {
      top: ['Bergamot', 'Pear'],
      heart: ['Tuberose', 'Orange Blossom', 'Jasmine Sambac'],
      base: ['Patchouli', 'Vanilla', 'Ambroxan', 'Vetiver']
    },
    price: 118,
    rating: 4.6,
    reviewCount: 4521,
    image: '/images/perfumes/linterdit.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Bold white floral with underground accord'
  },
  {
    id: '71',
    name: 'Stronger With You',
    house: 'Emporio Armani',
    notes: {
      top: ['Cardamom', 'Pink Pepper', 'Violet Leaf'],
      heart: ['Melon', 'Cinnamon', 'Sage'],
      base: ['Vanilla', 'Tonka Bean', 'Suede', 'Chestnut']
    },
    price: 92,
    rating: 4.5,
    reviewCount: 4892,
    image: '/images/perfumes/stronger-with-you.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Sweet aromatic with vanilla and chestnut'
  },
  {
    id: '72',
    name: 'Pink Sugar',
    house: 'Aquolina',
    notes: {
      top: ['Bergamot', 'Sicilian Orange', 'Fig Leaf'],
      heart: ['Lily-of-the-Valley', 'Licorice', 'Red Berries'],
      base: ['Vanilla', 'Caramel', 'Musk', 'Woodsy Notes']
    },
    price: 42,
    rating: 4.2,
    reviewCount: 7821,
    image: '/images/perfumes/pink-sugar.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Toilette',
    description: 'Sweet candy cotton fragrance'
  },
  {
    id: '73',
    name: 'Bentley for Men',
    house: 'Bentley',
    notes: {
      top: ['Bergamot', 'Bay Leaf', 'Blackberry', 'Clary Sage'],
      heart: ['Cinnamon', 'Cedar', 'Rum', 'Coriander'],
      base: ['Patchouli', 'Vetiver', 'Leather', 'Cashmere Wood']
    },
    price: 68,
    rating: 4.3,
    reviewCount: 3421,
    image: '/images/perfumes/bentley.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Sophisticated leather woody fragrance'
  },
  {
    id: '74',
    name: 'Bergamote 22',
    house: 'Le Labo',
    notes: {
      top: ['Bergamot', 'Grapefruit', 'Petitgrain'],
      heart: ['Vetiver', 'Oakmoss', 'Green Notes'],
      base: ['Amber', 'Musk']
    },
    price: 240,
    rating: 4.5,
    reviewCount: 1623,
    image: '/images/perfumes/bergamote-22.jpg',
    scentFamily: 'Citrus',
    concentration: 'Eau de Parfum',
    description: 'Fresh citrus with woody undertones'
  },
  {
    id: '75',
    name: 'Chance Eau Tendre',
    house: 'Chanel',
    notes: {
      top: ['Grapefruit', 'Quince'],
      heart: ['Jasmine', 'Hyacinth'],
      base: ['White Musk', 'Amber', 'Iris', 'Cedar']
    },
    price: 135,
    rating: 4.6,
    reviewCount: 5234,
    image: '/images/perfumes/chance-eau-tendre.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Toilette',
    description: 'Delicate fruity floral with musk'
  },
  {
    id: '76',
    name: 'Y',
    house: 'Yves Saint Laurent',
    notes: {
      top: ['Apple', 'Ginger', 'Bergamot'],
      heart: ['Sage', 'Juniper Berries', 'Geranium'],
      base: ['Amberwood', 'Tonka Bean', 'Cedar', 'Olibanum']
    },
    price: 105,
    rating: 4.4,
    reviewCount: 4521,
    image: '/images/perfumes/y.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aromatic woody fragrance'
  },
  {
    id: '77',
    name: 'Armani Code',
    house: 'Giorgio Armani',
    notes: {
      top: ['Lemon', 'Bergamot'],
      heart: ['Star Anise', 'Olive Blossom', 'Guaiac Wood'],
      base: ['Leather', 'Tonka Bean', 'Tobacco']
    },
    price: 98,
    rating: 4.5,
    reviewCount: 5621,
    image: '/images/perfumes/armani-code.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Toilette',
    description: 'Seductive aromatic oriental'
  },
  {
    id: '78',
    name: 'No. 5',
    house: 'Chanel',
    notes: {
      top: ['Aldehydes', 'Ylang-Ylang', 'Neroli', 'Bergamot'],
      heart: ['Iris', 'Jasmine', 'Rose', 'Lily-of-the-Valley'],
      base: ['Sandalwood', 'Vetiver', 'Vanilla', 'Amber']
    },
    price: 145,
    rating: 4.8,
    reviewCount: 8921,
    image: '/images/perfumes/chanel-5.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Iconic aldehydic floral composition'
  },
  {
    id: '79',
    name: 'Versace Pour Homme',
    house: 'Versace',
    notes: {
      top: ['Lemon', 'Bergamot', 'Neroli', 'Rose de Mai'],
      heart: ['Hyacinth', 'Cedar', 'Clary Sage', 'Geranium'],
      base: ['Tonka Bean', 'Musk', 'Amber']
    },
    price: 68,
    rating: 4.3,
    reviewCount: 6234,
    image: '/images/perfumes/versace-pour-homme.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Mediterranean aromatic fougère'
  },
  {
    id: '80',
    name: 'Montblanc Legend',
    house: 'Montblanc',
    notes: {
      top: ['Lavender', 'Bergamot', 'Pineapple', 'Lemon Verbena'],
      heart: ['Oakmoss', 'Geranium', 'Coumarin', 'Apple', 'Rose'],
      base: ['Sandalwood', 'Tonka Bean', 'Evernyl']
    },
    price: 62,
    rating: 4.4,
    reviewCount: 5621,
    image: '/images/perfumes/montblanc-legend.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh aromatic fougère with oakmoss'
  },
  {
    id: '81',
    name: 'Viktor & Rolf Bonbon',
    house: 'Viktor & Rolf',
    notes: {
      top: ['Orange', 'Mandarin', 'Peach'],
      heart: ['Caramel', 'Jasmine', 'Orange Blossom'],
      base: ['Guaiac Wood', 'Cedar', 'Sandalwood', 'Amber']
    },
    price: 108,
    rating: 4.5,
    reviewCount: 4123,
    image: '/images/perfumes/bonbon.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Sweet caramel with woody base'
  },
  {
    id: '82',
    name: 'Replica Beach Walk',
    house: 'Maison Margiela',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Lemon', 'Heliotrope'],
      heart: ['Coconut Milk', 'Ylang-Ylang', 'Transluzone'],
      base: ['Musk', 'Cedarwood', 'Benzoin']
    },
    price: 135,
    rating: 4.4,
    reviewCount: 3892,
    image: '/images/perfumes/beach-walk.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Sunny beach atmosphere with coconut'
  },
  {
    id: '83',
    name: 'L\'Homme',
    house: 'Yves Saint Laurent',
    notes: {
      top: ['Bergamot', 'Lemon', 'Ginger'],
      heart: ['Spices', 'Violet Leaf', 'White Pepper', 'Basil'],
      base: ['Tonka Bean', 'Cedar', 'Vetiver']
    },
    price: 98,
    rating: 4.5,
    reviewCount: 4521,
    image: '/images/perfumes/lhomme.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Modern woody oriental with ginger'
  },
  {
    id: '84',
    name: 'Layton',
    house: 'Parfums de Marly',
    notes: {
      top: ['Apple', 'Lavender', 'Mandarin', 'Bergamot'],
      heart: ['Geranium', 'Violet', 'Jasmine'],
      base: ['Vanilla', 'Cardamom', 'Sandalwood', 'Pepper', 'Guaiac Wood']
    },
    price: 325,
    rating: 4.8,
    reviewCount: 2341,
    image: '/images/perfumes/layton.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Aromatic fruity with spicy vanilla'
  },
  {
    id: '85',
    name: 'Prada Candy',
    house: 'Prada',
    notes: {
      top: ['Caramel'],
      heart: ['Musk', 'Powder'],
      base: ['Benzoin', 'Vanilla']
    },
    price: 105,
    rating: 4.4,
    reviewCount: 4321,
    image: '/images/perfumes/prada-candy.jpg',
    scentFamily: 'Gourmand',
    concentration: 'Eau de Parfum',
    description: 'Sweet powdery caramel gourmand'
  },
  {
    id: '86',
    name: 'Allure Homme Sport',
    house: 'Chanel',
    notes: {
      top: ['Orange', 'Mandarin', 'Sea Notes'],
      heart: ['Pepper', 'Neroli', 'Cedar'],
      base: ['Tonka Bean', 'Vanilla', 'Vetiver', 'Amber']
    },
    price: 125,
    rating: 4.6,
    reviewCount: 5234,
    image: '/images/perfumes/allure-homme-sport.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh woody sport fragrance'
  },
  {
    id: '87',
    name: 'Guerlain Shalimar',
    house: 'Guerlain',
    notes: {
      top: ['Lemon', 'Bergamot', 'Mandarin'],
      heart: ['Iris', 'Jasmine', 'Rose', 'Patchouli'],
      base: ['Incense', 'Vanilla', 'Tonka Bean', 'Leather']
    },
    price: 135,
    rating: 4.7,
    reviewCount: 4621,
    image: '/images/perfumes/shalimar.jpg',
    scentFamily: 'Oriental',
    concentration: 'Eau de Parfum',
    description: 'Legendary oriental with vanilla and incense'
  },
  {
    id: '88',
    name: 'Paco Rabanne Phantom',
    house: 'Paco Rabanne',
    notes: {
      top: ['Lemon', 'Cardamom', 'Bergamot', 'Lavender'],
      heart: ['Earthy Notes', 'Vetiver', 'Patchouli'],
      base: ['Vanilla', 'Woody Notes']
    },
    price: 95,
    rating: 4.4,
    reviewCount: 3821,
    image: '/images/perfumes/phantom.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Futuristic aromatic with creamy vanilla'
  },
  {
    id: '89',
    name: 'Dior Homme Intense',
    house: 'Dior',
    notes: {
      top: ['Lavender', 'Bergamot', 'Sage'],
      heart: ['Iris', 'Pear', 'Ambrette', 'Virginia Cedar'],
      base: ['Vetiver', 'Leather']
    },
    price: 135,
    rating: 4.7,
    reviewCount: 3421,
    image: '/images/perfumes/dior-homme-intense.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Powdery iris with woody base'
  },
  {
    id: '90',
    name: 'Tom Ford Oud Minerale',
    house: 'Tom Ford',
    notes: {
      top: ['Pink Pepper', 'Ambergris', 'Fenugreek'],
      heart: ['Marine Accord', 'Oud'],
      base: ['Ambrox', 'Vetiver', 'Geranium']
    },
    price: 395,
    rating: 4.6,
    reviewCount: 1234,
    image: '/images/perfumes/oud-minerale.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Parfum',
    description: 'Aquatic oud with marine accord'
  },
  {
    id: '91',
    name: 'Chloé Eau de Parfum',
    house: 'Chloé',
    notes: {
      top: ['Peony', 'Lychee', 'Freesia'],
      heart: ['Rose', 'Magnolia', 'Lily-of-the-Valley'],
      base: ['Amber', 'Cedar']
    },
    price: 115,
    rating: 4.6,
    reviewCount: 4821,
    image: '/images/perfumes/chloe-edp.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Powdery rose with lychee freshness'
  },
  {
    id: '92',
    name: 'Azzaro Wanted',
    house: 'Azzaro',
    notes: {
      top: ['Lemon', 'Ginger', 'Lavender', 'Mint'],
      heart: ['Apple', 'Juniper', 'Guatemalan Cardamom'],
      base: ['Tonka Bean', 'Amberwood', 'Haitian Vetiver']
    },
    price: 72,
    rating: 4.4,
    reviewCount: 4521,
    image: '/images/perfumes/azzaro-wanted.jpg',
    scentFamily: 'Fresh',
    concentration: 'Eau de Toilette',
    description: 'Fresh spicy with woody undertones'
  },
  {
    id: '93',
    name: 'Mugler Cologne',
    house: 'Mugler',
    notes: {
      top: ['Bergamot', 'Neroli', 'Petitgrain'],
      heart: ['White Musk', 'African Orange Flower'],
      base: ['White Musk']
    },
    price: 88,
    rating: 4.3,
    reviewCount: 3621,
    image: '/images/perfumes/mugler-cologne.jpg',
    scentFamily: 'Citrus',
    concentration: 'Eau de Cologne',
    description: 'Clean soapy citrus musk'
  },
  {
    id: '94',
    name: 'Givenchy Play',
    house: 'Givenchy',
    notes: {
      top: ['Mandarin', 'Grapefruit', 'Bergamot'],
      heart: ['Coffee', 'Amyris'],
      base: ['Vetiver', 'Patchouli']
    },
    price: 78,
    rating: 4.2,
    reviewCount: 3421,
    image: '/images/perfumes/givenchy-play.jpg',
    scentFamily: 'Woody',
    concentration: 'Eau de Toilette',
    description: 'Aromatic woody with coffee notes'
  },
  {
    id: '95',
    name: 'Dior Addict',
    house: 'Dior',
    notes: {
      top: ['Mandarin Leaf', 'Tunisian Orange Blossom'],
      heart: ['Jasmine Sambac', 'Neroli'],
      base: ['Bourbon Vanilla', 'Sandalwood']
    },
    price: 125,
    rating: 4.5,
    reviewCount: 4321,
    image: '/images/perfumes/dior-addict.jpg',
    scentFamily: 'Floral',
    concentration: 'Eau de Parfum',
    description: 'Luminous floral with vanilla warmth'
  }
];
