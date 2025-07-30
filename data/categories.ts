// Letter classification for the magic trick
const STRAIGHT_LETTERS = ['A', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'N', 'T', 'V', 'W', 'X', 'Y', 'Z'];
const CURVED_LETTERS = ['B', 'C', 'D', 'G', 'J', 'O', 'P', 'Q', 'R', 'S', 'U'];

const isLetterStraight = (letter: string): boolean => {
  return STRAIGHT_LETTERS.includes(letter.toUpperCase());
};

// Colors - 50 straight, 50 curved
const straightColors = [
  'Azure', 'Amber', 'Emerald', 'Ivory', 'Indigo', 'Lime', 'Lavender', 'Mint', 'Navy', 'Teal',
  'Violet', 'White', 'Yellow', 'Aqua', 'Ebony', 'Fuchsia', 'Khaki', 'Magenta', 'Tan', 'Wheat',
  'Almond', 'Apricot', 'Eggshell', 'Forest', 'Hunter', 'Lemon', 'Mahogany', 'Maroon', 'Turquoise', 'Wine',
  'Ash', 'Electric', 'Fire', 'Ice', 'Iron', 'Jade', 'Midnight', 'Titanium', 'Vanilla', 'Zinc',
  'Antique', 'Auburn', 'Ecru', 'Flax', 'Honey', 'Linen', 'Moss', 'Nude', 'Taupe', 'Umber'
];

const curvedColors = [
  'Blue', 'Black', 'Brown', 'Crimson', 'Coral', 'Gold', 'Gray', 'Green', 'Orange', 'Pink',
  'Purple', 'Red', 'Silver', 'Beige', 'Bronze', 'Burgundy', 'Copper', 'Cream', 'Cyan', 'Plum',
  'Rose', 'Sage', 'Scarlet', 'Ruby', 'Peach', 'Ochre', 'Olive', 'Onyx', 'Pearl', 'Salmon',
  'Sepia', 'Slate', 'Steel', 'Coral', 'Charcoal', 'Chocolate', 'Cobalt', 'Crimson', 'Denim', 'Garnet',
  'Graphite', 'Jade', 'Opal', 'Platinum', 'Rust', 'Sand', 'Sienna', 'Topaz', 'Umber', 'Vermillion'
];

// Cities - 50 straight, 50 curved  
const straightCities = [
  'Amsterdam', 'Athens', 'Auckland', 'Austin', 'Adelaide', 'Algiers', 'Anchorage', 'Ankara', 'Atlanta', 'Edinburgh',
  'Frankfurt', 'Helsinki', 'Honolulu', 'Houston', 'Istanbul', 'Kiev', 'Lima', 'Lisbon', 'London', 'Madrid',
  'Melbourne', 'Miami', 'Milan', 'Montreal', 'Moscow', 'Mumbai', 'Munich', 'Naples', 'Nashville', 'Newcastle',
  'Tokyo', 'Toronto', 'Venice', 'Vienna', 'Warsaw', 'Washington', 'Wellington', 'Winnipeg', 'Yokohama', 'Zagreb',
  'Aberdeen', 'Adelaide', 'Albuquerque', 'Alexandria', 'Amman', 'Auckland', 'Baltimore', 'Birmingham', 'Buffalo', 'Charlotte'
];

const curvedCities = [
  'Berlin', 'Boston', 'Brussels', 'Budapest', 'Buenos Aires', 'Cairo', 'Chicago', 'Copenhagen', 'Damascus', 'Dallas',
  'Delhi', 'Denver', 'Detroit', 'Dublin', 'Geneva', 'Glasgow', 'Hamburg', 'Jerusalem', 'Johannesburg', 'Oslo',
  'Ottawa', 'Paris', 'Prague', 'Quebec', 'Rome', 'San Francisco', 'Seattle', 'Stockholm', 'Sydney', 'Bangkok',
  'Barcelona', 'Belgrade', 'Bogota', 'Bucharest', 'Calcutta', 'Caracas', 'Casablanca', 'Cologne', 'Durban', 'Florence',
  'Gothenburg', 'Guadalajara', 'Havana', 'Jacksonville', 'Karachi', 'Lagos', 'Manchester', 'Marseille', 'Phoenix', 'Portland'
];

