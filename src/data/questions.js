const questions = {
  food:{
    easy: [
      {
        question: "What fruit is known for keeping the doctor away if eaten daily?",
        options: ["Banana", "Apple", "Orange", "Grape"],
        answer: "Apple",
      },
      {
        question:"What is the main ingredient in guacamole?",
        options: ["Cucumber", "Lettuce", "Avocado", "Zucchini"],
        answer: "Avocado",
      },
       {
    question: "What food do bees make?",
    options: ["Jam", "Butter", "Honey", "Syrup"],
    answer: "Honey",
  },
  {
    question: "Which fast food chain is famous for its Big Mac?",
    options: ["KFC", "Subway", "Burger King", "McDonald's"],
    answer: "McDonald's",
  },
  {
    question: "What type of food is a carrot?",
    options: ["Fruit", "Root vegetable", "Leaf", "Grain"],
    answer: "Root vegetable",
  },
  {
    question: "What drink is made from oranges?",
    options: ["Lemonade", "Apple juice", "Orange juice", "Grape juice"],
    answer: "Orange juice",
  },
  {
    question: "What color is the inside of a watermelon?",
    options: ["Red", "Yellow", "Green", "Purple"],
    answer: "Red",
  },
  {
    question: "What is used to make popcorn pop?",
    options: ["Oil", "Heat", "Water", "Salt"],
    answer: "Heat",
  },
  {
    question: "Which cereal brand features a tiger named Tony?",
    options: ["Cheerios", "Corn Flakes", "Frosted Flakes", "Coco Pops"],
    answer: "Frosted Flakes",
  },
  {
    question: "What do cows produce that humans drink?",
    options: ["Juice", "Soda", "Milk", "Tea"],
    answer: "Milk",
  },
    ],
    medium: [
      {
    question: "What is tofu made from?",
    options: ["Rice", "Chickpeas", "Soybeans", "Milk"],
    answer: "Soybeans",
  },
  {
    question: "What is the name of the Italian dish made with layers of pasta, sauce, and cheese?",
    options: ["Pizza", "Risotto", "Lasagna", "Ravioli"],
    answer: "Lasagna",
  },
  {
    question: "What spice is used in both sweet and savory dishes and comes from bark?",
    options: ["Nutmeg", "Cardamom", "Cinnamon", "Clove"],
    answer: "Cinnamon",
  },
  {
    question: "What type of pastry is used in making a croissant?",
    options: ["Choux", "Puff", "Filo", "Shortcrust"],
    answer: "Puff",
  },
  {
    question: "Which vitamin is found most in carrots?",
    options: ["Vitamin B", "Vitamin C", "Vitamin A", "Vitamin D"],
    answer: "Vitamin A",
  },
  {
    question: "Which sauce is traditionally served with roast turkey?",
    options: ["Mustard", "Cranberry sauce", "Soy sauce", "Tomato sauce"],
    answer: "Cranberry sauce",
  },
  {
    question: "Which meat is used in a traditional shepherd’s pie?",
    options: ["Pork", "Chicken", "Lamb", "Turkey"],
    answer: "Lamb",
  },
  {
    question: "Sushi is traditionally wrapped in which seaweed?",
    options: ["Nori", "Wakame", "Kombu", "Hijiki"],
    answer: "Nori",
  },
  {
    question: "Which Italian cheese is used in tiramisu?",
    options: ["Mozzarella", "Mascarpone", "Parmesan", "Ricotta"],
    answer: "Mascarpone",
  },
  {
    question: "What fruit is dried to make a raisin?",
    options: ["Apple", "Grape", "Fig", "Plum"],
    answer: "Grape",
  },
    ],

  hard: [
     {
    question: "What is the culinary term for cooking in a vacuum-sealed bag in a water bath?",
    options: ["Blanching", "Sous vide", "Poaching", "Braising"],
    answer: "Sous vide",
  },
  {
    question: "What is the name of the cap on a mushroom?",
    options: ["Head", "Top", "Pileus", "Spore"],
    answer: "Pileus",
  },
  {
    question: "Which country is the origin of the dish 'Kimchi'?",
    options: ["Japan", "China", "Korea", "Vietnam"],
    answer: "Korea",
  },
  {
    question: "What is the name of the enzyme in pineapples that breaks down proteins?",
    options: ["Bromelain", "Pepsin", "Amylase", "Lipase"],
    answer: "Bromelain",
  },
  {
    question: "What grain is used to make traditional Japanese sake?",
    options: ["Wheat", "Rice", "Barley", "Corn"],
    answer: "Rice",
  },
  {
    question: "What spice is derived from the stigma of a flower?",
    options: ["Turmeric", "Saffron", "Paprika", "Cumin"],
    answer: "Saffron",
  },
  {
    question: "Which French dish consists of slow-cooked duck, pork, and white beans?",
    options: ["Ratatouille", "Bouillabaisse", "Cassoulet", "Coq au Vin"],
    answer: "Cassoulet",
  },
  {
    question: "What is the Japanese term for grilled skewered chicken?",
    options: ["Teriyaki", "Tempura", "Yakitori", "Sashimi"],
    answer: "Yakitori",
  },
  {
    question: "What is the main ingredient in the dish Baba Ganoush?",
    options: ["Chickpeas", "Eggplant", "Zucchini", "Tomato"],
    answer: "Eggplant",
  },
  {
    question: "What type of fish is used in a traditional Nicoise salad?",
    options: ["Trout", "Tuna", "Salmon", "Mackerel"],
    answer: "Tuna",
  },
  ],
  },

  travel:{
    easy:[
      {
    question: "Which city is the capital of France?",
    options: ["Rome", "Madrid", "Paris", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["India", "China", "Japan", "Thailand"],
    answer: "China",
  },
  {
    question: "Which U.S. city is known for the Statue of Liberty?",
    options: ["Los Angeles", "Chicago", "New York City", "Miami"],
    answer: "New York City",
  },
  {
    question: "Where is the Eiffel Tower located?",
    options: ["Paris", "London", "Rome", "Barcelona"],
    answer: "Paris",
  },
  {
    question: "Which country is known for kangaroos?",
    options: ["New Zealand", "South Africa", "Australia", "Brazil"],
    answer: "Australia",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    question: "What continent is Egypt in?",
    options: ["Asia", "Europe", "Africa", "South America"],
    answer: "Africa",
  },
  {
    question: "Where would you find the Colosseum?",
    options: ["Athens", "Rome", "Istanbul", "Venice"],
    answer: "Rome",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "Which European country is shaped like a boot?",
    options: ["France", "Spain", "Italy", "Germany"],
    answer: "Italy",
  },

    ],

    medium: [
       {
    question: "Which city is known as 'The Big Apple'?",
    options: ["Boston", "Los Angeles", "Chicago", "New York City"],
    answer: "New York City",
  },
  {
    question: "Which river flows through London?",
    options: ["Seine", "Danube", "Thames", "Rhine"],
    answer: "Thames",
  },
  {
    question: "Which country has the city of Istanbul?",
    options: ["Greece", "Turkey", "Bulgaria", "Lebanon"],
    answer: "Turkey",
  },
  {
    question: "Where is Machu Picchu located?",
    options: ["Mexico", "Chile", "Peru", "Brazil"],
    answer: "Peru",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "What mountain range runs along the west coast of South America?",
    options: ["Rockies", "Andes", "Alps", "Himalayas"],
    answer: "Andes",
  },
  {
    question: "Which country is home to the Taj Mahal?",
    options: ["India", "Pakistan", "Bangladesh", "Nepal"],
    answer: "India",
  },
  {
    question: "In which country would you find the city of Dubrovnik?",
    options: ["Greece", "Italy", "Croatia", "Slovenia"],
    answer: "Croatia",
  },
  {
    question: "Which city is known for the Blue Mosque?",
    options: ["Cairo", "Istanbul", "Tehran", "Riyadh"],
    answer: "Istanbul",
  },
  {
    question: "Which desert is the largest in the world?",
    options: ["Gobi", "Kalahari", "Sahara", "Antarctic"],
    answer: "Antarctic",
  },

    ],

    hard:[
      {
    question: "What is the capital of Bhutan?",
    options: ["Thimphu", "Kathmandu", "Paro", "Lhasa"],
    answer: "Thimphu",
  },
  {
    question: "Which country has the most number of islands?",
    options: ["Indonesia", "Sweden", "Philippines", "Canada"],
    answer: "Sweden",
  },
  {
    question: "What is the least visited country in the world?",
    options: ["Nauru", "Tuvalu", "San Marino", "Bhutan"],
    answer: "Tuvalu",
  },
  {
    question: "Which African country has Portuguese as its official language?",
    options: ["Ghana", "Mozambique", "Senegal", "Nigeria"],
    answer: "Mozambique",
  },
  {
    question: "In which country is Transylvania located?",
    options: ["Hungary", "Poland", "Romania", "Ukraine"],
    answer: "Romania",
  },
  {
    question: "What is the longest river in Europe?",
    options: ["Danube", "Volga", "Rhine", "Elbe"],
    answer: "Volga",
  },
  {
    question: "Which island nation is located off the southeast coast of Africa?",
    options: ["Sri Lanka", "Madagascar", "Mauritius", "Maldives"],
    answer: "Madagascar",
  },
  {
    question: "Which country has a city called Timbuktu?",
    options: ["Niger", "Chad", "Mali", "Sudan"],
    answer: "Mali",
  },
  {
    question: "Mount Elbrus, Europe’s highest peak, is in which country?",
    options: ["Switzerland", "Russia", "Georgia", "Austria"],
    answer: "Russia",
  },
  {
    question: "Which city has the busiest airport in the world by passenger traffic (as of 2023)?",
    options: ["Dubai", "Atlanta", "London", "Beijing"],
    answer: "Atlanta",
  },
    ],
  },

  sports: {
    easy:[
       {
    question: "How many players are on a soccer team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question: "Which sport is known as 'The Gentleman's Game'?",
    options: ["Tennis", "Golf", "Cricket", "Polo"],
    answer: "Cricket",
  },
  {
    question: "What color flag is waved to indicate the winner in Formula 1?",
    options: ["Red", "Yellow", "Checkered", "Blue"],
    answer: "Checkered",
  },
  {
    question: "In which sport do players use a racket?",
    options: ["Basketball", "Tennis", "Football", "Cricket"],
    answer: "Tennis",
  },
  {
    question: "How many holes are there in a standard round of golf?",
    options: ["9", "12", "18", "21"],
    answer: "18",
  },
  {
    question: "What sport does Lionel Messi play?",
    options: ["Basketball", "Football", "Rugby", "Tennis"],
    answer: "Football",
  },
  {
    question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
    options: ["China", "Japan", "Brazil", "France"],
    answer: "Japan",
  },
  {
    question: "What shape is a football (soccer) ball?",
    options: ["Cube", "Sphere", "Oval", "Cylinder"],
    answer: "Sphere",
  },
  {
    question: "Which sport uses a bat, ball, and wickets?",
    options: ["Baseball", "Cricket", "Hockey", "Golf"],
    answer: "Cricket",
  },
  {
    question: "Which athlete is known as 'The Fastest Man Alive'?",
    options: ["Tyson Gay", "Usain Bolt", "Michael Phelps", "Carl Lewis"],
    answer: "Usain Bolt",
  },
    ],

    medium: [
      {
    question: "What is the maximum score in a single frame of bowling?",
    options: ["200", "250", "300", "350"],
    answer: "300",
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Italy", "Argentina", "Brazil"],
    answer: "Brazil",
  },
  {
    question: "How long is a marathon?",
    options: ["24.2 km", "42.2 km", "50 km", "21.1 km"],
    answer: "42.2 km",
  },
  {
    question: "Which sport features the terms 'birdie', 'eagle', and 'bogey'?",
    options: ["Baseball", "Golf", "Tennis", "Cricket"],
    answer: "Golf",
  },
  {
    question: "Which NBA team does Stephen Curry play for (as of 2024)?",
    options: ["Lakers", "Celtics", "Warriors", "Nets"],
    answer: "Warriors",
  },
  {
    question: "In tennis, what is the term for 40-40?",
    options: ["Tie", "Juice", "Draw", "Deuce"],
    answer: "Deuce",
  },
  {
    question: "What sport is played on ice with brooms and a stone?",
    options: ["Hockey", "Figure Skating", "Curling", "Speed Skating"],
    answer: "Curling",
  },
  {
    question: "How many rings are there in the Olympic symbol?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    question: "Which country invented table tennis?",
    options: ["Japan", "England", "China", "France"],
    answer: "England",
  },
  {
    question: "What does VAR stand for in football?",
    options: ["Video Analysis Replay", "Video Assistant Referee", "Virtual Action Ref", "Verified Assist Replay"],
    answer: "Video Assistant Referee",
  },
    ],

    hard:[
      {
    question: "Which country won the first ever FIFA World Cup?",
    options: ["Argentina", "Brazil", "Uruguay", "Italy"],
    answer: "Uruguay",
  },
  {
    question: "In which year were women allowed to participate in the modern Olympics?",
    options: ["1896", "1900", "1920", "1948"],
    answer: "1900",
  },
  {
    question: "Which cricketer has scored 100 international centuries?",
    options: ["Virat Kohli", "Brian Lara", "Ricky Ponting", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Which African nation hosted the 2010 FIFA World Cup?",
    options: ["Nigeria", "South Africa", "Egypt", "Ghana"],
    answer: "South Africa",
  },
  {
    question: "Who was the first gymnast to score a perfect 10 in the Olympics?",
    options: ["Simone Biles", "Nadia Comaneci", "Shannon Miller", "Mary Lou Retton"],
    answer: "Nadia Comaneci",
  },
  {
    question: "Which Grand Slam is played on a clay court?",
    options: ["Wimbledon", "Australian Open", "US Open", "French Open"],
    answer: "French Open",
  },
  {
    question: "Which team won the most Super Bowls (as of 2024)?",
    options: ["Patriots", "Steelers", "Cowboys", "49ers"],
    answer: "Steelers",
  },
  {
    question: "Who holds the record for most goals in a single World Cup tournament?",
    options: ["Miroslav Klose", "Just Fontaine", "Pelé", "Ronaldo"],
    answer: "Just Fontaine",
  },
  {
    question: "In what sport is the Davis Cup contested?",
    options: ["Badminton", "Tennis", "Table Tennis", "Squash"],
    answer: "Tennis",
  },
  {
    question: "Which country has won the most Olympic gold medals overall?",
    options: ["Germany", "Soviet Union", "United Kingdom", "United States"],
    answer: "United States",
  },
    ],
  },
  movies: {
    easy:[
       {
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    question: "What is the name of the wizarding school in Harry Potter?",
    options: ["Beauxbatons", "Durmstrang", "Hogwarts", "Ilvermorny"],
    answer: "Hogwarts",
  },
  {
    question: "Which animated movie features a talking snowman named Olaf?",
    options: ["Frozen", "Moana", "Tangled", "Brave"],
    answer: "Frozen",
  },
  {
    question: "What color pill does Neo take in 'The Matrix'?",
    options: ["Blue", "Red", "Green", "Yellow"],
    answer: "Red",
  },
  {
    question: "Which movie features a sinking ship and the characters Jack and Rose?",
    options: ["The Notebook", "Titanic", "Pirates of the Caribbean", "Poseidon"],
    answer: "Titanic",
  },
  {
    question: "Which superhero is known as the 'Caped Crusader'?",
    options: ["Superman", "Spider-Man", "Batman", "Iron Man"],
    answer: "Batman",
  },
  {
    question: "Who voiced the character of Woody in 'Toy Story'?",
    options: ["Tom Hanks", "Tim Allen", "Brad Pitt", "Robin Williams"],
    answer: "Tom Hanks",
  },
  {
    question: "Which movie features the line 'I’ll be back'?",
    options: ["Predator", "RoboCop", "Terminator", "Commando"],
    answer: "Terminator",
  },
  {
    question: "What is the name of Simba's father in 'The Lion King'?",
    options: ["Scar", "Mufasa", "Zazu", "Timon"],
    answer: "Mufasa",
  },
  {
    question: "What kind of creature is Shrek?",
    options: ["Elf", "Goblin", "Ogre", "Troll"],
    answer: "Ogre",
  },
    ],

    medium: [
      {
    question: "Who directed 'Jurassic Park'?",
    options: ["George Lucas", "James Cameron", "Steven Spielberg", "Christopher Nolan"],
    answer: "Steven Spielberg",
  },
  {
    question: "Which movie won Best Picture at the 2020 Academy Awards?",
    options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    answer: "Parasite",
  },
  {
    question: "In which movie does Tom Hanks play a man stranded on an island?",
    options: ["The Terminal", "Sully", "Cast Away", "Captain Phillips"],
    answer: "Cast Away",
  },
  {
    question: "Which actor played the Joker in 'The Dark Knight' (2008)?",
    options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
    answer: "Heath Ledger",
  },
  {
    question: "What is the name of the kingdom in 'Frozen'?",
    options: ["Arendelle", "Narnia", "Atlantis", "Eldora"],
    answer: "Arendelle",
  },
  {
    question: "Which movie is about dreams within dreams?",
    options: ["Shutter Island", "Interstellar", "Inception", "Tenet"],
    answer: "Inception",
  },
  {
    question: "Who directed the 'The Lord of the Rings' trilogy?",
    options: ["Peter Jackson", "James Cameron", "Ridley Scott", "Zack Snyder"],
    answer: "Peter Jackson",
  },
  {
    question: "Which 1994 film features the character Andy Dufresne?",
    options: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "The Green Mile"],
    answer: "The Shawshank Redemption",
  },
  {
    question: "Which movie has the famous line 'Say hello to my little friend'?",
    options: ["Goodfellas", "Scarface", "The Godfather", "Heat"],
    answer: "Scarface",
  },
  {
    question: "Who played Katniss Everdeen in 'The Hunger Games' series?",
    options: ["Emma Watson", "Kristen Stewart", "Jennifer Lawrence", "Brie Larson"],
    answer: "Jennifer Lawrence",
  },
    ],

    hard: [
      {
    question: "Which film won the first Academy Award for Best Picture?",
    options: ["Wings", "Sunrise", "Gone with the Wind", "All Quiet on the Western Front"],
    answer: "Wings",
  },
  {
    question: "What year was the original 'Psycho' released?",
    options: ["1955", "1960", "1965", "1970"],
    answer: "1960",
  },
  {
    question: "What is the name of the computer in '2001: A Space Odyssey'?",
    options: ["SAM", "ALX", "HAL", "TOM"],
    answer: "HAL",
  },
  {
    question: "Which country produced the film 'Pan’s Labyrinth'?",
    options: ["Italy", "Mexico", "France", "Spain"],
    answer: "Spain",
  },
  {
    question: "What was the first feature-length animated film ever released?",
    options: ["Bambi", "Fantasia", "Snow White and the Seven Dwarfs", "Pinocchio"],
    answer: "Snow White and the Seven Dwarfs",
  },
  {
    question: "Who played the lead in the silent film 'The Kid'?",
    options: ["Buster Keaton", "Charlie Chaplin", "Harold Lloyd", "Douglas Fairbanks"],
    answer: "Charlie Chaplin",
  },
  {
    question: "Which director is known for the films 'Mulholland Drive' and 'Blue Velvet'?",
    options: ["Stanley Kubrick", "David Lynch", "Martin Scorsese", "Paul Thomas Anderson"],
    answer: "David Lynch",
  },
  {
    question: "Which movie features a character named Keyser Söze?",
    options: ["Seven", "The Usual Suspects", "L.A. Confidential", "Heat"],
    answer: "The Usual Suspects",
  },
  {
    question: "What is the title of the only X-rated film to win Best Picture?",
    options: ["Taxi Driver", "Midnight Cowboy", "Last Tango in Paris", "Blue Is the Warmest Colour"],
    answer: "Midnight Cowboy",
  },
  {
    question: "Which Akira Kurosawa film inspired 'The Magnificent Seven'?",
    options: ["Rashomon", "Throne of Blood", "Seven Samurai", "Ran"],
    answer: "Seven Samurai",
  },
    ],
  },
  general: {
    easy: [
      {
    question: "What planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answer: "Earth",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Elephant", "Lion", "Giraffe"],
    answer: "Lion",
  },
  {
    question: "What do bees produce?",
    options: ["Milk", "Wax", "Honey", "Juice"],
    answer: "Honey",
  },
  {
    question: "Which shape has 3 sides?",
    options: ["Square", "Triangle", "Rectangle", "Circle"],
    answer: "Triangle",
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "360"],
    answer: "366",
  },
  {
    question: "What gas do humans need to breathe?",
    options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Air", "Sugar"],
    answer: "Water",
  },
  {
    question: "Which direction does the sun rise from?",
    options: ["North", "West", "East", "South"],
    answer: "East",
  },
    ],

    medium: [
      {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the national currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    question: "How many teeth does a typical adult human have?",
    options: ["28", "30", "32", "34"],
    answer: "32",
  },
  {
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Michelangelo", "Da Vinci", "Picasso"],
    answer: "Da Vinci",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Saturn", "Mars", "Mercury"],
    answer: "Mars",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Gobi", "Kalahari", "Sahara", "Antarctica"],
    answer: "Antarctica",
  },
  {
    question: "Who discovered gravity when he saw an apple fall from a tree?",
    options: ["Albert Einstein", "Galileo", "Isaac Newton", "Nikola Tesla"],
    answer: "Isaac Newton",
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["Japan", "China", "India", "Thailand"],
    answer: "China",
  },
  {
    question: "What language has the most native speakers in the world?",
    options: ["English", "Hindi", "Spanish", "Mandarin"],
    answer: "Mandarin",
  },
],
    hard: [
       {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Ulna", "Tibia"],
    answer: "Stapes",
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    options: ["Silver", "Aluminum", "Gold", "Argon"],
    answer: "Gold",
  },
  {
    question: "What is the capital of Iceland?",
    options: ["Oslo", "Helsinki", "Reykjavik", "Stockholm"],
    answer: "Reykjavik",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Steel", "Obsidian", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Molière", "Shakespeare", "Sophocles", "Homer"],
    answer: "Shakespeare",
  },
  {
    question: "Which scientist developed the theory of relativity?",
    options: ["Newton", "Einstein", "Bohr", "Curie"],
    answer: "Einstein",
  },
  {
    question: "Which country has the longest coastline in the world?",
    options: ["Russia", "USA", "Australia", "Canada"],
    answer: "Canada",
  },
  {
    question: "Which continent is the River Nile located in?",
    options: ["Asia", "Europe", "Africa", "South America"],
    answer: "Africa",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Mercury", "Lead", "Aluminum", "Iron"],
    answer: "Mercury",
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1985", "1987", "1989", "1991"],
    answer: "1989",
  },
    ],
  }
};

export default questions;