// Fruits - 50 straight, 50 curved
const straightFruits = [
  'Apple', 'Apricot', 'Avocado', 'Elderberry', 'Fig', 'Honeydew', 'Kiwi', 'Lemon', 'Lime', 'Mango',
  'Melon', 'Nectarine', 'Tangerine', 'Watermelon', 'Acai', 'Ackee', 'Feijoa', 'Huckleberry', 'Kumquat', 'Lychee',
  'Mandarin', 'Mulberry', 'Tamarind', 'Yuzu', 'Antelope', 'Arbutus', 'Azarole', 'Honeysuckle', 'Imbe', 'Jabuticaba',
  'Korlan', 'Longan', 'Loquat', 'Medlar', 'Naranjilla', 'Nance', 'Tamarillo', 'Tangelo', 'Wampee', 'Ximenia',
  'Yangmei', 'Abiu', 'Akebai', 'Amanatsu', 'Ambarella', 'Annona', 'Araza', 'Atemoya', 'Babaco', 'Barberry'
];

const curvedFruits = [
  'Banana', 'Blueberry', 'Blackberry', 'Cherry', 'Cranberry', 'Coconut', 'Date', 'Grape', 'Grapefruit', 'Guava',
  'Orange', 'Papaya', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Boysenberry',
  'Cantaloupe', 'Clementine', 'Currant', 'Durian', 'Gooseberry', 'Jackfruit', 'Persimmon', 'Quince', 'Rambutan', 'Starfruit',
  'Blackcurrant', 'Breadfruit', 'Caimito', 'Carambola', 'Cherimoya', 'Cloudberry', 'Cupuacu', 'Damson', 'Dragonfruit', 'Elderflower',
  'Goji', 'Jambose', 'Jujube', 'Passionfruit', 'Pitaya', 'Pomelo', 'Rhubarb', 'Salak', 'Soursop', 'Ugli'
];

// Objects - 50 straight, 50 curved
const straightObjects = [
  'Airplane', 'Antenna', 'Axe', 'Envelope', 'Engine', 'Fork', 'Hammer', 'Hat', 'Iron', 'Knife',
  'Ladder', 'Lamp', 'Mirror', 'Needle', 'Table', 'Television', 'Vase', 'Watch', 'Window', 'Anchor',
  'Arrow', 'Awl', 'Easel', 'Elbow', 'Fan', 'File', 'Filter', 'Hinge', 'Hook', 'Key',
  'Ladle', 'Lever', 'Magnet', 'Nail', 'Net', 'Tile', 'Timer', 'Tool', 'Valve', 'Wheel',
  'Wrench', 'Album', 'Atlas', 'Badge', 'Bucket', 'Cable', 'Chain', 'Clip', 'Frame', 'Handle'
];

const curvedObjects = [
  'Ball', 'Bottle', 'Bowl', 'Box', 'Brush', 'Button', 'Camera', 'Chair', 'Clock', 'Cup',
  'Disk', 'Door', 'Glass', 'Globe', 'Guitar', 'Jar', 'Jug', 'Oven', 'Pen', 'Phone',
  'Plate', 'Pot', 'Radio', 'Ring', 'Rope', 'Saucer', 'Spoon', 'Sphere', 'Barrel', 'Basket',
  'Bell', 'Book', 'Candle', 'Coin', 'Compass', 'Crown', 'Drum', 'Flute', 'Gem', 'Harp',
  'Jewel', 'Jigsaw', 'Pipe', 'Purse', 'Quill', 'Ribbon', 'Scale', 'Seal', 'Shield', 'Sword'
];

// Celebrities - 50 straight, 50 curved
const straightCelebrities = [
  'Adele', 'Angelina Jolie', 'Ariana Grande', 'Ed Sheeran', 'Emma Stone', 'Emma Watson', 'Eminem', 'Elvis Presley', 'Frank Sinatra', 'Harrison Ford',
  'Hugh Jackman', 'Iron Man', 'Katy Perry', 'Keanu Reeves', 'Lady Gaga', 'Leonardo DiCaprio', 'Meryl Streep', 'Michael Jackson', 'Morgan Freeman', 'Natalie Portman',
  'Neil Armstrong', 'Taylor Swift', 'Tom Hanks', 'Viola Davis', 'Will Smith', 'Winston Churchill', 'Yoko Ono', 'Albert Einstein', 'Anne Hathaway', 'Anthony Hopkins',
  'Arnold Schwarzenegger', 'Audrey Hepburn', 'Elvis Costello', 'Elton John', 'Federer', 'Harrison', 'Helen Keller', 'Ian McKellen', 'Kate Winslet', 'Kevin Hart',
  'Liam Neeson', 'Madonna', 'Mark Wahlberg', 'Matt Damon', 'Michelle Obama', 'Nicolas Cage', 'Oprah Winfrey', 'Tom Cruise', 'Vin Diesel', 'Whoopi Goldberg'
];

const curvedCelebrities = [
  'Barack Obama', 'Beyonce', 'Brad Pitt', 'Christina Aguilera', 'Dwayne Johnson', 'George Clooney', 'Jennifer Lawrence', 'Johnny Depp', 'Julia Roberts', 'Justin Bieber',
  'Oprah', 'Rihanna', 'Robert De Niro', 'Scarlett Johansson', 'Steven Spielberg', 'Benedict Cumberbatch', 'Cameron Diaz', 'Charlize Theron', 'Chris Hemsworth', 'Denzel Washington',
  'Gordon Ramsay', 'Gwyneth Paltrow', 'Jackie Chan', 'James Bond', 'Jennifer Aniston', 'Jim Carrey', 'Joaquin Phoenix', 'John Travolta', 'Jude Law', 'Patrick Stewart',
  'Paul McCartney', 'Quentin Tarantino', 'Robert Downey Jr', 'Robin Williams', 'Ryan Gosling', 'Sandra Bullock', 'Sean Connery', 'Sylvester Stallone', 'Clint Eastwood', 'Celine Dion',
  'Daniel Craig', 'Dave Chappelle', 'David Beckham', 'George Lucas', 'Jack Nicholson', 'Jane Austen', 'Janis Joplin', 'Joe Biden', 'Prince William', 'Russell Crowe'
];

export const categoryData = {
  colors: [...straightColors, ...curvedColors],
  cities: [...straightCities, ...curvedCities],
  fruits: [...straightFruits, ...curvedFruits],
  objects: [...straightObjects, ...curvedObjects],
  celebrities: [...straightCelebrities, ...curvedCelebrities],
};

export const getStraightItems = (category: keyof typeof categoryData) => {
  return categoryData[category].filter(item => isLetterStraight(item[0]));
};

export const getCurvedItems = (category: keyof typeof categoryData) => {
  return categoryData[category].filter(item => !isLetterStraight(item[0]));
};

export const generateRevealList = (selectedItem: string, category: keyof typeof categoryData): string[] => {
  const isSelectedStraight = isLetterStraight(selectedItem[0]);
  const straightItems = getStraightItems(category);
  const curvedItems = getCurvedItems(category);
  
  // Get 9 items of the opposite type
  const oppositeItems = isSelectedStraight ? curvedItems : straightItems;
  const selectedOpposites = oppositeItems
    .filter(item => item !== selectedItem)
    .sort(() => Math.random() - 0.5)
    .slice(0, 9);
  
  // Combine with selected item and shuffle
  const finalList = [...selectedOpposites, selectedItem].sort(() => Math.random() - 0.5);
  
  return finalList;
};

export { isLetterStraight, STRAIGHT_LETTERS, CURVED_LETTERS };