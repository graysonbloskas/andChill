const { Movies } = require('../models');

const movieData = [
    {
		"movie_id" : 12190,
		"title" : "The Four Horsemen of the Apocalypse",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 19388,
		"title" : "The Singing Fool",
		"genre" : "Musical, Drama"
	},
	{
		"movie_id" : 21483,
		"title" : "Tom Sawyer",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 29583,
		"title" : "Snow White and the Seven Dwarfs",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 31381,
		"title" : "Gone with the Wind",
		"genre" : "Drama, History, Romance"
	},
	{
		"movie_id" : 32138,
		"title" : "The Wizard of Oz",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 32455,
		"title" : "Fantasia",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 32910,
		"title" : "Pinocchio",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 34167,
		"title" : "Sergeant York",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 34492,
		"title" : "Bambi",
		"genre" : "Animation, Drama, Family"
	},
	{
		"movie_id" : 35423,
		"title" : "Kate & Leopold",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 35575,
		"title" : "Yankee Doodle Dandy",
		"genre" : "Biography, Drama, Musical"
	},
	{
		"movie_id" : 36430,
		"title" : "This Is the Army",
		"genre" : "Comedy, Musical, War"
	},
	{
		"movie_id" : 36868,
		"title" : "The Best Years of Our Lives",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 36872,
		"title" : "Going My Way",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 37536,
		"title" : "The Bells of St. Mary's",
		"genre" : "Drama"
	},
	{
		"movie_id" : 38417,
		"title" : "Cloak and Dagger",
		"genre" : "Adventure, Film-Noir, Romance"
	},
	{
		"movie_id" : 38499,
		"title" : "Duel in the Sun",
		"genre" : "Drama, Romance, Western"
	},
	{
		"movie_id" : 38969,
		"title" : "Song of the South",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 40806,
		"title" : "The Snake Pit",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 42332,
		"title" : "Cinderella",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 44672,
		"title" : "The Greatest Show on Earth",
		"genre" : "Drama, Family, Romance"
	},
	{
		"movie_id" : 45061,
		"title" : "The Quiet Man",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 45162,
		"title" : "The Snows of Kilimanjaro",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 45888,
		"title" : "House of Wax",
		"genre" : "Horror"
	},
	{
		"movie_id" : 46183,
		"title" : "Peter Pan",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 46247,
		"title" : "The Robe",
		"genre" : "Drama, History"
	},
	{
		"movie_id" : 46816,
		"title" : "The Caine Mutiny",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 47396,
		"title" : "Rear Window",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 47860,
		"title" : "Bale Cry",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 48280,
		"title" : "Lady and the Tramp",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 48380,
		"title" : "Mister Roberts",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 48960,
		"title" : "Around the World in 80 Days",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 49261,
		"title" : "Giant",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 49833,
		"title" : "The Ten Commandments",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 50173,
		"title" : "Bayou",
		"genre" : "Drama"
	},
	{
		"movie_id" : 50212,
		"title" : "The Bridge on the River Kwai",
		"genre" : "Adventure, Drama, War"
	},
	{
		"movie_id" : 50798,
		"title" : "Old Yeller",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 50839,
		"title" : "Peyton Place",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 50933,
		"title" : "Sayonara",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 52561,
		"title" : "Anatomy of a Murder",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 52618,
		"title" : "Ben-Hur",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 52896,
		"title" : "A Hole in the Head",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 53143,
		"title" : "Operation Peicoat",
		"genre" : "Comedy, Romance, War"
	},
	{
		"movie_id" : 53172,
		"title" : "Pillow Talk",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 53221,
		"title" : "Rio Bravo",
		"genre" : "Action, Drama, Western"
	},
	{
		"movie_id" : 53271,
		"title" : "The Shaggy Dog",
		"genre" : "Family, Comedy, Fantasy"
	},
	{
		"movie_id" : 53285,
		"title" : "Sleeping Beauty",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 53841,
		"title" : "From the Terrace",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 54172,
		"title" : "Pepe",
		"genre" : "Comedy, Musical"
	},
	{
		"movie_id" : 54215,
		"title" : "Psycho",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 54357,
		"title" : "Swiss Family Robinson",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 54367,
		"title" : "Tall Story",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 54649,
		"title" : "Babes in Toyland",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 54759,
		"title" : "Come September",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 55100,
		"title" : "Lover Come Back",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 55254,
		"title" : "One Hundred and One Dalmatians",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 55277,
		"title" : "The Parent Trap",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 55614,
		"title" : "West Side Story",
		"genre" : "Crime, Drama, Musical"
	},
	{
		"movie_id" : 55807,
		"title" : "Bon Voyage!",
		"genre" : "Family, Comedy, Adventure"
	},
	{
		"movie_id" : 55928,
		"title" : "Dr. No",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 56059,
		"title" : "Hatari!",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 56095,
		"title" : "In Search of the Castaways",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 56101,
		"title" : "The Interns",
		"genre" : "Drama"
	},
	{
		"movie_id" : 56172,
		"title" : "Lawrence of Arabia",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 56575,
		"title" : "That Touch of Mink",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 56937,
		"title" : "Cleopatra",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 57012,
		"title" : "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 57076,
		"title" : "From Russia with Love",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 57193,
		"title" : "It's a Mad Mad Mad Mad World",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 57413,
		"title" : "The Pink Panther",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 57546,
		"title" : "The Sword in the Stone",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 58092,
		"title" : "Father Goose",
		"genre" : "Adventure, Comedy, Romance"
	},
	{
		"movie_id" : 58150,
		"title" : "Goldfinger",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 58153,
		"title" : "Good Neighbor Sam",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 58212,
		"title" : "How to Murder Your Wife",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 58331,
		"title" : "Mary Poppins",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 58385,
		"title" : "My Fair Lady",
		"genre" : "Drama, Family, Musical"
	},
	{
		"movie_id" : 58461,
		"title" : "Per un pugno di dollari",
		"genre" : "Action, Drama, Western"
	},
	{
		"movie_id" : 58529,
		"title" : "Robin and the 7 Hoods",
		"genre" : "Comedy, Crime, Musical"
	},
	{
		"movie_id" : 58586,
		"title" : "A Shot in the Dark",
		"genre" : "Comedy, Mystery"
	},
	{
		"movie_id" : 58708,
		"title" : "The Unsinkable Molly Brown",
		"genre" : "Biography, Comedy, Musical"
	},
	{
		"movie_id" : 58947,
		"title" : "Bale of the Bulge",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 59017,
		"title" : "Cat Ballou",
		"genre" : "Comedy, Romance, Western"
	},
	{
		"movie_id" : 59037,
		"title" : "The Cincinnati Kid",
		"genre" : "Drama"
	},
	{
		"movie_id" : 59113,
		"title" : "Doctor Zhivago",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 59578,
		"title" : "Per qualche dollaro in più",
		"genre" : "Western"
	},
	{
		"movie_id" : 59711,
		"title" : "Shenandoah",
		"genre" : "Drama, War, Western"
	},
	{
		"movie_id" : 59742,
		"title" : "The Sound of Music",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 59793,
		"title" : "That Darn Cat!",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 59800,
		"title" : "Thunderball",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 59903,
		"title" : "What's New Pussycat",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 60196,
		"title" : "Il buono, il bruo, il caivo",
		"genre" : "Western"
	},
	{
		"movie_id" : 60463,
		"title" : "The Glass Boom Boat",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 60640,
		"title" : "Lt. Robin Crusoe, U.S.N.",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 60862,
		"title" : "The Professionals",
		"genre" : "Action, Adventure, Western"
	},
	{
		"movie_id" : 61135,
		"title" : "The Ugly Dachshund",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 61170,
		"title" : "Walk Don't Run",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 61184,
		"title" : "Who's Afraid of Virginia Woolf?",
		"genre" : "Drama"
	},
	{
		"movie_id" : 61385,
		"title" : "Barefoot in the Park",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 61581,
		"title" : "Divorce American Style",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 61722,
		"title" : "The Graduate",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 61735,
		"title" : "Guess Who's Coming to Dinner",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 61747,
		"title" : "Hang 'Em High",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 61834,
		"title" : "Jag är nyfiken - en film i gult",
		"genre" : "Drama"
	},
	{
		"movie_id" : 61852,
		"title" : "The Jungle Book",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 62472,
		"title" : "The War Wagon",
		"genre" : "Western"
	},
	{
		"movie_id" : 62512,
		"title" : "You Only Live Twice",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 62622,
		"title" : "2001: A Space Odyssey",
		"genre" : "Adventure, Sci-Fi"
	},
	{
		"movie_id" : 62657,
		"title" : "The Ambushers",
		"genre" : "Action, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 62737,
		"title" : "Blackbeard's Ghost",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 62794,
		"title" : "Charly",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 62994,
		"title" : "Funny Girl",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 63374,
		"title" : "The Odd Couple",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 63442,
		"title" : "Planet of the Apes",
		"genre" : "Adventure, Sci-Fi"
	},
	{
		"movie_id" : 64002,
		"title" : "Alice's Restaurant",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 64107,
		"title" : "A Boy Named Charlie Brown",
		"genre" : "Animation, Comedy, Drama"
	},
	{
		"movie_id" : 64115,
		"title" : "Butch Cassidy and the Sundance Kid",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 64381,
		"title" : "Goodbye, Columbus",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 64603,
		"title" : "The Love Bug",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 64665,
		"title" : "Midnight Cowboy",
		"genre" : "Drama"
	},
	{
		"movie_id" : 64757,
		"title" : "On Her Majesty's Secret Service",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 64782,
		"title" : "Paint Your Wagon",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 65037,
		"title" : "The Sterile Cuckoo",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 65088,
		"title" : "They Shoot Horses, Don't They?",
		"genre" : "Drama"
	},
	{
		"movie_id" : 65377,
		"title" : "Airport",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 65421,
		"title" : "The AristoCats",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 65462,
		"title" : "Beneath the Planet of the Apes",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 65482,
		"title" : "The Boatniks",
		"genre" : "Family, Comedy"
	},
	{
		"movie_id" : 65775,
		"title" : "Geing Straight",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 65916,
		"title" : "Joe",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 65988,
		"title" : "Lile Big Man",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 66011,
		"title" : "Love Story",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 66026,
		"title" : "MASH",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 66181,
		"title" : "On a Clear Day You Can See Forever",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 66195,
		"title" : "The Owl and the Pussycat",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 66206,
		"title" : "Paon",
		"genre" : "Biography, Drama, War"
	},
	{
		"movie_id" : 66728,
		"title" : "The Million Dollar Duck",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 66774,
		"title" : "Ann och Eve - de erotiska",
		"genre" : "Drama"
	},
	{
		"movie_id" : 66892,
		"title" : "Carnal Knowledge",
		"genre" : "Drama"
	},
	{
		"movie_id" : 66921,
		"title" : "A Clockwork Orange",
		"genre" : "Crime, Drama, Sci-Fi"
	},
	{
		"movie_id" : 66927,
		"title" : "Cold Turkey",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 66995,
		"title" : "Diamonds Are Forever",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 66999,
		"title" : "Dirty Harry",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 67065,
		"title" : "Escape from the Planet of the Apes",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 67093,
		"title" : "Fiddler on the Roof",
		"genre" : "Drama, Family, Musical"
	},
	{
		"movie_id" : 67116,
		"title" : "The French Connection",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 67217,
		"title" : "The Hospital",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 67328,
		"title" : "The Last Picture Show",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 67588,
		"title" : "Play Misty for Me",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 67927,
		"title" : "Vanishing Point",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 67991,
		"title" : "Willard",
		"genre" : "Horror"
	},
	{
		"movie_id" : 68408,
		"title" : "Conquest of the Planet of the Apes",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 68555,
		"title" : "Everything You Always Wanted to Know About Sex * But Were Afraid to Ask",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 68646,
		"title" : "The Godfather",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 68687,
		"title" : "The Heartbreak Kid",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 68699,
		"title" : "High Plains Drifter",
		"genre" : "Drama, Mystery, Western"
	},
	{
		"movie_id" : 69080,
		"title" : "Pete 'n' Tillie",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 69113,
		"title" : "The Poseidon Adventure",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 69495,
		"title" : "What's Up, Doc?",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 69704,
		"title" : "American Graffiti",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 69768,
		"title" : "Bale for the Planet of the Apes",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 69888,
		"title" : "Class of '44",
		"genre" : "Drama"
	},
	{
		"movie_id" : 69947,
		"title" : "The Day of the Jackal",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 70047,
		"title" : "The Exorcist",
		"genre" : "Horror"
	},
	{
		"movie_id" : 70328,
		"title" : "Live and Let Die",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 70355,
		"title" : "Magnum Force",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 70511,
		"title" : "Papillon",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 70666,
		"title" : "Serpico",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 70707,
		"title" : "Sleeper",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 70735,
		"title" : "The Sting",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 70819,
		"title" : "A Touch of Class",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 70849,
		"title" : "Ultimo tango a Parigi",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 70903,
		"title" : "The Way We Were",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 71115,
		"title" : "Alice Doesn't Live Here Anymore",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 71206,
		"title" : "Benji",
		"genre" : "Adventure, Family, Romance"
	},
	{
		"movie_id" : 71230,
		"title" : "Blazing Saddles",
		"genre" : "Comedy, Western"
	},
	{
		"movie_id" : 71269,
		"title" : "California Split",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 71315,
		"title" : "Chinatown",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 71402,
		"title" : "Death Wish",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 71455,
		"title" : "Earthquake",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 71562,
		"title" : "The Godfather: Part II",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 71577,
		"title" : "The Great Gatsby",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 71771,
		"title" : "The Longest Yard",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 71807,
		"title" : "The Man with the Golden Gun",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 71877,
		"title" : "Murder on the Orient Express",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 72081,
		"title" : "The Return of the Pink Panther",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 72271,
		"title" : "The Texas Chain Saw Massacre",
		"genre" : "Horror"
	},
	{
		"movie_id" : 72281,
		"title" : "The Three Musketeers",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 72288,
		"title" : "Thunderbolt and Lightfoot",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 72308,
		"title" : "The Towering Inferno",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 72417,
		"title" : "A Woman Under the Influence",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 72431,
		"title" : "Young Frankenstein",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 72608,
		"title" : "The Adventure of Sherlock Holmes' Smarter Brother",
		"genre" : "Comedy, Crime, Music"
	},
	{
		"movie_id" : 72610,
		"title" : "The Adventures of the Wilderness Family",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 72653,
		"title" : "The Apple Dumpling Gang",
		"genre" : "Comedy, Family, Western"
	},
	{
		"movie_id" : 72848,
		"title" : "The Day of the Locust",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 72890,
		"title" : "Dog Day Afternoon",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 72926,
		"title" : "The Eiger Sanction",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 72951,
		"title" : "Escape to Witch Mountain",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 73012,
		"title" : "The Four Musketeers",
		"genre" : "Adventure, History"
	},
	{
		"movie_id" : 73018,
		"title" : "French Connection II",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 73026,
		"title" : "Funny Lady",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 73053,
		"title" : "Give 'em Hell, Harry!",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 73075,
		"title" : "The Great Waldo Pepper",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 73190,
		"title" : "Once Is Not Enough",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 73195,
		"title" : "Jaws",
		"genre" : "Adventure, Thriller"
	},
	{
		"movie_id" : 73312,
		"title" : "Love and Death",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 73317,
		"title" : "Lucky Lady",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 73440,
		"title" : "Nashville",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 73486,
		"title" : "One Flew Over the Cuckoo's Nest",
		"genre" : "Drama"
	},
	{
		"movie_id" : 73496,
		"title" : "The Other Side of the Mountain",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 73600,
		"title" : "Race with the Devil",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 73629,
		"title" : "The Rocky Horror Picture Show",
		"genre" : "Comedy, Musical"
	},
	{
		"movie_id" : 73631,
		"title" : "Rollerball",
		"genre" : "Action, Sci-Fi, Sport"
	},
	{
		"movie_id" : 73692,
		"title" : "Shampoo",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 73802,
		"title" : "Three Days of the Condor",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 73812,
		"title" : "Tommy",
		"genre" : "Drama, Musical"
	},
	{
		"movie_id" : 73878,
		"title" : "W.W. and the Dixie Dancekings",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 74119,
		"title" : "All the President's Men",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 74174,
		"title" : "The Bad News Bears",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 74285,
		"title" : "Carrie",
		"genre" : "Horror"
	},
	{
		"movie_id" : 74483,
		"title" : "The Enforcer",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 74539,
		"title" : "La flûte à six schtroumpfs",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 74564,
		"title" : "Gator",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 74599,
		"title" : "Gus",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 74751,
		"title" : "King Kong",
		"genre" : "Adventure, Horror"
	},
	{
		"movie_id" : 74860,
		"title" : "Marathon Man",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 74899,
		"title" : "Midway",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 74958,
		"title" : "Network",
		"genre" : "Drama"
	},
	{
		"movie_id" : 75005,
		"title" : "The Omen",
		"genre" : "Horror"
	},
	{
		"movie_id" : 75029,
		"title" : "The Outlaw Josey Wales",
		"genre" : "Western"
	},
	{
		"movie_id" : 75066,
		"title" : "The Pink Panther Strikes Again",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 75148,
		"title" : "Rocky",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 75222,
		"title" : "Silent Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 75223,
		"title" : "Silver Streak",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 75265,
		"title" : "A Star Is Born",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 75314,
		"title" : "Taxi Driver",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 75629,
		"title" : "Across the Great Divide",
		"genre" : "Family, Western"
	},
	{
		"movie_id" : 75686,
		"title" : "Annie Hall",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 75718,
		"title" : "The Bad News Bears in Breaking Training",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 75765,
		"title" : "Black Sunday",
		"genre" : "Adventure, Crime, Drama"
	},
	{
		"movie_id" : 75774,
		"title" : "Bobby Deerfield",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 75784,
		"title" : "A Bridge Too Far",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 75860,
		"title" : "Close Encounters of the Third Kind",
		"genre" : "Drama, Sci-Fi"
	},
	{
		"movie_id" : 75925,
		"title" : "The Deep",
		"genre" : "Adventure, Mystery, Thriller"
	},
	{
		"movie_id" : 76009,
		"title" : "Exorcist II: The Heretic",
		"genre" : "Horror"
	},
	{
		"movie_id" : 76044,
		"title" : "For the Love of Benji",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 76054,
		"title" : "Freaky Friday",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 76070,
		"title" : "The Gauntlet",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 76095,
		"title" : "The Goodbye Girl",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 76137,
		"title" : "Herbie Goes to Monte Carlo",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 76138,
		"title" : "Heroes",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 76141,
		"title" : "High Anxiety",
		"genre" : "Comedy, Mystery, Thriller"
	},
	{
		"movie_id" : 76245,
		"title" : "Julia",
		"genre" : "Drama"
	},
	{
		"movie_id" : 76327,
		"title" : "Looking for Mr. Goodbar",
		"genre" : "Drama"
	},
	{
		"movie_id" : 76451,
		"title" : "New York, New York",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 76489,
		"title" : "Oh, God!",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 76504,
		"title" : "Orca",
		"genre" : "Adventure, Drama, Horror"
	},
	{
		"movie_id" : 76507,
		"title" : "The Other Side of Midnight",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 76538,
		"title" : "Pete's Dragon",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 76618,
		"title" : "The Rescuers",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 76666,
		"title" : "Saturday Night Fever",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 76723,
		"title" : "Slap Shot",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 76729,
		"title" : "Smokey and the Bandit",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 76752,
		"title" : "The Spy Who Loved Me",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 76759,
		"title" : "Star Wars",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 76843,
		"title" : "The Turning Point",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 76933,
		"title" : "The World's Greatest Lover",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 77228,
		"title" : "The Betsy",
		"genre" : "Drama"
	},
	{
		"movie_id" : 77233,
		"title" : "The Big Fix",
		"genre" : "Comedy, Mystery, Thriller"
	},
	{
		"movie_id" : 77278,
		"title" : "Buck Rogers in the 25th Century",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 77280,
		"title" : "The Buddy Holly Story",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 77288,
		"title" : "La cage aux folles",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 77289,
		"title" : "California Suite",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 77360,
		"title" : "Comes a Horseman",
		"genre" : "Drama, Romance, Western"
	},
	{
		"movie_id" : 77362,
		"title" : "Coming Home",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 77369,
		"title" : "Convoy",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 77372,
		"title" : "Corvee Summer",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 77394,
		"title" : "Damien: Omen II",
		"genre" : "Horror"
	},
	{
		"movie_id" : 77413,
		"title" : "Death on the Nile",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 77416,
		"title" : "The Deer Hunter",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 77504,
		"title" : "The End",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 77523,
		"title" : "Every Which Way but Loose",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 77530,
		"title" : "Eyes of Laura Mars",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 77578,
		"title" : "Foul Play",
		"genre" : "Comedy, Mystery, Thriller"
	},
	{
		"movie_id" : 77631,
		"title" : "Grease",
		"genre" : "Musical, Romance"
	},
	{
		"movie_id" : 77636,
		"title" : "The Greek Tycoon",
		"genre" : "Drama"
	},
	{
		"movie_id" : 77651,
		"title" : "Halloween",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 77663,
		"title" : "Heaven Can Wait",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 77696,
		"title" : "Hooper",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 77699,
		"title" : "House Calls",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 77716,
		"title" : "Ice Castles",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 77742,
		"title" : "Interiors",
		"genre" : "Drama"
	},
	{
		"movie_id" : 77745,
		"title" : "Invasion of the Body Snatchers",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 77766,
		"title" : "Jaws 2",
		"genre" : "Adventure, Horror, Thriller"
	},
	{
		"movie_id" : 77869,
		"title" : "The Lord of the Rings",
		"genre" : "Animation, Adventure, Fantasy"
	},
	{
		"movie_id" : 77928,
		"title" : "Midnight Express",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 77942,
		"title" : "Moment by Moment",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 77975,
		"title" : "National Lampoon's Animal House",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 78034,
		"title" : "The One and Only",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 78044,
		"title" : "The Other Side of the Mountain: Part II",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 78158,
		"title" : "Return from Witch Mountain",
		"genre" : "Family, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 78163,
		"title" : "Revenge of the Pink Panther",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 78199,
		"title" : "Same Time, Next Year",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 78227,
		"title" : "Semi-Tough",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 78239,
		"title" : "Sgt. Pepper's Lonely Hearts Club Band",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 78346,
		"title" : "Superman",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 78444,
		"title" : "An Unmarried Woman",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 78446,
		"title" : "Up in Smoke",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 78504,
		"title" : "The Wiz",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 78718,
		"title" : "...and justice for all.",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 78721,
		"title" : "10",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 78723,
		"title" : "1941",
		"genre" : "Action, Comedy, War"
	},
	{
		"movie_id" : 78740,
		"title" : "The Concorde... Airport '79",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 78748,
		"title" : "Alien",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 78754,
		"title" : "All That Jazz",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 78767,
		"title" : "The Amityville Horror",
		"genre" : "Horror"
	},
	{
		"movie_id" : 78788,
		"title" : "Apocalypse Now",
		"genre" : "Drama, Mystery, War"
	},
	{
		"movie_id" : 78790,
		"title" : "The Apple Dumpling Gang Rides Again",
		"genre" : "Comedy, Family, Western"
	},
	{
		"movie_id" : 78841,
		"title" : "Being There",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 78869,
		"title" : "The Black Hole",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 78872,
		"title" : "The Black Stallion",
		"genre" : "Adventure, Family, Sport"
	},
	{
		"movie_id" : 78902,
		"title" : "Breaking Away",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 78950,
		"title" : "The Champ",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 78966,
		"title" : "The China Syndrome",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 79073,
		"title" : "Dracula",
		"genre" : "Drama, Horror, Romance"
	},
	{
		"movie_id" : 79116,
		"title" : "Escape from Alcatraz",
		"genre" : "Action, Biography, Crime"
	},
	{
		"movie_id" : 79168,
		"title" : "A Force of One",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 79180,
		"title" : "The Frisco Kid",
		"genre" : "Comedy, Drama, Western"
	},
	{
		"movie_id" : 79219,
		"title" : "Going in Style",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 79240,
		"title" : "The First Great Train Robbery",
		"genre" : "Adventure, Crime, Drama"
	},
	{
		"movie_id" : 79261,
		"title" : "Hair",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 79285,
		"title" : "Saturn 3",
		"genre" : "Adventure, Horror, Sci-Fi"
	},
	{
		"movie_id" : 79367,
		"title" : "The Jerk",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 79417,
		"title" : "Kramer vs. Kramer",
		"genre" : "Drama"
	},
	{
		"movie_id" : 79450,
		"title" : "The Legacy",
		"genre" : "Horror"
	},
	{
		"movie_id" : 79470,
		"title" : "Life of Brian",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 79489,
		"title" : "Love at First Bite",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 79510,
		"title" : "The Main Event",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 79522,
		"title" : "Manhaan",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 79540,
		"title" : "Meatballs",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 79574,
		"title" : "Moonraker",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 79576,
		"title" : "More American Graffiti",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 79588,
		"title" : "The Muppet Movie",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 79638,
		"title" : "Norma Rae",
		"genre" : "Drama"
	},
	{
		"movie_id" : 79640,
		"title" : "North Dallas Forty",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 79668,
		"title" : "The Onion Field",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 79714,
		"title" : "Phantasm",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 79756,
		"title" : "The Promise",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 79758,
		"title" : "Prophecy",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 79817,
		"title" : "Rocky II",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 79822,
		"title" : "Roller Boogie",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 79826,
		"title" : "The Rose",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 79875,
		"title" : "The Seduction of Joe Tynan",
		"genre" : "Drama"
	},
	{
		"movie_id" : 79945,
		"title" : "Star Trek: The Motion Picture",
		"genre" : "Adventure, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 79948,
		"title" : "Starting Over",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 80009,
		"title" : "Tess",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 80120,
		"title" : "The Warriors",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 80130,
		"title" : "When a Stranger Calls",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 80319,
		"title" : "Nine to Five",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 80339,
		"title" : "Airplane!",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 80360,
		"title" : "Altered States",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 80365,
		"title" : "American Gigolo",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 80377,
		"title" : "Any Which Way You Can",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 80388,
		"title" : "Atlantic City",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 80453,
		"title" : "The Blue Lagoon",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 80455,
		"title" : "The Blues Brothers",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 80472,
		"title" : "Bronco Billy",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 80474,
		"title" : "Brubaker",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 80487,
		"title" : "Caddyshack",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 80515,
		"title" : "A Change of Seasons",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 80520,
		"title" : "Cheech and Chong's Next Movie",
		"genre" : "Comedy, Crime, Sci-Fi"
	},
	{
		"movie_id" : 80549,
		"title" : "Coal Miner's Daughter",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 80556,
		"title" : "The Competition",
		"genre" : "Drama, Romance, Music"
	},
	{
		"movie_id" : 80569,
		"title" : "Cruising",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 80661,
		"title" : "Dressed to Kill",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 80678,
		"title" : "The Elephant Man",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 80684,
		"title" : "Star Wars: Episode V - The Empire Strikes Back",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 80716,
		"title" : "Fame",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 80731,
		"title" : "The Fiendish Plot of Dr. Fu Manchu",
		"genre" : "Comedy, Crime, Fantasy"
	},
	{
		"movie_id" : 80736,
		"title" : "The Final Countdown",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 80739,
		"title" : "First Family",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 80745,
		"title" : "Flash Gordon",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 80749,
		"title" : "The Fog",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 80754,
		"title" : "The Formula",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 80761,
		"title" : "Friday the 13th",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 80801,
		"title" : "The Gods Must Be Crazy",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 80861,
		"title" : "Herbie Goes Bananas",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 80863,
		"title" : "Hero at Large",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 80881,
		"title" : "The Hollywood Knights",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 80888,
		"title" : "Honeysuckle Rose",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 80907,
		"title" : "The Hunter",
		"genre" : "Action, Biography, Comedy"
	},
	{
		"movie_id" : 80934,
		"title" : "The Island",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 80936,
		"title" : "It's My Turn",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 80948,
		"title" : "The Jazz Singer",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 81031,
		"title" : "The Last Flight of Noah's Ark",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 81032,
		"title" : "The Last Married Couple in America",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 81060,
		"title" : "Lile Darlings",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 81071,
		"title" : "The Long Riders",
		"genre" : "Biography, Crime, Western"
	},
	{
		"movie_id" : 81163,
		"title" : "The Mirror Crack'd",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 81207,
		"title" : "My Bodyguard",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 81249,
		"title" : "The Nude Bomb",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 81259,
		"title" : "The Octagon",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 81268,
		"title" : "Oh, God! Book II",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 81283,
		"title" : "Ordinary People",
		"genre" : "Drama"
	},
	{
		"movie_id" : 81353,
		"title" : "Popeye",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 81375,
		"title" : "Private Benjamin",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 81376,
		"title" : "The Private Eyes",
		"genre" : "Comedy, Mystery"
	},
	{
		"movie_id" : 81383,
		"title" : "Prom Night",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 81398,
		"title" : "Raging Bull",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 81439,
		"title" : "Rough Cut",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 81455,
		"title" : "Scanners",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 81480,
		"title" : "Seems Like Old Times",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 81485,
		"title" : "Serial",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 81505,
		"title" : "The Shining",
		"genre" : "Drama, Horror"
	},
	{
		"movie_id" : 81529,
		"title" : "Smokey and the Bandit II",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 81534,
		"title" : "Somewhere in Time",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 81554,
		"title" : "Stardust Memories",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 81562,
		"title" : "Stir Crazy",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 81573,
		"title" : "Superman II",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 81633,
		"title" : "Time Bandits",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 81656,
		"title" : "Tribute",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 81696,
		"title" : "Urban Cowboy",
		"genre" : "Drama, Romance, Western"
	},
	{
		"movie_id" : 81698,
		"title" : "Used Cars",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 81751,
		"title" : "Wholly Moses!",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 81777,
		"title" : "Xanadu",
		"genre" : "Fantasy, Musical, Romance"
	},
	{
		"movie_id" : 81974,
		"title" : "Absence of Malice",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 82010,
		"title" : "An American Werewolf in London",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 82031,
		"title" : "Arthur",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 82042,
		"title" : "Back Roads",
		"genre" : "Adventure, Comedy, Romance"
	},
	{
		"movie_id" : 82085,
		"title" : "Blow Out",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 82089,
		"title" : "Body Heat",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 82096,
		"title" : "Das Boot",
		"genre" : "Adventure, Drama, Thriller"
	},
	{
		"movie_id" : 82121,
		"title" : "Bustin' Loose",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 82136,
		"title" : "The Cannonball Run",
		"genre" : "Action, Comedy, Sport"
	},
	{
		"movie_id" : 82138,
		"title" : "Carbon Copy",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 82146,
		"title" : "Caveman",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 82158,
		"title" : "Chariots of Fire",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 82163,
		"title" : "Nice Dreams",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 82186,
		"title" : "Clash of the Titans",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 82193,
		"title" : "Comin' at Ya!",
		"genre" : "Western"
	},
	{
		"movie_id" : 82198,
		"title" : "Conan the Barbarian",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 82200,
		"title" : "Continental Divide",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 82250,
		"title" : "Death Wish II",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 82263,
		"title" : "The Devil and Max Devlin",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 82288,
		"title" : "Dragonslayer",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 82334,
		"title" : "The Entity",
		"genre" : "Drama, Horror"
	},
	{
		"movie_id" : 82340,
		"title" : "Escape from New York",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 82348,
		"title" : "Excalibur",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 82351,
		"title" : "Eye of the Needle",
		"genre" : "Romance, Thriller, War"
	},
	{
		"movie_id" : 82377,
		"title" : "The Final Conflict",
		"genre" : "Horror"
	},
	{
		"movie_id" : 82382,
		"title" : "First Monday in October",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 82398,
		"title" : "For Your Eyes Only",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 82402,
		"title" : "Fort Apache the Bronx",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 82405,
		"title" : "The Four Seasons",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 82406,
		"title" : "The Fox and the Hound",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 82416,
		"title" : "The French Lieutenant's Woman",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 82418,
		"title" : "Friday the 13th Part 2",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 82474,
		"title" : "The Great Muppet Caper",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 82484,
		"title" : "La guerre du feu",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 82495,
		"title" : "Halloween II",
		"genre" : "Horror"
	},
	{
		"movie_id" : 82517,
		"title" : "History of the World: Part I",
		"genre" : "Comedy, History, Musical"
	},
	{
		"movie_id" : 82533,
		"title" : "The Howling",
		"genre" : "Horror"
	},
	{
		"movie_id" : 82558,
		"title" : "The Incredible Shrinking Woman",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 82648,
		"title" : "The Legend of the Lone Ranger",
		"genre" : "Action, Adventure, Western"
	},
	{
		"movie_id" : 82694,
		"title" : "Mad Max 2",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 82763,
		"title" : "Modern Problems",
		"genre" : "Comedy, Fantasy, Sci-Fi"
	},
	{
		"movie_id" : 82766,
		"title" : "Mommie Dearest",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 82816,
		"title" : "The Night the Lights Went Out in Georgia",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 82817,
		"title" : "Nighthawks",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 82846,
		"title" : "On Golden Pond",
		"genre" : "Drama"
	},
	{
		"movie_id" : 82853,
		"title" : "Only When I Laugh",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 82869,
		"title" : "Outland",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 82886,
		"title" : "Paternity",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 82894,
		"title" : "Pennies from Heaven",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 82934,
		"title" : "The Postman Always Rings Twice",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 82948,
		"title" : "Private Lessons",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 82970,
		"title" : "Ragtime",
		"genre" : "Drama"
	},
	{
		"movie_id" : 82971,
		"title" : "Raiders of the Lost Ark",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 82979,
		"title" : "Reds",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 82992,
		"title" : "Rich and Famous",
		"genre" : "Drama"
	},
	{
		"movie_id" : 83006,
		"title" : "Rollover",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 83015,
		"title" : "S.O.B.",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 83064,
		"title" : "Sharky's Machine",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 83107,
		"title" : "Some Kind of Hero",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 83131,
		"title" : "Stripes",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 83163,
		"title" : "Take This Job and Shove It",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 83169,
		"title" : "Taps",
		"genre" : "Drama"
	},
	{
		"movie_id" : 83170,
		"title" : "Tarzan the Ape Man",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 83190,
		"title" : "Thief",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 83254,
		"title" : "Under the Rainbow",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 83284,
		"title" : "Victory",
		"genre" : "Drama, Sport, War"
	},
	{
		"movie_id" : 83296,
		"title" : "Visiting Hours",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 83336,
		"title" : "Wolfen",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 83366,
		"title" : "Zorro: The Gay Blade",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 83511,
		"title" : "48 Hrs.",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 83530,
		"title" : "Airplane II: The Sequel",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 83550,
		"title" : "Amityville II: The Possession",
		"genre" : "Horror"
	},
	{
		"movie_id" : 83564,
		"title" : "Annie",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 83598,
		"title" : "Author! Author!",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 83630,
		"title" : "The Beastmaster",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 83641,
		"title" : "Best Friends",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 83642,
		"title" : "The Best Lile Whorehouse in Texas",
		"genre" : "Comedy, Musical"
	},
	{
		"movie_id" : 83658,
		"title" : "Blade Runner",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 83767,
		"title" : "Creepshow",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 83791,
		"title" : "The Dark Crystal",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 83798,
		"title" : "Dead Men Don't Wear Plaid",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 83806,
		"title" : "Deathtrap",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 83833,
		"title" : "Diner",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 83866,
		"title" : "E.T. the Extra-Terrestrial",
		"genre" : "Family, Sci-Fi"
	},
	{
		"movie_id" : 83929,
		"title" : "Fast Times at Ridgemont High",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 83943,
		"title" : "Firefox",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 83944,
		"title" : "First Blood",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 83972,
		"title" : "Friday the 13th Part III",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 83987,
		"title" : "Gandhi",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 84021,
		"title" : "Grease 2",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 84049,
		"title" : "Hanky Panky",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 84210,
		"title" : "Kiss Me Goodbye",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 84293,
		"title" : "Making Love",
		"genre" : "Drama"
	},
	{
		"movie_id" : 84296,
		"title" : "The Man from Snowy River",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 84329,
		"title" : "A Midsummer Night's Sex Comedy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84335,
		"title" : "Missing",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 84351,
		"title" : "Monsignor",
		"genre" : "Crime, Drama, War"
	},
	{
		"movie_id" : 84370,
		"title" : "My Favorite Year",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 84395,
		"title" : "Class Reunion",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 84412,
		"title" : "Night Shift",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84434,
		"title" : "An Officer and a Gentleman",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 84503,
		"title" : "Pink Floyd: The Wall",
		"genre" : "Drama, Fantasy, Music"
	},
	{
		"movie_id" : 84516,
		"title" : "Poltergeist",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 84522,
		"title" : "Porky's",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84597,
		"title" : "Richard Pryor: Live on the Sunset Strip",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84602,
		"title" : "Rocky III",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 84633,
		"title" : "Savannah Smiles",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 84649,
		"title" : "The Secret of NIMH",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 84652,
		"title" : "The Seduction",
		"genre" : "Thriller"
	},
	{
		"movie_id" : 84675,
		"title" : "Shoot the Moon",
		"genre" : "Drama"
	},
	{
		"movie_id" : 84684,
		"title" : "Silent Rage",
		"genre" : "Action, Crime, Horror"
	},
	{
		"movie_id" : 84690,
		"title" : "Six Pack",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 84707,
		"title" : "Sophie's Choice",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 84726,
		"title" : "Star Trek II: The Wrath of Khan",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 84749,
		"title" : "The Sword and the Sorcerer",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 84786,
		"title" : "They Call Me Bruce",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 84787,
		"title" : "The Thing",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 84788,
		"title" : "Things Are Tough All Over",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 84805,
		"title" : "Tootsie",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 84809,
		"title" : "The Toy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84814,
		"title" : "Trail of the Pink Panther",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 84827,
		"title" : "TRON",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 84855,
		"title" : "The Verdict",
		"genre" : "Drama"
	},
	{
		"movie_id" : 84861,
		"title" : "Vice Squad",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 84865,
		"title" : "Victor Victoria",
		"genre" : "Comedy, Music, Musical"
	},
	{
		"movie_id" : 84917,
		"title" : "The World According to Garp",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 84938,
		"title" : "Young Doctors in Love",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 84945,
		"title" : "Zapped!",
		"genre" : "Comedy, Fantasy, Sci-Fi"
	},
	{
		"movie_id" : 85154,
		"title" : "All the Right Moves",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 85210,
		"title" : "Bad Boys",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 85244,
		"title" : "The Big Chill",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 85248,
		"title" : "The Black Stallion Returns",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 85255,
		"title" : "Blue Thunder",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 85271,
		"title" : "Brainstorm",
		"genre" : "Sci-Fi, Thriller"
	},
	{
		"movie_id" : 85276,
		"title" : "Breathless",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 85333,
		"title" : "Christine",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 85334,
		"title" : "A Christmas Story",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 85346,
		"title" : "Class",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 85382,
		"title" : "Cujo",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 85387,
		"title" : "D.C. Cab",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 85407,
		"title" : "The Dead Zone",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 85412,
		"title" : "Deal of the Century",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 85450,
		"title" : "Doctor Detroit",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 85470,
		"title" : "Easy Money",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 85478,
		"title" : "Educating Rita",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 85549,
		"title" : "Flashdance",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 85615,
		"title" : "Gorky Park",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 85636,
		"title" : "Halloween III: Season of the Witch",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 85672,
		"title" : "Hercules",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 85678,
		"title" : "High Road to China",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 85750,
		"title" : "Jaws 3-D",
		"genre" : "Adventure, Horror, Thriller"
	},
	{
		"movie_id" : 85811,
		"title" : "Krull",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 85862,
		"title" : "Lone Wolf McQuade",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 85867,
		"title" : "The Lords of Discipline",
		"genre" : "Thriller"
	},
	{
		"movie_id" : 85873,
		"title" : "Lovesick",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 85891,
		"title" : "The Man Who Loved Women",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 85894,
		"title" : "The Man with Two Brains",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 85919,
		"title" : "Max Dugan Returns",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 85959,
		"title" : "The Meaning of Life",
		"genre" : "Comedy, Musical"
	},
	{
		"movie_id" : 85970,
		"title" : "Mr. Mom",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 85980,
		"title" : "My Tutor",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 85995,
		"title" : "National Lampoon's Vacation",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 86005,
		"title" : "Never Cry Wolf",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 86006,
		"title" : "Never Say Never Again",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 86034,
		"title" : "Octopussy",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 86066,
		"title" : "The Outsiders",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 86129,
		"title" : "Porky's II: The Next Day",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 86143,
		"title" : "Private School",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 86154,
		"title" : "Psycho II",
		"genre" : "Crime, Horror, Mystery"
	},
	{
		"movie_id" : 86190,
		"title" : "Star Wars: Episode VI - Return of the Jedi",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 86192,
		"title" : "Revenge of the Ninja",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 86194,
		"title" : "Richard Pryor... Here and Now",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 86197,
		"title" : "The Right Stuff",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 86200,
		"title" : "Risky Business",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 86250,
		"title" : "Scarface",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 86312,
		"title" : "Silkwood",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 86346,
		"title" : "Spacehunter: Adventures in the Forbidden Zone",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 86352,
		"title" : "Spring Break",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 86361,
		"title" : "Staying Alive",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 86379,
		"title" : "Stroker Ace",
		"genre" : "Action, Comedy, Romance"
	},
	{
		"movie_id" : 86383,
		"title" : "Sudden Impact",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 86393,
		"title" : "Superman III",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 86397,
		"title" : "The Survivors",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 86425,
		"title" : "Terms of Endearment",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 86450,
		"title" : "To Be or Not to Be",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 86465,
		"title" : "Trading Places",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 86491,
		"title" : "Twilight Zone: The Movie",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 86494,
		"title" : "Two of a Kind",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 86508,
		"title" : "Uncommon Valor",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 86525,
		"title" : "Valley Girl",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 86567,
		"title" : "WarGames",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 86593,
		"title" : "Without a Trace",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 86617,
		"title" : "The Year of Living Dangerously",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 86619,
		"title" : "Yentl",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 86637,
		"title" : "Zelig",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 86837,
		"title" : "2010: The Year We Make Contact",
		"genre" : "Adventure, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 86859,
		"title" : "Against All Odds",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 86873,
		"title" : "All of Me",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 86879,
		"title" : "Amadeus",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 86896,
		"title" : "Angel",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 86927,
		"title" : "Bachelor Party",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 86946,
		"title" : "Beat Street",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 86955,
		"title" : "Best Defense",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 86960,
		"title" : "Beverly Hills Cop",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 86973,
		"title" : "Blame It on Rio",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 86984,
		"title" : "Body Double",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 86987,
		"title" : "Bolero",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 86998,
		"title" : "Breakin'",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 86999,
		"title" : "Breakin' 2: Electric Boogaloo",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 87003,
		"title" : "Broadway Danny Rose",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 87032,
		"title" : "Cannonball Run II",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 87050,
		"title" : "Children of the Corn",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 87062,
		"title" : "City Heat",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 87065,
		"title" : "Cloak & Dagger",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 87078,
		"title" : "Conan the Destroyer",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 87089,
		"title" : "The Coon Club",
		"genre" : "Crime, Drama, Music"
	},
	{
		"movie_id" : 87091,
		"title" : "Country",
		"genre" : "Drama"
	},
	{
		"movie_id" : 87127,
		"title" : "Deathstalker",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 87175,
		"title" : "Dreamscape",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 87182,
		"title" : "Dune",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 87222,
		"title" : "The Evil That Men Do",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 87231,
		"title" : "The Falcon and the Snowman",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 87233,
		"title" : "Falling in Love",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 87262,
		"title" : "Firestarter",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 87265,
		"title" : "The Flamingo Kid",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 87277,
		"title" : "Footloose",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 87298,
		"title" : "Friday the 13th: The Final Chapter",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 87332,
		"title" : "Ghostbusters",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 87363,
		"title" : "Gremlins",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 87365,
		"title" : "Greystoke: The Legend of Tarzan, Lord of the Apes",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 87384,
		"title" : "Hard to Hold",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 87425,
		"title" : "Hot Dog ...The Movie",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 87451,
		"title" : "The Ice Pirates",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 87469,
		"title" : "Indiana Jones and the Temple of Doom",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 87482,
		"title" : "Irreconcilable Differences",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 87507,
		"title" : "Johnny Dangerously",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 87538,
		"title" : "The Karate Kid",
		"genre" : "Action, Drama, Family"
	},
	{
		"movie_id" : 87553,
		"title" : "The Killing Fields",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 87589,
		"title" : "Lassiter",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 87597,
		"title" : "The Last Starfighter",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 87718,
		"title" : "Micki + Maude",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 87727,
		"title" : "Missing in Action",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 87747,
		"title" : "Moscow on the Hudson",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 87755,
		"title" : "The Muppets Take Manhaan",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 87781,
		"title" : "The Natural",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 87799,
		"title" : "Night of the Comet",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 87800,
		"title" : "A Nightmare on Elm Street",
		"genre" : "Horror"
	},
	{
		"movie_id" : 87835,
		"title" : "Oh, God! You Devil",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 87866,
		"title" : "Oxford Blues",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 87892,
		"title" : "A Passage to India",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 87921,
		"title" : "Places in the Heart",
		"genre" : "Drama"
	},
	{
		"movie_id" : 87928,
		"title" : "Police Academy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 87951,
		"title" : "Protocol",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 87957,
		"title" : "Purple Rain",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 87985,
		"title" : "Red Dawn",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 88000,
		"title" : "Revenge of the Nerds",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 88001,
		"title" : "Rhinestone",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 88007,
		"title" : "The River",
		"genre" : "Drama"
	},
	{
		"movie_id" : 88011,
		"title" : "Romancing the Stone",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 88128,
		"title" : "Sixteen Candles",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 88146,
		"title" : "A Soldier's Story",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 88161,
		"title" : "Splash",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 88170,
		"title" : "Star Trek III: The Search for Spock",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 88172,
		"title" : "Starman",
		"genre" : "Romance, Sci-Fi"
	},
	{
		"movie_id" : 88206,
		"title" : "Supergirl",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 88224,
		"title" : "Tank",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 88242,
		"title" : "Teachers",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 88247,
		"title" : "The Terminator",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 88256,
		"title" : "Thief of Hearts",
		"genre" : "Drama, Thriller, Crime"
	},
	{
		"movie_id" : 88272,
		"title" : "Tightrope",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 88286,
		"title" : "Top Secret!",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 88323,
		"title" : "Die unendliche Geschichte",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 88326,
		"title" : "Unfaithfully Yours",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 88333,
		"title" : "Up the Creek",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 88385,
		"title" : "Weekend Pass",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 88395,
		"title" : "Where the Boys Are",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 88402,
		"title" : "The Wild Life",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 88414,
		"title" : "The Woman in Red",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 88680,
		"title" : "After Hours",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 88683,
		"title" : "Agnes of God",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 88708,
		"title" : "American Ninja",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 88760,
		"title" : "Baby: Secret of the Lost Legend",
		"genre" : "Family, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 88763,
		"title" : "Back to the Future",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 88794,
		"title" : "Beer Off Dead...",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 88814,
		"title" : "The Black Cauldron",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 88846,
		"title" : "Brazil",
		"genre" : "Drama, Sci-Fi"
	},
	{
		"movie_id" : 88847,
		"title" : "The Breakfast Club",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 88850,
		"title" : "Brewster's Millions",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 88885,
		"title" : "The Care Bears Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 88889,
		"title" : "Cat's Eye",
		"genre" : "Comedy, Horror, Thriller"
	},
	{
		"movie_id" : 88915,
		"title" : "A Chorus Line",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 88930,
		"title" : "Clue",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 88933,
		"title" : "Cocoon",
		"genre" : "Comedy, Drama, Sci-Fi"
	},
	{
		"movie_id" : 88936,
		"title" : "Code of Silence",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 88939,
		"title" : "The Color Purple",
		"genre" : "Drama"
	},
	{
		"movie_id" : 88944,
		"title" : "Commando",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 88947,
		"title" : "Compromising Positions",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 89003,
		"title" : "Death Wish 3",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 89017,
		"title" : "Desperately Seeking Susan",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 89087,
		"title" : "The Emerald Forest",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 89092,
		"title" : "Enemy Mine",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 89114,
		"title" : "Explorers",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 89118,
		"title" : "F\/X",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 89155,
		"title" : "Fletch",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 89173,
		"title" : "Friday the 13th: A New Beginning",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 89175,
		"title" : "Fright Night",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 89218,
		"title" : "The Goonies",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 89222,
		"title" : "Gotcha!",
		"genre" : "Action, Comedy, Mystery"
	},
	{
		"movie_id" : 89348,
		"title" : "Invasion U.S.A.",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 89360,
		"title" : "Jagged Edge",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 89370,
		"title" : "The Jewel of the Nile",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 89385,
		"title" : "The Journey of Nay Gann",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 89393,
		"title" : "Just One of the Guys",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 89421,
		"title" : "King Solomon's Mines",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 89424,
		"title" : "Kiss of the Spider Woman",
		"genre" : "Drama"
	},
	{
		"movie_id" : 89444,
		"title" : "Krush Groove",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 89457,
		"title" : "Ladyhawke",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 89461,
		"title" : "The Last Dragon",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 89469,
		"title" : "Legend",
		"genre" : "Adventure, Fantasy, Romance"
	},
	{
		"movie_id" : 89489,
		"title" : "Lifeforce",
		"genre" : "Action, Horror, Mystery"
	},
	{
		"movie_id" : 89530,
		"title" : "Mad Max Beyond Thunderdome",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 89560,
		"title" : "Mask",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 89629,
		"title" : "Moving Violations",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 89643,
		"title" : "Murphy's Romance",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 89670,
		"title" : "National Lampoon's European Vacation",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 89686,
		"title" : "A Nightmare on Elm Street Part 2: Freddy's Revenge",
		"genre" : "Horror"
	},
	{
		"movie_id" : 89730,
		"title" : "Once Bien",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 89731,
		"title" : "One Magic Christmas",
		"genre" : "Family, Fantasy"
	},
	{
		"movie_id" : 89755,
		"title" : "Out of Africa",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 89767,
		"title" : "Pale Rider",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 89791,
		"title" : "Pee-wee's Big Adventure",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 89798,
		"title" : "Perfect",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 89822,
		"title" : "Police Academy 2: Their First Assignment",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 89826,
		"title" : "Porky's Revenge",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 89841,
		"title" : "Prizzi's Honor",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 89853,
		"title" : "The Purple Rose of Cairo",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 89880,
		"title" : "Rambo: First Blood Part II",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 89886,
		"title" : "Real Genius",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 89901,
		"title" : "Remo Williams: The Adventure Begins",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 89907,
		"title" : "The Return of the Living Dead",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 89908,
		"title" : "Return to Oz",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 89927,
		"title" : "Rocky IV",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 89961,
		"title" : "Santa Claus: The Movie",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 89994,
		"title" : "Follow That Bird",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 90021,
		"title" : "Silver Bullet",
		"genre" : "Horror"
	},
	{
		"movie_id" : 90022,
		"title" : "Silverado",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 90056,
		"title" : "Spies Like Us",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 90060,
		"title" : "St. Elmo's Fire",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 90098,
		"title" : "Summer Rental",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 90103,
		"title" : "The Sure Thing",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 90110,
		"title" : "Sweet Dreams",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 90130,
		"title" : "Target",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 90142,
		"title" : "Teen Wolf",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 90180,
		"title" : "To Live and Die in L.A.",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 90184,
		"title" : "Tomboy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 90213,
		"title" : "Tuff Turf",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 90264,
		"title" : "A View to a Kill",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 90270,
		"title" : "Vision Quest",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 90274,
		"title" : "Volunteers",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 90305,
		"title" : "Weird Science",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 90319,
		"title" : "White Nights",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 90329,
		"title" : "Witness",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 90350,
		"title" : "Year of the Dragon",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 90357,
		"title" : "Young Sherlock Holmes",
		"genre" : "Adventure, Fantasy, Mystery"
	},
	{
		"movie_id" : 90555,
		"title" : "'Crocodile' Dundee",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 90583,
		"title" : "About Last Night...",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 90605,
		"title" : "Aliens",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 90633,
		"title" : "An American Tail",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 90655,
		"title" : "April Fool's Day",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 90660,
		"title" : "Armed and Dangerous",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 90685,
		"title" : "Back to School",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 90728,
		"title" : "Big Trouble in Lile China",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 90738,
		"title" : "Black Widow",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 90774,
		"title" : "Brighton Beach Memoirs",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 90830,
		"title" : "Children of a Lesser God",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 90856,
		"title" : "Club Paradise",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 90859,
		"title" : "Cobra",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 90863,
		"title" : "The Color of Money",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 90886,
		"title" : "Crimes of the Heart",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 90887,
		"title" : "Criers",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 90917,
		"title" : "Deadly Friend",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 90927,
		"title" : "The Delta Force",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 90966,
		"title" : "Down and Out in Beverly Hills",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 91024,
		"title" : "Extremities",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 91042,
		"title" : "Ferris Bueller's Day Off",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 91055,
		"title" : "Firewalker",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 91059,
		"title" : "Flight of the Navigator",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 91064,
		"title" : "The Fly",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 91080,
		"title" : "Friday the 13th Part VI: Jason Lives",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 91129,
		"title" : "The Golden Child",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 91149,
		"title" : "The Great Mouse Detective",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 91159,
		"title" : "Gung Ho",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 91167,
		"title" : "Hannah and Her Sisters",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 91187,
		"title" : "Heartbreak Ridge",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 91188,
		"title" : "Heartburn",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 91217,
		"title" : "Hoosiers",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 91223,
		"title" : "House",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 91225,
		"title" : "Howard the Duck",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 91278,
		"title" : "Iron Eagle",
		"genre" : "Action, Thriller, War"
	},
	{
		"movie_id" : 91295,
		"title" : "Jo Jo Dancer, Your Life Is Calling",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 91306,
		"title" : "Jumpin' Jack Flash",
		"genre" : "Comedy, Romance, Thriller"
	},
	{
		"movie_id" : 91326,
		"title" : "The Karate Kid Part II",
		"genre" : "Action, Family, Romance"
	},
	{
		"movie_id" : 91369,
		"title" : "Labyrinth",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 91396,
		"title" : "Legal Eagles",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 91419,
		"title" : "Lile Shop of Horrors",
		"genre" : "Comedy, Horror, Musical"
	},
	{
		"movie_id" : 91530,
		"title" : "The Mission",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 91541,
		"title" : "The Money Pit",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 91554,
		"title" : "The Morning After",
		"genre" : "Crime, Mystery, Romance"
	},
	{
		"movie_id" : 91557,
		"title" : "The Mosquito Coast",
		"genre" : "Adventure, Drama, Thriller"
	},
	{
		"movie_id" : 91575,
		"title" : "Murphy's Law",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 91637,
		"title" : "No Mercy",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 91653,
		"title" : "Nothing in Common",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 91680,
		"title" : "One Crazy Summer",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 91738,
		"title" : "Peggy Sue Got Married",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 91763,
		"title" : "Platoon",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 91777,
		"title" : "Police Academy 3: Back in Training",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 91778,
		"title" : "Poltergeist II: The Other Side",
		"genre" : "Horror"
	},
	{
		"movie_id" : 91790,
		"title" : "Prey in Pink",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 91799,
		"title" : "Psycho III",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 91828,
		"title" : "Raw Deal",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 91867,
		"title" : "A Room with a View",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 91875,
		"title" : "Running Scared",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 91877,
		"title" : "Ruthless People",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 91949,
		"title" : "Short Circuit",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 91993,
		"title" : "SpaceCamp",
		"genre" : "Adventure, Family, Sci-Fi"
	},
	{
		"movie_id" : 92005,
		"title" : "Stand by Me",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 92007,
		"title" : "Star Trek IV: The Voyage Home",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 92035,
		"title" : "Sweet Liberty",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 92086,
		"title" : "¡Three Amigos!",
		"genre" : "Comedy, Western"
	},
	{
		"movie_id" : 92099,
		"title" : "Top Gun",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 92105,
		"title" : "Tough Guys",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 92133,
		"title" : "Under the Cherry Moon",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 92214,
		"title" : "Wildcats",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 92272,
		"title" : "Youngblood",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 92493,
		"title" : "'Crocodile' Dundee II",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 92494,
		"title" : "*baeries not included",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 92513,
		"title" : "Adventures in Babysiing",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 92563,
		"title" : "Angel Heart",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 92605,
		"title" : "Baby Boom",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 92608,
		"title" : "Back to the Beach",
		"genre" : "Comedy, Musical"
	},
	{
		"movie_id" : 92627,
		"title" : "The Bedroom Window",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 92632,
		"title" : "The Believers",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 92638,
		"title" : "Benji the Hunted",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 92644,
		"title" : "Beverly Hills Cop II",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 92654,
		"title" : "The Big Easy",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 92666,
		"title" : "Blind Date",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 92675,
		"title" : "Bloodsport",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 92690,
		"title" : "Born in East L.A.",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 92699,
		"title" : "Broadcast News",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 92710,
		"title" : "Burglar",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 92718,
		"title" : "Can't Buy Me Love",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 92796,
		"title" : "Creepshow 2",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 92798,
		"title" : "Critical Condition",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 92890,
		"title" : "Dirty Dancing",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 92897,
		"title" : "Disorderlies",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 92925,
		"title" : "Dragnet",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 92965,
		"title" : "Empire of the Sun",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 92974,
		"title" : "Ernest Goes to Camp",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 92997,
		"title" : "Extreme Prejudice",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 93010,
		"title" : "Fatal Araction",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 93011,
		"title" : "Fatal Beauty",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 93036,
		"title" : "Flowers in the Aic",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 93044,
		"title" : "The Fourth Protocol",
		"genre" : "Thriller"
	},
	{
		"movie_id" : 93051,
		"title" : "From the Hip",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 93058,
		"title" : "Full Metal Jacket",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 93075,
		"title" : "The Gate",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 93105,
		"title" : "Good Morning, Vietnam",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 93137,
		"title" : "Hamburger Hill",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 93148,
		"title" : "Harry and the Hendersons",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 93175,
		"title" : "Hello Again",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 93177,
		"title" : "Hellraiser",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 93185,
		"title" : "The Hidden",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 93209,
		"title" : "Hope and Glory",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 93260,
		"title" : "Innerspace",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 93278,
		"title" : "Ishtar",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 93300,
		"title" : "Jaws: The Revenge",
		"genre" : "Adventure, Horror, Thriller"
	},
	{
		"movie_id" : 93378,
		"title" : "La Bamba",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 93389,
		"title" : "The Last Emperor",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 93407,
		"title" : "Less Than Zero",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 93409,
		"title" : "Lethal Weapon",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 93415,
		"title" : "Light of Day",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 93418,
		"title" : "Like Father Like Son",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 93428,
		"title" : "The Living Daylights",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 93437,
		"title" : "The Lost Boys",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 93476,
		"title" : "Maid to Order",
		"genre" : "Fantasy, Comedy"
	},
	{
		"movie_id" : 93493,
		"title" : "Mannequin",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 93507,
		"title" : "Masters of the Universe",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 93565,
		"title" : "Moonstruck",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 93629,
		"title" : "A Nightmare on Elm Street 3: Dream Warriors",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 93640,
		"title" : "No Way Out",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 93660,
		"title" : "Nuts",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 93692,
		"title" : "Over the Top",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 93693,
		"title" : "Overboard",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 93737,
		"title" : "The Pick-up Artist",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 93748,
		"title" : "Planes, Trains & Automobiles",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 93756,
		"title" : "Police Academy 4: Citizens on Patrol",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 93773,
		"title" : "Predator",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 93777,
		"title" : "Prince of Darkness",
		"genre" : "Horror"
	},
	{
		"movie_id" : 93779,
		"title" : "The Princess Bride",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 93780,
		"title" : "The Principal",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 93793,
		"title" : "Project X",
		"genre" : "Comedy, Drama, Sci-Fi"
	},
	{
		"movie_id" : 93818,
		"title" : "Radio Days",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 93822,
		"title" : "Raising Arizona",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 93857,
		"title" : "Revenge of the Nerds II: Nerds in Paradise",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 93870,
		"title" : "RoboCop",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 93886,
		"title" : "Roxanne",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 93894,
		"title" : "The Running Man",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 93936,
		"title" : "The Secret of My Success",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 94006,
		"title" : "Some Kind of Wonderful",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 94008,
		"title" : "Someone to Watch Over Me",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 94012,
		"title" : "Spaceballs",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 94025,
		"title" : "Stakeout",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 94027,
		"title" : "Stand and Deliver",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 94072,
		"title" : "Summer School",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 94074,
		"title" : "Superman IV: The Quest for Peace",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 94082,
		"title" : "Suspect",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 94137,
		"title" : "3 Men and a Baby",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 94142,
		"title" : "Throw Momma from the Train",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 94155,
		"title" : "Tin Men",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 94226,
		"title" : "The Untouchables",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 94291,
		"title" : "Wall Street",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 94332,
		"title" : "The Witches of Eastwick",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 94602,
		"title" : "Above the Law",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 94606,
		"title" : "The Accidental Tourist",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 94608,
		"title" : "The Accused",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 94612,
		"title" : "Action Jackson",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 94631,
		"title" : "Alien Nation",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 94678,
		"title" : "Arthur 2: On the Rocks",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 94701,
		"title" : "Bad Dreams",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 94715,
		"title" : "Beaches",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 94721,
		"title" : "Beetlejuice",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 94731,
		"title" : "Betrayed",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 94737,
		"title" : "Big",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 94739,
		"title" : "Big Business",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 94744,
		"title" : "Big Top Pee-wee",
		"genre" : "Adventure, Comedy, Romance"
	},
	{
		"movie_id" : 94746,
		"title" : "Biloxi Blues",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 94812,
		"title" : "Bull Durham",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 94824,
		"title" : "Caddyshack II",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 94846,
		"title" : "Casual Sex?",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 94862,
		"title" : "Child's Play",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 94889,
		"title" : "Cocktail",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 94890,
		"title" : "Cocoon: The Return",
		"genre" : "Adventure, Comedy, Mystery"
	},
	{
		"movie_id" : 94894,
		"title" : "Colors",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 94898,
		"title" : "Coming to America",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 94910,
		"title" : "The Couch Trip",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 94921,
		"title" : "Crossing Delancey",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 94933,
		"title" : "D.O.A.",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 94947,
		"title" : "Dangerous Liaisons",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 94963,
		"title" : "The Dead Pool",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 95016,
		"title" : "Die Hard",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 95031,
		"title" : "Dirty Roen Scoundrels",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 95107,
		"title" : "Ernest Saves Christmas",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 95119,
		"title" : "Everybody's All-American",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 95159,
		"title" : "A Fish Called Wanda",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 95169,
		"title" : "For Keeps?",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 95174,
		"title" : "Frantic",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 95179,
		"title" : "Friday the 13th Part VII: The New Blood",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 95188,
		"title" : "Funny Farm",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 95243,
		"title" : "Gorillas in the Mist: The Story of Dian Fossey",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 95253,
		"title" : "The Great Outdoors",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 95271,
		"title" : "Halloween 4: The Return of Michael Myers",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 95294,
		"title" : "Hellbound: Hellraiser II",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 95348,
		"title" : "I'm Gonna Git You Sucka",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 95382,
		"title" : "Iron Eagle II",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 95409,
		"title" : "Johnny Be Good",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 95489,
		"title" : "The Land Before Time",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 95519,
		"title" : "License to Drive",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 95593,
		"title" : "Married to the Mob",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 95599,
		"title" : "Masquerade",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 95631,
		"title" : "Midnight Run",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 95638,
		"title" : "The Milagro Beanfield War",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 95647,
		"title" : "Mississippi Burning",
		"genre" : "Crime, Drama, History"
	},
	{
		"movie_id" : 95654,
		"title" : "Moon Over Parador",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 95662,
		"title" : "Moving",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 95687,
		"title" : "My Stepmother Is an Alien",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 95690,
		"title" : "Mystic Pizza",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 95705,
		"title" : "The Naked Gun: From the Files of Police Squad!",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 95742,
		"title" : "A Nightmare on Elm Street 4: The Dream Master",
		"genre" : "Horror"
	},
	{
		"movie_id" : 95765,
		"title" : "Nuovo Cinema Paradiso",
		"genre" : "Drama"
	},
	{
		"movie_id" : 95776,
		"title" : "Oliver & Company",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 95800,
		"title" : "L'ours",
		"genre" : "Adventure, Family, Drama"
	},
	{
		"movie_id" : 95882,
		"title" : "Police Academy 5: Assignment: Miami Beach",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 95889,
		"title" : "Poltergeist III",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 95897,
		"title" : "The Presidio",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 95927,
		"title" : "Punchline",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 95953,
		"title" : "Rain Man",
		"genre" : "Drama"
	},
	{
		"movie_id" : 95956,
		"title" : "Rambo III",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 95963,
		"title" : "Red Heat",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 95990,
		"title" : "Return of the Living Dead: Part II",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 95993,
		"title" : "The Man from Snowy River II",
		"genre" : "Adventure, Drama, Western"
	},
	{
		"movie_id" : 96030,
		"title" : "Salsa",
		"genre" : "Music, Romance"
	},
	{
		"movie_id" : 96054,
		"title" : "School Daze",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 96061,
		"title" : "Scrooged",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 96071,
		"title" : "The Serpent and the Rainbow",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 96073,
		"title" : "The Seventh Sign",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 96087,
		"title" : "Shakedown",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 96094,
		"title" : "She's Having a Baby",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 96098,
		"title" : "Shoot to Kill",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 96101,
		"title" : "Short Circuit 2",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 96203,
		"title" : "Switching Channels",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 96244,
		"title" : "Tequila Sunrise",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 96256,
		"title" : "They Live",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 96316,
		"title" : "Tucker: The Man and His Dream",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 96320,
		"title" : "Twins",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 96332,
		"title" : "The Unbearable Lightness of Being",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 96380,
		"title" : "Vice Versa",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 96438,
		"title" : "Who Framed Roger Rabbit",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 96446,
		"title" : "Willow",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 96463,
		"title" : "Working Girl",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 96483,
		"title" : "You Can't Hurry Love",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 96486,
		"title" : "Young Einstein",
		"genre" : "Comedy, History"
	},
	{
		"movie_id" : 96487,
		"title" : "Young Guns",
		"genre" : "Action, Western"
	},
	{
		"movie_id" : 96734,
		"title" : "The 'Burbs",
		"genre" : "Comedy, Mystery, Thriller"
	},
	{
		"movie_id" : 96754,
		"title" : "The Abyss",
		"genre" : "Adventure, Drama, Mystery"
	},
	{
		"movie_id" : 96787,
		"title" : "All Dogs Go to Heaven",
		"genre" : "Animation, Comedy, Drama"
	},
	{
		"movie_id" : 96794,
		"title" : "Always",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 96874,
		"title" : "Back to the Future Part II",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 96895,
		"title" : "Batman",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 96928,
		"title" : "Bill & Ted's Excellent Adventure",
		"genre" : "Adventure, Comedy, Music"
	},
	{
		"movie_id" : 96933,
		"title" : "Black Rain",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 96943,
		"title" : "Blaze",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 96969,
		"title" : "Born on the Fourth of July",
		"genre" : "Biography, Drama, War"
	},
	{
		"movie_id" : 97027,
		"title" : "Casualties of War",
		"genre" : "Crime, Drama, War"
	},
	{
		"movie_id" : 97044,
		"title" : "Chances Are",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 97050,
		"title" : "Koneko monogatari",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 97116,
		"title" : "Cousins",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 97123,
		"title" : "Crimes and Misdemeanors",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 97125,
		"title" : "Criminal Law",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 97138,
		"title" : "Cyborg",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 97142,
		"title" : "Dad",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 97165,
		"title" : "Dead Poets Society",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 97216,
		"title" : "Do the Right Thing",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 97235,
		"title" : "The Dream Team",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 97239,
		"title" : "Driving Miss Daisy",
		"genre" : "Drama"
	},
	{
		"movie_id" : 97322,
		"title" : "The Fabulous Baker Boys",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 97328,
		"title" : "Family Business",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 97351,
		"title" : "Field of Dreams",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 97366,
		"title" : "Fletch Lives",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 97368,
		"title" : "The Fly II",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 97388,
		"title" : "Friday the 13th Part VIII: Jason Takes Manhaan",
		"genre" : "Adventure, Horror, Thriller"
	},
	{
		"movie_id" : 97428,
		"title" : "Ghostbusters II",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 97441,
		"title" : "Glory",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 97457,
		"title" : "Great Balls of Fire!",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 97458,
		"title" : "Gross Anatomy",
		"genre" : "Drama"
	},
	{
		"movie_id" : 97474,
		"title" : "Halloween 5: The Revenge of Michael Myers",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 97481,
		"title" : "Harlem Nights",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 97499,
		"title" : "Henry V",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 97500,
		"title" : "Her Alibi",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 97523,
		"title" : "Honey, I Shrunk the Kids",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 97576,
		"title" : "Indiana Jones and the Last Crusade",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 97579,
		"title" : "An Innocent Man",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 97637,
		"title" : "K-9",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 97647,
		"title" : "The Karate Kid Part III",
		"genre" : "Action, Drama, Family"
	},
	{
		"movie_id" : 97659,
		"title" : "Kickboxer",
		"genre" : "Action, Sport, Thriller"
	},
	{
		"movie_id" : 97722,
		"title" : "Lean on Me",
		"genre" : "Drama"
	},
	{
		"movie_id" : 97733,
		"title" : "Lethal Weapon 2",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 97737,
		"title" : "Leviathan",
		"genre" : "Adventure, Horror, Mystery"
	},
	{
		"movie_id" : 97742,
		"title" : "Licence to Kill",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 97757,
		"title" : "The Lile Mermaid",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 97770,
		"title" : "Lock Up",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 97778,
		"title" : "Look Who's Talking",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 97815,
		"title" : "Major League",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 97937,
		"title" : "My Left Foot: The Story of Christy Brown",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 97958,
		"title" : "National Lampoon's Christmas Vacation",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 97965,
		"title" : "New York Stories",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 97967,
		"title" : "Next of Kin",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 97981,
		"title" : "A Nightmare on Elm Street: The Dream Child",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 97987,
		"title" : "No Holds Barred",
		"genre" : "Action, Sport"
	},
	{
		"movie_id" : 98051,
		"title" : "The Package",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 98067,
		"title" : "Parenthood",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 98084,
		"title" : "Pet Sematary",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 98097,
		"title" : "Pink Cadillac",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 98105,
		"title" : "Police Academy 6: City Under Siege",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 98115,
		"title" : "Prancer",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 98188,
		"title" : "Renegades",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 98206,
		"title" : "Road House",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 98258,
		"title" : "Say Anything...",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 98260,
		"title" : "Scandal",
		"genre" : "Drama, History"
	},
	{
		"movie_id" : 98273,
		"title" : "Sea of Love",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 98282,
		"title" : "See No Evil, Hear No Evil",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 98308,
		"title" : "She's Out of Control",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 98309,
		"title" : "She-Devil",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 98320,
		"title" : "Shocker",
		"genre" : "Comedy, Horror, Thriller"
	},
	{
		"movie_id" : 98343,
		"title" : "Skin Deep",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 98382,
		"title" : "Star Trek V: The Final Frontier",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 98384,
		"title" : "Steel Magnolias",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 98439,
		"title" : "Tango & Cash",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 98442,
		"title" : "Tap",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 98471,
		"title" : "Three Fugitives",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 98536,
		"title" : "Turner & Hooch",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 98554,
		"title" : "Uncle Buck",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 98621,
		"title" : "The War of the Roses",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 98622,
		"title" : "Warlock",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 98625,
		"title" : "We're No Angels",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 98627,
		"title" : "Weekend at Bernie's",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 98635,
		"title" : "When Harry Met Sally...",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 98645,
		"title" : "Who's Harry Crumb?",
		"genre" : "Comedy, Mystery"
	},
	{
		"movie_id" : 98663,
		"title" : "The Wizard",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 98724,
		"title" : "Sex, Lies, and Videotape",
		"genre" : "Drama"
	},
	{
		"movie_id" : 98966,
		"title" : "3 Men and a Lile Lady",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 98987,
		"title" : "The Adventures of Ford Fairlane",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 99005,
		"title" : "Air America",
		"genre" : "Action, Comedy, War"
	},
	{
		"movie_id" : 99044,
		"title" : "Another 48 Hrs.",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 99052,
		"title" : "Arachnophobia",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 99073,
		"title" : "Avalon",
		"genre" : "Drama"
	},
	{
		"movie_id" : 99077,
		"title" : "Awakenings",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 99088,
		"title" : "Back to the Future Part III",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 99128,
		"title" : "Betsy's Wedding",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 99141,
		"title" : "Bird on a Wire",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 99165,
		"title" : "The Bonfire of the Vanities",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 99204,
		"title" : "Cadillac Man",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 99253,
		"title" : "Child's Play 2",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 99316,
		"title" : "Crazy People",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 99348,
		"title" : "Dances with Wolves",
		"genre" : "Adventure, Drama, Western"
	},
	{
		"movie_id" : 99365,
		"title" : "Darkman",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 99371,
		"title" : "Days of Thunder",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 99385,
		"title" : "Death Warrant",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 99422,
		"title" : "Dick Tracy",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 99423,
		"title" : "Die Hard 2",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 99472,
		"title" : "DuckTales the Movie: Treasure of the Lost Lamp",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 99487,
		"title" : "Edward Scissorhands",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 99512,
		"title" : "Ernest Goes to Jail",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 99528,
		"title" : "The Exorcist III",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 99558,
		"title" : "Fei ying gai wak",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 99575,
		"title" : "Fire Birds",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 99578,
		"title" : "The First Power",
		"genre" : "Crime, Horror, Thriller"
	},
	{
		"movie_id" : 99582,
		"title" : "Flatliners",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 99587,
		"title" : "Flight of the Intruder",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 99615,
		"title" : "The Freshman",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 99653,
		"title" : "Ghost",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 99674,
		"title" : "The Godfather: Part III",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 99685,
		"title" : "Goodfellas",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 99697,
		"title" : "Graveyard Shift",
		"genre" : "Horror"
	},
	{
		"movie_id" : 99699,
		"title" : "Green Card",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 99700,
		"title" : "Gremlins 2: The New Batch",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 99703,
		"title" : "The Grifters",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 99710,
		"title" : "The Guardian",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 99726,
		"title" : "Hamlet",
		"genre" : "Drama"
	},
	{
		"movie_id" : 99739,
		"title" : "Hard to Kill",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 99762,
		"title" : "Henry & June",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 99785,
		"title" : "Home Alone",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 99800,
		"title" : "House Party",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 99810,
		"title" : "The Hunt for Red October",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 99816,
		"title" : "Haakon Haakonsen",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 99819,
		"title" : "I Love You to Death",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 99850,
		"title" : "Internal Affairs",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 99871,
		"title" : "Jacob's Ladder",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 99878,
		"title" : "Jetsons: The Movie",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 99892,
		"title" : "Joe Versus the Volcano",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 99938,
		"title" : "Kindergarten Cop",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 100029,
		"title" : "Lionheart",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 100050,
		"title" : "Look Who's Talking Too",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 100054,
		"title" : "Lord of the Flies",
		"genre" : "Adventure, Drama, Thriller"
	},
	{
		"movie_id" : 100087,
		"title" : "Madhouse",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 100114,
		"title" : "Marked for Death",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 100133,
		"title" : "Memphis Belle",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 100135,
		"title" : "Men at Work",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 100140,
		"title" : "Mermaids",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 100143,
		"title" : "Miami Blues",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 100157,
		"title" : "Misery",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 100168,
		"title" : "Mo' Beer Blues",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 100201,
		"title" : "Mr. Destiny",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 100212,
		"title" : "My Blue Heaven",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 100224,
		"title" : "Narrow Margin",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 100232,
		"title" : "Navy Seals",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 100240,
		"title" : "The NeverEnding Story II: The Next Chapter",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 100260,
		"title" : "Nightbreed",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 100301,
		"title" : "Opportunity Knocks",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 100318,
		"title" : "Pacific Heights",
		"genre" : "Thriller"
	},
	{
		"movie_id" : 100395,
		"title" : "Postcards from the Edge",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 100403,
		"title" : "Predator 2",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 100404,
		"title" : "Presumed Innocent",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 100405,
		"title" : "Prey Woman",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 100419,
		"title" : "Problem Child",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 100436,
		"title" : "Pump Up the Volume",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 100442,
		"title" : "Q & A",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 100449,
		"title" : "Quick Change",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 100477,
		"title" : "The Rescuers Down Under",
		"genre" : "Animation, Adventure, Crime"
	},
	{
		"movie_id" : 100485,
		"title" : "Revenge",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 100486,
		"title" : "Reversal of Fortune",
		"genre" : "Biography, Drama, Mystery"
	},
	{
		"movie_id" : 100502,
		"title" : "RoboCop 2",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 100507,
		"title" : "Rocky V",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 100514,
		"title" : "The Rookie",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 100530,
		"title" : "The Russia House",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 100611,
		"title" : "Sibling Rivalry",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 100666,
		"title" : "Spaced Invaders",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 100691,
		"title" : "Stella",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 100740,
		"title" : "Tales from the Darkside: The Movie",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 100758,
		"title" : "Teenage Mutant Ninja Turtles",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 100802,
		"title" : "Total Recall",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 100814,
		"title" : "Tremors",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 100828,
		"title" : "The Two Jakes",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 100934,
		"title" : "Wild Orchid",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 100935,
		"title" : "Wild at Heart",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 100944,
		"title" : "The Witches",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 100994,
		"title" : "Young Guns II",
		"genre" : "Action, Western"
	},
	{
		"movie_id" : 101272,
		"title" : "The Addams Family",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 101301,
		"title" : "All I Want for Christmas",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 101329,
		"title" : "An American Tail: Fievel Goes West",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 101393,
		"title" : "Backdraft",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 101414,
		"title" : "Beauty and the Beast",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 101452,
		"title" : "Bill & Ted's Bogus Journey",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 101453,
		"title" : "Billy Bathgate",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 101492,
		"title" : "Body Parts",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 101507,
		"title" : "Boyz n the Hood",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 101516,
		"title" : "Bugsy",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 101523,
		"title" : "The Butcher's Wife",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 101540,
		"title" : "Cape Fear",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 101545,
		"title" : "Career Opportunities",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 101587,
		"title" : "City Slickers",
		"genre" : "Comedy, Western"
	},
	{
		"movie_id" : 101590,
		"title" : "Class Action",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 101605,
		"title" : "The Commitments",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 101635,
		"title" : "Curly Sue",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 101669,
		"title" : "Dead Again",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 101694,
		"title" : "Deceived",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 101698,
		"title" : "Defending Your Life",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 101745,
		"title" : "Doc Hollywood",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 101746,
		"title" : "The Doctor",
		"genre" : "Drama"
	},
	{
		"movie_id" : 101757,
		"title" : "Don't Tell Mom the Babysier's Dead",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 101761,
		"title" : "The Doors",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 101764,
		"title" : "Double Impact",
		"genre" : "Action, Crime"
	},
	{
		"movie_id" : 101775,
		"title" : "Drop Dead Fred",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 101787,
		"title" : "Dying Young",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 101811,
		"title" : "Enchanted April",
		"genre" : "Drama"
	},
	{
		"movie_id" : 101821,
		"title" : "Ernest Scared Stupid",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 101846,
		"title" : "F\/X2",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 101862,
		"title" : "Father of the Bride",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 101889,
		"title" : "The Fisher King",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 101891,
		"title" : "The Five Heartbeats",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 101902,
		"title" : "For the Boys",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 101912,
		"title" : "Frankie and Johnny",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 101917,
		"title" : "Freddy's Dead: The Final Nightmare",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 101921,
		"title" : "Fried Green Tomatoes",
		"genre" : "Drama"
	},
	{
		"movie_id" : 101969,
		"title" : "Grand Canyon",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 101984,
		"title" : "Guilty by Suspicion",
		"genre" : "Drama"
	},
	{
		"movie_id" : 102004,
		"title" : "The Hard Way",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 102011,
		"title" : "He Said, She Said",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 102034,
		"title" : "Highlander II: The Quickening",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 102057,
		"title" : "Hook",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 102059,
		"title" : "Hot Shots!",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 102065,
		"title" : "House Party 2",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 102070,
		"title" : "Hudson Hawk",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 102138,
		"title" : "JFK",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 102175,
		"title" : "Jungle Fever",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 102216,
		"title" : "King Ralph",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 102220,
		"title" : "A Kiss Before Dying",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 102250,
		"title" : "L.A. Story",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 102266,
		"title" : "The Last Boy Scout",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 102279,
		"title" : "Late for Dinner",
		"genre" : "Drama, Sci-Fi"
	},
	{
		"movie_id" : 102316,
		"title" : "Lile Man Tate",
		"genre" : "Drama"
	},
	{
		"movie_id" : 102411,
		"title" : "The Marrying Man",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 102460,
		"title" : "Mobsters",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 102465,
		"title" : "Mon père, ce héros.",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 102469,
		"title" : "Mortal Thoughts",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 102492,
		"title" : "My Girl",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 102510,
		"title" : "The Naked Gun 2½: The Smell of Fear",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 102517,
		"title" : "Necessary Roughness",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 102526,
		"title" : "New Jack City",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 102555,
		"title" : "Not Without My Daughter",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 102590,
		"title" : "Once Around",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 102593,
		"title" : "One Good Cop",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 102598,
		"title" : "Only the Lonely",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 102603,
		"title" : "Oscar",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 102609,
		"title" : "Other People's Money",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 102614,
		"title" : "Out for Justice",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 102631,
		"title" : "Paradise",
		"genre" : "Drama"
	},
	{
		"movie_id" : 102655,
		"title" : "The Perfect Weapon",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 102685,
		"title" : "Point Break",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 102713,
		"title" : "The Prince of Tides",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 102719,
		"title" : "Problem Child 2",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 102729,
		"title" : "Pure Luck",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 102744,
		"title" : "Quigley Down Under",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 102749,
		"title" : "A Rage in Harlem",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 102768,
		"title" : "Regarding Henry",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 102789,
		"title" : "Ricochet",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 102798,
		"title" : "Robin Hood: Prince of Thieves",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 102802,
		"title" : "Rock-A-Doodle",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 102803,
		"title" : "The Rocketeer",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 102849,
		"title" : "Scenes from a Mall",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 102900,
		"title" : "Shaered",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 102926,
		"title" : "The Silence of the Lambs",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 102945,
		"title" : "Sleeping with the Enemy",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 102951,
		"title" : "Soapdish",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 102975,
		"title" : "Star Trek VI: The Undiscovered Country",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 102984,
		"title" : "Stone Cold",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 103007,
		"title" : "The Super",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 103016,
		"title" : "Switch",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 103035,
		"title" : "Taking Care of Business",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 103060,
		"title" : "Teenage Mutant Ninja Turtles II: The Secret of the Ooze",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 103064,
		"title" : "Terminator 2: Judgment Day",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 103074,
		"title" : "Thelma & Louise",
		"genre" : "Adventure, Crime, Drama"
	},
	{
		"movie_id" : 103112,
		"title" : "Toy Soldiers",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 103184,
		"title" : "V.I. Warshawski",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 103241,
		"title" : "What About Bob?",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 103247,
		"title" : "White Fang",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 103596,
		"title" : "3 Ninjas",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 103639,
		"title" : "Aladdin",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 103644,
		"title" : "Alien³",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 103671,
		"title" : "American Me",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 103747,
		"title" : "The Babe",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 103772,
		"title" : "Basic Instinct",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 103776,
		"title" : "Batman Returns",
		"genre" : "Action, Crime, Fantasy"
	},
	{
		"movie_id" : 103786,
		"title" : "Beethoven",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 103855,
		"title" : "The Bodyguard",
		"genre" : "Action, Drama, Music"
	},
	{
		"movie_id" : 103859,
		"title" : "Boomerang",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 103874,
		"title" : "Dracula",
		"genre" : "Horror"
	},
	{
		"movie_id" : 103893,
		"title" : "Buffy the Vampire Slayer",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 103919,
		"title" : "Candyman",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 103924,
		"title" : "Captain Ron",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 103939,
		"title" : "Chaplin",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 103956,
		"title" : "Child's Play 3",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 103976,
		"title" : "City of Joy",
		"genre" : "Drama"
	},
	{
		"movie_id" : 103978,
		"title" : "Class Act",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 103994,
		"title" : "Como agua para chocolate",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 104006,
		"title" : "Consenting Adults",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 104009,
		"title" : "Cool World",
		"genre" : "Animation, Comedy, Fantasy"
	},
	{
		"movie_id" : 104036,
		"title" : "The Crying Game",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 104040,
		"title" : "The Cuing Edge",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 104070,
		"title" : "Death Becomes Her",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 104073,
		"title" : "Deep Cover",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 104114,
		"title" : "The Distinguished Gentleman",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 104187,
		"title" : "Encino Man",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 104231,
		"title" : "Far and Away",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 104254,
		"title" : "FernGully: The Last Rainforest",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 104257,
		"title" : "A Few Good Men",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 104265,
		"title" : "Final Analysis",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 104291,
		"title" : "Forever Young",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 104299,
		"title" : "Freejack",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 104346,
		"title" : "Gladiator",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 104348,
		"title" : "Glengarry Glen Ross",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 104389,
		"title" : "The Hand That Rocks the Cradle",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 104409,
		"title" : "Hellraiser III: Hell on Earth",
		"genre" : "Horror"
	},
	{
		"movie_id" : 104412,
		"title" : "Hero",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 104427,
		"title" : "Hoffa",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 104431,
		"title" : "Home Alone 2: Lost in New York",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 104437,
		"title" : "Honey, I Blew Up the Kid",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 104438,
		"title" : "Honeymoon in Vegas",
		"genre" : "Comedy, Romance, Thriller"
	},
	{
		"movie_id" : 104452,
		"title" : "HouseSier",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 104454,
		"title" : "Howards End",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 104466,
		"title" : "Husbands and Wives",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 104549,
		"title" : "Jennifer Eight",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 104558,
		"title" : "Ging chaat goo si III: Chiu kup ging chaat",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 104573,
		"title" : "Juice",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 104647,
		"title" : "Kuffs",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 104670,
		"title" : "Ladybugs",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 104691,
		"title" : "The Last of the Mohicans",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 104692,
		"title" : "The Lawnmower Man",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 104694,
		"title" : "A League of Their Own",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 104695,
		"title" : "Leap of Faith",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 104714,
		"title" : "Lethal Weapon 3",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 104797,
		"title" : "Malcolm X",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 104839,
		"title" : "Medicine Man",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 104850,
		"title" : "Memoirs of an Invisible Man",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 104868,
		"title" : "The Mighty Ducks",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 104897,
		"title" : "Mo' Money",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 104926,
		"title" : "Mr. Baseball",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 104928,
		"title" : "Mr. Saturday Night",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 104940,
		"title" : "The Muppet Christmas Carol",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 104952,
		"title" : "My Cousin Vinny",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 105104,
		"title" : "Passenger 57",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 105112,
		"title" : "Patriot Games",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 105121,
		"title" : "The People Under the Stairs",
		"genre" : "Comedy, Horror, Mystery"
	},
	{
		"movie_id" : 105128,
		"title" : "Pet Sematary II",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 105151,
		"title" : "The Player",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 105165,
		"title" : "Prelude to a Kiss",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 105191,
		"title" : "Pure Country",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 105217,
		"title" : "Raising Cain",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 105219,
		"title" : "Rapid Fire",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 105265,
		"title" : "A River Runs Through It",
		"genre" : "Drama"
	},
	{
		"movie_id" : 105323,
		"title" : "Scent of a Woman",
		"genre" : "Drama"
	},
	{
		"movie_id" : 105327,
		"title" : "School Ties",
		"genre" : "Drama"
	},
	{
		"movie_id" : 105391,
		"title" : "Shining Through",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 105402,
		"title" : "Sidekicks",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 105414,
		"title" : "Single White Female",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 105415,
		"title" : "Singles",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 105417,
		"title" : "Sister Act",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 105428,
		"title" : "Sleepwalkers",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 105435,
		"title" : "Sneakers",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 105466,
		"title" : "Stay Tuned",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 105477,
		"title" : "Stop! Or My Mom Will Shoot",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 105481,
		"title" : "Straight Talk",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 105483,
		"title" : "A Stranger Among Us",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 105488,
		"title" : "Strictly Ballroom",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 105585,
		"title" : "Thunderheart",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 105629,
		"title" : "Toys",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 105636,
		"title" : "Trespass",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 105690,
		"title" : "Under Siege",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 105695,
		"title" : "Unforgiven",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 105698,
		"title" : "Universal Soldier",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 105699,
		"title" : "Unlawful Entry",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 105706,
		"title" : "Used People",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 105793,
		"title" : "Wayne's World",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 105811,
		"title" : "Whispers in the Dark",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 105812,
		"title" : "White Men Can't Jump",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 105813,
		"title" : "White Sands",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 106220,
		"title" : "Addams Family Values",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 106223,
		"title" : "The Adventures of Huck Finn",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 106226,
		"title" : "The Age of Innocence",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 106246,
		"title" : "Alive",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 106266,
		"title" : "Amos & Andrew",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 106292,
		"title" : "Another Stakeout",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 106308,
		"title" : "Army of Darkness",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 106375,
		"title" : "Beethoven's 2nd",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 106387,
		"title" : "Benny & Joon",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 106400,
		"title" : "The Beverly Hillbillies",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 106453,
		"title" : "Body of Evidence",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 106455,
		"title" : "Boiling Point",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 106466,
		"title" : "Born Yesterday",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 106489,
		"title" : "A Bronx Tale",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 106500,
		"title" : "CB4",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 106519,
		"title" : "Carlito's Way",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 106582,
		"title" : "Cliffhanger",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 106598,
		"title" : "Coneheads",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 106611,
		"title" : "Cool Runnings",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 106613,
		"title" : "Cop & ½",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 106627,
		"title" : "The Crush",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 106664,
		"title" : "The Dark Half",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 106673,
		"title" : "Dave",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 106697,
		"title" : "Demolition Man",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 106701,
		"title" : "Dennis the Menace",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 106770,
		"title" : "Dragon: The Bruce Lee Story",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 106856,
		"title" : "Falling Down",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 106868,
		"title" : "A Far Off Place",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 106912,
		"title" : "Fire in the Sky",
		"genre" : "Biography, Drama, Fantasy"
	},
	{
		"movie_id" : 106918,
		"title" : "The Firm",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 106926,
		"title" : "Flesh and Bone",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 106941,
		"title" : "For Love or Money",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 106965,
		"title" : "Free Willy",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 106977,
		"title" : "The Fugitive",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 107004,
		"title" : "Geronimo: An American Legend",
		"genre" : "Drama, History, Western"
	},
	{
		"movie_id" : 107007,
		"title" : "Geysburg",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 107034,
		"title" : "The Good Son",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 107048,
		"title" : "Groundhog Day",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 107050,
		"title" : "Grumpy Old Men",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 107057,
		"title" : "Guilty as Sin",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 107076,
		"title" : "Hard Target",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 107079,
		"title" : "Sugar Hill",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 107091,
		"title" : "Heart and Souls",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 107120,
		"title" : "Hocus Pocus",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 107131,
		"title" : "Homeward Bound: The Incredible Journey",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 107144,
		"title" : "Hot Shots! Part Deux",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 107206,
		"title" : "In the Line of Fire",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 107207,
		"title" : "In the Name of the Father",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 107211,
		"title" : "Indecent Proposal",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 107212,
		"title" : "Indian Summer",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 107254,
		"title" : "Jason Goes to Hell: The Final Friday",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 107282,
		"title" : "The Joy Luck Club",
		"genre" : "Drama"
	},
	{
		"movie_id" : 107286,
		"title" : "Judgment Night",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 107290,
		"title" : "Jurassic Park",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 107362,
		"title" : "Last Action Hero",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 107413,
		"title" : "Life with Mikey",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 107438,
		"title" : "Look Who's Talking Now",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 107443,
		"title" : "Lost in Yonkers",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 107473,
		"title" : "Mad Dog and Glory",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 107478,
		"title" : "Made in America",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 107497,
		"title" : "Malice",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 107501,
		"title" : "The Man Without a Face",
		"genre" : "Drama"
	},
	{
		"movie_id" : 107504,
		"title" : "Man's Best Friend",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 107507,
		"title" : "Manhaan Murder Mystery",
		"genre" : "Comedy, Mystery"
	},
	{
		"movie_id" : 107529,
		"title" : "Matinee",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 107554,
		"title" : "Menace II Society",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 107614,
		"title" : "Mrs. Doubtfire",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 107616,
		"title" : "Much Ado About Nothing",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 107630,
		"title" : "My Life",
		"genre" : "Drama"
	},
	{
		"movie_id" : 107659,
		"title" : "Loaded Weapon 1",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 107665,
		"title" : "Needful Things",
		"genre" : "Crime, Drama, Fantasy"
	},
	{
		"movie_id" : 107688,
		"title" : "The Nightmare Before Christmas",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 107711,
		"title" : "Nowhere to Run",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 107798,
		"title" : "The Pelican Brief",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 107808,
		"title" : "A Perfect World",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 107818,
		"title" : "Philadelphia",
		"genre" : "Drama"
	},
	{
		"movie_id" : 107822,
		"title" : "The Piano",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 107840,
		"title" : "Poetic Justice",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 107843,
		"title" : "Point of No Return",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 107863,
		"title" : "Posse",
		"genre" : "Western"
	},
	{
		"movie_id" : 107889,
		"title" : "The Program",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 107943,
		"title" : "The Remains of the Day",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 107969,
		"title" : "Rising Sun",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 107977,
		"title" : "Robin Hood: Men in Tights",
		"genre" : "Adventure, Comedy, Musical"
	},
	{
		"movie_id" : 107978,
		"title" : "RoboCop 3",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 107985,
		"title" : "Rookie of the Year",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 108002,
		"title" : "Rudy",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 108037,
		"title" : "The Sandlot",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 108052,
		"title" : "Schindler's List",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 108071,
		"title" : "The Secret Garden",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 108101,
		"title" : "Shadowlands",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 108147,
		"title" : "Sister Act 2: Back in the Habit",
		"genre" : "Comedy, Family, Music"
	},
	{
		"movie_id" : 108148,
		"title" : "Siu nin Wong Fei Hung chi: Tit ma lau",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 108160,
		"title" : "Sleepless in Seale",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 108162,
		"title" : "Sliver",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 108171,
		"title" : "Sniper",
		"genre" : "Action, Thriller, War"
	},
	{
		"movie_id" : 108174,
		"title" : "So I Married an Axe Murderer",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 108185,
		"title" : "Sommersby",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 108186,
		"title" : "Son in Law",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 108238,
		"title" : "Striking Distance",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 108255,
		"title" : "Super Mario Bros.",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 108308,
		"title" : "Teenage Mutant Ninja Turtles III",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 108333,
		"title" : "The Three Musketeers",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 108358,
		"title" : "Tombstone",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 108399,
		"title" : "True Romance",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 108451,
		"title" : "Untamed Heart",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 108473,
		"title" : "The Vanishing",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 108525,
		"title" : "Wayne's World 2",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 108526,
		"title" : "We're Back! A Dinosaur's Story",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 108539,
		"title" : "Weekend at Bernie's II",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 108550,
		"title" : "What's Eating Gilbert Grape",
		"genre" : "Drama"
	},
	{
		"movie_id" : 108551,
		"title" : "What's Love Got to Do with It",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 108560,
		"title" : "Who's the Man?",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 109015,
		"title" : "3 Ninjas Kick Back",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 109021,
		"title" : "8 Seconds",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 109035,
		"title" : "Above the Rim",
		"genre" : "Crime, Drama, Sport"
	},
	{
		"movie_id" : 109040,
		"title" : "Ace Ventura: Pet Detective",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 109045,
		"title" : "The Adventures of Priscilla, Queen of the Desert",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 109067,
		"title" : "The Air Up There",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 109120,
		"title" : "Andre",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 109127,
		"title" : "Angels in the Outfield",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 109190,
		"title" : "Baby's Day Out",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 109198,
		"title" : "Bad Girls",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 109254,
		"title" : "Beverly Hills Cop III",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 109287,
		"title" : "Blank Check",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 109297,
		"title" : "Blink",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 109303,
		"title" : "Blown Away",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 109305,
		"title" : "Blue Chips",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 109348,
		"title" : "Bullets Over Broadway",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 109369,
		"title" : "Camp Nowhere",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 109439,
		"title" : "City Slickers II: The Legend of Curly's Gold",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 109444,
		"title" : "Clear and Present Danger",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 109446,
		"title" : "The Client",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 109456,
		"title" : "Color of Night",
		"genre" : "Mystery, Romance, Thriller"
	},
	{
		"movie_id" : 109480,
		"title" : "Cops and Robbersons",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 109484,
		"title" : "Corrina, Corrina",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 109493,
		"title" : "The Cowboy Way",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 109504,
		"title" : "Crooklyn",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 109506,
		"title" : "The Crow",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 109520,
		"title" : "D2: The Mighty Ducks",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 109635,
		"title" : "Disclosure",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 109642,
		"title" : "Dolores Claiborne",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 109676,
		"title" : "Drop Zone",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 109686,
		"title" : "Dumb and Dumber",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 109813,
		"title" : "The Flintstones",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 109830,
		"title" : "Forrest Gump",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 109831,
		"title" : "Four Weddings and a Funeral",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 109836,
		"title" : "Frankenstein",
		"genre" : "Drama, Horror, Romance"
	},
	{
		"movie_id" : 109890,
		"title" : "The Getaway",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 109936,
		"title" : "Greedy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 109951,
		"title" : "Guarding Tess",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110006,
		"title" : "Heavyweights",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 110027,
		"title" : "Highlander III: The Sorcerer",
		"genre" : "Action, Fantasy, Romance"
	},
	{
		"movie_id" : 110064,
		"title" : "House Party 3",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 110066,
		"title" : "Houseguest",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 110093,
		"title" : "I Love Trouble",
		"genre" : "Action, Comedy, Romance"
	},
	{
		"movie_id" : 110097,
		"title" : "I'll Do Anything",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110099,
		"title" : "I.Q.",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 110116,
		"title" : "Immortal Beloved",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 110123,
		"title" : "In the Army Now",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 110137,
		"title" : "The Inkwell",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 110148,
		"title" : "Interview with the Vampire: The Vampire Chronicles",
		"genre" : "Drama, Horror"
	},
	{
		"movie_id" : 110167,
		"title" : "It Could Happen to You",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 110186,
		"title" : "Jason's Lyric",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 110213,
		"title" : "The Jungle Book",
		"genre" : "Adventure, Family, Romance"
	},
	{
		"movie_id" : 110216,
		"title" : "Junior",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 110305,
		"title" : "Lassie",
		"genre" : "Family, Adventure"
	},
	{
		"movie_id" : 110322,
		"title" : "Legends of the Fall",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 110353,
		"title" : "Lightning Jack",
		"genre" : "Comedy, Western"
	},
	{
		"movie_id" : 110357,
		"title" : "The Lion King",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 110363,
		"title" : "Lile Big League",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 110364,
		"title" : "Lile Giants",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 110366,
		"title" : "The Lile Rascals",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 110367,
		"title" : "Lile Women",
		"genre" : "Drama, Family, Romance"
	},
	{
		"movie_id" : 110391,
		"title" : "Love Affair",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 110399,
		"title" : "A Low Down Dirty Shame",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 110413,
		"title" : "Léon",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 110428,
		"title" : "The Madness of King George",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 110442,
		"title" : "Major League II",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 110443,
		"title" : "Major Payne",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 110475,
		"title" : "The Mask",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 110478,
		"title" : "Maverick",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 110516,
		"title" : "Milk Money",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 110527,
		"title" : "Miracle on 34th Street",
		"genre" : "Family, Fantasy"
	},
	{
		"movie_id" : 110557,
		"title" : "Monkey Trouble",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 110598,
		"title" : "Muriel's Wedding",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110612,
		"title" : "My Father the Hero",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 110613,
		"title" : "My Girl 2",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 110622,
		"title" : "Naked Gun 33 1\/3: The Final Insult",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 110632,
		"title" : "Natural Born Killers",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 110638,
		"title" : "Nell",
		"genre" : "Drama"
	},
	{
		"movie_id" : 110657,
		"title" : "The Next Karate Kid",
		"genre" : "Action, Drama, Family"
	},
	{
		"movie_id" : 110678,
		"title" : "No Escape",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 110684,
		"title" : "Nobody's Fool",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110725,
		"title" : "On Deadly Ground",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 110737,
		"title" : "Only You",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 110763,
		"title" : "The Pagemaster",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 110771,
		"title" : "The Paper",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110877,
		"title" : "Il postino",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 110907,
		"title" : "Prêt-à-Porter",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110912,
		"title" : "Pulp Fiction",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 110932,
		"title" : "Quiz Show",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 110950,
		"title" : "Reality Bites",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 110955,
		"title" : "The Ref",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 110971,
		"title" : "Renaissance Man",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 110989,
		"title" : "Ri¢hie Ri¢h",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 110997,
		"title" : "The River Wild",
		"genre" : "Adventure, Crime, Thriller"
	},
	{
		"movie_id" : 111070,
		"title" : "The Santa Clause",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 111143,
		"title" : "The Shadow",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 111161,
		"title" : "The Shawshank Redemption",
		"genre" : "Drama"
	},
	{
		"movie_id" : 111255,
		"title" : "The Specialist",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 111256,
		"title" : "Speechless",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 111257,
		"title" : "Speed",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 111280,
		"title" : "Star Trek: Generations",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 111282,
		"title" : "Stargate",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 111301,
		"title" : "Street Fighter",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 111333,
		"title" : "The Swan Princess",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 111400,
		"title" : "Terminal Velocity",
		"genre" : "Action, Mystery, Romance"
	},
	{
		"movie_id" : 111418,
		"title" : "Threesome",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 111419,
		"title" : "Thumbelina",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 111438,
		"title" : "Timecop",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 111503,
		"title" : "True Lies",
		"genre" : "Action, Comedy, Thriller"
	},
	{
		"movie_id" : 111512,
		"title" : "Jui kuen II",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 111667,
		"title" : "The War",
		"genre" : "Drama"
	},
	{
		"movie_id" : 111686,
		"title" : "Wes Craven's New Nightmare",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 111693,
		"title" : "When a Man Loves a Woman",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 111732,
		"title" : "With Honors",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 111742,
		"title" : "Wolf",
		"genre" : "Drama, Horror, Romance"
	},
	{
		"movie_id" : 111756,
		"title" : "Wya Earp",
		"genre" : "Adventure, Biography, Crime"
	},
	{
		"movie_id" : 112281,
		"title" : "Ace Ventura: When Nature Calls",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 112286,
		"title" : "Across the Sea of Time",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 112302,
		"title" : "Tom and Huck",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 112346,
		"title" : "The American President",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 112384,
		"title" : "Apollo 13",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 112401,
		"title" : "Assassins",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 112431,
		"title" : "Babe",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 112435,
		"title" : "The Baby-Siers Club",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 112442,
		"title" : "Bad Boys",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 112453,
		"title" : "Balto",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 112462,
		"title" : "Batman Forever",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 112499,
		"title" : "The Big Green",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 112508,
		"title" : "Billy Madison",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 112571,
		"title" : "Boys on the Side",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 112572,
		"title" : "The Brady Bunch Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 112573,
		"title" : "Braveheart",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 112579,
		"title" : "The Bridges of Madison County",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 112606,
		"title" : "Bye Bye Love",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 112625,
		"title" : "Candyman: Farewell to the Flesh",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 112641,
		"title" : "Casino",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 112642,
		"title" : "Casper",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 112679,
		"title" : "Circle of Friends",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 112688,
		"title" : "Clockers",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 112697,
		"title" : "Clueless",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 112715,
		"title" : "Congo",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 112722,
		"title" : "Copycat",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 112740,
		"title" : "Crimson Tide",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 112760,
		"title" : "Cuhroat Island",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 112792,
		"title" : "Dangerous Minds",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 112818,
		"title" : "Dead Man Walking",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 112819,
		"title" : "Dead Presidents",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 112851,
		"title" : "Desperado",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 112857,
		"title" : "Devil in a Blue Dress",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 112864,
		"title" : "Die Hard: With a Vengeance",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 112883,
		"title" : "Don Juan DeMarco",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 112896,
		"title" : "Dracula: Dead and Loving It",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 112966,
		"title" : "The Englishman Who Went Up a Hill But Came Down a Mountain",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 113010,
		"title" : "Fair Game",
		"genre" : "Action, Romance, Thriller"
	},
	{
		"movie_id" : 113028,
		"title" : "Far from Home: The Adventures of Yellow Dog",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 113041,
		"title" : "Father of the Bride Part II",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 113071,
		"title" : "First Knight",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 113097,
		"title" : "Forget Paris",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 113114,
		"title" : "Free Willy 2: The Adventure Home",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 113117,
		"title" : "French Kiss",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 113118,
		"title" : "Friday",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 113161,
		"title" : "Get Shorty",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 113189,
		"title" : "GoldenEye",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 113198,
		"title" : "A Goofy Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 113228,
		"title" : "Grumpier Old Men",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 113253,
		"title" : "Halloween: The Curse of Michael Myers",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 113277,
		"title" : "Heat",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 113303,
		"title" : "Hideaway",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 113305,
		"title" : "Higher Learning",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 113321,
		"title" : "Home for the Holidays",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 113326,
		"title" : "Hung fan kui",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 113347,
		"title" : "How to Make an American Quilt",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 113409,
		"title" : "In the Mouth of Madness",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 113419,
		"title" : "The Indian in the Cupboard",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 113442,
		"title" : "It Takes Two",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 113451,
		"title" : "Jade",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 113481,
		"title" : "Johnny Mnemonic",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 113492,
		"title" : "Judge Dredd",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 113497,
		"title" : "Jumanji",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 113501,
		"title" : "Just Cause",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 113538,
		"title" : "A Kid in King Arthur's Court",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 113552,
		"title" : "Kiss of Death",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 113627,
		"title" : "Leaving Las Vegas",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 113670,
		"title" : "A Lile Princess",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 113690,
		"title" : "Lord of Illusions",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 113729,
		"title" : "Mad Love",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 113755,
		"title" : "Man of the House",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 113820,
		"title" : "Mighty Morphin Power Rangers: The Movie",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 113845,
		"title" : "Money Train",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 113855,
		"title" : "Mortal Kombat",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 113862,
		"title" : "Mr. Holland's Opus",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 113870,
		"title" : "Murder in the First",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 113896,
		"title" : "My Family",
		"genre" : "Drama"
	},
	{
		"movie_id" : 113957,
		"title" : "The Net",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 113986,
		"title" : "Nine Months",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 113987,
		"title" : "Nixon",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 114011,
		"title" : "Now and Then",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 114048,
		"title" : "Operation Dumbo Drop",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 114069,
		"title" : "Outbreak",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 114148,
		"title" : "Pocahontas",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 114168,
		"title" : "Powder",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 114194,
		"title" : "The Prophecy",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 114214,
		"title" : "The Quick and the Dead",
		"genre" : "Action, Romance, Thriller"
	},
	{
		"movie_id" : 114287,
		"title" : "Rob Roy",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 114296,
		"title" : "Roommates",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 114319,
		"title" : "Sabrina",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 114345,
		"title" : "The Scarlet Leer",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 114369,
		"title" : "Se7en",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 114388,
		"title" : "Sense and Sensibility",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 114436,
		"title" : "Showgirls",
		"genre" : "Drama"
	},
	{
		"movie_id" : 114496,
		"title" : "Something to Talk About",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 114508,
		"title" : "Species",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 114576,
		"title" : "Sudden Death",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 114608,
		"title" : "Tales from the Crypt: Demon Knight",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 114609,
		"title" : "Tales from the Hood",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 114681,
		"title" : "To Die For",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 114682,
		"title" : "To Wong Foo Thanks for Everything, Julie Newmar",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 114694,
		"title" : "Tommy Boy",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 114709,
		"title" : "Toy Story",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 114746,
		"title" : "Twelve Monkeys",
		"genre" : "Mystery, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 114781,
		"title" : "Under Siege 2: Dark Territory",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 114814,
		"title" : "The Usual Suspects",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 114825,
		"title" : "Vampire in Brooklyn",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 114852,
		"title" : "Village of the Damned",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 114857,
		"title" : "Virtuosity",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 114885,
		"title" : "Waiting to Exhale",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 114887,
		"title" : "A Walk in the Clouds",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 114898,
		"title" : "Waterworld",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 114924,
		"title" : "While You Were Sleeping",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 114952,
		"title" : "Wings of Courage",
		"genre" : "Adventure, Romance"
	},
	{
		"movie_id" : 115433,
		"title" : "101 Dalmatians",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 115438,
		"title" : "2 Days in the Valley",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 115472,
		"title" : "The Adventures of Pinocchio",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 115493,
		"title" : "Alaska",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 115571,
		"title" : "The Arrival",
		"genre" : "Sci-Fi, Thriller"
	},
	{
		"movie_id" : 115639,
		"title" : "Beautiful Girls",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 115641,
		"title" : "Beavis and Bu-Head Do America",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 115644,
		"title" : "Bed of Roses",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 115645,
		"title" : "Before and After",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 115678,
		"title" : "Big Night",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 115683,
		"title" : "Bio-Dome",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 115685,
		"title" : "The Birdcage",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 115693,
		"title" : "Hak hap",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 115697,
		"title" : "Black Sheep",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 115759,
		"title" : "Broken Arrow",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 115783,
		"title" : "Bulletproof",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 115798,
		"title" : "The Cable Guy",
		"genre" : "Comedy, Drama, Thriller"
	},
	{
		"movie_id" : 115851,
		"title" : "Celtic Pride",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 115857,
		"title" : "Chain Reaction",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 115862,
		"title" : "The Chamber",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 115907,
		"title" : "City Hall",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 115956,
		"title" : "Courage Under Fire",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 115963,
		"title" : "The Craft",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 115986,
		"title" : "The Crow: City of Angels",
		"genre" : "Action, Crime, Fantasy"
	},
	{
		"movie_id" : 116000,
		"title" : "D3: The Mighty Ducks",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 116040,
		"title" : "Daylight",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 116095,
		"title" : "Diabolique",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 116126,
		"title" : "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 116130,
		"title" : "Down Periscope",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 116136,
		"title" : "DragonHeart",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 116151,
		"title" : "Dunston Checks In",
		"genre" : "Comedy, Adventure, Family"
	},
	{
		"movie_id" : 116168,
		"title" : "Eddie",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 116191,
		"title" : "Emma",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 116209,
		"title" : "The English Patient",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 116213,
		"title" : "Eraser",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 116225,
		"title" : "Escape from L.A.",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 116240,
		"title" : "The Evening Star",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 116242,
		"title" : "Everyone Says I Love You",
		"genre" : "Comedy, Musical, Romance"
	},
	{
		"movie_id" : 116250,
		"title" : "Evita",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 116253,
		"title" : "Executive Decision",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 116259,
		"title" : "Extreme Measures",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 116260,
		"title" : "Eye for an Eye",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 116275,
		"title" : "A Family Thing",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 116277,
		"title" : "The Fan",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 116282,
		"title" : "Fargo",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 116287,
		"title" : "Fear",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 116311,
		"title" : "First Kid",
		"genre" : "Family, Comedy"
	},
	{
		"movie_id" : 116313,
		"title" : "The First Wives Club",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 116320,
		"title" : "Fled",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 116322,
		"title" : "Flipper",
		"genre" : "Adventure, Family"
	},
	{
		"movie_id" : 116324,
		"title" : "Flirting with Disaster",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 116329,
		"title" : "Fly Away Home",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 116365,
		"title" : "The Frighteners",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 116367,
		"title" : "From Dusk Till Dawn",
		"genre" : "Action, Crime, Horror"
	},
	{
		"movie_id" : 116409,
		"title" : "The Ghost and the Darkness",
		"genre" : "Adventure, Drama, Thriller"
	},
	{
		"movie_id" : 116410,
		"title" : "Ghosts of Mississippi",
		"genre" : "Drama, History"
	},
	{
		"movie_id" : 116421,
		"title" : "The Glimmer Man",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 116483,
		"title" : "Happy Gilmore",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 116493,
		"title" : "Harriet the Spy",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 116514,
		"title" : "Hellraiser: Bloodline",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 116531,
		"title" : "High School High",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 116552,
		"title" : "Homeward Bound II: Lost in San Francisco",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 116583,
		"title" : "The Hunchback of Notre Dame",
		"genre" : "Animation, Drama, Family"
	},
	{
		"movie_id" : 116621,
		"title" : "In Love and War",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 116629,
		"title" : "Independence Day",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 116654,
		"title" : "The Island of Dr. Moreau",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 116669,
		"title" : "Jack",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 116683,
		"title" : "James and the Giant Peach",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 116695,
		"title" : "Jerry Maguire",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 116704,
		"title" : "Ging chaat goo si 4: Gaan dan yam mo",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 116705,
		"title" : "Jingle All the Way",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 116731,
		"title" : "The Juror",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 116756,
		"title" : "Kazaam",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 116778,
		"title" : "Kingpin",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 116830,
		"title" : "Last Man Standing",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 116905,
		"title" : "Lone Star",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 116908,
		"title" : "The Long Kiss Goodnight",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 116996,
		"title" : "Mars Aacks!",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 116999,
		"title" : "Marvin's Room",
		"genre" : "Drama"
	},
	{
		"movie_id" : 117008,
		"title" : "Matilda",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 117011,
		"title" : "Maximum Risk",
		"genre" : "Action, Romance, Thriller"
	},
	{
		"movie_id" : 117038,
		"title" : "Michael",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 117039,
		"title" : "Michael Collins",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 117057,
		"title" : "The Mirror Has Two Faces",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 117060,
		"title" : "Mission: Impossible",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 117091,
		"title" : "Mother",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 117102,
		"title" : "Mr. Wrong",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 117104,
		"title" : "Mrs. Winterbourne",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 117107,
		"title" : "Mulholland Falls",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 117108,
		"title" : "Multiplicity",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 117110,
		"title" : "Muppet Treasure Island",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 117119,
		"title" : "My Fellow Americans",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 117218,
		"title" : "The Nuy Professor",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 117247,
		"title" : "One Fine Day",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 117318,
		"title" : "The People vs. Larry Flynt",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 117331,
		"title" : "The Phantom",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 117333,
		"title" : "Phenomenon",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 117372,
		"title" : "The Preacher's Wife",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 117381,
		"title" : "Primal Fear",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 117420,
		"title" : "The Quest",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 117438,
		"title" : "Ransom",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 117500,
		"title" : "The Rock",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 117509,
		"title" : "Romeo + Juliet",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 117571,
		"title" : "Scream",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 117589,
		"title" : "Secrets & Lies",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 117603,
		"title" : "Set It Off",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 117608,
		"title" : "Sgt. Bilko",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 117615,
		"title" : "Shall we dansu?",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 117628,
		"title" : "She's the One",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 117631,
		"title" : "Shine",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 117665,
		"title" : "Sleepers",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 117666,
		"title" : "Sling Blade",
		"genre" : "Drama"
	},
	{
		"movie_id" : 117705,
		"title" : "Space Jam",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 117718,
		"title" : "The Spitfire Grill",
		"genre" : "Drama"
	},
	{
		"movie_id" : 117723,
		"title" : "Spy Hard",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 117731,
		"title" : "Star Trek: First Contact",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 117765,
		"title" : "Striptease",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 117774,
		"title" : "The Substitute",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 117784,
		"title" : "Sunset Park",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 117786,
		"title" : "Yat goh ho yan",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 117887,
		"title" : "That Thing You Do!",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 117891,
		"title" : "A Thin Line Between Love and Hate",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 117894,
		"title" : "Thinner",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 117913,
		"title" : "A Time to Kill",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 117918,
		"title" : "Tin Cup",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 117951,
		"title" : "Trainspoing",
		"genre" : "Drama"
	},
	{
		"movie_id" : 117979,
		"title" : "The Truth About Cats & Dogs",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 117998,
		"title" : "Twister",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 118002,
		"title" : "Two If by Sea",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 118055,
		"title" : "Up Close & Personal",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 118073,
		"title" : "A Very Brady Sequel",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 118158,
		"title" : "White Squall",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 118301,
		"title" : "Dead Man on Campus",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 118548,
		"title" : "Absolute Power",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 118556,
		"title" : "Addicted to Love",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 118570,
		"title" : "Air Bud",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 118571,
		"title" : "Air Force One",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 118583,
		"title" : "Alien: Resurrection",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 118604,
		"title" : "An American Werewolf in Paris",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 118607,
		"title" : "Amistad",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 118615,
		"title" : "Anaconda",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 118617,
		"title" : "Anastasia",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 118632,
		"title" : "The Apostle",
		"genre" : "Drama"
	},
	{
		"movie_id" : 118636,
		"title" : "Apt Pupil",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 118655,
		"title" : "Austin Powers: International Man of Mystery",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 118661,
		"title" : "The Avengers",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 118665,
		"title" : "Baby Geniuses",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 118688,
		"title" : "Batman & Robin",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 118689,
		"title" : "Bean",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 118691,
		"title" : "The Beautician and the Beast",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 118708,
		"title" : "Beverly Hills Ninja",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 118715,
		"title" : "The Big Lebowski",
		"genre" : "Comedy, Crime, Sport"
	},
	{
		"movie_id" : 118744,
		"title" : "Hush",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 118747,
		"title" : "Blues Brothers 2000",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 118749,
		"title" : "Boogie Nights",
		"genre" : "Drama"
	},
	{
		"movie_id" : 118750,
		"title" : "Booty Call",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 118755,
		"title" : "The Borrowers",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 118771,
		"title" : "Breakdown",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 118787,
		"title" : "Buddy",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 118798,
		"title" : "Bulworth",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 118799,
		"title" : "La vita è bella",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 118842,
		"title" : "Chasing Amy",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 118880,
		"title" : "Con Air",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 118883,
		"title" : "Conspiracy Theory",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 118884,
		"title" : "Contact",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 118887,
		"title" : "Cop Land",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 118928,
		"title" : "Dante's Peak",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 118929,
		"title" : "Dark City",
		"genre" : "Mystery, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 118954,
		"title" : "Deconstructing Harry",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 118956,
		"title" : "Deep Rising",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 118966,
		"title" : "Desperate Measures",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 118971,
		"title" : "The Devil's Advocate",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 118972,
		"title" : "The Devil's Own",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 118998,
		"title" : "Doctor Dolile",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 119008,
		"title" : "Donnie Brasco",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 119013,
		"title" : "Double Team",
		"genre" : "Action, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 119051,
		"title" : "The Edge",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 119080,
		"title" : "Eve's Bayou",
		"genre" : "Drama"
	},
	{
		"movie_id" : 119081,
		"title" : "Event Horizon",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 119086,
		"title" : "Excess Baggage",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 119094,
		"title" : "Face\/Off",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 119095,
		"title" : "FairyTale: A True Story",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 119099,
		"title" : "Fallen",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 119109,
		"title" : "Fathers' Day",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 119115,
		"title" : "Fierce Creatures",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 119116,
		"title" : "The Fifth Element",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 119123,
		"title" : "Fire Down Below",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 119137,
		"title" : "Flubber",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 119141,
		"title" : "Fools Rush In",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 119142,
		"title" : "For Richer or Poorer",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 119164,
		"title" : "The Full Monty",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 119173,
		"title" : "G.I. Jane",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 119174,
		"title" : "The Game",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 119177,
		"title" : "Gaaca",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 119190,
		"title" : "George of the Jungle",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 119214,
		"title" : "Gone Fishin'",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 119215,
		"title" : "Good Burger",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 119217,
		"title" : "Good Will Hunting",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 119223,
		"title" : "Great Expectations",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 119229,
		"title" : "Grosse Pointe Blank",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 119280,
		"title" : "Mrs Brown",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 119282,
		"title" : "Hercules",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 119303,
		"title" : "Home Alone 3",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 119304,
		"title" : "Home Fries",
		"genre" : "Comedy, Romance, Drama"
	},
	{
		"movie_id" : 119311,
		"title" : "Hoodlum",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 119313,
		"title" : "Hope Floats",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 119314,
		"title" : "The Horse Whisperer",
		"genre" : "Drama, Romance, Western"
	},
	{
		"movie_id" : 119326,
		"title" : "How to Be a Player",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 119345,
		"title" : "I Know What You Did Last Summer",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 119360,
		"title" : "In & Out",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 119395,
		"title" : "The Jackal",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 119396,
		"title" : "Jackie Brown",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 119432,
		"title" : "Jungle 2 Jungle",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 119468,
		"title" : "Kiss the Girls",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 119488,
		"title" : "L.A. Confidential",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 119509,
		"title" : "Leave It to Beaver",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 119528,
		"title" : "Liar Liar",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 119567,
		"title" : "The Lost World: Jurassic Park",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 119572,
		"title" : "Love Jones",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 119592,
		"title" : "Mad City",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 119594,
		"title" : "Twilight",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 119643,
		"title" : "Meet Joe Black",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 119654,
		"title" : "Men in Black",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 119664,
		"title" : "Metro",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 119668,
		"title" : "Midnight in the Garden of Good and Evil",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 119675,
		"title" : "Mimic",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 119683,
		"title" : "Les Misérables",
		"genre" : "Crime, Drama, History"
	},
	{
		"movie_id" : 119695,
		"title" : "Money Talks",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 119707,
		"title" : "Mortal Kombat: Annihilation",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 119715,
		"title" : "Mousehunt",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 119718,
		"title" : "Mr. Magoo",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 119731,
		"title" : "Murder at 1600",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 119738,
		"title" : "My Best Friend's Wedding",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 119783,
		"title" : "Night Falls on Manhaan",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 119807,
		"title" : "Nothing to Lose",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 119822,
		"title" : "As Good as It Gets",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 119848,
		"title" : "Out to Sea",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 119874,
		"title" : "The Peacemaker",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 119896,
		"title" : "Picture Perfect",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 119905,
		"title" : "The Players Club",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 119925,
		"title" : "The Postman",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 119942,
		"title" : "Primary Colors",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 119951,
		"title" : "Private Parts",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 119978,
		"title" : "The Rainmaker",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 119994,
		"title" : "Red Corner",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 120004,
		"title" : "The Relic",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 120008,
		"title" : "The Replacement Killers",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 120029,
		"title" : "RocketMan",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 120032,
		"title" : "Romy and Michele's High School Reunion",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 120053,
		"title" : "The Saint",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 120082,
		"title" : "Scream 2",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 120094,
		"title" : "Selena",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 120102,
		"title" : "Seven Years in Tibet",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 120142,
		"title" : "The Sixth Man",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 120148,
		"title" : "Sliding Doors",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 120157,
		"title" : "Soldier",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 120169,
		"title" : "Soul Food",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 120176,
		"title" : "The Spanish Prisoner",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 120177,
		"title" : "Spawn",
		"genre" : "Action, Drama, Horror"
	},
	{
		"movie_id" : 120179,
		"title" : "Speed 2: Cruise Control",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 120184,
		"title" : "Sphere",
		"genre" : "Action, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 120185,
		"title" : "Spice World",
		"genre" : "Comedy, Family, Music"
	},
	{
		"movie_id" : 120188,
		"title" : "Three Kings",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 120201,
		"title" : "Starship Troopers",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 120317,
		"title" : "That Darn Cat",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 120318,
		"title" : "That Old Feeling",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 120324,
		"title" : "A Simple Plan",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 120338,
		"title" : "Titanic",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 120347,
		"title" : "Tomorrow Never Dies",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 120363,
		"title" : "Toy Story 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 120373,
		"title" : "Trial and Error",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 120382,
		"title" : "The Truman Show",
		"genre" : "Comedy, Drama, Sci-Fi"
	},
	{
		"movie_id" : 120390,
		"title" : "Turbulence",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 120402,
		"title" : "Ulee's Gold",
		"genre" : "Drama"
	},
	{
		"movie_id" : 120434,
		"title" : "Vegas Vacation",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 120458,
		"title" : "Virus",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 120461,
		"title" : "Volcano",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 120483,
		"title" : "The Man Who Knew Too Lile",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 120484,
		"title" : "The Waterboy",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 120520,
		"title" : "The Wings of the Dove",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 120524,
		"title" : "Wishmaster",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 120576,
		"title" : "Dance with Me",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 120577,
		"title" : "54",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 120587,
		"title" : "Antz",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 120591,
		"title" : "Armageddon",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 120595,
		"title" : "Babe: Pig in the City",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 120596,
		"title" : "The Bachelor",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 120598,
		"title" : "Barney's Great Adventure",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 120601,
		"title" : "Being John Malkovich",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 120603,
		"title" : "Beloved",
		"genre" : "Drama, History, Horror"
	},
	{
		"movie_id" : 120609,
		"title" : "The Big Hit",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 120610,
		"title" : "Black Dog",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120611,
		"title" : "Blade",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 120616,
		"title" : "The Mummy",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 120620,
		"title" : "Brokedown Palace",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 120623,
		"title" : "A Bug's Life",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 120630,
		"title" : "Chicken Run",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 120631,
		"title" : "EverAfter",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 120632,
		"title" : "City of Angels",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 120633,
		"title" : "A Civil Action",
		"genre" : "Drama"
	},
	{
		"movie_id" : 120646,
		"title" : "The Deep End of the Ocean",
		"genre" : "Drama"
	},
	{
		"movie_id" : 120647,
		"title" : "Deep Impact",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 120654,
		"title" : "Dirty Work",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 120655,
		"title" : "Dogma",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 120657,
		"title" : "The 13th Warrior",
		"genre" : "Action, Adventure, History"
	},
	{
		"movie_id" : 120660,
		"title" : "Enemy of the State",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 120662,
		"title" : "Eye of the Beholder",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 120663,
		"title" : "Eyes Wide Shut",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 120667,
		"title" : "Fantastic Four",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 120669,
		"title" : "Fear and Loathing in Las Vegas",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 120679,
		"title" : "Frida",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 120681,
		"title" : "From Hell",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 120685,
		"title" : "Godzilla",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 120686,
		"title" : "Stepmom",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 120689,
		"title" : "The Green Mile",
		"genre" : "Crime, Drama, Fantasy"
	},
	{
		"movie_id" : 120693,
		"title" : "Half Baked",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 120694,
		"title" : "Halloween H20: 20 Years Later",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 120696,
		"title" : "Hard Rain",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120701,
		"title" : "Holy Man",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 120703,
		"title" : "How Stella Got Her Groove Back",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 120710,
		"title" : "In Dreams",
		"genre" : "Drama, Fantasy, Thriller"
	},
	{
		"movie_id" : 120722,
		"title" : "Living Out Loud",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 120724,
		"title" : "Knock Off",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 120737,
		"title" : "The Lord of the Rings: The Fellowship of the Ring",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 120738,
		"title" : "Lost in Space",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 120741,
		"title" : "Jane Austen's Mafia!",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 120744,
		"title" : "The Man in the Iron Mask",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 120746,
		"title" : "The Mask of Zorro",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 120749,
		"title" : "Mercury Rising",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120751,
		"title" : "Mighty Joe Young",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 120755,
		"title" : "Mission: Impossible II",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 120757,
		"title" : "The Mod Squad",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 120762,
		"title" : "Mulan",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 120764,
		"title" : "My Favorite Martian",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 120768,
		"title" : "The Negotiator",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120769,
		"title" : "The Newton Boys",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120770,
		"title" : "A Night at the Roxbury",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 120772,
		"title" : "The Object of My Affection",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 120773,
		"title" : "The Odd Couple II",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 120776,
		"title" : "One True Thing",
		"genre" : "Drama"
	},
	{
		"movie_id" : 120780,
		"title" : "Out of Sight",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 120783,
		"title" : "The Parent Trap",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 120784,
		"title" : "Payback",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 120787,
		"title" : "A Perfect Murder",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 120789,
		"title" : "Pleasantville",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 120791,
		"title" : "Practical Magic",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 120794,
		"title" : "The Prince of Egypt",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 120800,
		"title" : "Quest for Camelot",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 120802,
		"title" : "Le violon rouge",
		"genre" : "Drama, Music, Mystery"
	},
	{
		"movie_id" : 120804,
		"title" : "Resident Evil",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 120812,
		"title" : "Rush Hour",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 120815,
		"title" : "Saving Private Ryan",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 120820,
		"title" : "Senseless",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 120824,
		"title" : "The Shipping News",
		"genre" : "Drama"
	},
	{
		"movie_id" : 120828,
		"title" : "Six Days Seven Nights",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 120832,
		"title" : "Snake Eyes",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 120834,
		"title" : "Snow Falling on Cedars",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 120841,
		"title" : "Species II",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 120844,
		"title" : "Star Trek: Insurrection",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 120855,
		"title" : "Tarzan",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 120857,
		"title" : "Un tè con Mussolini",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 120863,
		"title" : "The Thin Red Line",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 120873,
		"title" : "U.S. Marshals",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 120877,
		"title" : "Vampires",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 120885,
		"title" : "Wag the Dog",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 120888,
		"title" : "The Wedding Singer",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 120889,
		"title" : "What Dreams May Come",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 120890,
		"title" : "Wild Things",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 120891,
		"title" : "Wild Wild West",
		"genre" : "Action, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 120901,
		"title" : "Wrongfully Accused",
		"genre" : "Action, Comedy, Thriller"
	},
	{
		"movie_id" : 120902,
		"title" : "The X Files",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 120903,
		"title" : "X-Men",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 120910,
		"title" : "Fantasia 2000",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 120912,
		"title" : "Men in Black II",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 120913,
		"title" : "Titan A.E.",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 120915,
		"title" : "Star Wars: Episode I - The Phantom Menace",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 120917,
		"title" : "The Emperor's New Groove",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 121164,
		"title" : "Corpse Bride",
		"genre" : "Animation, Drama, Family"
	},
	{
		"movie_id" : 121765,
		"title" : "Star Wars: Episode II - Aack of the Clones",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 121766,
		"title" : "Star Wars: Episode III - Revenge of the Sith",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 122151,
		"title" : "Lethal Weapon 4",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 122459,
		"title" : "Return to Me",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 122541,
		"title" : "An Ideal Husband",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 122690,
		"title" : "Ronin",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 122718,
		"title" : "Small Soldiers",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 122933,
		"title" : "Analyze This",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 123209,
		"title" : "The Other Sister",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 123324,
		"title" : "Why Do Fools Fall in Love",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 123964,
		"title" : "Life",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 123987,
		"title" : "Madeline",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 124198,
		"title" : "Very Bad Things",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 124298,
		"title" : "Blast from the Past",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 124315,
		"title" : "The Cider House Rules",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 124718,
		"title" : "He Got Game",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 124879,
		"title" : "Simon Birch",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 125022,
		"title" : "Heartbreakers",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 125439,
		"title" : "Noing Hill",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 125454,
		"title" : "Paulie",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 125664,
		"title" : "Man on the Moon",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 126029,
		"title" : "Shrek",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 126250,
		"title" : "Cookie's Fortune",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 126886,
		"title" : "Election",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 126916,
		"title" : "For Love of the Game",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 127536,
		"title" : "Elizabeth",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 127723,
		"title" : "Can't Hardly Wait",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 128278,
		"title" : "Instinct",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 128442,
		"title" : "Rounders",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 128445,
		"title" : "Rushmore",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 128853,
		"title" : "You've Got Mail",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 129167,
		"title" : "The Iron Giant",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 129280,
		"title" : "The Out-of-Towners",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 129290,
		"title" : "Patch Adams",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 129387,
		"title" : "There's Something About Mary",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 130018,
		"title" : "I Still Know What You Did Last Summer",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 130121,
		"title" : "Mickey Blue Eyes",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 130623,
		"title" : "Dinosaur",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 131325,
		"title" : "Bowfinger",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 131369,
		"title" : "Edtv",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 131646,
		"title" : "Wing Commander",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 131704,
		"title" : "The Adventures of Rocky & Bullwinkle",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 132245,
		"title" : "Driven",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 132347,
		"title" : "Mystery Men",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 132477,
		"title" : "October Sky",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 132512,
		"title" : "At First Sight",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 133046,
		"title" : "Teaching Mrs. Tingle",
		"genre" : "Comedy, Thriller"
	},
	{
		"movie_id" : 133093,
		"title" : "The Matrix",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 133152,
		"title" : "Planet of the Apes",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 133240,
		"title" : "Treasure Planet",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 133751,
		"title" : "The Faculty",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 133952,
		"title" : "The Siege",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 134067,
		"title" : "The Rugrats Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 134084,
		"title" : "Scream 3",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 134119,
		"title" : "The Talented Mr. Ripley",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 134273,
		"title" : "8MM",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 134618,
		"title" : "Mystery, Alaska",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 134619,
		"title" : "Disturbing Behavior",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 134847,
		"title" : "Pitch Black",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 134983,
		"title" : "Supernova",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 137363,
		"title" : "Arlington Road",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 137494,
		"title" : "Entrapment",
		"genre" : "Action, Crime, Romance"
	},
	{
		"movie_id" : 137523,
		"title" : "Fight Club",
		"genre" : "Drama"
	},
	{
		"movie_id" : 138097,
		"title" : "Shakespeare in Love",
		"genre" : "Comedy, Drama, History"
	},
	{
		"movie_id" : 138304,
		"title" : "The Astronaut's Wife",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 138524,
		"title" : "Intolerable Cruelty",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 138749,
		"title" : "The Road to El Dorado",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 139134,
		"title" : "Cruel Intentions",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 139239,
		"title" : "Go",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 139414,
		"title" : "Lake Placid",
		"genre" : "Action, Comedy, Horror"
	},
	{
		"movie_id" : 139462,
		"title" : "Message in a Bole",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 139654,
		"title" : "Training Day",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 139668,
		"title" : "True Crime",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 139699,
		"title" : "Varsity Blues",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 139809,
		"title" : "The Thirteenth Floor",
		"genre" : "Mystery, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 140352,
		"title" : "The Insider",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 140379,
		"title" : "A Midsummer Night's Dream",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 140796,
		"title" : "Air Bud: Golden Receiver",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 141098,
		"title" : "Forces of Nature",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 141109,
		"title" : "Jack Frost",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 141369,
		"title" : "Inspector Gadget",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 141926,
		"title" : "U-571",
		"genre" : "Action, War"
	},
	{
		"movie_id" : 142192,
		"title" : "The Corruptor",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 142342,
		"title" : "Big Daddy",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 142688,
		"title" : "The Ninth Gate",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 143145,
		"title" : "The World Is Not Enough",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 144084,
		"title" : "American Psycho",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 144120,
		"title" : "Bride of Chucky",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 144214,
		"title" : "The General's Daughter",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 144528,
		"title" : "Nuy Professor II: The Klumps",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 144640,
		"title" : "Three to Tango",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 144814,
		"title" : "The Rage: Carrie 2",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 144964,
		"title" : "Highlander: Endgame",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 145487,
		"title" : "Spider-Man",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 145531,
		"title" : "Stigmata",
		"genre" : "Horror"
	},
	{
		"movie_id" : 145653,
		"title" : "Angela's Ashes",
		"genre" : "Drama"
	},
	{
		"movie_id" : 145660,
		"title" : "Austin Powers: The Spy Who Shagged Me",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 145681,
		"title" : "The Bone Collector",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 146309,
		"title" : "Thirteen Days",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 146316,
		"title" : "Lara Croft: Tomb Raider",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 146336,
		"title" : "Urban Legend",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 146675,
		"title" : "End of Days",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 146838,
		"title" : "Any Given Sunday",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 146882,
		"title" : "High Fidelity",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 146984,
		"title" : "The Legend of Bagger Vance",
		"genre" : "Drama, Fantasy, Sport"
	},
	{
		"movie_id" : 147800,
		"title" : "10 Things I Hate About You",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 149261,
		"title" : "Deep Blue Sea",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 149624,
		"title" : "All the Prey Horses",
		"genre" : "Drama, Romance, Western"
	},
	{
		"movie_id" : 149691,
		"title" : "Anywhere But Here",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 150377,
		"title" : "Double Jeopardy",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 151137,
		"title" : "Joan of Arc",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 151658,
		"title" : "Mr. Nice Guy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 151738,
		"title" : "Never Been Kissed",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 151804,
		"title" : "Office Space",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 155267,
		"title" : "The Thomas Crown Affair",
		"genre" : "Crime, Romance, Thriller"
	},
	{
		"movie_id" : 155753,
		"title" : "I'll Be Home for Christmas",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 155975,
		"title" : "Psycho",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 156812,
		"title" : "My Dog Skip",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 156841,
		"title" : "The Next Best Thing",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 156934,
		"title" : "Random Hearts",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 157472,
		"title" : "Clockstoppers",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 157503,
		"title" : "Drop Dead Gorgeous",
		"genre" : "Comedy, Romance, Thriller"
	},
	{
		"movie_id" : 158493,
		"title" : "Belly",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 158622,
		"title" : "The Flintstones in Viva Rock Vegas",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 158811,
		"title" : "Muppets from Space",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 158983,
		"title" : "South Park: Bigger, Longer & Uncut",
		"genre" : "Animation, Comedy, Fantasy"
	},
	{
		"movie_id" : 159273,
		"title" : "Behind Enemy Lines",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 159365,
		"title" : "Cold Mountain",
		"genre" : "Adventure, Drama, History"
	},
	{
		"movie_id" : 159421,
		"title" : "The Adventures of Elmo in Grouchland",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 160009,
		"title" : "The Art of War",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 160127,
		"title" : "Charlie's Angels",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 160236,
		"title" : "Dudley Do-Right",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 160298,
		"title" : "Trippin'",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 160401,
		"title" : "In Too Deep",
		"genre" : "Crime, Thriller, Drama"
	},
	{
		"movie_id" : 160429,
		"title" : "The King and I",
		"genre" : "Animation, Family, Fantasy"
	},
	{
		"movie_id" : 160484,
		"title" : "Lost Souls",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 160797,
		"title" : "Rules of Engagement",
		"genre" : "Drama, Thriller, War"
	},
	{
		"movie_id" : 160862,
		"title" : "She's All That",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 160916,
		"title" : "The Story of Us",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 161081,
		"title" : "What Lies Beneath",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 161083,
		"title" : "What's the Worst That Could Happen?",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 161100,
		"title" : "The Wood",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 162222,
		"title" : "Cast Away",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 162650,
		"title" : "Shaft",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 162661,
		"title" : "Sleepy Hollow",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 162677,
		"title" : "Summer of Sam",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 162983,
		"title" : "Hanging Up",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 163025,
		"title" : "Jurassic Park III",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 163187,
		"title" : "Runaway Bride",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 163579,
		"title" : "Chill Factor",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 163651,
		"title" : "American Pie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 163862,
		"title" : "T-Rex: Back to the Cretaceous",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 163978,
		"title" : "The Beach",
		"genre" : "Adventure, Drama, Romance"
	},
	{
		"movie_id" : 163983,
		"title" : "Bless the Child",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 163988,
		"title" : "Bringing Out the Dead",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 164052,
		"title" : "Hollow Man",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 164108,
		"title" : "The Muse",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 164114,
		"title" : "Drive Me Crazy",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 164181,
		"title" : "Stir of Echoes",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 164184,
		"title" : "The Sum of All Fears",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 164334,
		"title" : "Along Came a Spider",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 164912,
		"title" : "Stuart Lile",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 165494,
		"title" : "Ringmaster",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 165929,
		"title" : "Romeo Must Die",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 165982,
		"title" : "Sinbad: Legend of the Seven Seas",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 166396,
		"title" : "Waking Ned",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 166485,
		"title" : "Anna and the King",
		"genre" : "Drama, History, Romance"
	},
	{
		"movie_id" : 166813,
		"title" : "Spirit: Stallion of the Cimarron",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 166943,
		"title" : "Music of the Heart",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 167190,
		"title" : "Hellboy",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 167260,
		"title" : "The Lord of the Rings: The Return of the King",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 167261,
		"title" : "The Lord of the Rings: The Two Towers",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 167404,
		"title" : "The Sixth Sense",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 167427,
		"title" : "Superstar",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 168501,
		"title" : "The Best Man",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 168786,
		"title" : "Antwone Fisher",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 169547,
		"title" : "American Beauty",
		"genre" : "Drama"
	},
	{
		"movie_id" : 170016,
		"title" : "How the Grinch Stole Christmas",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 171363,
		"title" : "The Haunting",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 171433,
		"title" : "Keeping the Faith",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 171580,
		"title" : "Nurse Bey",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 171804,
		"title" : "Boys Don't Cry",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 172156,
		"title" : "Bad Boys II",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 172396,
		"title" : "The End of the Affair",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 172493,
		"title" : "Girl, Interrupted",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 172495,
		"title" : "Gladiator",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 172610,
		"title" : "Jie tou sha shou",
		"genre" : "Action"
	},
	{
		"movie_id" : 173840,
		"title" : "Final Fantasy: The Spirits Within",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 174480,
		"title" : "Autumn in New York",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 174856,
		"title" : "The Hurricane",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 175142,
		"title" : "Scary Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 175880,
		"title" : "Magnolia",
		"genre" : "Drama"
	},
	{
		"movie_id" : 176269,
		"title" : "Universal Soldier: The Return",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 177789,
		"title" : "Galaxy Quest",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 177971,
		"title" : "The Perfect Storm",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 179626,
		"title" : "15 Minutes",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 180734,
		"title" : "Hard Ball",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 181316,
		"title" : "Blue Streak",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 181536,
		"title" : "Finding Forrester",
		"genre" : "Drama"
	},
	{
		"movie_id" : 181689,
		"title" : "Minority Report",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 181739,
		"title" : "Osmosis Jones",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 181852,
		"title" : "Terminator 3: Rise of the Machines",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 181865,
		"title" : "Traffic",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 181875,
		"title" : "Almost Famous",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 181984,
		"title" : "Boiler Room",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 182789,
		"title" : "Bicentennial Man",
		"genre" : "Comedy, Drama, Sci-Fi"
	},
	{
		"movie_id" : 183505,
		"title" : "Me, Myself & Irene",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 183523,
		"title" : "Mission to Mars",
		"genre" : "Adventure, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 183649,
		"title" : "Phone Booth",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 183790,
		"title" : "A Knight's Tale",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 184791,
		"title" : "O",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 184858,
		"title" : "Reindeer Games",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 184894,
		"title" : "Shanghai Noon",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 184907,
		"title" : "Snow Day",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 185014,
		"title" : "Wonder Boys",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 185183,
		"title" : "Balefield Earth",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 185371,
		"title" : "House on Haunted Hill",
		"genre" : "Crime, Fantasy, Horror"
	},
	{
		"movie_id" : 185431,
		"title" : "Lile Nicky",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 185937,
		"title" : "The Blair Witch Project",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 186045,
		"title" : "Drowning Mona",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 186151,
		"title" : "Frequency",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 186566,
		"title" : "Space Cowboys",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 186589,
		"title" : "Sugar & Spice",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 186894,
		"title" : "Bounce",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 186975,
		"title" : "Down to You",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 187078,
		"title" : "Gone in Sixty Seconds",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 187393,
		"title" : "The Patriot",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 187738,
		"title" : "Blade II",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 187819,
		"title" : "Doug's 1st Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 190138,
		"title" : "The Whole Nine Yards",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 190332,
		"title" : "Wo hu cang long",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 190374,
		"title" : "Dungeons & Dragons",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 190590,
		"title" : "O Brother, Where Art Thou?",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 190641,
		"title" : "Gekijô-ban pokeo monsutâ - Myûtsû no gyakushû",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 190865,
		"title" : "Vertical Limit",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 191133,
		"title" : "The Fighting Temptations",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 191397,
		"title" : "The Replacements",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 191754,
		"title" : "28 Days",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 192071,
		"title" : "Get Over It",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 192111,
		"title" : "Head Over Heels",
		"genre" : "Comedy, Mystery, Romance"
	},
	{
		"movie_id" : 192255,
		"title" : "The Lile Vampire",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 192614,
		"title" : "The Skulls",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 192731,
		"title" : "Urban Legends: Final Cut",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 195234,
		"title" : "Saving Grace",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 195685,
		"title" : "Erin Brockovich",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 195714,
		"title" : "Final Destination",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 195778,
		"title" : "Here on Earth",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 195945,
		"title" : "Next Friday",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 196216,
		"title" : "Small Time Crooks",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 196229,
		"title" : "Zoolander",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 198021,
		"title" : "Where the Heart Is",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 198386,
		"title" : "The Crew",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 198781,
		"title" : "Monsters, Inc.",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 199290,
		"title" : "3 Strikes",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 199725,
		"title" : "Love & Basketball",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 199753,
		"title" : "Red Planet",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 200027,
		"title" : "Riding in Cars with Boys",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 200465,
		"title" : "The Bank Job",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 200469,
		"title" : "Bats",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 200550,
		"title" : "Coyote Ugly",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 202470,
		"title" : "Rock Star",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 203009,
		"title" : "Moulin Rouge!",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 203019,
		"title" : "Men of Honor",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 203230,
		"title" : "You Can Count on Me",
		"genre" : "Drama"
	},
	{
		"movie_id" : 203408,
		"title" : "The Omega Code",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 204175,
		"title" : "Boys and Girls",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 204313,
		"title" : "Exorcist: The Beginning",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 204626,
		"title" : "The Watcher",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 204946,
		"title" : "Bring It On",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 205000,
		"title" : "Deuce Bigalow: Male Gigolo",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 205271,
		"title" : "Dr. T & the Women",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 205461,
		"title" : "Thomas and the Magic Railroad",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 206275,
		"title" : "Save the Last Dance",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 206314,
		"title" : "Joy Ride",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 206634,
		"title" : "Children of Men",
		"genre" : "Adventure, Drama, Sci-Fi"
	},
	{
		"movie_id" : 207201,
		"title" : "What Women Want",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 208003,
		"title" : "Big Momma's House",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 208092,
		"title" : "Snatch",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 208874,
		"title" : "The Contender",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 208988,
		"title" : "Get Carter",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 209144,
		"title" : "Memento",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 209163,
		"title" : "The Mummy Returns",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 209475,
		"title" : "The Wedding Planner",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 209958,
		"title" : "The Cell",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 210234,
		"title" : "Gekijô-ban pokeo monsutâ: Maboroshi no pokemon: Rugia bakutan",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 210616,
		"title" : "Center Stage",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 210945,
		"title" : "Remember the Titans",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 211181,
		"title" : "102 Dalmatians",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 211443,
		"title" : "Jason X",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 211465,
		"title" : "Knockaround Guys",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 211915,
		"title" : "Le fabuleux destin d'Amélie Poulain",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 211933,
		"title" : "Awake",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 211938,
		"title" : "Bait",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 212338,
		"title" : "Meet the Parents",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 212346,
		"title" : "Miss Congeniality",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 212720,
		"title" : "A.I. Artificial Intelligence",
		"genre" : "Drama, Sci-Fi"
	},
	{
		"movie_id" : 212985,
		"title" : "Hannibal",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 213149,
		"title" : "Pearl Harbor",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 213203,
		"title" : "Rugrats in Paris: The Movie - Rugrats II",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 213790,
		"title" : "The Ladies Man",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 215129,
		"title" : "Road Trip",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 215750,
		"title" : "Enemy at the Gates",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 216216,
		"title" : "The 6th Day",
		"genre" : "Action, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 217505,
		"title" : "Gangs of New York",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 217630,
		"title" : "Loser",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 217756,
		"title" : "Ready to Rumble",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 217869,
		"title" : "Unbreakable",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 218817,
		"title" : "Antitrust",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 218839,
		"title" : "Best in Show",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 218922,
		"title" : "Original Sin",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 218967,
		"title" : "The Family Man",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 219653,
		"title" : "Dracula 2000",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 219699,
		"title" : "The Gift",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 219854,
		"title" : "The Kid",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 219952,
		"title" : "Lucky Numbers",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 219965,
		"title" : "Bandits",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 220099,
		"title" : "The Tigger Movie",
		"genre" : "Animation, Comedy, Drama"
	},
	{
		"movie_id" : 220506,
		"title" : "Halloween: Resurrection",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 221027,
		"title" : "Blow",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 221218,
		"title" : "The Glass House",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 223897,
		"title" : "Pay It Forward",
		"genre" : "Drama"
	},
	{
		"movie_id" : 225071,
		"title" : "Angel Eyes",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 227445,
		"title" : "The Score",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 227538,
		"title" : "Spy Kids",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 228750,
		"title" : "Proof of Life",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 229260,
		"title" : "Book of Shadows: Blair Witch 2",
		"genre" : "Adventure, Fantasy, Horror"
	},
	{
		"movie_id" : 230011,
		"title" : "Atlantis: The Lost Empire",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 230030,
		"title" : "Bedazzled",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 230600,
		"title" : "The Others",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 230838,
		"title" : "Sweet November",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 231402,
		"title" : "Crocodile Dundee in Los Angeles",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 231775,
		"title" : "Down to Earth",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 232500,
		"title" : "The Fast and the Furious",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 233142,
		"title" : "3000 Miles to Graceland",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 233469,
		"title" : "Collateral Damage",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 234215,
		"title" : "The Matrix Reloaded",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 234829,
		"title" : "Summer Catch",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 235679,
		"title" : "Gekijô-ban pokeo monsutâ: Kesshô-tô no teiô",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 236348,
		"title" : "Josie and the Pussycats",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 236493,
		"title" : "The Mexican",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 236784,
		"title" : "The Tailor of Panama",
		"genre" : "Comedy, Drama, Thriller"
	},
	{
		"movie_id" : 237534,
		"title" : "Le pacte des loups",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 237572,
		"title" : "The Pledge",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 238112,
		"title" : "Captain Corelli's Mandolin",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 238546,
		"title" : "Queen of the Damned",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 238948,
		"title" : "Double Take",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 239395,
		"title" : "Cats & Dogs",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 239948,
		"title" : "Saving Silverman",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 240462,
		"title" : "Dr. Dolile 2",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 240468,
		"title" : "Kung Pow: Enter the Fist",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 240510,
		"title" : "The Four Feathers",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 240515,
		"title" : "Freddy Got Fingered",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 240772,
		"title" : "Ocean's Eleven",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 240890,
		"title" : "Serendipity",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 241025,
		"title" : "Vanity Fair",
		"genre" : "Drama"
	},
	{
		"movie_id" : 241303,
		"title" : "Chocolat",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 241527,
		"title" : "Harry Poer and the Sorcerer's Stone",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 241760,
		"title" : "The New Guy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 242423,
		"title" : "Dude, Where's My Car?",
		"genre" : "Comedy, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 242445,
		"title" : "Exit Wounds",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 242653,
		"title" : "The Matrix Revolutions",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 242998,
		"title" : "Valentine",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 243155,
		"title" : "Bridget Jones's Diary",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 243585,
		"title" : "Stuart Lile 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 243736,
		"title" : "40 Days and 40 Nights",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 244000,
		"title" : "American Outlaws",
		"genre" : "Action, Western"
	},
	{
		"movie_id" : 244244,
		"title" : "Swordfish",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 244970,
		"title" : "Someone Like You...",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 245429,
		"title" : "Sen to Chihiro no kamikakushi",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 245562,
		"title" : "Windtalkers",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 245574,
		"title" : "Y tu mamá también",
		"genre" : "Drama"
	},
	{
		"movie_id" : 245674,
		"title" : "Thir13en Ghosts",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 245686,
		"title" : "Joe Dirt",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 245803,
		"title" : "Bulletproof Monk",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 245844,
		"title" : "The Count of Monte Cristo",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 246460,
		"title" : "Die Another Day",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 246544,
		"title" : "The Musketeer",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 246894,
		"title" : "Rollerball",
		"genre" : "Action, Sci-Fi, Sport"
	},
	{
		"movie_id" : 246989,
		"title" : "Tomcats",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 247425,
		"title" : "In the Bedroom",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 247444,
		"title" : "Juwanna Mann",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 247638,
		"title" : "The Princess Diaries",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 247745,
		"title" : "Super Troopers",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 248667,
		"title" : "Ali",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 249462,
		"title" : "Billy Elliot",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 249478,
		"title" : "Domestic Disturbance",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 250224,
		"title" : "Crazy\/Beautiful",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 250274,
		"title" : "The Brothers",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 250310,
		"title" : "Corky Romano",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 250323,
		"title" : "The Deep End",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 250494,
		"title" : "Legally Blonde",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 250687,
		"title" : "Rat Race",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 250720,
		"title" : "See Spot Run",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 250797,
		"title" : "Unfaithful",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 251075,
		"title" : "Evolution",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 251114,
		"title" : "Hart's War",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 251127,
		"title" : "How to Lose a Guy in 10 Days",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 251160,
		"title" : "John Q",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 251736,
		"title" : "House of 1000 Corpses",
		"genre" : "Horror"
	},
	{
		"movie_id" : 252028,
		"title" : "Surviving Christmas",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 252076,
		"title" : "Maid in Manhaan",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 252501,
		"title" : "Hearts in Atlantis",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 252503,
		"title" : "Heist",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 252866,
		"title" : "American Pie 2",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 253474,
		"title" : "The Pianist",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 253556,
		"title" : "Reign of Fire",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 253754,
		"title" : "Star Trek: Nemesis",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 253798,
		"title" : "Out Cold",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 253867,
		"title" : "The Sweetest Thing",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 255798,
		"title" : "The Animal",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 255819,
		"title" : "Baby Boy",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 256276,
		"title" : "Possession",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 256380,
		"title" : "Shallow Hal",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 256415,
		"title" : "Sweet Home Alabama",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 257044,
		"title" : "Road to Perdition",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 257076,
		"title" : "S.W.A.T.",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 257106,
		"title" : "Scary Movie 2",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 257360,
		"title" : "About Schmidt",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 257516,
		"title" : "Cursed",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 257568,
		"title" : "Kangaroo Jack",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 257756,
		"title" : "High Crimes",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 258000,
		"title" : "Panic Room",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 258068,
		"title" : "The Quiet American",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 258153,
		"title" : "S1m0ne",
		"genre" : "Comedy, Drama, Sci-Fi"
	},
	{
		"movie_id" : 258463,
		"title" : "The Bourne Identity",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 259288,
		"title" : "Dragonfly",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 259324,
		"title" : "Ghost Rider",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 259446,
		"title" : "My Big Fat Greek Wedding",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 259711,
		"title" : "Vanilla Sky",
		"genre" : "Fantasy, Mystery, Romance"
	},
	{
		"movie_id" : 259974,
		"title" : "Digimon: The Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 260866,
		"title" : "Don't Say a Word",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 261289,
		"title" : "Serving Sara",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 261392,
		"title" : "Jay and Silent Bob Strike Back",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 263488,
		"title" : "Jeepers Creepers",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 263757,
		"title" : "Uptown Girls",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 264150,
		"title" : "View from the Top",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 264395,
		"title" : "Basic",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 264464,
		"title" : "Catch Me If You Can",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 264472,
		"title" : "Changing Lanes",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 264616,
		"title" : "Frailty",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 264796,
		"title" : "Life as a House",
		"genre" : "Drama"
	},
	{
		"movie_id" : 264935,
		"title" : "Murder by Numbers",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 265029,
		"title" : "America's Sweethearts",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 265086,
		"title" : "Black Hawk Down",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 265087,
		"title" : "Black Knight",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 265208,
		"title" : "The Girl Next Door",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 265298,
		"title" : "Big Fat Liar",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 265343,
		"title" : "Monsoon Wedding",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 265349,
		"title" : "The Mothman Prophecies",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 265459,
		"title" : "One Hour Photo",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 265632,
		"title" : "Recess: School's Out",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 265662,
		"title" : "The Rookie",
		"genre" : "Drama, Family, Sport"
	},
	{
		"movie_id" : 265666,
		"title" : "The Royal Tenenbaums",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 265808,
		"title" : "Stealing Harvard",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 266465,
		"title" : "A Man Apart",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 266489,
		"title" : "Duplex",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 266543,
		"title" : "Finding Nemo",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 266697,
		"title" : "Kill Bill: Vol. 1",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 266915,
		"title" : "Rush Hour 2",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 266987,
		"title" : "Spy Game",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 267248,
		"title" : "Abandon",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 267626,
		"title" : "K-19: The Widowmaker",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 267804,
		"title" : "The One",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 267891,
		"title" : "The Ringer",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 267913,
		"title" : "Scooby-Doo",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 268126,
		"title" : "Adaptation.",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 268380,
		"title" : "Ice Age",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 268397,
		"title" : "Jimmy Neutron: Boy Genius",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 268695,
		"title" : "The Time Machine",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 268978,
		"title" : "A Beautiful Mind",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 268995,
		"title" : "The Majestic",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 269095,
		"title" : "City by the Sea",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 269341,
		"title" : "Two Can Play That Game",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 269347,
		"title" : "The Hunted",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 270288,
		"title" : "Confessions of a Dangerous Mind",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 270846,
		"title" : "Superbabies: Baby Geniuses 2",
		"genre" : "Comedy, Family, Sci-Fi"
	},
	{
		"movie_id" : 270980,
		"title" : "My Boss's Daughter",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 271027,
		"title" : "Kiss of the Dragon",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 271263,
		"title" : "Eight Crazy Nights",
		"genre" : "Animation, Comedy, Musical"
	},
	{
		"movie_id" : 271367,
		"title" : "Eight Legged Freaks",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 271668,
		"title" : "National Security",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 272020,
		"title" : "The Last Castle",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 272152,
		"title" : "K-PAX",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 272207,
		"title" : "Narc",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 272338,
		"title" : "Punch-Drunk Love",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 273517,
		"title" : "Darkness",
		"genre" : "Horror"
	},
	{
		"movie_id" : 273923,
		"title" : "Orange County",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 274166,
		"title" : "Johnny English",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 274558,
		"title" : "The Hours",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 275022,
		"title" : "Crossroads",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 275847,
		"title" : "Lilo & Stitch",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 276033,
		"title" : "The Country Bears",
		"genre" : "Comedy, Family, Music"
	},
	{
		"movie_id" : 276751,
		"title" : "About a Boy",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 277027,
		"title" : "I Am Sam",
		"genre" : "Drama"
	},
	{
		"movie_id" : 277296,
		"title" : "The Scorpion King",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 277371,
		"title" : "Not Another Teen Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 277434,
		"title" : "We Were Soldiers",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 278295,
		"title" : "All About the Benjamins",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 278435,
		"title" : "Enough",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 278488,
		"title" : "How High",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 278504,
		"title" : "Insomnia",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 279111,
		"title" : "Gods and Generals",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 279113,
		"title" : "The Good Girl",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 279331,
		"title" : "Dark Blue",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 279493,
		"title" : "Undercover Brother",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 279778,
		"title" : "Divine Secrets of the Ya-Ya Sisterhood",
		"genre" : "Drama"
	},
	{
		"movie_id" : 279781,
		"title" : "Sorority Boys",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 279889,
		"title" : "Joe Somebody",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 280030,
		"title" : "Return to Never Land",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 280460,
		"title" : "The Banger Sisters",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 280486,
		"title" : "Bad Company",
		"genre" : "Action, Comedy, Thriller"
	},
	{
		"movie_id" : 280590,
		"title" : "Mr. Deeds",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 280707,
		"title" : "Gosford Park",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 281322,
		"title" : "Undisputed",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 281358,
		"title" : "A Walk to Remember",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 281373,
		"title" : "Snow Dogs",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 282120,
		"title" : "The Wild Thornberrys Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 282209,
		"title" : "Darkness Falls",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 282687,
		"title" : "Life or Something Like It",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 283026,
		"title" : "Swimfan",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 283084,
		"title" : "Tuck Everlasting",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 283111,
		"title" : "National Lampoon's Van Wilder",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 283139,
		"title" : "White Oleander",
		"genre" : "Drama"
	},
	{
		"movie_id" : 283426,
		"title" : "The Jungle Book 2",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 283530,
		"title" : "The Emperor's Club",
		"genre" : "Drama"
	},
	{
		"movie_id" : 283632,
		"title" : "They",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 284490,
		"title" : "Showtime",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 285531,
		"title" : "Dreamcatcher",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 285742,
		"title" : "Monster's Ball",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 285823,
		"title" : "Once Upon a Time in Mexico",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 286106,
		"title" : "Signs",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 286499,
		"title" : "Bend It Like Beckham",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 286716,
		"title" : "Hulk",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 286788,
		"title" : "What a Girl Wants",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 287467,
		"title" : "Hable con ella",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 287717,
		"title" : "Spy Kids 2: Island of Lost Dreams",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 287978,
		"title" : "Daredevil",
		"genre" : "Action, Crime"
	},
	{
		"movie_id" : 288045,
		"title" : "The Medallion",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 288477,
		"title" : "Ghost Ship",
		"genre" : "Horror"
	},
	{
		"movie_id" : 289043,
		"title" : "28 Days Later...",
		"genre" : "Action, Drama, Horror"
	},
	{
		"movie_id" : 289408,
		"title" : "The Powerpuff Girls Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 289765,
		"title" : "Red Dragon",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 289848,
		"title" : "Analyze That",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 289879,
		"title" : "The Buerfly Effect",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 289992,
		"title" : "The Life of David Gale",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 290002,
		"title" : "Meet the Fockers",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 290095,
		"title" : "The Tuxedo",
		"genre" : "Action, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 290332,
		"title" : "The Wash",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 290334,
		"title" : "X2",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 292506,
		"title" : "The Recruit",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 293508,
		"title" : "The Phantom of the Opera",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 293564,
		"title" : "Rush Hour 3",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 293662,
		"title" : "The Transporter",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 293815,
		"title" : "Friday After Next",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 294870,
		"title" : "Rent",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 295178,
		"title" : "Austin Powers in Goldmember",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 295254,
		"title" : "Feardotcom",
		"genre" : "Crime, Horror, Thriller"
	},
	{
		"movie_id" : 295289,
		"title" : "A Guy Thing",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 295297,
		"title" : "Harry Poer and the Chamber of Secrets",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 295427,
		"title" : "The Master of Disguise",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 295700,
		"title" : "Wrong Turn",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 295701,
		"title" : "xXx",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 296572,
		"title" : "The Chronicles of Riddick",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 297037,
		"title" : "Brown Sugar",
		"genre" : "Romance, Comedy, Drama"
	},
	{
		"movie_id" : 297162,
		"title" : "Half Past Dead",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 297181,
		"title" : "I Spy",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 297884,
		"title" : "Far from Heaven",
		"genre" : "Drama"
	},
	{
		"movie_id" : 298130,
		"title" : "The Ring",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 298148,
		"title" : "Shrek 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 298203,
		"title" : "8 Mile",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 298228,
		"title" : "Whale Rider",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 298388,
		"title" : "Jonah: A VeggieTales Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 298814,
		"title" : "The Core",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 298845,
		"title" : "In America",
		"genre" : "Drama"
	},
	{
		"movie_id" : 299172,
		"title" : "Home on the Range",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 299658,
		"title" : "Chicago",
		"genre" : "Comedy, Crime, Musical"
	},
	{
		"movie_id" : 299977,
		"title" : "Ying xiong",
		"genre" : "Action, Adventure, History"
	},
	{
		"movie_id" : 300051,
		"title" : "Jersey Girl",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 300471,
		"title" : "Shanghai Knights",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 300532,
		"title" : "Blue Crush",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 300556,
		"title" : "Timeline",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 301181,
		"title" : "Deliver Us from Eva",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 301470,
		"title" : "Jeepers Creepers 2",
		"genre" : "Horror"
	},
	{
		"movie_id" : 302640,
		"title" : "The Hot Chick",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 302886,
		"title" : "Old School",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 303714,
		"title" : "Barbershop",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 303816,
		"title" : "Cabin Fever",
		"genre" : "Drama, Horror"
	},
	{
		"movie_id" : 303933,
		"title" : "Drumline",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 304141,
		"title" : "Harry Poer and the Prisoner of Azkaban",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 304415,
		"title" : "Mona Lisa Smile",
		"genre" : "Drama"
	},
	{
		"movie_id" : 304669,
		"title" : "The Santa Clause 2",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 305224,
		"title" : "Anger Management",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 305357,
		"title" : "Charlie's Angels: Full Throle",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 305396,
		"title" : "The Crocodile Hunter: Collision Course",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 305669,
		"title" : "Bringing Down the House",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 305711,
		"title" : "Just Married",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 306047,
		"title" : "Scary Movie 3",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 306685,
		"title" : "Cradle 2 the Grave",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 306734,
		"title" : "Le divorce",
		"genre" : "Drama, Romance, Comedy"
	},
	{
		"movie_id" : 306841,
		"title" : "The Lizzie McGuire Movie",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 307453,
		"title" : "Shark Tale",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 307479,
		"title" : "Solaris",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 307901,
		"title" : "25th Hour",
		"genre" : "Drama"
	},
	{
		"movie_id" : 307987,
		"title" : "Bad Santa",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 308055,
		"title" : "Bobby",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 308208,
		"title" : "Ballistic: Ecks vs. Sever",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 308353,
		"title" : "Happily N'Ever After",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 308506,
		"title" : "Like Mike",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 308644,
		"title" : "Finding Neverland",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 309377,
		"title" : "Blood Work",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 309530,
		"title" : "Down with Love",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 309593,
		"title" : "Final Destination 2",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 309698,
		"title" : "Identity",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 310281,
		"title" : "A Mighty Wind",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 310910,
		"title" : "Confidence",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 311113,
		"title" : "Master and Commander: The Far Side of the World",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 311289,
		"title" : "Holes",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 311429,
		"title" : "The League of Extraordinary Gentlemen",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 312004,
		"title" : "The Curse of the Were-Rabbit",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 312528,
		"title" : "The Cat in the Hat",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 313443,
		"title" : "Out of Time",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 313542,
		"title" : "Runaway Jury",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 313737,
		"title" : "Two Weeks Notice",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 313911,
		"title" : "Agent Cody Banks",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 314166,
		"title" : "Hey Arnold! The Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 314331,
		"title" : "Love Actually",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 314353,
		"title" : "Tears of the Sun",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 314498,
		"title" : "The Perfect Score",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 314786,
		"title" : "The In-Laws",
		"genre" : "Action, Comedy, Thriller"
	},
	{
		"movie_id" : 315297,
		"title" : "Twisted",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 315327,
		"title" : "Bruce Almighty",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 315733,
		"title" : "21 Grams",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 315983,
		"title" : "House of Sand and Fog",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 316356,
		"title" : "Open Range",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 316396,
		"title" : "Peter Pan",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 316465,
		"title" : "Radio",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 316654,
		"title" : "Spider-Man 2",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 316732,
		"title" : "Taxi",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 317132,
		"title" : "Because of Winn-Dixie",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 317198,
		"title" : "Bridget Jones: The Edge of Reason",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 317219,
		"title" : "Cars",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 317303,
		"title" : "Daddy Day Care",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 317648,
		"title" : "Hidalgo",
		"genre" : "Action, Adventure, Biography"
	},
	{
		"movie_id" : 317676,
		"title" : "House of the Dead",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 317705,
		"title" : "The Incredibles",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 317740,
		"title" : "The Italian Job",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 317919,
		"title" : "Mission: Impossible III",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 318155,
		"title" : "Looney Tunes: Back in Action",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 318283,
		"title" : "Alex & Emma",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 318462,
		"title" : "Diarios de motocicleta",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 318627,
		"title" : "Resident Evil: Apocalypse",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 318649,
		"title" : "Sahara",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 318974,
		"title" : "The Alamo",
		"genre" : "Drama, History, War"
	},
	{
		"movie_id" : 319061,
		"title" : "Big Fish",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 319262,
		"title" : "The Day After Tomorrow",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 319343,
		"title" : "Elf",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 319524,
		"title" : "How to Deal",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 320661,
		"title" : "Kingdom of Heaven",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 320691,
		"title" : "Underworld",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 322259,
		"title" : "2 Fast 2 Furious",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 322330,
		"title" : "Freaky Friday",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 322589,
		"title" : "Honey",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 323033,
		"title" : "Laws of Araction",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 323642,
		"title" : "Piglet's Big Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 324133,
		"title" : "Swimming Pool",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 324216,
		"title" : "The Texas Chainsaw Massacre",
		"genre" : "Horror"
	},
	{
		"movie_id" : 324554,
		"title" : "Wicker Park",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 325258,
		"title" : "Dickie Roberts: Former Child Star",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 325537,
		"title" : "Head of State",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 325703,
		"title" : "Lara Croft Tomb Raider: The Cradle of Life",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 325710,
		"title" : "The Last Samurai",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 325805,
		"title" : "Matchstick Men",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 325980,
		"title" : "Pirates of the Caribbean: The Curse of the Black Pearl",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 326769,
		"title" : "Biker Boyz",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 326856,
		"title" : "Envy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 326900,
		"title" : "Good Boy!",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 326905,
		"title" : "The Great Raid",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 327056,
		"title" : "Mystic River",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 327084,
		"title" : "Over the Hedge",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 327137,
		"title" : "Secondhand Lions",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 327162,
		"title" : "The Stepford Wives",
		"genre" : "Comedy, Horror, Sci-Fi"
	},
	{
		"movie_id" : 327247,
		"title" : "The Whole Ten Yards",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 327437,
		"title" : "Around the World in 80 Days",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 327554,
		"title" : "Catwoman",
		"genre" : "Action, Crime, Fantasy"
	},
	{
		"movie_id" : 327597,
		"title" : "Coraline",
		"genre" : "Animation, Drama, Family"
	},
	{
		"movie_id" : 327679,
		"title" : "Ella Enchanted",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 327850,
		"title" : "The Rundown",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 328099,
		"title" : "Malibu's Most Wanted",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 328107,
		"title" : "Man on Fire",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 328589,
		"title" : "Under the Tuscan Sun",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 328828,
		"title" : "American Wedding",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 328880,
		"title" : "Brother Bear",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 329028,
		"title" : "Dumb and Dumberer: When Harry Met Lloyd",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 329101,
		"title" : "Freddy vs. Jason",
		"genre" : "Action, Horror"
	},
	{
		"movie_id" : 329575,
		"title" : "Seabiscuit",
		"genre" : "Drama, History, Sport"
	},
	{
		"movie_id" : 329691,
		"title" : "Torque",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 329717,
		"title" : "Hollywood Homicide",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 329774,
		"title" : "xXx: State of the Union",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 330373,
		"title" : "Harry Poer and the Goblet of Fire",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 330793,
		"title" : "The Punisher",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 331468,
		"title" : "Cold Creek Manor",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 331632,
		"title" : "Scooby-Doo 2: Monsters Unleashed",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 331933,
		"title" : "Man of the House",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 332047,
		"title" : "Fever Pitch",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 332280,
		"title" : "The Notebook",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 332375,
		"title" : "Saved!",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 332379,
		"title" : "The School of Rock",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 332452,
		"title" : "Troy",
		"genre" : "Drama, History"
	},
	{
		"movie_id" : 332712,
		"title" : "My Baby's Daddy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 333766,
		"title" : "Garden State",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 333780,
		"title" : "Legally Blonde 2: Red, White & Blonde",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 335119,
		"title" : "Girl with a Pearl Earring",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 335121,
		"title" : "Godsend",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 335245,
		"title" : "The Ladykillers",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 335266,
		"title" : "Lost in Translation",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 335345,
		"title" : "The Passion of the Christ",
		"genre" : "Drama"
	},
	{
		"movie_id" : 335438,
		"title" : "Starsky & Hutch",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 335559,
		"title" : "Win a Date with Tad Hamilton!",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 337563,
		"title" : "13 Going on 30",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 337579,
		"title" : "Barbershop 2: Back in Business",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 337592,
		"title" : "Love Don't Cost a Thing",
		"genre" : "Comedy, Romance, Drama"
	},
	{
		"movie_id" : 337697,
		"title" : "The Prince & Me",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 337711,
		"title" : "Rugrats Go Wild",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 337741,
		"title" : "Something's Goa Give",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 337909,
		"title" : "Calendar Girls",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 337917,
		"title" : "Catch That Kid",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 337921,
		"title" : "Cellular",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 337978,
		"title" : "Live Free or Die Hard",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 338013,
		"title" : "Eternal Sunshine of the Spotless Mind",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 338094,
		"title" : "The Haunted Mansion",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 338096,
		"title" : "Dirty Dancing: Havana Nights",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 338188,
		"title" : "The Missing",
		"genre" : "Adventure, Thriller, Western"
	},
	{
		"movie_id" : 338325,
		"title" : "Paparazzi",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 338337,
		"title" : "Paycheck",
		"genre" : "Action, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 338348,
		"title" : "The Polar Express",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 338427,
		"title" : "Shopgirl",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 338459,
		"title" : "Spy Kids 3: Game Over",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 338466,
		"title" : "Stuck on You",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 338512,
		"title" : "Deux frères",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 338526,
		"title" : "Van Helsing",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 338751,
		"title" : "The Aviator",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 339291,
		"title" : "A Series of Unfortunate Events",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 339412,
		"title" : "Mr 3000",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 340163,
		"title" : "Hostage",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 340855,
		"title" : "Monster",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 342258,
		"title" : "Unleashed",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 343135,
		"title" : "Along Came Polly",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 343660,
		"title" : "50 First Dates",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 343737,
		"title" : "The Good Shepherd",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 343818,
		"title" : "I, Robot",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 344854,
		"title" : "Arthur et les Minimoys",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 345950,
		"title" : "The SpongeBob SquarePants Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 346156,
		"title" : "Sky Captain and the World of Tomorrow",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 346491,
		"title" : "Alexander",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 348150,
		"title" : "Superman Returns",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 348333,
		"title" : "Waiting...",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 348836,
		"title" : "Gothika",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 349169,
		"title" : "Breakin' All the Rules",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 349205,
		"title" : "Cheaper by the Dozen",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 349467,
		"title" : "Freedomland",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 349683,
		"title" : "King Arthur",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 349710,
		"title" : "Ladder 49",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 349825,
		"title" : "Miracle",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 349903,
		"title" : "Ocean's Twelve",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 350028,
		"title" : "Raising Helen",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 350258,
		"title" : "Ray",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 351283,
		"title" : "Madagascar",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 351977,
		"title" : "Walking Tall",
		"genre" : "Action, Crime"
	},
	{
		"movie_id" : 352248,
		"title" : "Cinderella Man",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 352277,
		"title" : "De-Lovely",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 355295,
		"title" : "The Brothers Grimm",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 355702,
		"title" : "Lords of Dogtown",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 356150,
		"title" : "EuroTrip",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 356470,
		"title" : "A Cinderella Story",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 356618,
		"title" : "The Forgoen",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 356634,
		"title" : "Garfield",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 356680,
		"title" : "The Family Stone",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 356721,
		"title" : "I Heart Huckabees",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 356910,
		"title" : "Mr. & Mrs. Smith",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 357277,
		"title" : "Elektra",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 357413,
		"title" : "Anchorman: The Legend of Ron Burgundy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 357507,
		"title" : "Boogeyman",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 358082,
		"title" : "Robots",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 358135,
		"title" : "Shall We Dance",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 358273,
		"title" : "Walk the Line",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 358349,
		"title" : "Agent Cody Banks 2: Destination London",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 359013,
		"title" : "Blade: Trinity",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 359950,
		"title" : "The Secret Life of Walter Miy",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 360139,
		"title" : "Chasing Liberty",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 360201,
		"title" : "Wimbledon",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 360486,
		"title" : "Constantine",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 360717,
		"title" : "King Kong",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 361089,
		"title" : "Valiant",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 361467,
		"title" : "Confessions of a Teenage Drama Queen",
		"genre" : "Comedy, Family, Music"
	},
	{
		"movie_id" : 361620,
		"title" : "First Daughter",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 361696,
		"title" : "Raise Your Voice",
		"genre" : "Family, Music, Musical"
	},
	{
		"movie_id" : 361748,
		"title" : "Inglourious Basterds",
		"genre" : "Adventure, Drama, War"
	},
	{
		"movie_id" : 361841,
		"title" : "Lile Black Book",
		"genre" : "Comedy, Romance, Drama"
	},
	{
		"movie_id" : 361925,
		"title" : "Welcome to Mooseport",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 362120,
		"title" : "Scary Movie 4",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 362165,
		"title" : "Son of the Mask",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 362227,
		"title" : "The Terminal",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 362269,
		"title" : "Kinsey",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 362270,
		"title" : "The Life Aquatic with Steve Zissou",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 362478,
		"title" : "The Box",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 363276,
		"title" : "Madhouse",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 363282,
		"title" : "New York Minute",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 363547,
		"title" : "Dawn of the Dead",
		"genre" : "Action, Horror"
	},
	{
		"movie_id" : 363771,
		"title" : "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 363988,
		"title" : "Secret Window",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 364045,
		"title" : "Taking Lives",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 364725,
		"title" : "Dodgeball: A True Underdog Story",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 364751,
		"title" : "Without a Paddle",
		"genre" : "Adventure, Comedy, Mystery"
	},
	{
		"movie_id" : 364970,
		"title" : "Babylon A.D.",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 365485,
		"title" : "The Matador",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 365737,
		"title" : "Syriana",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 365748,
		"title" : "Shaun of the Dead",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 365885,
		"title" : "The Upside of Anger",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 365907,
		"title" : "A Walk Among the Tombstones",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 365913,
		"title" : "The Watermelon Heist",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 365929,
		"title" : "Whiteout",
		"genre" : "Action, Crime, Horror"
	},
	{
		"movie_id" : 365957,
		"title" : "You Got Served",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 366174,
		"title" : "Anacondas: The Hunt for the Blood Orchid",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 366532,
		"title" : "La grande séduction",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 366548,
		"title" : "Happy Feet",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 366551,
		"title" : "Harold & Kumar Go to White Castle",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 367085,
		"title" : "Soul Plane",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 367479,
		"title" : "After the Sunset",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 367594,
		"title" : "Charlie and the Chocolate Factory",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 367652,
		"title" : "Deuce Bigalow: European Gigolo",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 367882,
		"title" : "Indiana Jones and the Kingdom of the Crystal Skull",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 367959,
		"title" : "Hannibal Rising",
		"genre" : "Adventure, Crime, Drama"
	},
	{
		"movie_id" : 368008,
		"title" : "The Manchurian Candidate",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 368447,
		"title" : "The Village",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 368578,
		"title" : "Are We There Yet?",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 368709,
		"title" : "Elizabethtown",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 368891,
		"title" : "National Treasure",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 368933,
		"title" : "The Princess Diaries 2: Royal Engagement",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 368975,
		"title" : "Sleepover",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 369339,
		"title" : "Collateral",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 369436,
		"title" : "Four Christmases",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 369441,
		"title" : "Fun with Dick and Jane",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 369610,
		"title" : "Jurassic World",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 369735,
		"title" : "Monster-in-Law",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 370032,
		"title" : "Ultraviolet",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 370263,
		"title" : "AVP: Alien vs. Predator",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 371246,
		"title" : "Spanglish",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 371606,
		"title" : "Chicken Lile",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 371724,
		"title" : "The Hitchhiker's Guide to the Galaxy",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 371746,
		"title" : "Iron Man",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 372183,
		"title" : "The Bourne Supremacy",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 372237,
		"title" : "Guess Who",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 372532,
		"title" : "The Wedding Date",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 372588,
		"title" : "Team America: World Police",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 372784,
		"title" : "Batman Begins",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 372873,
		"title" : "D-War",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 373051,
		"title" : "Journey to the Center of the Earth",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 373074,
		"title" : "Kung fu",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 373883,
		"title" : "Halloween",
		"genre" : "Horror"
	},
	{
		"movie_id" : 373889,
		"title" : "Harry Poer and the Order of the Phoenix",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 373908,
		"title" : "The Honeymooners",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 373926,
		"title" : "The Interpreter",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 374102,
		"title" : "Open Water",
		"genre" : "Adventure, Drama, Horror"
	},
	{
		"movie_id" : 374536,
		"title" : "Bewitched",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 374900,
		"title" : "Napoleon Dynamite",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 375063,
		"title" : "Sideways",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 375154,
		"title" : "Tristan + Isolde",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 375173,
		"title" : "Alfie",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 375210,
		"title" : "White Noise",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 375568,
		"title" : "Astro Boy",
		"genre" : "Animation, Action, Comedy"
	},
	{
		"movie_id" : 375679,
		"title" : "Crash",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 376105,
		"title" : "Racing Stripes",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 376108,
		"title" : "Rebound",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 376136,
		"title" : "The Rum Diary",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 376541,
		"title" : "Closer",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 376994,
		"title" : "X-Men: The Last Stand",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 377062,
		"title" : "Flight of the Phoenix",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 377092,
		"title" : "Mean Girls",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 377109,
		"title" : "The Ring Two",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 377471,
		"title" : "Be Cool",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 377818,
		"title" : "The Dukes of Hazzard",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 377981,
		"title" : "Gnomeo & Juliet",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 378109,
		"title" : "Into the Blue",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 378194,
		"title" : "Kill Bill: Vol. 2",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 379725,
		"title" : "Capote",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 379786,
		"title" : "Serenity",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 379865,
		"title" : "Leatherheads",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 380277,
		"title" : "The Cookout",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 380510,
		"title" : "The Lovely Bones",
		"genre" : "Drama, Fantasy, Thriller"
	},
	{
		"movie_id" : 380623,
		"title" : "The Perfect Man",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 381061,
		"title" : "Casino Royale",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 381707,
		"title" : "White Chicks",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 381849,
		"title" : "3:10 to Yuma",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 381971,
		"title" : "Curious George",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 382077,
		"title" : "Hide and Seek",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 382625,
		"title" : "The Da Vinci Code",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 382628,
		"title" : "Dark Water",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 382932,
		"title" : "Ratatouille",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 382992,
		"title" : "Stealth",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 383010,
		"title" : "The Three Stooges",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 383060,
		"title" : "Zoom",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 383216,
		"title" : "The Pink Panther",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 383574,
		"title" : "Pirates of the Caribbean: Dead Man's Chest",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 384286,
		"title" : "Cry Wolf",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 384537,
		"title" : "Silent Hill",
		"genre" : "Horror"
	},
	{
		"movie_id" : 384642,
		"title" : "Kicking & Screaming",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 384680,
		"title" : "The Weather Man",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 384793,
		"title" : "Accepted",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 384806,
		"title" : "The Amityville Horror",
		"genre" : "Horror"
	},
	{
		"movie_id" : 385004,
		"title" : "Shi mian mai fu",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 385267,
		"title" : "In Good Company",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 385307,
		"title" : "Miss Congeniality 2: Armed & Fabulous",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 385726,
		"title" : "Glory Road",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 385752,
		"title" : "The Golden Compass",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 385880,
		"title" : "Monster House",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 385887,
		"title" : "Motherless Brooklyn",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 386117,
		"title" : "Where the Wild Things Are",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 386140,
		"title" : "The Legend of Zorro",
		"genre" : "Action, Adventure, Romance"
	},
	{
		"movie_id" : 386588,
		"title" : "Hitch",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 387131,
		"title" : "The Constant Gardener",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 387514,
		"title" : "Prime",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 387564,
		"title" : "Saw",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 387575,
		"title" : "Seed of Chucky",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 387877,
		"title" : "The Black Dahlia",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 388125,
		"title" : "In Her Shoes",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 388419,
		"title" : "Christmas with the Kranks",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 388482,
		"title" : "Transporter 2",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 388500,
		"title" : "Beauty Shop",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 388795,
		"title" : "Brokeback Mountain",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 388980,
		"title" : "The Greatest Game Ever Played",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 389722,
		"title" : "30 Days of Night",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 389790,
		"title" : "Bee Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 389860,
		"title" : "Click",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 390022,
		"title" : "Friday Night Lights",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 391198,
		"title" : "The Grudge",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 391304,
		"title" : "A Lot Like Love",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 393162,
		"title" : "Coach Carter",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 393735,
		"title" : "The Shaggy Dog",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 395169,
		"title" : "Hotel Rwanda",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 395251,
		"title" : "The Producers",
		"genre" : "Comedy, Crime, Musical"
	},
	{
		"movie_id" : 395495,
		"title" : "Catch and Release",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 395584,
		"title" : "The Devil's Rejects",
		"genre" : "Horror"
	},
	{
		"movie_id" : 395699,
		"title" : "The Pacifier",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 395972,
		"title" : "North Country",
		"genre" : "Drama"
	},
	{
		"movie_id" : 396269,
		"title" : "Wedding Crashers",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 396555,
		"title" : "Meet the Robinsons",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 396592,
		"title" : "Fat Albert",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 396652,
		"title" : "Ice Princess",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 396752,
		"title" : "Nanny McPhee",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 397065,
		"title" : "House of Wax",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 397078,
		"title" : "Just My Luck",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 397101,
		"title" : "The Skeleton Key",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 397313,
		"title" : "Eight Below",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 397535,
		"title" : "Memoirs of a Geisha",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 397892,
		"title" : "Bolt",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 398017,
		"title" : "Derailed",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 398165,
		"title" : "The Longest Yard",
		"genre" : "Comedy, Crime, Sport"
	},
	{
		"movie_id" : 398286,
		"title" : "Tangled",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 398375,
		"title" : "Rumor Has It...",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 398712,
		"title" : "Assault on Precinct 13",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 398808,
		"title" : "Bridge to Terabithia",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 399146,
		"title" : "A History of Violence",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 399201,
		"title" : "The Island",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 399295,
		"title" : "Lord of War",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 399862,
		"title" : "End of the Spear",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 400497,
		"title" : "Herbie Fully Loaded",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 400525,
		"title" : "The Ice Harvest",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 400717,
		"title" : "Open Season",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 401729,
		"title" : "John Carter",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 401792,
		"title" : "Sin City",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 401855,
		"title" : "Underworld: Evolution",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 401997,
		"title" : "Breach",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 402022,
		"title" : "Æon Flux",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 402399,
		"title" : "The New World",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 402894,
		"title" : "Casanova",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 402901,
		"title" : "The Cave",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 403455,
		"title" : "Roll Bounce",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 403508,
		"title" : "The Sisterhood of the Traveling Pants",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 403702,
		"title" : "Youth in Revolt",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 403703,
		"title" : "Yu-Gi-Oh! The Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 404032,
		"title" : "The Exorcism of Emily Rose",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 405094,
		"title" : "Das Leben der Anderen",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 405159,
		"title" : "Million Dollar Baby",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 405325,
		"title" : "Sky High",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 405422,
		"title" : "The 40 Year Old Virgin",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 405469,
		"title" : "The Wild",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 406375,
		"title" : "Zathura: A Space Adventure",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 406759,
		"title" : "The Eye",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 406816,
		"title" : "The Guardian",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 407121,
		"title" : "Pooh's Heffalump Movie",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 407265,
		"title" : "Transamerica",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 407304,
		"title" : "War of the Worlds",
		"genre" : "Adventure, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 407887,
		"title" : "The Departed",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 408236,
		"title" : "Sweeney Todd: The Demon Barber of Fleet Street",
		"genre" : "Drama, Horror, Musical"
	},
	{
		"movie_id" : 408306,
		"title" : "Munich",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 408345,
		"title" : "Firewall",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 408524,
		"title" : "Bad News Bears",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 408790,
		"title" : "Flightplan",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 408839,
		"title" : "The Heartbreak Kid",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 408985,
		"title" : "Last Holiday",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 409182,
		"title" : "Poseidon",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 409459,
		"title" : "Watchmen",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 409847,
		"title" : "Cowboys & Aliens",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 410097,
		"title" : "Hustle & Flow",
		"genre" : "Crime, Drama, Music"
	},
	{
		"movie_id" : 410297,
		"title" : "The Lake House",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 410377,
		"title" : "Nim's Island",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 411061,
		"title" : "88 Minutes",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 411477,
		"title" : "Hellboy II: The Golden Army",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 412019,
		"title" : "Broken Flowers",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 413015,
		"title" : "Mrs Henderson Presents",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 413099,
		"title" : "Evan Almighty",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 413267,
		"title" : "Shrek the Third",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 413300,
		"title" : "Spider-Man 3",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 413895,
		"title" : "Charloe's Web",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 414055,
		"title" : "Elizabeth: The Golden Age",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 414387,
		"title" : "Pride & Prejudice",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 414853,
		"title" : "Barnyard",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 414982,
		"title" : "Final Destination 3",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 414993,
		"title" : "The Fountain",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 415306,
		"title" : "Talladega Nights: The Ballad of Ricky Bobby",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 416212,
		"title" : "The Secret Life of Bees",
		"genre" : "Drama"
	},
	{
		"movie_id" : 416236,
		"title" : "The Spiderwick Chronicles",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 416315,
		"title" : "Wolf Creek",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 416320,
		"title" : "Match Point",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 416449,
		"title" : "300",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 416508,
		"title" : "Becoming Jane",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 417001,
		"title" : "Must Love Dogs",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 417148,
		"title" : "Snakes on a Plane",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 417217,
		"title" : "Two for the Money",
		"genre" : "Crime, Drama, Sport"
	},
	{
		"movie_id" : 417225,
		"title" : "Idlewild",
		"genre" : "Crime, Drama, Musical"
	},
	{
		"movie_id" : 417433,
		"title" : "Annapolis",
		"genre" : "Drama, Romance, Sport"
	},
	{
		"movie_id" : 417741,
		"title" : "Harry Poer and the Half-Blood Prince",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 418279,
		"title" : "Transformers",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 418647,
		"title" : "Dreamer: Inspired by a True Story",
		"genre" : "Drama, Family, Sport"
	},
	{
		"movie_id" : 418689,
		"title" : "Flags of Our Fathers",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 418763,
		"title" : "Jarhead",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 418819,
		"title" : "Land of the Dead",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 419706,
		"title" : "Doom",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 419843,
		"title" : "In the Land of Women",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 419887,
		"title" : "The Kite Runner",
		"genre" : "Drama"
	},
	{
		"movie_id" : 419946,
		"title" : "The Marine",
		"genre" : "Action, Comedy, Drama"
	},
	{
		"movie_id" : 419984,
		"title" : "Mr. Woodcock",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 420087,
		"title" : "A Prairie Home Companion",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 420223,
		"title" : "Stranger Than Fiction",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 420238,
		"title" : "The Tale of Despereaux",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 420294,
		"title" : "The Texas Chainsaw Massacre: The Beginning",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 421054,
		"title" : "Domino",
		"genre" : "Action, Biography, Crime"
	},
	{
		"movie_id" : 421073,
		"title" : "Street Kings",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 421206,
		"title" : "Gridiron Gang",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 421239,
		"title" : "Red Eye",
		"genre" : "Thriller"
	},
	{
		"movie_id" : 421715,
		"title" : "The Curious Case of Benjamin Buon",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 421729,
		"title" : "Big Momma's House 2",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 422093,
		"title" : "Diary of a Mad Black Woman",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 422720,
		"title" : "Marie Antoinee",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 422774,
		"title" : "Are We Done Yet?",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 423294,
		"title" : "Surf's Up",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 424095,
		"title" : "Flushed Away",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 424345,
		"title" : "Clerks II",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 424774,
		"title" : "The Adventures of Sharkboy and Lavagirl 3-D",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 424823,
		"title" : "Balls of Fury",
		"genre" : "Comedy, Crime, Sport"
	},
	{
		"movie_id" : 424993,
		"title" : "Employee of the Month",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 425061,
		"title" : "Get Smart",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 425112,
		"title" : "Hot Fuzz",
		"genre" : "Action, Comedy, Mystery"
	},
	{
		"movie_id" : 425123,
		"title" : "Just Like Heaven",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 425210,
		"title" : "Lucky Number Slevin",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 425430,
		"title" : "The Messengers",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 426592,
		"title" : "Superhero Movie",
		"genre" : "Action, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 426615,
		"title" : "In the Mix",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 426883,
		"title" : "Alpha Dog",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 426931,
		"title" : "August Rush",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 427152,
		"title" : "Dinner for Schmucks",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 427229,
		"title" : "Failure to Launch",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 427309,
		"title" : "The Great Debaters",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 427327,
		"title" : "Hairspray",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 427392,
		"title" : "The Invasion",
		"genre" : "Sci-Fi, Thriller"
	},
	{
		"movie_id" : 427944,
		"title" : "Thank You for Smoking",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 427954,
		"title" : "Tom yum goong",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 427969,
		"title" : "Hollywoodland",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 429493,
		"title" : "The A-Team",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 429573,
		"title" : "An American Haunting",
		"genre" : "Drama, History, Horror"
	},
	{
		"movie_id" : 429589,
		"title" : "The Ant Bully",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 429591,
		"title" : "Aquamarine",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 430105,
		"title" : "Four Brothers",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 430304,
		"title" : "Lile Man",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 430308,
		"title" : "Get Rich or Die Tryin'",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 430357,
		"title" : "Miami Vice",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 430431,
		"title" : "One Night with the King",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 430634,
		"title" : "Stick It",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 430770,
		"title" : "The Women",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 430779,
		"title" : "Everyone's Hero",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 430922,
		"title" : "Role Models",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 431021,
		"title" : "The Possession",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 431197,
		"title" : "The Kingdom",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 431308,
		"title" : "P.S. I Love You",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 432021,
		"title" : "Resident Evil: Extinction",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 432283,
		"title" : "Fantastic Mr. Fox",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 432291,
		"title" : "The Fog",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 432348,
		"title" : "Saw II",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 433035,
		"title" : "Real Steel",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 433362,
		"title" : "Daybreakers",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 433383,
		"title" : "Good Night, and Good Luck.",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 433386,
		"title" : "The Grudge 2",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 433400,
		"title" : "Just Friends",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 433412,
		"title" : "Material Girls",
		"genre" : "Comedy, Family, Romance"
	},
	{
		"movie_id" : 433416,
		"title" : "The Namesake",
		"genre" : "Drama"
	},
	{
		"movie_id" : 434139,
		"title" : "The Last Kiss",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 434409,
		"title" : "V for Vendea",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 435625,
		"title" : "The Descent",
		"genre" : "Adventure, Horror, Thriller"
	},
	{
		"movie_id" : 435651,
		"title" : "The Giver",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 435670,
		"title" : "The Invisible",
		"genre" : "Crime, Drama, Fantasy"
	},
	{
		"movie_id" : 435705,
		"title" : "Next",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 435761,
		"title" : "Toy Story 3",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 436331,
		"title" : "Friends with Money",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 436339,
		"title" : "G-Force",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 436697,
		"title" : "The Queen",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 437086,
		"title" : "Alita: Bale Angel",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 437179,
		"title" : "See No Evil",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 437777,
		"title" : "Something New",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 437800,
		"title" : "Akeelah and the Bee",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 437863,
		"title" : "The Benchwarmers",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 438097,
		"title" : "Ice Age: The Meltdown",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 438488,
		"title" : "Terminator Salvation",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 440963,
		"title" : "The Bourne Ultimatum",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 441773,
		"title" : "Kung Fu Panda",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 441796,
		"title" : "Stay Alive",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 441909,
		"title" : "Volver",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 442933,
		"title" : "Beowulf",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 443272,
		"title" : "Lincoln",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 443274,
		"title" : "Vantage Point",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 443295,
		"title" : "Yours, Mine & Ours",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 443453,
		"title" : "Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 443489,
		"title" : "Dreamgirls",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 443536,
		"title" : "Hoodwinked!",
		"genre" : "Animation, Comedy, Crime"
	},
	{
		"movie_id" : 443543,
		"title" : "The Illusionist",
		"genre" : "Drama, Fantasy, History"
	},
	{
		"movie_id" : 443632,
		"title" : "The Sentinel",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 443649,
		"title" : "10,000 BC",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 443701,
		"title" : "The X Files: I Want to Believe",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 443706,
		"title" : "Zodiac",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 444682,
		"title" : "The Reaping",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 445922,
		"title" : "Across the Universe",
		"genre" : "Drama, Fantasy, History"
	},
	{
		"movie_id" : 445934,
		"title" : "Blades of Glory",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 445990,
		"title" : "Invincible",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 446013,
		"title" : "Pathfinder",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 446029,
		"title" : "Sco Pilgrim vs. the World",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 446046,
		"title" : "Take the Lead",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 446059,
		"title" : "Huo Yuan Jia",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 448011,
		"title" : "Knowing",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 448115,
		"title" : "Shazam!",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 448157,
		"title" : "Hancock",
		"genre" : "Action, Fantasy"
	},
	{
		"movie_id" : 448694,
		"title" : "Puss in Boots",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 449010,
		"title" : "Eragon",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 449059,
		"title" : "Lile Miss Sunshine",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 449088,
		"title" : "Pirates of the Caribbean: At World's End",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 449089,
		"title" : "RV",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 449467,
		"title" : "Babel",
		"genre" : "Drama"
	},
	{
		"movie_id" : 450188,
		"title" : "La Môme",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 450232,
		"title" : "16 Blocks",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 450259,
		"title" : "Blood Diamond",
		"genre" : "Adventure, Drama, Thriller"
	},
	{
		"movie_id" : 450278,
		"title" : "Hostel",
		"genre" : "Horror"
	},
	{
		"movie_id" : 450345,
		"title" : "The Wicker Man",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 450385,
		"title" : "1408",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 450405,
		"title" : "Cirque du Freak: The Vampire's Assistant",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 451069,
		"title" : "The Gospel",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 451079,
		"title" : "Horton Hears a Who!",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 451279,
		"title" : "Wonder Woman",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 452594,
		"title" : "The Break-Up",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 452598,
		"title" : "Cheaper by the Dozen 2",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 452608,
		"title" : "Death Race",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 452623,
		"title" : "Gone Baby Gone",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 452625,
		"title" : "Good Luck Chuck",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 452637,
		"title" : "Lady in the Water",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 452681,
		"title" : "The Santa Clause 3: The Escape Clause",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 452694,
		"title" : "The Time Traveler's Wife",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 452702,
		"title" : "Vacancy",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 453451,
		"title" : "Mr. Bean's Holiday",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 453467,
		"title" : "Deja Vu",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 453556,
		"title" : "TMNT",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 453562,
		"title" : "42",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 454082,
		"title" : "Black Christmas",
		"genre" : "Horror"
	},
	{
		"movie_id" : 454776,
		"title" : "Amazing Grace",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 454824,
		"title" : "Flyboys",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 454841,
		"title" : "The Hills Have Eyes",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 454848,
		"title" : "Inside Man",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 454876,
		"title" : "Life of Pi",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 454919,
		"title" : "Pulse",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 454921,
		"title" : "The Pursuit of Happyness",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 454945,
		"title" : "She's the Man",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 455407,
		"title" : "The Crazies",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 455499,
		"title" : "Garfield: A Tale of Two Kiies",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 455590,
		"title" : "The Last King of Scotland",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 455612,
		"title" : "Madea's Family Reunion",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 455760,
		"title" : "Dead Silence",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 455824,
		"title" : "Australia",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 455857,
		"title" : "When a Stranger Calls",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 455944,
		"title" : "The Equalizer",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 455960,
		"title" : "The Hitcher",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 455967,
		"title" : "John Tucker Must Die",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 456020,
		"title" : "Waist Deep",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 457400,
		"title" : "Land of the Lost",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 457419,
		"title" : "Mr. Magorium's Wonder Emporium",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 457430,
		"title" : "El laberinto del fauno",
		"genre" : "Drama, Fantasy, War"
	},
	{
		"movie_id" : 457433,
		"title" : "Perfect Stranger",
		"genre" : "Crime, Horror, Mystery"
	},
	{
		"movie_id" : 457510,
		"title" : "Nacho Libre",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 457513,
		"title" : "Scoop",
		"genre" : "Comedy, Crime, Fantasy"
	},
	{
		"movie_id" : 457939,
		"title" : "The Holiday",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 458339,
		"title" : "Captain America: The First Avenger",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 458352,
		"title" : "The Devil Wears Prada",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 458481,
		"title" : "Sin City: A Dame to Kill For",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 458525,
		"title" : "X-Men Origins: Wolverine",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 461770,
		"title" : "Enchanted",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 462200,
		"title" : "Black Snake Moan",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 462244,
		"title" : "Daddy Day Camp",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 462322,
		"title" : "Grindhouse",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 462346,
		"title" : "How to Eat Fried Worms",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 462395,
		"title" : "Larry the Cable Guy: Health Inspector",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 462499,
		"title" : "Rambo",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 462519,
		"title" : "School for Scoundrels",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 462538,
		"title" : "The Simpsons Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 462590,
		"title" : "Step Up",
		"genre" : "Crime, Drama, Music"
	},
	{
		"movie_id" : 463034,
		"title" : "You, Me and Dupree",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 463854,
		"title" : "28 Weeks Later",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 463985,
		"title" : "The Fast and the Furious: Tokyo Drift",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 463998,
		"title" : "Freedom Writers",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 464154,
		"title" : "Piranha 3D",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 465234,
		"title" : "National Treasure: Book of Secrets",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 465494,
		"title" : "Hitman",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 465502,
		"title" : "Igor",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 465538,
		"title" : "Michael Clayton",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 465551,
		"title" : "Notes on a Scandal",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 465580,
		"title" : "Push",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 465602,
		"title" : "Shoot 'Em Up",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 465624,
		"title" : "My Super Ex-Girlfriend",
		"genre" : "Comedy, Romance, Sci-Fi"
	},
	{
		"movie_id" : 466342,
		"title" : "Date Movie",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 466856,
		"title" : "ATL",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 466909,
		"title" : "The Omen",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 467110,
		"title" : "Underdog",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 467197,
		"title" : "Max Payne",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 467200,
		"title" : "The Other Boleyn Girl",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 467406,
		"title" : "Juno",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 468569,
		"title" : "The Dark Knight",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 469263,
		"title" : "The Astronaut Farmer",
		"genre" : "Adventure, Drama, Sci-Fi"
	},
	{
		"movie_id" : 469494,
		"title" : "There Will Be Blood",
		"genre" : "Drama"
	},
	{
		"movie_id" : 469641,
		"title" : "World Trade Center",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 469903,
		"title" : "The Express",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 470752,
		"title" : "Ex Machina",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 471042,
		"title" : "Tower Heist",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 472033,
		"title" : "9",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 472043,
		"title" : "Apocalypto",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 472062,
		"title" : "Charlie Wilson's War",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 472160,
		"title" : "Penelope",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 472181,
		"title" : "The Smurfs",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 472198,
		"title" : "Notorious",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 472399,
		"title" : "The Mechanic",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 473075,
		"title" : "Prince of Persia: The Sands of Time",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 473308,
		"title" : "Waitress",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 473705,
		"title" : "State of Play",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 475276,
		"title" : "United 93",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 475290,
		"title" : "Hail, Caesar!",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 475394,
		"title" : "Smokin' Aces",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 475944,
		"title" : "The Covenant",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 475998,
		"title" : "The Pirates Who Don't Do Anything: A VeggieTales Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 476964,
		"title" : "The Brave One",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 476995,
		"title" : "Firehouse Dog",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 477051,
		"title" : "Norbit",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 477071,
		"title" : "Premonition",
		"genre" : "Drama, Fantasy, Thriller"
	},
	{
		"movie_id" : 477080,
		"title" : "Unstoppable",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 477302,
		"title" : "Extremely Loud & Incredibly Close",
		"genre" : "Adventure, Drama, Mystery"
	},
	{
		"movie_id" : 477347,
		"title" : "Night at the Museum",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 477348,
		"title" : "No Country for Old Men",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 478087,
		"title" : "21",
		"genre" : "Crime, Drama, History"
	},
	{
		"movie_id" : 478304,
		"title" : "The Tree of Life",
		"genre" : "Drama, Fantasy"
	},
	{
		"movie_id" : 478311,
		"title" : "Knocked Up",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 478970,
		"title" : "Ant-Man",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 479143,
		"title" : "Rocky Balboa",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 479500,
		"title" : "Nancy Drew",
		"genre" : "Comedy, Crime, Family"
	},
	{
		"movie_id" : 479647,
		"title" : "Bon Cop, Bad Cop",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 479884,
		"title" : "Crank",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 479952,
		"title" : "Madagascar: Escape 2 Africa",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 479968,
		"title" : "One Missed Call",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 479997,
		"title" : "Season of the Witch",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 480242,
		"title" : "Dan in Real Life",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 480249,
		"title" : "I Am Legend",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 480255,
		"title" : "The Losers",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 480687,
		"title" : "Hall Pass",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 481141,
		"title" : "No Reservations",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 481369,
		"title" : "The Number 23",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 481499,
		"title" : "The Croods",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 481536,
		"title" : "Harold & Kumar Escape from Guantanamo Bay",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 482571,
		"title" : "The Prestige",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 482572,
		"title" : "Pride and Glory",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 482599,
		"title" : "Shuer",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 482603,
		"title" : "Space Chimps",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 482606,
		"title" : "The Strangers",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 483607,
		"title" : "Doomsday",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 483726,
		"title" : "Man of the Year",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 484562,
		"title" : "The Seeker: The Dark Is Rising",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 485985,
		"title" : "Red Tails",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 486321,
		"title" : "Fly Me to the Moon",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 486551,
		"title" : "Beerfest",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 486576,
		"title" : "4: Rise of the Silver Surfer",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 486578,
		"title" : "First Sunday",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 486583,
		"title" : "Fred Claus",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 486655,
		"title" : "Stardust",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 486822,
		"title" : "Disturbia",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 486946,
		"title" : "Wild Hogs",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 488120,
		"title" : "Fracture",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 488658,
		"title" : "Unaccompanied Minors",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 489099,
		"title" : "Jumper",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 489237,
		"title" : "The Nanny Diaries",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 489270,
		"title" : "Saw III",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 489281,
		"title" : "Stop-Loss",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 490084,
		"title" : "Because I Said So",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 490204,
		"title" : "Reign Over Me",
		"genre" : "Drama"
	},
	{
		"movie_id" : 491152,
		"title" : "Something Borrowed",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 492044,
		"title" : "The Haunting in Connecticut",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 492389,
		"title" : "Furry Vengeance",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 492956,
		"title" : "The Game Plan",
		"genre" : "Comedy, Family, Sport"
	},
	{
		"movie_id" : 493405,
		"title" : "CHIPS",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 493464,
		"title" : "Wanted",
		"genre" : "Action, Crime, Fantasy"
	},
	{
		"movie_id" : 493949,
		"title" : "Ramona and Beezus",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 494238,
		"title" : "Inkheart",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 494652,
		"title" : "Welcome Home, Roscoe Jenkins",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 496806,
		"title" : "Ocean's Thirteen",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 497465,
		"title" : "Vicky Cristina Barcelona",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 498353,
		"title" : "Hostel: Part II",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 498380,
		"title" : "Leers from Iwo Jima",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 498381,
		"title" : "Rings",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 498399,
		"title" : "We Own the Night",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 499448,
		"title" : "The Chronicles of Narnia: Prince Caspian",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 499549,
		"title" : "Avatar",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 499554,
		"title" : "Reno 911!: Miami",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 499556,
		"title" : "War",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 758730,
		"title" : "AVPR: Aliens vs Predator - Requiem",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 758746,
		"title" : "Friday the 13th",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 758752,
		"title" : "Love & Other Drugs",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 758758,
		"title" : "Into the Wild",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 758766,
		"title" : "Music and Lyrics",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 758774,
		"title" : "Body of Lies",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 758794,
		"title" : "We Are Marshall",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 760329,
		"title" : "The Water Horse",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 762107,
		"title" : "I Now Pronounce You Chuck & Larry",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 762114,
		"title" : "License to Wed",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 762121,
		"title" : "The Nativity Story",
		"genre" : "Drama, Family, History"
	},
	{
		"movie_id" : 762125,
		"title" : "Planet 51",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 763831,
		"title" : "A Thousand Words",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 765010,
		"title" : "Brothers",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 765429,
		"title" : "American Gangster",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 765443,
		"title" : "Eastern Promises",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 765446,
		"title" : "Escape from Planet Earth",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 765447,
		"title" : "Evening",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 765476,
		"title" : "Meet Dave",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 768212,
		"title" : "The Last Mimzy",
		"genre" : "Drama, Family, Sci-Fi"
	},
	{
		"movie_id" : 770703,
		"title" : "What's Your Number?",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 770752,
		"title" : "Fool's Gold",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 770772,
		"title" : "I Think I Love My Wife",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 770828,
		"title" : "Man of Steel",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 772193,
		"title" : "Primeval",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 775539,
		"title" : "Stomp the Yard",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 775552,
		"title" : "Aliens in the Aic",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 778661,
		"title" : "Daddy's Lile Girls",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 780504,
		"title" : "Drive",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 780511,
		"title" : "Everybody's Fine",
		"genre" : "Drama"
	},
	{
		"movie_id" : 780521,
		"title" : "The Princess and the Frog",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 780567,
		"title" : "Imagine That",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 780571,
		"title" : "Mr. Brooks",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 780653,
		"title" : "The Wolfman",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 783233,
		"title" : "Atonement",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 785006,
		"title" : "Hotel for Dogs",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 787474,
		"title" : "The Boxtrolls",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 787475,
		"title" : "Hot Rod",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 790604,
		"title" : "Deck the Halls",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 790628,
		"title" : "The Incredible Burt Wonderstone",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 790636,
		"title" : "Dallas Buyers Club",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 790686,
		"title" : "Mirrors",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 790724,
		"title" : "Jack Reacher",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 790736,
		"title" : "R.I.P.D.",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 790804,
		"title" : "The Comebacks",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 791304,
		"title" : "Georgia Rule",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 795351,
		"title" : "Case 39",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 795421,
		"title" : "Mamma Mia!",
		"genre" : "Comedy, Musical, Romance"
	},
	{
		"movie_id" : 795438,
		"title" : "Not Easily Broken",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 795461,
		"title" : "Scary Movie 5",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 796307,
		"title" : "La misma luna",
		"genre" : "Adventure, Drama"
	},
	{
		"movie_id" : 796366,
		"title" : "Star Trek",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 799934,
		"title" : "Be Kind Rewind",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 799949,
		"title" : "Epic Movie",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 800039,
		"title" : "Forgeing Sarah Marshall",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 800069,
		"title" : "The Hills Have Eyes II",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 800080,
		"title" : "The Incredible Hulk",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 800308,
		"title" : "Appaloosa",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 800320,
		"title" : "Clash of the Titans",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 800369,
		"title" : "Thor",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 803096,
		"title" : "Warcraft",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 804452,
		"title" : "Bratz",
		"genre" : "Comedy, Family, Music"
	},
	{
		"movie_id" : 804461,
		"title" : "Death Sentence",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 804522,
		"title" : "Rendition",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 805526,
		"title" : "Facing the Giants",
		"genre" : "Drama, Fantasy, Sport"
	},
	{
		"movie_id" : 808151,
		"title" : "Angels & Demons",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 808510,
		"title" : "Tooth Fairy",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 810819,
		"title" : "The Danish Girl",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 810913,
		"title" : "Jack and Jill",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 811080,
		"title" : "Speed Racer",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 811138,
		"title" : "The Love Guru",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 814022,
		"title" : "Bangkok Dangerous",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 814255,
		"title" : "Percy Jackson & the Olympians: The Lightning Thief",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 814314,
		"title" : "Seven Pounds",
		"genre" : "Drama"
	},
	{
		"movie_id" : 814335,
		"title" : "The Stepfather",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 815236,
		"title" : "She's Out of My League",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 815244,
		"title" : "Sydney White",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 815245,
		"title" : "The Uninvited",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 816442,
		"title" : "The Book Thief",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 816462,
		"title" : "Conan the Barbarian",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 816692,
		"title" : "Interstellar",
		"genre" : "Adventure, Drama, Sci-Fi"
	},
	{
		"movie_id" : 816711,
		"title" : "World War Z",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 817230,
		"title" : "Valentine's Day",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 817538,
		"title" : "Drillbit Taylor",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 821640,
		"title" : "Ghosts of Girlfriends Past",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 821642,
		"title" : "The Soloist",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 822832,
		"title" : "Marley & Me",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 822847,
		"title" : "Priest",
		"genre" : "Action, Horror, Thriller"
	},
	{
		"movie_id" : 822854,
		"title" : "Shooter",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 824747,
		"title" : "Changeling",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 825232,
		"title" : "The Bucket List",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 829150,
		"title" : "Dracula Untold",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 829459,
		"title" : "A Mighty Heart",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 829482,
		"title" : "Superbad",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 830515,
		"title" : "Quantum of Solace",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 831387,
		"title" : "Godzilla",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 831887,
		"title" : "The Spirit",
		"genre" : "Action, Crime, Fantasy"
	},
	{
		"movie_id" : 832266,
		"title" : "Definitely, Maybe",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 834001,
		"title" : "Underworld: Rise of the Lycans",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 837562,
		"title" : "Hotel Transylvania",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 837563,
		"title" : "Pet Sematary",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 838221,
		"title" : "The Darjeeling Limited",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 838232,
		"title" : "The Pink Panther 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 838283,
		"title" : "Step Brothers",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 839980,
		"title" : "Semi-Pro",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 840361,
		"title" : "The Town",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 841046,
		"title" : "Walk Hard: The Dewey Cox Story",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 842926,
		"title" : "The Kids Are All Right",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 844471,
		"title" : "Cloudy with a Chance of Meatballs",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 844708,
		"title" : "The Last House on the Left",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 846308,
		"title" : "Kit Kiredge: An American Girl",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 848228,
		"title" : "The Avengers",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 848537,
		"title" : "Epic",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 852713,
		"title" : "The House Bunny",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 857191,
		"title" : "The Visitor",
		"genre" : "Drama"
	},
	{
		"movie_id" : 858479,
		"title" : "Smart People",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 859163,
		"title" : "The Mummy: Tomb of the Dragon Emperor",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 859635,
		"title" : "Super Troopers 2",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 862846,
		"title" : "Sunshine Cleaning",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 864761,
		"title" : "The Duchess",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 864835,
		"title" : "Mr. Peabody & Sherman",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 865556,
		"title" : "The Forbidden Kingdom",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 866439,
		"title" : "Made of Honor",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 870111,
		"title" : "Frost\/Nixon",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 871426,
		"title" : "Baby Mama",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 872230,
		"title" : "My Soul to Take",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 875034,
		"title" : "Nine",
		"genre" : "Drama, Musical, Romance"
	},
	{
		"movie_id" : 876563,
		"title" : "Gake no ue no Ponyo",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 878804,
		"title" : "The Blind Side",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 879870,
		"title" : "Eat Pray Love",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 880578,
		"title" : "Untraceable",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 881320,
		"title" : "Sanctum",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 881891,
		"title" : "All About Steve",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 882977,
		"title" : "Snitch",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 884328,
		"title" : "The Mist",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 884732,
		"title" : "The Wedding Ringer",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 887883,
		"title" : "Burn After Reading",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 887912,
		"title" : "The Hurt Locker",
		"genre" : "Drama, Thriller, War"
	},
	{
		"movie_id" : 889573,
		"title" : "The Switch",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 889583,
		"title" : "Brüno",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 890870,
		"title" : "Saw IV",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 891527,
		"title" : "Lions for Lambs",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 892318,
		"title" : "Leers to Juliet",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 892769,
		"title" : "How to Train Your Dragon",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 892782,
		"title" : "Monsters vs. Aliens",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 892791,
		"title" : "Shrek Forever After",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 899106,
		"title" : "Love Happens",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 901476,
		"title" : "Bride Wars",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 903624,
		"title" : "The Hobbit: An Unexpected Journey",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 903657,
		"title" : "Love & Mercy",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 905372,
		"title" : "The Thing",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 906108,
		"title" : "Why Did I Get Married?",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 907657,
		"title" : "Once",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 910936,
		"title" : "Pineapple Express",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 910970,
		"title" : "WALL·E",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 913354,
		"title" : "Armored",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 914798,
		"title" : "The Boy in the Striped Pyjamas",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 918927,
		"title" : "Doubt",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 918940,
		"title" : "The Legend of Tarzan",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 926084,
		"title" : "Harry Poer and the Deathly Hallows: Part 1",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 926129,
		"title" : "Prom Night",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 929632,
		"title" : "Precious",
		"genre" : "Drama"
	},
	{
		"movie_id" : 936501,
		"title" : "Taken",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 937375,
		"title" : "This Christmas",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 938283,
		"title" : "The Last Airbender",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 938330,
		"title" : "Silent Hill: Revelation",
		"genre" : "Fantasy, Horror"
	},
	{
		"movie_id" : 942385,
		"title" : "Tropic Thunder",
		"genre" : "Action, Comedy, War"
	},
	{
		"movie_id" : 944835,
		"title" : "Salt",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 945513,
		"title" : "Source Code",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 947798,
		"title" : "Black Swan",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 947802,
		"title" : "Lakeview Terrace",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 947810,
		"title" : "Green Zone",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 948470,
		"title" : "The Amazing Spider-Man",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 949731,
		"title" : "The Happening",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 951216,
		"title" : "Mad Money",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 952640,
		"title" : "Alvin and the Chipmunks",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 955308,
		"title" : "Robin Hood",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 956038,
		"title" : "Nights in Rodanthe",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 959337,
		"title" : "Revolutionary Road",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 960144,
		"title" : "You Don't Mess with the Zohan",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 960731,
		"title" : "Bedtime Stories",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 962726,
		"title" : "High School Musical 3: Senior Year",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 962736,
		"title" : "The Young Victoria",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 963178,
		"title" : "The International",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 963794,
		"title" : "The Ruins",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 963966,
		"title" : "The Sorcerer's Apprentice",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 964517,
		"title" : "The Fighter",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 968264,
		"title" : "The Conspirator",
		"genre" : "Crime, Drama, History"
	},
	{
		"movie_id" : 970179,
		"title" : "Hugo",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 970416,
		"title" : "The Day the Earth Stood Still",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 970468,
		"title" : "Miss Peigrew Lives for a Day",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 970866,
		"title" : "Lile Fockers",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 971209,
		"title" : "A Perfect Getaway",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 974015,
		"title" : "Justice League",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 974661,
		"title" : "17 Again",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 976051,
		"title" : "The Reader",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 976238,
		"title" : "Old Dogs",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 977855,
		"title" : "Fair Game",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 978764,
		"title" : "Sucker Punch",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 979434,
		"title" : "Loery Ticket",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 980970,
		"title" : "The Chronicles of Narnia: The Voyage of the Dawn Treader",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 981227,
		"title" : "Nick and Norah's Infinite Playlist",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 983193,
		"title" : "The Adventures of Tintin",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 983946,
		"title" : "Fantasy Island",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 985694,
		"title" : "Machete",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 985699,
		"title" : "Valkyrie",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 986263,
		"title" : "Surrogates",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 988045,
		"title" : "Sherlock Holmes",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 988047,
		"title" : "Traitor",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 988595,
		"title" : "27 Dresses",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 989757,
		"title" : "Dear John",
		"genre" : "Drama, Romance, War"
	},
	{
		"movie_id" : 990407,
		"title" : "The Green Hornet",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 993842,
		"title" : "Hanna",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 993846,
		"title" : "The Wolf of Wall Street",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 995039,
		"title" : "Ghost Town",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 997047,
		"title" : "College Road Trip",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 999913,
		"title" : "Straw Dogs",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 1000774,
		"title" : "Sex and the City",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1001508,
		"title" : "He's Just Not That Into You",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1001526,
		"title" : "Megamind",
		"genre" : "Animation, Action, Comedy"
	},
	{
		"movie_id" : 1007028,
		"title" : "Zack and Miri Make a Porno",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1007029,
		"title" : "The Iron Lady",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1010048,
		"title" : "Slumdog Millionaire",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1013743,
		"title" : "Knight and Day",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1013752,
		"title" : "Fast & Furious",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1013753,
		"title" : "Milk",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1014759,
		"title" : "Alice in Wonderland",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 1014775,
		"title" : "Beverly Hills Chihuahua",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 1016075,
		"title" : "Fame",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 1017460,
		"title" : "Splice",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 1018785,
		"title" : "The Sisterhood of the Traveling Pants 2",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1019452,
		"title" : "A Serious Man",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1020072,
		"title" : "Selma",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1022603,
		"title" : "(500) Days of Summer",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1023111,
		"title" : "Never Back Down",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 1023481,
		"title" : "Step Up 2: The Streets",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1024648,
		"title" : "Argo",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 1025100,
		"title" : "Gemini Man",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 1027718,
		"title" : "Wall Street: Money Never Sleeps",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1027862,
		"title" : "Swing Vote",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1028576,
		"title" : "Secretariat",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 1029360,
		"title" : "Poltergeist",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1032815,
		"title" : "I Love You, Beth Cooper",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1033575,
		"title" : "The Descendants",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1033643,
		"title" : "What Happens in Vegas",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1034032,
		"title" : "Gamer",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1034303,
		"title" : "Defiance",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 1034331,
		"title" : "Righteous Kill",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 1034389,
		"title" : "The Eagle",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1037705,
		"title" : "The Book of Eli",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1038686,
		"title" : "Legion",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 1038919,
		"title" : "The Bounty Hunter",
		"genre" : "Action, Comedy, Romance"
	},
	{
		"movie_id" : 1041829,
		"title" : "The Proposal",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1043726,
		"title" : "The Legend of Hercules",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1045655,
		"title" : "The Haunting of Molly Hartley",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 1045658,
		"title" : "Silver Linings Playbook",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1045778,
		"title" : "Year One",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1046163,
		"title" : "My Best Friend's Girl",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1046173,
		"title" : "G.I. Joe: The Rise of Cobra",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1046947,
		"title" : "Last Chance Harvey",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1047494,
		"title" : "Meet the Browns",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1047540,
		"title" : "Parental Guidance",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1049413,
		"title" : "Up",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1051904,
		"title" : "Goosebumps",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1051906,
		"title" : "The Invisible Man",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 1053424,
		"title" : "Repo Men",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1055292,
		"title" : "Life as We Know It",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1055369,
		"title" : "Transformers: Revenge of the Fallen",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1057500,
		"title" : "Invictus",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1058017,
		"title" : "The Invention of Lying",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 1059786,
		"title" : "Eagle Eye",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 1060277,
		"title" : "Cloverfield",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 1065073,
		"title" : "Boyhood",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1067106,
		"title" : "A Christmas Carol",
		"genre" : "Animation, Drama, Family"
	},
	{
		"movie_id" : 1067583,
		"title" : "Water for Elephants",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1067774,
		"title" : "Monte Carlo",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1068242,
		"title" : "Footloose",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 1068680,
		"title" : "Yes Man",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1071875,
		"title" : "Ghost Rider: Spirit of Vengeance",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 1072748,
		"title" : "Winchester",
		"genre" : "Biography, Drama, Fantasy"
	},
	{
		"movie_id" : 1073498,
		"title" : "Meet the Spartans",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1074638,
		"title" : "Skyfall",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1075417,
		"title" : "Race to Witch Mountain",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 1075747,
		"title" : "Jonah Hex",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 1077368,
		"title" : "Dark Shadows",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 1078588,
		"title" : "My Sister's Keeper",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 1078912,
		"title" : "Night at the Museum: Bale of the Smithsonian",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1078940,
		"title" : "Couples Retreat",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1080016,
		"title" : "Ice Age: Dawn of the Dinosaurs",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1082601,
		"title" : "Fighting",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1082807,
		"title" : "The Belko Experiment",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1082868,
		"title" : "Quarantine",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1083452,
		"title" : "Eddie the Eagle",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 1083456,
		"title" : "Fired Up!",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 1084950,
		"title" : "Rachel Geing Married",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1086772,
		"title" : "Blended",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1091191,
		"title" : "Lone Survivor",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 1091722,
		"title" : "Adventureland",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1091751,
		"title" : "The Longshots",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 1092026,
		"title" : "Paul",
		"genre" : "Adventure, Comedy, Sci-Fi"
	},
	{
		"movie_id" : 1092633,
		"title" : "The Goods: Live Hard, Sell Hard",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1093357,
		"title" : "The Darkest Hour",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 1093908,
		"title" : "Confessions of a Shopaholic",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1095174,
		"title" : "New in Town",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1097013,
		"title" : "Next Day Air",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1098327,
		"title" : "Dragonball Evolution",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 1099212,
		"title" : "Twilight",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1100089,
		"title" : "Foxcatcher",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 1100119,
		"title" : "Shorts",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 1103153,
		"title" : "Killers",
		"genre" : "Action, Comedy, Romance"
	},
	{
		"movie_id" : 1104001,
		"title" : "Tron",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1109624,
		"title" : "Paddington",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1111422,
		"title" : "The Taking of Pelham 123",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1111948,
		"title" : "Soul Men",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 1114677,
		"title" : "Hannah Montana: The Movie",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1114740,
		"title" : "Paul Blart: Mall Cop",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1119646,
		"title" : "The Hangover",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1120985,
		"title" : "Blue Valentine",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1121096,
		"title" : "Seventh Son",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1121931,
		"title" : "Crank: High Voltage",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1124035,
		"title" : "The Ides of March",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 1124037,
		"title" : "Free State of Jones",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 1125849,
		"title" : "The Wrestler",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 1126590,
		"title" : "Big Eyes",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 1126591,
		"title" : "Burlesque",
		"genre" : "Drama, Music, Musical"
	},
	{
		"movie_id" : 1126618,
		"title" : "Morning Glory",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1127180,
		"title" : "Drag Me to Hell",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1129423,
		"title" : "Fireproof",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1129442,
		"title" : "Transporter 3",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1129445,
		"title" : "Amelia",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 1130080,
		"title" : "The Informant!",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 1130884,
		"title" : "Shuer Island",
		"genre" : "Mystery, Thriller"
	},
	{
		"movie_id" : 1131734,
		"title" : "Jennifer's Body",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 1132620,
		"title" : "Män som hatar kvinnor",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 1132626,
		"title" : "Saw V",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 1133985,
		"title" : "Green Lantern",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1135084,
		"title" : "Takers",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1135487,
		"title" : "Duplicity",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 1135503,
		"title" : "Julie & Julia",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 1136608,
		"title" : "District 9",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1137450,
		"title" : "Death Wish",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1139328,
		"title" : "The Ghost Writer",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 1139668,
		"title" : "The Unborn",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 1142798,
		"title" : "The Family That Preys",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1142800,
		"title" : "Madea Goes to Jail",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 1142977,
		"title" : "Frankenweenie",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 1142988,
		"title" : "The Ugly Truth",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1144884,
		"title" : "The Final Destination",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1148204,
		"title" : "Orphan",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1152398,
		"title" : "Beastly",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1152836,
		"title" : "Public Enemies",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 1153706,
		"title" : "Dance Flick",
		"genre" : "Action, Comedy, Music"
	},
	{
		"movie_id" : 1155056,
		"title" : "I Love You, Man",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1155076,
		"title" : "The Karate Kid",
		"genre" : "Action, Drama, Family"
	},
	{
		"movie_id" : 1156398,
		"title" : "Zombieland",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 1160368,
		"title" : "12 Rounds",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1161864,
		"title" : "The Rite",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 1170358,
		"title" : "The Hobbit: The Desolation of Smaug",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 1171222,
		"title" : "Baggage Claim",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1172233,
		"title" : "Whip It",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 1174732,
		"title" : "An Education",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1175491,
		"title" : "W.",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 1176740,
		"title" : "Away We Go",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1178665,
		"title" : "A Walk in the Woods",
		"genre" : "Adventure, Biography, Comedy"
	},
	{
		"movie_id" : 1179034,
		"title" : "From Paris with Love",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1179056,
		"title" : "A Nightmare on Elm Street",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 1179891,
		"title" : "My Bloody Valentine",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1179904,
		"title" : "Paranormal Activity",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1179933,
		"title" : "10 Cloverfield Lane",
		"genre" : "Action, Drama, Horror"
	},
	{
		"movie_id" : 1185416,
		"title" : "When in Rome",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1185834,
		"title" : "Star Wars: The Clone Wars",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1186367,
		"title" : "Ninja Assassin",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1188729,
		"title" : "Pandorum",
		"genre" : "Action, Horror, Mystery"
	},
	{
		"movie_id" : 1189340,
		"title" : "The Lincoln Lawyer",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1190080,
		"title" : "2012",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1192628,
		"title" : "Rango",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1193138,
		"title" : "Up in the Air",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1193631,
		"title" : "Step Up 3D",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1194173,
		"title" : "The Bourne Legacy",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1194263,
		"title" : "Get Low",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 1195478,
		"title" : "The Five-Year Engagement",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1196141,
		"title" : "Diary of a Wimpy Kid",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1197624,
		"title" : "Law Abiding Citizen",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1197628,
		"title" : "Observe and Report",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 1198138,
		"title" : "Obsessed",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 1201167,
		"title" : "Funny People",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1201607,
		"title" : "Harry Poer and the Deathly Hallows: Part 2",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 1204342,
		"title" : "The Muppets",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1204975,
		"title" : "Last Vegas",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1204977,
		"title" : "Ouija",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1205489,
		"title" : "Gran Torino",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1205537,
		"title" : "Jack Ryan: Shadow Recruit",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 1206543,
		"title" : "Out of the Furnace",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1206885,
		"title" : "Rambo: Last Blood",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1210042,
		"title" : "Brooklyn's Finest",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1210166,
		"title" : "Moneyball",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 1210819,
		"title" : "The Lone Ranger",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1211837,
		"title" : "Doctor Strange",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1211956,
		"title" : "Escape Plan",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1212419,
		"title" : "Hereafter",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1212436,
		"title" : "The Back-up Plan",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1212450,
		"title" : "Lawless",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 1213012,
		"title" : "Alpha and Omega",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1213641,
		"title" : "First Man",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1213644,
		"title" : "Disaster Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1213663,
		"title" : "The World's End",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 1216475,
		"title" : "Cars 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1216492,
		"title" : "Leap Year",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1217209,
		"title" : "Brave",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1217613,
		"title" : "Bale Los Angeles",
		"genre" : "Action, Sci-Fi"
	},
	{
		"movie_id" : 1219289,
		"title" : "Limitless",
		"genre" : "Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1219342,
		"title" : "Legend of the Guardians: The Owls of Ga'Hoole",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1219827,
		"title" : "Ghost in the Shell",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1220198,
		"title" : "The Fourth Kind",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 1220634,
		"title" : "Resident Evil: Afterlife",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 1222817,
		"title" : "Zookeeper",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 1225822,
		"title" : "Extract",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 1226229,
		"title" : "Get Him to the Greek",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 1226273,
		"title" : "Edge of Darkness",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1226753,
		"title" : "The Debt",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 1228705,
		"title" : "Iron Man 2",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1228987,
		"title" : "Let Me In",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 1229238,
		"title" : "Mission: Impossible - Ghost Protocol",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1229340,
		"title" : "Anchorman 2: The Legend Continues",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1229822,
		"title" : "Jane Eyre",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1230414,
		"title" : "It's Complicated",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1231580,
		"title" : "Alvin and the Chipmunks: The Squeakquel",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 1231583,
		"title" : "Due Date",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1231587,
		"title" : "Hot Tub Time Machine",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 1232200,
		"title" : "That's My Boy",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1232783,
		"title" : "Sorority Row",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 1232829,
		"title" : "21 Jump Street",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1233227,
		"title" : "Saw VI",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 1234548,
		"title" : "The Men Who Stare at Goats",
		"genre" : "Comedy, War"
	},
	{
		"movie_id" : 1234719,
		"title" : "Red Dawn",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 1234721,
		"title" : "RoboCop",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 1235522,
		"title" : "Broken City",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1240982,
		"title" : "Your Highness",
		"genre" : "Adventure, Comedy, Fantasy"
	},
	{
		"movie_id" : 1243957,
		"title" : "The Tourist",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 1243974,
		"title" : "Aloha",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1244659,
		"title" : "Extraordinary Measures",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1245492,
		"title" : "This Is the End",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1245526,
		"title" : "RED",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1250777,
		"title" : "Kick-Ass",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1253863,
		"title" : "300: Rise of an Empire",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 1253864,
		"title" : "Immortals",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 1255919,
		"title" : "Holmes & Watson",
		"genre" : "Comedy, Crime, Mystery"
	},
	{
		"movie_id" : 1258972,
		"title" : "The Man with the Iron Fists",
		"genre" : "Action"
	},
	{
		"movie_id" : 1259521,
		"title" : "The Cabin in the Woods",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1259528,
		"title" : "Den of Thieves",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1259571,
		"title" : "The Twilight Saga: New Moon",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 1261945,
		"title" : "Sex and the City 2",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1262416,
		"title" : "Scream 4",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 1263670,
		"title" : "Crazy Heart",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1265990,
		"title" : "The Roommate",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 1267297,
		"title" : "Hercules",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1268799,
		"title" : "A Very Harold & Kumar 3D Christmas",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 1270761,
		"title" : "Don't Be Afraid of the Dark",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 1270797,
		"title" : "Venom",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1270798,
		"title" : "X: First Class",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1272878,
		"title" : "2 Guns",
		"genre" : "Action, Comedy, Thriller"
	},
	{
		"movie_id" : 1273678,
		"title" : "The Spy Next Door",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 1276104,
		"title" : "Looper",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 1277953,
		"title" : "Madagascar 3: Europe's Most Wanted",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1279935,
		"title" : "Date Night",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 1282140,
		"title" : "Easy A",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1284575,
		"title" : "Bad Teacher",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1285009,
		"title" : "The Strangers: Prey at Night",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1285016,
		"title" : "The Social Network",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1287468,
		"title" : "Cats & Dogs: The Revenge of Kiy Galore",
		"genre" : "Action, Comedy, Family"
	},
	{
		"movie_id" : 1288558,
		"title" : "Evil Dead",
		"genre" : "Fantasy, Horror, Thriller"
	},
	{
		"movie_id" : 1289401,
		"title" : "Ghostbusters",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 1291150,
		"title" : "Teenage Mutant Ninja Turtles",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1291584,
		"title" : "Warrior",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 1292566,
		"title" : "How to Be Single",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1293847,
		"title" : "xXx: Return of Xander Cage",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1294226,
		"title" : "The Last Song",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1298644,
		"title" : "The Hustle",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 1298649,
		"title" : "The Watch",
		"genre" : "Comedy, Sci-Fi"
	},
	{
		"movie_id" : 1298650,
		"title" : "Pirates of the Caribbean: On Stranger Tides",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1300851,
		"title" : "The Boondock Saints II: All Saints Day",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1300854,
		"title" : "Iron Man Three",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1302011,
		"title" : "Kung Fu Panda 2",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1302067,
		"title" : "Yogi Bear",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1305583,
		"title" : "Our Family Wedding",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1305591,
		"title" : "Mars Needs Moms",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1306980,
		"title" : "50\/50",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1308728,
		"title" : "The Happytime Murders",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1308729,
		"title" : "Bullet to the Head",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1311067,
		"title" : "Halloween II",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1314228,
		"title" : "Did You Hear About the Morgans?",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1314655,
		"title" : "Devil",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1315981,
		"title" : "A Single Man",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1318514,
		"title" : "Rise of the Planet of the Apes",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 1320244,
		"title" : "The Last Exorcism",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1320253,
		"title" : "The Expendables",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1320261,
		"title" : "Gulliver's Travels",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 1321509,
		"title" : "Death at a Funeral",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1321870,
		"title" : "Gangster Squad",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1322269,
		"title" : "August: Osage County",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1322312,
		"title" : "Going the Distance",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1323594,
		"title" : "Despicable Me",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 1324999,
		"title" : "The Twilight Saga: Breaking Dawn - Part 1",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 1325004,
		"title" : "The Twilight Saga: Eclipse",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 1327194,
		"title" : "The Lucky One",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 1327773,
		"title" : "The Butler",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1333125,
		"title" : "Movie 43",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1334512,
		"title" : "Arthur",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1335975,
		"title" : "47 Ronin",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 1336608,
		"title" : "Rock of Ages",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 1340138,
		"title" : "Terminator Genisys",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1340800,
		"title" : "Tinker Tailor Soldier Spy",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 1341188,
		"title" : "How Do You Know",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1343092,
		"title" : "The Great Gatsby",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1343727,
		"title" : "Dredd",
		"genre" : "Action, Crime, Sci-Fi"
	},
	{
		"movie_id" : 1345836,
		"title" : "The Dark Knight Rises",
		"genre" : "Action, Adventure"
	},
	{
		"movie_id" : 1351685,
		"title" : "Jack the Giant Slayer",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 1355630,
		"title" : "If I Stay",
		"genre" : "Drama, Fantasy, Music"
	},
	{
		"movie_id" : 1355631,
		"title" : "The Infiltrator",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 1355644,
		"title" : "Passengers",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 1355683,
		"title" : "Black Mass",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 1365519,
		"title" : "Tomb Raider",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1366344,
		"title" : "The Sier",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1371111,
		"title" : "Cloud Atlas",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 1371150,
		"title" : "This Is Where I Leave You",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1374989,
		"title" : "Pride and Prejudice and Zombies",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 1375666,
		"title" : "Inception",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1375670,
		"title" : "Grown Ups",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1385826,
		"title" : "The Adjustment Bureau",
		"genre" : "Romance, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1385867,
		"title" : "Cop Out",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1385912,
		"title" : "I Can Do Bad All by Myself",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1386588,
		"title" : "The Other Guys",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1386697,
		"title" : "Suicide Squad",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1386703,
		"title" : "Total Recall",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1389072,
		"title" : "Downsizing",
		"genre" : "Drama, Sci-Fi"
	},
	{
		"movie_id" : 1389137,
		"title" : "We Bought a Zoo",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1389139,
		"title" : "When the Bough Breaks",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 1390411,
		"title" : "In the Heart of the Sea",
		"genre" : "Action, Adventure, Biography"
	},
	{
		"movie_id" : 1391137,
		"title" : "Why Did I Get Married Too?",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1392170,
		"title" : "The Hunger Games",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1392190,
		"title" : "Mad Max: Fury Road",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1392197,
		"title" : "Marmaduke",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1392214,
		"title" : "Prisoners",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 1396218,
		"title" : "Mr. Popper's Penguins",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 1396484,
		"title" : "It",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1397280,
		"title" : "Taken 2",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1397514,
		"title" : "Journey 2: The Mysterious Island",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1398426,
		"title" : "Straight Oua Compton",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1399103,
		"title" : "Transformers: Dark of the Moon",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1401152,
		"title" : "Unknown",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 1402488,
		"title" : "Happy Feet Two",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1403865,
		"title" : "True Grit",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 1403981,
		"title" : "Remember Me",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1407061,
		"title" : "Just Wright",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 1408101,
		"title" : "Star Trek Into Darkness",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1408253,
		"title" : "Ride Along",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1409024,
		"title" : "Men in Black 3",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1411238,
		"title" : "No Strings Aached",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1411250,
		"title" : "Riddick",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1411697,
		"title" : "The Hangover Part II",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1411704,
		"title" : "Hop",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1412386,
		"title" : "The Best Exotic Marigold Hotel",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1413492,
		"title" : "12 Strong",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 1414382,
		"title" : "You Again",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1415283,
		"title" : "Nanny McPhee and the Big Bang",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 1418377,
		"title" : "I, Frankenstein",
		"genre" : "Action, Fantasy, Sci-Fi"
	},
	{
		"movie_id" : 1424381,
		"title" : "Predators",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1428538,
		"title" : "Hansel & Gretel: Witch Hunters",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 1430132,
		"title" : "The Wolverine",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1430607,
		"title" : "Arthur Christmas",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1430612,
		"title" : "Brick Mansions",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1430615,
		"title" : "Big Miracle",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 1430626,
		"title" : "The Pirates! In an Adventure with Scientists!",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1431045,
		"title" : "Deadpool",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1433108,
		"title" : "Faster",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1436562,
		"title" : "Rio",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1438176,
		"title" : "Fright Night",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 1438254,
		"title" : "Charlie St. Cloud",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1440129,
		"title" : "Baleship",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1440728,
		"title" : "The American",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1441951,
		"title" : "Quartet",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1441952,
		"title" : "Salmon Fishing in the Yemen",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1446192,
		"title" : "Rise of the Guardians",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1446714,
		"title" : "Prometheus",
		"genre" : "Adventure, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 1448755,
		"title" : "Killer Elite",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1449283,
		"title" : "Winnie the Pooh",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1453405,
		"title" : "Monsters University",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1454029,
		"title" : "The Help",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1454468,
		"title" : "Gravity",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1457767,
		"title" : "The Conjuring",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1458169,
		"title" : "Kidnap",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1458175,
		"title" : "The Next Three Days",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1462041,
		"title" : "Dream House",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 1462769,
		"title" : "The Odd Life of Timothy Green",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1464174,
		"title" : "Big Mommas: Like Father, Like Son",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1464540,
		"title" : "I Am Number Four",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1469304,
		"title" : "Baywatch",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1473832,
		"title" : "Bridget Jones's Baby",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1477076,
		"title" : "Saw 3D",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 1477834,
		"title" : "Aquaman",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1478338,
		"title" : "Bridesmaids",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1478839,
		"title" : "The Art of Racing in the Rain",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1482459,
		"title" : "The Lorax",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1483013,
		"title" : "Oblivion",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1485796,
		"title" : "The Greatest Showman",
		"genre" : "Biography, Drama, Musical"
	},
	{
		"movie_id" : 1486185,
		"title" : "Red Riding Hood",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 1486192,
		"title" : "The Raven",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 1488555,
		"title" : "The Change-Up",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 1489887,
		"title" : "Booksmart",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1489889,
		"title" : "Central Intelligence",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1490017,
		"title" : "The Lego Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1496025,
		"title" : "Underworld Awakening",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 1499658,
		"title" : "Horrible Bosses",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 1502397,
		"title" : "Bad Boys for Life",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1502404,
		"title" : "Drive Angry",
		"genre" : "Action, Fantasy, Thriller"
	},
	{
		"movie_id" : 1502407,
		"title" : "Halloween",
		"genre" : "Crime, Horror, Thriller"
	},
	{
		"movie_id" : 1502712,
		"title" : "Fantastic Four",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1504320,
		"title" : "The King's Speech",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1506999,
		"title" : "Haywire",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 1509767,
		"title" : "The Three Musketeers",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1515091,
		"title" : "Sherlock Holmes: A Game of Shadows",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 1517260,
		"title" : "The Host",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1517451,
		"title" : "A Star Is Born",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1517489,
		"title" : "Spy Kids 4: All the Time in the World",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1524137,
		"title" : "Contraband",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1524930,
		"title" : "Vacation",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 1528100,
		"title" : "Exodus: Gods and Kings",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 1528854,
		"title" : "Daddy's Home",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1532958,
		"title" : "Bale of the Year",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 1535108,
		"title" : "Elysium",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 1535109,
		"title" : "Captain Phillips",
		"genre" : "Adventure, Biography, Crime"
	},
	{
		"movie_id" : 1535438,
		"title" : "Hope Springs",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1536044,
		"title" : "Paranormal Activity 2",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1538403,
		"title" : "The Mortal Instruments: City of Bones",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1540011,
		"title" : "Blair Witch",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1540128,
		"title" : "Playing for Keeps",
		"genre" : "Comedy, Romance, Sport"
	},
	{
		"movie_id" : 1542344,
		"title" : "127 Hours",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1547230,
		"title" : "Judy Moody and the Not Bummer Summer",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1547234,
		"title" : "Premium Rush",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1549920,
		"title" : "The Last Stand",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1555064,
		"title" : "Country Strong",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 1559547,
		"title" : "Beautiful Creatures",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1560220,
		"title" : "Zombieland: Double Tap",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1560747,
		"title" : "The Master",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1560985,
		"title" : "The Devil Inside",
		"genre" : "Horror"
	},
	{
		"movie_id" : 1563738,
		"title" : "One Day",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1563742,
		"title" : "Overboard",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1564349,
		"title" : "Dolphin Tale",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 1564367,
		"title" : "Just Go with It",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1564585,
		"title" : "Skyline",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1568338,
		"title" : "Man on a Ledge",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 1568346,
		"title" : "The Girl with the Dragon Taoo",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 1568911,
		"title" : "War Horse",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1568921,
		"title" : "Kari-gurashi no Ariei",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 1570728,
		"title" : "Crazy, Stupid, Love.",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1571234,
		"title" : "Mortal Engines",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1572315,
		"title" : "Texas Chainsaw 3D",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1578275,
		"title" : "The Dilemma",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1582507,
		"title" : "House at the End of the Street",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 1583420,
		"title" : "Larry Crowne",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1583421,
		"title" : "G.I. Joe: Retaliation",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1586265,
		"title" : "What to Expect When You're Expecting",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1587310,
		"title" : "Maleficent",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 1588173,
		"title" : "Warm Bodies",
		"genre" : "Comedy, Horror, Romance"
	},
	{
		"movie_id" : 1590193,
		"title" : "The Commuter",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 1591095,
		"title" : "Insidious",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1591479,
		"title" : "Act of Valor",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1592525,
		"title" : "Lockout",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1594972,
		"title" : "Norm of the North",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1596343,
		"title" : "Fast Five",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 1596346,
		"title" : "Soul Surfer",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 1596350,
		"title" : "This Means War",
		"genre" : "Action, Comedy, Romance"
	},
	{
		"movie_id" : 1596363,
		"title" : "The Big Short",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 1596365,
		"title" : "The Woman in Black",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 1598778,
		"title" : "Contagion",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 1598822,
		"title" : "New Year's Eve",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1598828,
		"title" : "One for the Money",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1599348,
		"title" : "Safe House",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1600195,
		"title" : "Abduction",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 1600196,
		"title" : "The Drop",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1601913,
		"title" : "The Grey",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1604171,
		"title" : "Prom",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1605630,
		"title" : "American Reunion",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1605783,
		"title" : "Midnight in Paris",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 1606378,
		"title" : "A Good Day to Die Hard",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1606389,
		"title" : "The Vow",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1606392,
		"title" : "Win Win",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 1608290,
		"title" : "Zoolander 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1611224,
		"title" : "Abraham Lincoln: Vampire Hunter",
		"genre" : "Action, Fantasy, Horror"
	},
	{
		"movie_id" : 1615065,
		"title" : "Savages",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1615160,
		"title" : "The Foreigner",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1615918,
		"title" : "Alvin and the Chipmunks: Chipwrecked",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1616195,
		"title" : "J. Edgar",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 1617661,
		"title" : "Jupiter Ascending",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1618442,
		"title" : "The Last Witch Hunter",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1619029,
		"title" : "Jackie",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1620680,
		"title" : "A Wrinkle in Time",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 1620981,
		"title" : "The Addams Family",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 1621039,
		"title" : "Free Birds",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1621045,
		"title" : "Think Like a Man",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1622547,
		"title" : "30 Minutes or Less",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1622979,
		"title" : "Final Destination 5",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1623205,
		"title" : "Oz the Great and Powerful",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 1623288,
		"title" : "ParaNorman",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1625346,
		"title" : "Young Adult",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1628841,
		"title" : "Independence Day: Resurgence",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1630036,
		"title" : "Courageous",
		"genre" : "Drama, Fantasy"
	},
	{
		"movie_id" : 1631867,
		"title" : "Edge of Tomorrow",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1632708,
		"title" : "Friends with Benefits",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1633356,
		"title" : "Shark Night 3D",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1634106,
		"title" : "Bloodshot",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 1636826,
		"title" : "Project X",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1637688,
		"title" : "In Time",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1637706,
		"title" : "Our Idiot Brother",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1637725,
		"title" : "Ted",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1638355,
		"title" : "The Man from U.N.C.L.E.",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1640484,
		"title" : "Jumping the Broom",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1645170,
		"title" : "The Dictator",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1646971,
		"title" : "How to Train Your Dragon 2",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1646987,
		"title" : "Wrath of the Titans",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1647668,
		"title" : "Million Dollar Arm",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 1648179,
		"title" : "Here Comes the Boom",
		"genre" : "Action, Comedy, Sport"
	},
	{
		"movie_id" : 1648190,
		"title" : "The Dark Tower",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1649419,
		"title" : "Lo imposible",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 1650043,
		"title" : "Diary of a Wimpy Kid: Rodrick Rules",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1650062,
		"title" : "Super 8",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1650554,
		"title" : "Kick-Ass 2",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1655420,
		"title" : "My Week with Marilyn",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 1655441,
		"title" : "The Age of Adaline",
		"genre" : "Drama, Fantasy, Romance"
	},
	{
		"movie_id" : 1655442,
		"title" : "The Artist",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1655460,
		"title" : "Wanderlust",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1656190,
		"title" : "Safe",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1657507,
		"title" : "Colombiana",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 1659337,
		"title" : "The Perks of Being a Wallflower",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1661199,
		"title" : "Cinderella",
		"genre" : "Drama, Family, Fantasy"
	},
	{
		"movie_id" : 1661382,
		"title" : "Grudge Match",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 1663143,
		"title" : "Fun Size",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 1663202,
		"title" : "The Revenant",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1663662,
		"title" : "Pacific Rim",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1666185,
		"title" : "All Eyez on Me",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 1666186,
		"title" : "Vampires Suck",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1666801,
		"title" : "The Duff",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1667353,
		"title" : "Mirror Mirror",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 1667889,
		"title" : "Ice Age: Continental Drift",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1670345,
		"title" : "Now You See Me",
		"genre" : "Crime, Mystery, Thriller"
	},
	{
		"movie_id" : 1673434,
		"title" : "The Twilight Saga: Breaking Dawn - Part 2",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 1674771,
		"title" : "Entourage",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1675434,
		"title" : "Intouchables",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 1677720,
		"title" : "Ready Player One",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1679335,
		"title" : "Trolls",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1690953,
		"title" : "Despicable Me 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1691916,
		"title" : "Before I Fall",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 1691917,
		"title" : "Planes",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1694020,
		"title" : "The Guilt Trip",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1698641,
		"title" : "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 1699755,
		"title" : "Peeples",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1700841,
		"title" : "Sausage Party",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1702439,
		"title" : "Safe Haven",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 1704573,
		"title" : "Bernie",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 1706593,
		"title" : "Chronicle",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1707386,
		"title" : "Les Misérables",
		"genre" : "Drama, History, Musical"
	},
	{
		"movie_id" : 1710396,
		"title" : "Joyful Noise",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 1711425,
		"title" : "21 & Over",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1711525,
		"title" : "Office Christmas Party",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1712170,
		"title" : "Alex Cross",
		"genre" : "Action, Crime, Mystery"
	},
	{
		"movie_id" : 1712261,
		"title" : "Triple 9",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1716777,
		"title" : "People Like Us",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1723121,
		"title" : "We're the Millers",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 1727388,
		"title" : "The Way Way Back",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1727824,
		"title" : "Bohemian Rhapsody",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 1730768,
		"title" : "The Zookeeper's Wife",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 1731141,
		"title" : "Ender's Game",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1735898,
		"title" : "Snow White and the Huntsman",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1741273,
		"title" : "Secret in Their Eyes",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 1742044,
		"title" : "Jersey Boys",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 1742334,
		"title" : "Sabotage",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1742650,
		"title" : "I Don't Know How She Does It",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1748122,
		"title" : "Moonrise Kingdom",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1753383,
		"title" : "A Dog's Purpose",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 1758830,
		"title" : "This Is 40",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1762399,
		"title" : "Walking with Dinosaurs 3D",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 1764234,
		"title" : "Killing Them Softly",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1764651,
		"title" : "The Expendables 2",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1767382,
		"title" : "Silent House",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 1772240,
		"title" : "Apollo 18",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 1772341,
		"title" : "Wreck-It Ralph",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1778304,
		"title" : "Paranormal Activity 3",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1781769,
		"title" : "Anna Karenina",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1781922,
		"title" : "No Escape",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1790809,
		"title" : "Pirates of the Caribbean: Dead Men Tell No Tales",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1790864,
		"title" : "The Maze Runner",
		"genre" : "Action, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 1790885,
		"title" : "Zero Dark Thirty",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 1790886,
		"title" : "The Campaign",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1792647,
		"title" : "Cirque du Soleil: Worlds Away",
		"genre" : "Fantasy"
	},
	{
		"movie_id" : 1798603,
		"title" : "Bad Santa 2",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 1798684,
		"title" : "Southpaw",
		"genre" : "Action, Drama, Sport"
	},
	{
		"movie_id" : 1798709,
		"title" : "Her",
		"genre" : "Drama, Romance, Sci-Fi"
	},
	{
		"movie_id" : 1800241,
		"title" : "American Hustle",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 1800246,
		"title" : "That Awkward Moment",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1800741,
		"title" : "Step Up Revolution",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 1809398,
		"title" : "Unbroken",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 1814621,
		"title" : "Admission",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1815862,
		"title" : "After Earth",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1817273,
		"title" : "The Place Beyond the Pines",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1821549,
		"title" : "Nebraska",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 1821658,
		"title" : "The Nut Job",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1821694,
		"title" : "RED 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 1823664,
		"title" : "Annie",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 1823672,
		"title" : "Chappie",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1825683,
		"title" : "Black Panther",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1826590,
		"title" : "About Last Night",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1837709,
		"title" : "Winter's Tale",
		"genre" : "Drama, Fantasy, Mystery"
	},
	{
		"movie_id" : 1838544,
		"title" : "Gone",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 1840309,
		"title" : "Divergent",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 1840417,
		"title" : "The Words",
		"genre" : "Drama, Mystery, Romance"
	},
	{
		"movie_id" : 1843866,
		"title" : "Captain America: The Winter Soldier",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1846589,
		"title" : "Hunter Killer",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1850457,
		"title" : "Sisters",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1853728,
		"title" : "Django Unchained",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 1853739,
		"title" : "You're Next",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1854564,
		"title" : "Percy Jackson: Sea of Monsters",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 1855199,
		"title" : "End of Watch",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 1855325,
		"title" : "Resident Evil: Retribution",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 1856101,
		"title" : "Blade Runner 2049",
		"genre" : "Action, Drama, Mystery"
	},
	{
		"movie_id" : 1859650,
		"title" : "To Rome with Love",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 1860213,
		"title" : "Dirty Grandpa",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 1860353,
		"title" : "Turbo",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1860357,
		"title" : "Deepwater Horizon",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 1872181,
		"title" : "The Amazing Spider-Man 2",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1872194,
		"title" : "The Judge",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 1876451,
		"title" : "Sparkle",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 1877832,
		"title" : "X-Men: Days of Future Past",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1878841,
		"title" : "The Darkness",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 1878870,
		"title" : "The Edge of Seventeen",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1895587,
		"title" : "Spotlight",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 1904996,
		"title" : "Parker",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 1905041,
		"title" : "Furious 6",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 1907668,
		"title" : "Flight",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 1911644,
		"title" : "The Call",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 1911658,
		"title" : "Penguins of Madagascar",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1915581,
		"title" : "Magic Mike",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1921064,
		"title" : "Pompeii",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1922777,
		"title" : "Sinister",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1924435,
		"title" : "Let's Be Cops",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1929263,
		"title" : "Heaven Is for Real",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 1931435,
		"title" : "The Big Wedding",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 1931533,
		"title" : "Seven Psychopaths",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 1935179,
		"title" : "Mud",
		"genre" : "Drama"
	},
	{
		"movie_id" : 1935859,
		"title" : "Miss Peregrine's Home for Peculiar Children",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 1939659,
		"title" : "Carrie",
		"genre" : "Drama, Horror"
	},
	{
		"movie_id" : 1946502,
		"title" : "UglyDolls",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1950186,
		"title" : "Ford v Ferrari",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 1951261,
		"title" : "The Hangover Part III",
		"genre" : "Comedy, Crime, Romance"
	},
	{
		"movie_id" : 1951264,
		"title" : "The Hunger Games: Catching Fire",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 1951265,
		"title" : "The Hunger Games: Mockingjay - Part 1",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1951266,
		"title" : "The Hunger Games: Mockingjay - Part 2",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 1956620,
		"title" : "Sex Tape",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 1959490,
		"title" : "Noah",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1959563,
		"title" : "The Hitman's Bodyguard",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1961175,
		"title" : "American Assassin",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 1964418,
		"title" : "Tomorrowland",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 1966359,
		"title" : "Father Figures",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1967545,
		"title" : "Labor Day",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 1972571,
		"title" : "A Most Wanted Man",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 1972591,
		"title" : "King Arthur: Legend of the Sword",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 1972779,
		"title" : "The Best of Me",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 1979320,
		"title" : "Rush",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 1979376,
		"title" : "Toy Story 4",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1979388,
		"title" : "The Good Dinosaur",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1980209,
		"title" : "Pain & Gain",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 1980929,
		"title" : "Begin Again",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 1981115,
		"title" : "Thor: The Dark World",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 1981128,
		"title" : "Geostorm",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 1981677,
		"title" : "Pitch Perfect",
		"genre" : "Comedy, Music, Romance"
	},
	{
		"movie_id" : 1985949,
		"title" : "Angry Birds",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 1985966,
		"title" : "Cloudy with a Chance of Meatballs 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 1987680,
		"title" : "The Upside",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 1991245,
		"title" : "Chernobyl Diaries",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 1999890,
		"title" : "Hell Fest",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 2004420,
		"title" : "Neighbors",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2005151,
		"title" : "War Dogs",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 2006295,
		"title" : "The 33",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 2011159,
		"title" : "No Good Deed",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2015381,
		"title" : "Guardians of the Galaxy",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2017020,
		"title" : "The Smurfs 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2023453,
		"title" : "Diary of a Wimpy Kid: Dog Days",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 2023587,
		"title" : "Mama",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 2024432,
		"title" : "Identity Thief",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 2024469,
		"title" : "Non-Stop",
		"genre" : "Action, Mystery, Thriller"
	},
	{
		"movie_id" : 2024544,
		"title" : "12 Years a Slave",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 2025690,
		"title" : "The Finest Hours",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 2034139,
		"title" : "The Last Exorcism Part II",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 2034800,
		"title" : "The Great Wall",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2039338,
		"title" : "Flatliners",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 2039393,
		"title" : "The Gambler",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 2042568,
		"title" : "Inside Llewyn Davis",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 2053463,
		"title" : "Side Effects",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 2057392,
		"title" : "Eye in the Sky",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 2058673,
		"title" : "Point Break",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 2066051,
		"title" : "Rocketman",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 2070862,
		"title" : "Temptation: Confessions of a Marriage Counselor",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 2072233,
		"title" : "Sleepless",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2080374,
		"title" : "Steve Jobs",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 2083355,
		"title" : "The Best Man Holiday",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2083383,
		"title" : "Trouble with the Curve",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 2084970,
		"title" : "The Imitation Game",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 2091256,
		"title" : "Captain Underpants: The First Epic Movie",
		"genre" : "Animation, Action, Comedy"
	},
	{
		"movie_id" : 2094766,
		"title" : "Assassin's Creed",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2096672,
		"title" : "Dumb and Dumber To",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2096673,
		"title" : "Inside Out",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2097298,
		"title" : "McFarland, USA",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 2097307,
		"title" : "Hit and Run",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 2101341,
		"title" : "Dead Man Down",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2101441,
		"title" : "Spring Breakers",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 2103254,
		"title" : "Tammy",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2103281,
		"title" : "Dawn of the Planet of the Apes",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2106361,
		"title" : "Into the Storm",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2109184,
		"title" : "Paranormal Activity 4",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2109248,
		"title" : "Transformers: Age of Extinction",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2119532,
		"title" : "Hacksaw Ridge",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 2119543,
		"title" : "The House with a Clock in Its Walls",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 2120120,
		"title" : "Pixels",
		"genre" : "Action, Comedy, Fantasy"
	},
	{
		"movie_id" : 2125435,
		"title" : "Beasts of the Southern Wild",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 2126355,
		"title" : "San Andreas",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2126357,
		"title" : "Second Act",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2139881,
		"title" : "Long Shot",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2140373,
		"title" : "Saving Mr. Banks",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 2140379,
		"title" : "Self\/less",
		"genre" : "Action, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2140479,
		"title" : "The Accountant",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2167202,
		"title" : "Getaway",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2170439,
		"title" : "Horrible Bosses 2",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 2170593,
		"title" : "St. Vincent",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2172934,
		"title" : "3 Days to Kill",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 2177771,
		"title" : "The Monuments Men",
		"genre" : "Comedy, Drama, History"
	},
	{
		"movie_id" : 2179136,
		"title" : "American Sniper",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 2180411,
		"title" : "Into the Woods",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 2183034,
		"title" : "Earth to Echo",
		"genre" : "Adventure, Family, Sci-Fi"
	},
	{
		"movie_id" : 2184339,
		"title" : "The Purge",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 2191701,
		"title" : "Grown Ups 2",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2193215,
		"title" : "The Counselor",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 2194499,
		"title" : "About Time",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 2199571,
		"title" : "Run All Night",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2203939,
		"title" : "The Other Woman",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2205401,
		"title" : "Addicted",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 2209764,
		"title" : "Transcendence",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 2215285,
		"title" : "Madea's Witness Protection",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 2223990,
		"title" : "Draft Day",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 2224026,
		"title" : "Home",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2226417,
		"title" : "Insidious: Chapter 2",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2226597,
		"title" : "The Mountain Between Us",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2229499,
		"title" : "Don Jon",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2231461,
		"title" : "Rampage",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2234155,
		"title" : "The Internship",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2239822,
		"title" : "Valerian and the City of a Thousand Planets",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2239832,
		"title" : "Think Like a Man Too",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2241351,
		"title" : "Money Monster",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 2243537,
		"title" : "A Haunted House",
		"genre" : "Comedy, Fantasy, Horror"
	},
	{
		"movie_id" : 2245084,
		"title" : "Big Hero 6",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 2247476,
		"title" : "When the Game Stands Tall",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 2250912,
		"title" : "Spider-Man: Homecoming",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2261287,
		"title" : "Ballerina",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2262227,
		"title" : "The Book of Life",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2267968,
		"title" : "Kung Fu Panda 3",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 2267998,
		"title" : "Gone Girl",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 2268016,
		"title" : "Magic Mike XXL",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 2274648,
		"title" : "Hellboy",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2277860,
		"title" : "Finding Dory",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2278388,
		"title" : "The Grand Budapest Hotel",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 2279339,
		"title" : "Love the Coopers",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 2279373,
		"title" : "The SpongeBob Movie: Sponge Out of Water",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 2281587,
		"title" : "Muppets Most Wanted",
		"genre" : "Adventure, Comedy, Crime"
	},
	{
		"movie_id" : 2283336,
		"title" : "Men in Black: International",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2283362,
		"title" : "Jumanji: Welcome to the Jungle",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2293640,
		"title" : "Minions",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2294449,
		"title" : "22 Jump Street",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 2294629,
		"title" : "Frozen",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2296777,
		"title" : "Sherlock Gnomes",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2302755,
		"title" : "Olympus Has Fallen",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 2304933,
		"title" : "The 5th Wave",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2305051,
		"title" : "Wild",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 2309260,
		"title" : "The Gallows",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2310332,
		"title" : "The Hobbit: The Bale of the Five Armies",
		"genre" : "Adventure, Fantasy"
	},
	{
		"movie_id" : 2312718,
		"title" : "Homefront",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2316204,
		"title" : "Alien: Covenant",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 2318092,
		"title" : "Endless Love",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2322441,
		"title" : "Fifty Shades of Grey",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 2328900,
		"title" : "Mary Queen of Scots",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 2333784,
		"title" : "The Expendables 3",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 2334649,
		"title" : "Fruitvale Station",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 2334871,
		"title" : "Snatched",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2334873,
		"title" : "Blue Jasmine",
		"genre" : "Drama"
	},
	{
		"movie_id" : 2334879,
		"title" : "White House Down",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 2338151,
		"title" : "PK",
		"genre" : "Comedy, Drama, Musical"
	},
	{
		"movie_id" : 2339741,
		"title" : "The Woman in Black 2: Angel of Death",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 2345759,
		"title" : "The Mummy",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2357129,
		"title" : "Jobs",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 2357291,
		"title" : "Rio 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2358925,
		"title" : "Unfinished Business",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2361317,
		"title" : "Live by Night",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2361509,
		"title" : "The Intern",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2364841,
		"title" : "Runner Runner",
		"genre" : "Crime, Thriller"
	},
	{
		"movie_id" : 2365580,
		"title" : "Where'd You Go, Bernadee",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2369135,
		"title" : "Need for Speed",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2377322,
		"title" : "Deliver Us from Evil",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2378281,
		"title" : "No se aceptan devoluciones",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2378507,
		"title" : "The Glass Castle",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 2379713,
		"title" : "Spectre",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 2380307,
		"title" : "Coco",
		"genre" : "Animation, Adventure, Family"
	},
	{
		"movie_id" : 2381111,
		"title" : "Brooklyn",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2381249,
		"title" : "Mission: Impossible - Rogue Nation",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 2381941,
		"title" : "Focus",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 2381991,
		"title" : "The Huntsman: Winter's War",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2386490,
		"title" : "How to Train Your Dragon: The Hidden World",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 2387433,
		"title" : "Dark Skies",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 2387499,
		"title" : "Keeping Up with the Joneses",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 2387559,
		"title" : "Delivery Man",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2388715,
		"title" : "Oculus",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 2390361,
		"title" : "Enough Said",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2395427,
		"title" : "Avengers: Age of Ultron",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2398241,
		"title" : "Smurfs: The Lost Village",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2402157,
		"title" : "The November Man",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 2402927,
		"title" : "Carol",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2404181,
		"title" : "Belle",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 2404233,
		"title" : "Gods of Egypt",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2404311,
		"title" : "The Family",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 2404425,
		"title" : "Woman in Gold",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 2404435,
		"title" : "The Magnificent Seven",
		"genre" : "Action, Adventure, Western"
	},
	{
		"movie_id" : 2404463,
		"title" : "The Heat",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 2406566,
		"title" : "Atomic Blonde",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 2431286,
		"title" : "Philomena",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 2436386,
		"title" : "Project Almanac",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2446042,
		"title" : "Taken 3",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 2446980,
		"title" : "Joy",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 2452042,
		"title" : "The Peanuts Movie",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 2452244,
		"title" : "Isn't It Romantic",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 2461150,
		"title" : "Masterminds",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 2465140,
		"title" : "The Single Moms Club",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2465146,
		"title" : "And So It Goes",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2467046,
		"title" : "Left Behind",
		"genre" : "Action, Drama, Fantasy"
	},
	{
		"movie_id" : 2473510,
		"title" : "Paranormal Activity: The Ghost Dimension",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2473602,
		"title" : "Get on Up",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 2473682,
		"title" : "Paranormal Activity: The Marked Ones",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2488496,
		"title" : "Star Wars: Episode VII - The Force Awakens",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2503944,
		"title" : "Burnt",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2510894,
		"title" : "Hotel Transylvania 2",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 2515034,
		"title" : "The Gunman",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2527336,
		"title" : "Star Wars: Episode VIII - The Last Jedi",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2527338,
		"title" : "Star Wars: Episode IX - The Rise of Skywalker",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 2528814,
		"title" : "God's Not Dead",
		"genre" : "Drama"
	},
	{
		"movie_id" : 2531344,
		"title" : "Blockers",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2543164,
		"title" : "Arrival",
		"genre" : "Drama, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2543472,
		"title" : "Wonder",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 2547584,
		"title" : "The Light Between Oceans",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2554274,
		"title" : "Crimson Peak",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 2555736,
		"title" : "The Second Best Exotic Marigold Hotel",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2557478,
		"title" : "Pacific Rim: Uprising",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2557490,
		"title" : "A Million Ways to Die in the West",
		"genre" : "Comedy, Western"
	},
	{
		"movie_id" : 2561572,
		"title" : "Get Hard",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 2562232,
		"title" : "Birdman or (The Unexpected Virtue of Ignorance)",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2567026,
		"title" : "Alice Through the Looking Glass",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 2568862,
		"title" : "Going in Style",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 2582782,
		"title" : "Hell or High Water",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 2582802,
		"title" : "Whiplash",
		"genre" : "Drama, Music"
	},
	{
		"movie_id" : 2582846,
		"title" : "The Fault in Our Stars",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2584384,
		"title" : "Jojo Rabbit",
		"genre" : "Comedy, Drama, War"
	},
	{
		"movie_id" : 2592614,
		"title" : "Resident Evil: The Final Chapter",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 2609758,
		"title" : "A Madea Christmas",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2626350,
		"title" : "Step Up All In",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 2637276,
		"title" : "Ted 2",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2637294,
		"title" : "Hot Tub Time Machine 2",
		"genre" : "Comedy, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2638144,
		"title" : "Ben-Hur",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 2639336,
		"title" : "Greta",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 2660888,
		"title" : "Star Trek Beyond",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2671706,
		"title" : "Fences",
		"genre" : "Drama"
	},
	{
		"movie_id" : 2674426,
		"title" : "Me Before You",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2679042,
		"title" : "Hitman: Agent 47",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2692250,
		"title" : "Night at the Museum: Secret of the Tomb",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 2702724,
		"title" : "The Boss",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 2704998,
		"title" : "Game Night",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 2709692,
		"title" : "The Grinch",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 2709768,
		"title" : "The Secret Life of Pets",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2713180,
		"title" : "Fury",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 2719848,
		"title" : "Everest",
		"genre" : "Action, Adventure, Biography"
	},
	{
		"movie_id" : 2726560,
		"title" : "The Longest Ride",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2752758,
		"title" : "Devil's Due",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2752772,
		"title" : "Sinister 2",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2771200,
		"title" : "Beauty and the Beast",
		"genre" : "Family, Fantasy, Musical"
	},
	{
		"movie_id" : 2776878,
		"title" : "Thank You for Your Service",
		"genre" : "Biography, Drama, War"
	},
	{
		"movie_id" : 2784678,
		"title" : "Top Five",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2788732,
		"title" : "Pete's Dragon",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2798920,
		"title" : "Annihilation",
		"genre" : "Adventure, Drama, Horror"
	},
	{
		"movie_id" : 2802144,
		"title" : "Kingsman: The Secret Service",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 2820852,
		"title" : "Fast & Furious 7",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 2822672,
		"title" : "Rock Dog",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2823054,
		"title" : "Mike and Dave Need Wedding Dates",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 2828996,
		"title" : "A Haunted House 2",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 2837574,
		"title" : "The Old Man & the Gun",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 2848292,
		"title" : "Pitch Perfect 2",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 2854926,
		"title" : "Tag",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 2865120,
		"title" : "Ratchet & Clank",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 2869728,
		"title" : "Ride Along 2",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 2870612,
		"title" : "As Above, So Below",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 2870756,
		"title" : "Magic in the Moonlight",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 2872518,
		"title" : "The Shack",
		"genre" : "Drama, Fantasy"
	},
	{
		"movie_id" : 2872718,
		"title" : "Nightcrawler",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 2872732,
		"title" : "Lucy",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 2872750,
		"title" : "Shaun the Sheep Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2873282,
		"title" : "Red Sparrow",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 2883434,
		"title" : "Black or White",
		"genre" : "Drama"
	},
	{
		"movie_id" : 2883512,
		"title" : "Chef",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 2908446,
		"title" : "Insurgent",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2911666,
		"title" : "John Wick",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 2918436,
		"title" : "The Lazarus Effect",
		"genre" : "Horror, Mystery, Sci-Fi"
	},
	{
		"movie_id" : 2932536,
		"title" : "47 Meters Down",
		"genre" : "Adventure, Drama, Horror"
	},
	{
		"movie_id" : 2935476,
		"title" : "Far from the Madding Crowd",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 2935510,
		"title" : "Ad Astra",
		"genre" : "Adventure, Drama, Mystery"
	},
	{
		"movie_id" : 2938956,
		"title" : "The Transporter Refueled",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 2948356,
		"title" : "Zootopia",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2967224,
		"title" : "Hot Pursuit",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 2974918,
		"title" : "Alvin and the Chipmunks: The Road Chip",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 2975578,
		"title" : "The Purge: Anarchy",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 2975590,
		"title" : "Batman v Superman: Dawn of Justice",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 2978462,
		"title" : "Dolphin Tale 2",
		"genre" : "Drama, Family"
	},
	{
		"movie_id" : 2980516,
		"title" : "The Theory of Everything",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 2980648,
		"title" : "The Hundred-Foot Journey",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 2980706,
		"title" : "Planes: Fire & Rescue",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3014284,
		"title" : "The Lego Ninjago Movie",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 3014666,
		"title" : "Moms' Night Out",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 3014866,
		"title" : "Criminal",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 3040964,
		"title" : "The Jungle Book",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 3062096,
		"title" : "Inferno",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 3063516,
		"title" : "Bad Grandpa",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 3065204,
		"title" : "The Conjuring 2",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3068194,
		"title" : "Love & Friendship",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 3072482,
		"title" : "Hardcore Henry",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3076658,
		"title" : "Creed",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 3079380,
		"title" : "Spy",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 3095734,
		"title" : "Monster Trucks",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3104988,
		"title" : "Crazy Rich Asians",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 3110958,
		"title" : "Now You See Me 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3125324,
		"title" : "Beyond the Lights",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 3152624,
		"title" : "Trainwreck",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 3168230,
		"title" : "Mr. Holmes",
		"genre" : "Drama, Mystery"
	},
	{
		"movie_id" : 3170832,
		"title" : "Room",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 3181822,
		"title" : "The Boy Next Door",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 3183660,
		"title" : "Fantastic Beasts and Where to Find Them",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 3195644,
		"title" : "Insidious: Chapter 3",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3210686,
		"title" : "Son of God",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 3224458,
		"title" : "A Beautiful Day in the Neighborhood",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 3231054,
		"title" : "Risen",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 3235888,
		"title" : "It Follows",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3263904,
		"title" : "Sully",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 3281548,
		"title" : "Lile Women",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 3289724,
		"title" : "Welcome to Marwen",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 3300542,
		"title" : "London Has Fallen",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 3315342,
		"title" : "Logan",
		"genre" : "Action, Drama, Sci-Fi"
	},
	{
		"movie_id" : 3316948,
		"title" : "American Ultra",
		"genre" : "Action, Comedy"
	},
	{
		"movie_id" : 3316960,
		"title" : "Still Alice",
		"genre" : "Drama"
	},
	{
		"movie_id" : 3322364,
		"title" : "Concussion",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 3322940,
		"title" : "Annabelle",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3332064,
		"title" : "Pan",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 3348730,
		"title" : "Jigsaw",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 3369806,
		"title" : "Max",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 3371366,
		"title" : "Transformers: The Last Knight",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3385516,
		"title" : "X-Men: Apocalypse",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3387520,
		"title" : "Scary Stories to Tell in the Dark",
		"genre" : "Adventure, Horror, Mystery"
	},
	{
		"movie_id" : 3387542,
		"title" : "The Forest",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3393786,
		"title" : "Jack Reacher: Never Go Back",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 3397884,
		"title" : "Sicario",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 3401882,
		"title" : "Fist Fight",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 3402236,
		"title" : "Murder on the Orient Express",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 3410834,
		"title" : "Allegiant",
		"genre" : "Action, Adventure, Mystery"
	},
	{
		"movie_id" : 3411444,
		"title" : "Ferdinand",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3416828,
		"title" : "Ice Age: Collision Course",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3450650,
		"title" : "Paul Blart: Mall Cop 2",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 3450958,
		"title" : "War for the Planet of the Apes",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 3460252,
		"title" : "The Hateful Eight",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 3462710,
		"title" : "Unforgeable",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 3464902,
		"title" : "The Lobster",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 3469046,
		"title" : "Despicable Me 3",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3470600,
		"title" : "Sing",
		"genre" : "Animation, Comedy, Family"
	},
	{
		"movie_id" : 3486626,
		"title" : "The Nut Job 2: Nuy by Nature",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3488710,
		"title" : "The Walk",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 3498820,
		"title" : "Captain America: Civil War",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3499096,
		"title" : "Race",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 3501632,
		"title" : "Thor: Ragnarok",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3513498,
		"title" : "The Lego Movie 2: The Second Part",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 3513548,
		"title" : "Richard Jewell",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 3521126,
		"title" : "The Disaster Artist",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 3521164,
		"title" : "Moana",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3522806,
		"title" : "Mechanic: Resurrection",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 3530002,
		"title" : "The Night Before",
		"genre" : "Comedy, Fantasy"
	},
	{
		"movie_id" : 3531824,
		"title" : "Nerve",
		"genre" : "Adventure, Crime, Drama"
	},
	{
		"movie_id" : 3532216,
		"title" : "American Made",
		"genre" : "Action, Biography, Comedy"
	},
	{
		"movie_id" : 3553442,
		"title" : "Whiskey Tango Foxtrot",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 3564472,
		"title" : "Girls Trip",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 3567288,
		"title" : "The Visit",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3606752,
		"title" : "Cars 3",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3606756,
		"title" : "Incredibles 2",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 3612126,
		"title" : "The Grudge",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 3622592,
		"title" : "Paper Towns",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 3623726,
		"title" : "Ricki and the Flash",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 3628584,
		"title" : "Barbershop: The Next Cut",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 3631112,
		"title" : "The Girl on the Train",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 3640424,
		"title" : "Allied",
		"genre" : "Action, Drama, Romance"
	},
	{
		"movie_id" : 3659388,
		"title" : "The Martian",
		"genre" : "Adventure, Drama, Sci-Fi"
	},
	{
		"movie_id" : 3682448,
		"title" : "Bridge of Spies",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 3691740,
		"title" : "The BFG",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 3713166,
		"title" : "Unfriended",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3717252,
		"title" : "Underworld: Blood Wars",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 3717490,
		"title" : "Power Rangers",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3722070,
		"title" : "The Lady in the Van",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 3731562,
		"title" : "Kong: Skull Island",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 3741700,
		"title" : "Godzilla: King of the Monsters",
		"genre" : "Action, Adventure, Fantasy"
	},
	{
		"movie_id" : 3741834,
		"title" : "Lion",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 3748528,
		"title" : "Rogue One",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3750872,
		"title" : "The Wife",
		"genre" : "Drama"
	},
	{
		"movie_id" : 3760922,
		"title" : "My Big Fat Greek Wedding 2",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 3766354,
		"title" : "The Equalizer 2",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 3766394,
		"title" : "Hello, My Name Is Doris",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 3774114,
		"title" : "Snowden",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 3778644,
		"title" : "Solo: A Star Wars Story",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3783958,
		"title" : "La La Land",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 3794354,
		"title" : "Sonic the Hedgehog",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3797868,
		"title" : "The Choice",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 3799694,
		"title" : "The Nice Guys",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 3829266,
		"title" : "The Predator",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 3829920,
		"title" : "Only the Brave",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 3832914,
		"title" : "War Room",
		"genre" : "Drama"
	},
	{
		"movie_id" : 3850214,
		"title" : "Dope",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 3850590,
		"title" : "Krampus",
		"genre" : "Comedy, Drama, Fantasy"
	},
	{
		"movie_id" : 3861390,
		"title" : "Dumbo",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 3862750,
		"title" : "The Perfect Guy",
		"genre" : "Crime, Drama, Horror"
	},
	{
		"movie_id" : 3874544,
		"title" : "The Boss Baby",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 3882082,
		"title" : "The Boy",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 3890160,
		"title" : "Baby Driver",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 3896198,
		"title" : "Guardians of the Galaxy Vol. 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3949660,
		"title" : "Teenage Mutant Ninja Turtles: Out of the Shadows",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 3960412,
		"title" : "Popstar: Never Stop Never Stopping",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 4030600,
		"title" : "The Bye Bye Man",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 4034228,
		"title" : "Manchester by the Sea",
		"genre" : "Drama"
	},
	{
		"movie_id" : 4046784,
		"title" : "Maze Runner: The Scorch Trials",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4052882,
		"title" : "The Shallows",
		"genre" : "Drama, Horror, Thriller"
	},
	{
		"movie_id" : 4056738,
		"title" : "Do You Believe?",
		"genre" : "Drama"
	},
	{
		"movie_id" : 4073790,
		"title" : "The Darkest Minds",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 4094724,
		"title" : "The Purge: Election Year",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 4103724,
		"title" : "Forever My Girl",
		"genre" : "Drama, Music, Romance"
	},
	{
		"movie_id" : 4116284,
		"title" : "The Lego Batman Movie",
		"genre" : "Animation, Action, Comedy"
	},
	{
		"movie_id" : 4123430,
		"title" : "Fantastic Beasts: The Crimes of Grindelwald",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 4126476,
		"title" : "After",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 4131800,
		"title" : "My Lile Pony: The Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4136084,
		"title" : "Florence Foster Jenkins",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 4139124,
		"title" : "Keanu",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 4154664,
		"title" : "Captain Marvel",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4154756,
		"title" : "Avengers: Infinity War",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4154796,
		"title" : "Avengers: Endgame",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 4160708,
		"title" : "Don't Breathe",
		"genre" : "Crime, Horror, Thriller"
	},
	{
		"movie_id" : 4172430,
		"title" : "13 Hours",
		"genre" : "Action, Drama, War"
	},
	{
		"movie_id" : 4178092,
		"title" : "The Gift",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 4183692,
		"title" : "Woodlawn",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 4191054,
		"title" : "Strange Magic",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4191580,
		"title" : "Meet the Blacks",
		"genre" : "Comedy, Horror"
	},
	{
		"movie_id" : 4196450,
		"title" : "The Birth of a Nation",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 4196776,
		"title" : "Jason Bourne",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 4209788,
		"title" : "Molly's Game",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 4218572,
		"title" : "Widows",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 4244998,
		"title" : "Alpha",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 4257926,
		"title" : "Miracles from Heaven",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 4263482,
		"title" : "The VVitch: A New-England Folktale",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 4276820,
		"title" : "The Founder",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 4287320,
		"title" : "The Circle",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 4302938,
		"title" : "Kubo and the Two Strings",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 4341582,
		"title" : "Queen of Katwe",
		"genre" : "Biography, Drama, Sport"
	},
	{
		"movie_id" : 4361050,
		"title" : "Ouija: Origin of Evil",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 4364194,
		"title" : "The Peanut Buer Falcon",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 4383594,
		"title" : "Nine Lives",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 4425200,
		"title" : "John Wick: Chapter 2",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 4438848,
		"title" : "Neighbors 2: Sorority Rising",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 4463894,
		"title" : "Shaft",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 4465564,
		"title" : "Fifty Shades Darker",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 4468740,
		"title" : "Paddington 2",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 4477536,
		"title" : "Fifty Shades Freed",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 4481414,
		"title" : "Gifted",
		"genre" : "Drama"
	},
	{
		"movie_id" : 4481514,
		"title" : "The House",
		"genre" : "Comedy, Crime"
	},
	{
		"movie_id" : 4500922,
		"title" : "Maze Runner: The Death Cure",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4501244,
		"title" : "Why Him?",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 4504044,
		"title" : "The Prodigy",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 4513674,
		"title" : "Café Society",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 4520988,
		"title" : "Frozen II",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4530422,
		"title" : "Overlord",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 4532826,
		"title" : "Robin Hood",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 4537896,
		"title" : "White Boy Rick",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 4550098,
		"title" : "Nocturnal Animals",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 4555426,
		"title" : "Darkest Hour",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 4560436,
		"title" : "Mile 22",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 4572514,
		"title" : "Patriots Day",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 4575576,
		"title" : "Christopher Robin",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 4587656,
		"title" : "The Star",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4595882,
		"title" : "Can You Ever Forgive Me?",
		"genre" : "Biography, Comedy, Crime"
	},
	{
		"movie_id" : 4622512,
		"title" : "Bale of the Sexes",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 4624424,
		"title" : "Storks",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4630562,
		"title" : "The Fate of the Furious",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 4633694,
		"title" : "Spider-Man: Into the Spider-Verse",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 4643580,
		"title" : "Un gallo con muchos huevos",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4648786,
		"title" : "Harriet",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 4649416,
		"title" : "Almost Christmas",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 4649466,
		"title" : "Kingsman: The Golden Circle",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 4651520,
		"title" : "Bad Moms",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 4667094,
		"title" : "Fifty Shades of Black",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 4669788,
		"title" : "On the Basis of Sex",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 4682786,
		"title" : "Collateral Beauty",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 4695012,
		"title" : "It Comes at Night",
		"genre" : "Horror, Mystery"
	},
	{
		"movie_id" : 4701182,
		"title" : "Bumblebee",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4761916,
		"title" : "Unfriended: Dark Web",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 4765284,
		"title" : "Pitch Perfect 3",
		"genre" : "Comedy, Music"
	},
	{
		"movie_id" : 4777008,
		"title" : "Maleficent: Mistress of Evil",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 4779682,
		"title" : "The Meg",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 4786282,
		"title" : "Lights Out",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 4795124,
		"title" : "How to Be a Latin Lover",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 4799050,
		"title" : "Rough Night",
		"genre" : "Comedy, Crime, Thriller"
	},
	{
		"movie_id" : 4799066,
		"title" : "Midnight Sun",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 4807408,
		"title" : "The Best of Enemies",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 4824302,
		"title" : "Mother's Day",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 4824308,
		"title" : "God's Not Dead 2",
		"genre" : "Drama"
	},
	{
		"movie_id" : 4846340,
		"title" : "Hidden Figures",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 4849438,
		"title" : "Bãhubali 2: The Conclusion",
		"genre" : "Action, Drama"
	},
	{
		"movie_id" : 4871980,
		"title" : "The Perfect Match",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 4877122,
		"title" : "The Emoji Movie",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 4881806,
		"title" : "Jurassic World: Fallen Kingdom",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 4899370,
		"title" : "Megan Leavey",
		"genre" : "Biography, Drama, War"
	},
	{
		"movie_id" : 4912910,
		"title" : "Mission: Impossible - Fallout",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 4913966,
		"title" : "The Curse of la Llorona",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 4916630,
		"title" : "Just Mercy",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 4925292,
		"title" : "Lady Bird",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 4972582,
		"title" : "Split",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 4975722,
		"title" : "Moonlight",
		"genre" : "Drama"
	},
	{
		"movie_id" : 5001718,
		"title" : "Everything, Everything",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 5013056,
		"title" : "Dunkirk",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 5027774,
		"title" : "Three Billboards Outside Ebbing, Missouri",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 5028340,
		"title" : "Mary Poppins Returns",
		"genre" : "Comedy, Family, Fantasy"
	},
	{
		"movie_id" : 5033998,
		"title" : "Charlie's Angels",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 5052448,
		"title" : "Get Out",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5052474,
		"title" : "Sicario: Day of the Soldado",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 5074352,
		"title" : "Dangal",
		"genre" : "Action, Biography, Drama"
	},
	{
		"movie_id" : 5083738,
		"title" : "The Favourite",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 5095030,
		"title" : "Ant-Man and the Wasp",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 5104604,
		"title" : "Isle of Dogs",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 5109784,
		"title" : "Mother!",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 5113040,
		"title" : "The Secret Life of Pets 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 5117670,
		"title" : "Peter Rabbit",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 5125894,
		"title" : "Poms",
		"genre" : "Comedy, Drama, Sport"
	},
	{
		"movie_id" : 5140878,
		"title" : "Annabelle: Creation",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5164214,
		"title" : "Ocean's Eight",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 5164432,
		"title" : "Love, Simon",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 5177088,
		"title" : "The Girl in the Spider's Web",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 5208252,
		"title" : "Operation Finale",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 5220122,
		"title" : "Hotel Transylvania 3: Summer Vacation",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 5259966,
		"title" : "No manches Frida",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 5270948,
		"title" : "Chappaquiddick",
		"genre" : "Drama, History, Thriller"
	},
	{
		"movie_id" : 5294550,
		"title" : "All the Money in the World",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 5301662,
		"title" : "Marshall",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 5308322,
		"title" : "Happy Death Day",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5322012,
		"title" : "Wish Upon",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 5362988,
		"title" : "Wind River",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 5390504,
		"title" : "Detroit",
		"genre" : "Crime, Drama, History"
	},
	{
		"movie_id" : 5427194,
		"title" : "The Miracle Season",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 5439796,
		"title" : "Logan Lucky",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 5442430,
		"title" : "Life",
		"genre" : "Horror, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 5461944,
		"title" : "Hotel Mumbai",
		"genre" : "Action, Drama, History"
	},
	{
		"movie_id" : 5462602,
		"title" : "The Big Sick",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 5463162,
		"title" : "Deadpool 2",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 5478478,
		"title" : "Hostiles",
		"genre" : "Drama, Western"
	},
	{
		"movie_id" : 5503686,
		"title" : "Hustlers",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 5523010,
		"title" : "The Nutcracker and the Four Realms",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 5563334,
		"title" : "The Good Liar",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 5580036,
		"title" : "I, Tonya",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 5580266,
		"title" : "The Hate U Give",
		"genre" : "Crime, Drama"
	},
	{
		"movie_id" : 5580390,
		"title" : "The Shape of Water",
		"genre" : "Adventure, Drama, Fantasy"
	},
	{
		"movie_id" : 5592248,
		"title" : "The Beguiled",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 5606664,
		"title" : "Doctor Sleep",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 5610554,
		"title" : "Tully",
		"genre" : "Comedy, Drama, Mystery"
	},
	{
		"movie_id" : 5619332,
		"title" : "Life of the Party",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 5657846,
		"title" : "Daddy's Home 2",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 5664636,
		"title" : "Goosebumps 2: Haunted Halloween",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 5670152,
		"title" : "Traffik",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 5688932,
		"title" : "Sorry to Bother You",
		"genre" : "Comedy, Fantasy, Sci-Fi"
	},
	{
		"movie_id" : 5690360,
		"title" : "Slender Man",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5691024,
		"title" : "Show Dogs",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 5697572,
		"title" : "Cats",
		"genre" : "Comedy, Drama, Family"
	},
	{
		"movie_id" : 5719700,
		"title" : "Home Again",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 5719748,
		"title" : "Cold Pursuit",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 5726086,
		"title" : "Insidious: The Last Key",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5726616,
		"title" : "Call Me by Your Name",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 5727208,
		"title" : "Uncut Gems",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 5734576,
		"title" : "The Possession of Hannah Grace",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5758778,
		"title" : "Skyscraper",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 5774060,
		"title" : "Underwater",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 5776858,
		"title" : "Phantom Thread",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 5814060,
		"title" : "The Nun",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 5814534,
		"title" : "Spies in Disguise",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 5816682,
		"title" : "Victoria & Abdul",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 5822564,
		"title" : "The Kitchen",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 5848272,
		"title" : "Ralph Breaks the Internet",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 5884052,
		"title" : "Pokémon: Detective Pikachu",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 5886046,
		"title" : "Escape Room",
		"genre" : "Action, Adventure, Horror"
	},
	{
		"movie_id" : 5935704,
		"title" : "Padmaavat",
		"genre" : "Drama, History, Romance"
	},
	{
		"movie_id" : 5941692,
		"title" : "Miss Bala",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 6000478,
		"title" : "Roman J. Israel, Esq.",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 6003368,
		"title" : "Diary of a Wimpy Kid: The Long Haul",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 6063050,
		"title" : "Acrimony",
		"genre" : "Drama, Romance, Thriller"
	},
	{
		"movie_id" : 6095472,
		"title" : "The Angry Birds Movie 2",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 6105098,
		"title" : "The Lion King",
		"genre" : "Animation, Adventure, Drama"
	},
	{
		"movie_id" : 6107548,
		"title" : "Late Night",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 6113488,
		"title" : "The Case for Christ",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 6133466,
		"title" : "The First Purge",
		"genre" : "Action, Horror, Sci-Fi"
	},
	{
		"movie_id" : 6139732,
		"title" : "Aladdin",
		"genre" : "Adventure, Family, Fantasy"
	},
	{
		"movie_id" : 6146586,
		"title" : "John Wick: Chapter 3 - Parabellum",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 6182908,
		"title" : "Smallfoot",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 6189022,
		"title" : "Angel Has Fallen",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 6217804,
		"title" : "Tyler Perry's Boo 2! A Madea Halloween",
		"genre" : "Comedy, Drama, Horror"
	},
	{
		"movie_id" : 6266538,
		"title" : "Vice",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 6294822,
		"title" : "The Post",
		"genre" : "Drama, Thriller"
	},
	{
		"movie_id" : 6306064,
		"title" : "Adrift",
		"genre" : "Action, Adventure, Biography"
	},
	{
		"movie_id" : 6320628,
		"title" : "Spider-Man: Far from Home",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 6324278,
		"title" : "Abominable",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 6343314,
		"title" : "Creed II",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 6348138,
		"title" : "Missing Link",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 6359956,
		"title" : "A Bad Moms Christmas",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 6394270,
		"title" : "Bombshell",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 6398184,
		"title" : "Downton Abbey",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 6421110,
		"title" : "Proud Mary",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 6428676,
		"title" : "Wonder Park",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 6450186,
		"title" : "I Can Only Imagine",
		"genre" : "Biography, Drama, Family"
	},
	{
		"movie_id" : 6450804,
		"title" : "Terminator: Dark Fate",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 6472976,
		"title" : "Five Feet Apart",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 6499752,
		"title" : "Upgrade",
		"genre" : "Action, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 6513120,
		"title" : "Fighting with My Family",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 6565702,
		"title" : "Dark Phoenix",
		"genre" : "Action, Adventure, Sci-Fi"
	},
	{
		"movie_id" : 6628394,
		"title" : "Bad Times at the El Royale",
		"genre" : "Crime, Drama, Mystery"
	},
	{
		"movie_id" : 6644200,
		"title" : "A Quiet Place",
		"genre" : "Drama, Horror, Sci-Fi"
	},
	{
		"movie_id" : 6663582,
		"title" : "The Spy Who Dumped Me",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 6673612,
		"title" : "Dolile",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 6722030,
		"title" : "The Intruder",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 6751668,
		"title" : "Gisaengchung",
		"genre" : "Comedy, Drama, Thriller"
	},
	{
		"movie_id" : 6772950,
		"title" : "Truth or Dare",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 6781982,
		"title" : "Night School",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 6791096,
		"title" : "I Feel Prey",
		"genre" : "Comedy, Romance"
	},
	{
		"movie_id" : 6802308,
		"title" : "The 15:17 to Paris",
		"genre" : "Biography, Drama, Thriller"
	},
	{
		"movie_id" : 6806448,
		"title" : "Fast & Furious Presents: Hobbs & Shaw",
		"genre" : "Action, Adventure, Thriller"
	},
	{
		"movie_id" : 6811018,
		"title" : "The Kid Who Would Be King",
		"genre" : "Action, Adventure, Family"
	},
	{
		"movie_id" : 6823368,
		"title" : "Glass",
		"genre" : "Drama, Sci-Fi, Thriller"
	},
	{
		"movie_id" : 6850820,
		"title" : "Peppermint",
		"genre" : "Action, Drama, Thriller"
	},
	{
		"movie_id" : 6857112,
		"title" : "Us",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 6857166,
		"title" : "Book Club",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 6911608,
		"title" : "Mamma Mia! Here We Go Again",
		"genre" : "Comedy, Musical, Romance"
	},
	{
		"movie_id" : 6924650,
		"title" : "Midway",
		"genre" : "Action, Adventure, Drama"
	},
	{
		"movie_id" : 6966692,
		"title" : "Green Book",
		"genre" : "Biography, Comedy, Drama"
	},
	{
		"movie_id" : 7014006,
		"title" : "Eighth Grade",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 7040874,
		"title" : "A Simple Favor",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 7054636,
		"title" : "A Madea Family Funeral",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 7083526,
		"title" : "Breakthrough",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 7125860,
		"title" : "If Beale Street Could Talk",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 7131622,
		"title" : "Once Upon a Time... in Hollywood",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 7137846,
		"title" : "Breaking In",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 7146812,
		"title" : "Onward",
		"genre" : "Animation, Adventure, Comedy"
	},
	{
		"movie_id" : 7286456,
		"title" : "Joker",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 7329656,
		"title" : "47 Meters Down: Uncaged",
		"genre" : "Adventure, Drama, Horror"
	},
	{
		"movie_id" : 7334528,
		"title" : "Uncle Drew",
		"genre" : "Comedy, Sport"
	},
	{
		"movie_id" : 7343762,
		"title" : "Good Boys",
		"genre" : "Adventure, Comedy"
	},
	{
		"movie_id" : 7349662,
		"title" : "BlacKkKlansman",
		"genre" : "Biography, Crime, Drama"
	},
	{
		"movie_id" : 7349950,
		"title" : "It Chapter Two",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 7388562,
		"title" : "Paul, Apostle of Christ",
		"genre" : "Adventure, Biography, Drama"
	},
	{
		"movie_id" : 7390646,
		"title" : "Black and Blue",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 7401588,
		"title" : "Instant Family",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 7424200,
		"title" : "Teen Titans Go! To the Movies",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 7504726,
		"title" : "The Call of the Wild",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 7510346,
		"title" : "The Turning",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 7547410,
		"title" : "Dora and the Lost City of Gold",
		"genre" : "Adventure, Comedy, Family"
	},
	{
		"movie_id" : 7549996,
		"title" : "Judy",
		"genre" : "Biography, Drama, Romance"
	},
	{
		"movie_id" : 7616798,
		"title" : "A Dog's Way Home",
		"genre" : "Adventure, Drama, Family"
	},
	{
		"movie_id" : 7634968,
		"title" : "What Men Want",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 7668870,
		"title" : "Searching",
		"genre" : "Drama, Mystery, Thriller"
	},
	{
		"movie_id" : 7690670,
		"title" : "Superfly",
		"genre" : "Action, Crime, Thriller"
	},
	{
		"movie_id" : 7713068,
		"title" : "Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn",
		"genre" : "Action, Adventure, Crime"
	},
	{
		"movie_id" : 7734218,
		"title" : "Stuber",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 7752126,
		"title" : "Brightburn",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 7784604,
		"title" : "Hereditary",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 7798634,
		"title" : "Ready or Not",
		"genre" : "Comedy, Horror, Mystery"
	},
	{
		"movie_id" : 7798646,
		"title" : "The Photograph",
		"genre" : "Drama, Romance"
	},
	{
		"movie_id" : 7958736,
		"title" : "Ma",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 7959026,
		"title" : "The Mule",
		"genre" : "Crime, Drama, Thriller"
	},
	{
		"movie_id" : 7961060,
		"title" : "Doragon bôru chô: Burorî",
		"genre" : "Animation, Action, Adventure"
	},
	{
		"movie_id" : 7975244,
		"title" : "Jumanji: The Next Level",
		"genre" : "Action, Adventure, Comedy"
	},
	{
		"movie_id" : 7984734,
		"title" : "The Lighthouse",
		"genre" : "Drama, Fantasy, Horror"
	},
	{
		"movie_id" : 8079248,
		"title" : "Yesterday",
		"genre" : "Comedy, Fantasy, Music"
	},
	{
		"movie_id" : 8085790,
		"title" : "Lile",
		"genre" : "Comedy, Fantasy, Romance"
	},
	{
		"movie_id" : 8097306,
		"title" : "Nobody's Fool",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 8155288,
		"title" : "Happy Death Day 2U",
		"genre" : "Comedy, Horror, Mystery"
	},
	{
		"movie_id" : 8186318,
		"title" : "Overcomer",
		"genre" : "Drama, Family, Sport"
	},
	{
		"movie_id" : 8266310,
		"title" : "Blinded by the Light",
		"genre" : "Comedy, Drama, Music"
	},
	{
		"movie_id" : 8350360,
		"title" : "Annabelle Comes Home",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 8364368,
		"title" : "Crawl",
		"genre" : "Action, Drama, Horror"
	},
	{
		"movie_id" : 8367814,
		"title" : "The Gentlemen",
		"genre" : "Action, Comedy, Crime"
	},
	{
		"movie_id" : 8385474,
		"title" : "A Dog's Journey",
		"genre" : "Adventure, Comedy, Drama"
	},
	{
		"movie_id" : 8544498,
		"title" : "The Way Back",
		"genre" : "Drama, Sport"
	},
	{
		"movie_id" : 8579674,
		"title" : "1917",
		"genre" : "Drama, War"
	},
	{
		"movie_id" : 8623904,
		"title" : "Last Christmas",
		"genre" : "Comedy, Drama, Romance"
	},
	{
		"movie_id" : 8637428,
		"title" : "The Farewell",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 8663516,
		"title" : "Child's Play",
		"genre" : "Horror, Sci-Fi"
	},
	{
		"movie_id" : 8688634,
		"title" : "21 Bridges",
		"genre" : "Action, Crime, Drama"
	},
	{
		"movie_id" : 8722346,
		"title" : "Queen & Slim",
		"genre" : "Crime, Drama, Romance"
	},
	{
		"movie_id" : 8772262,
		"title" : "Midsommar",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 8946378,
		"title" : "Knives Out",
		"genre" : "Comedy, Crime, Drama"
	},
	{
		"movie_id" : 9019352,
		"title" : "No manches Frida 2",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 9024106,
		"title" : "Unplanned",
		"genre" : "Biography, Drama"
	},
	{
		"movie_id" : 9071322,
		"title" : "Dark Waters",
		"genre" : "Biography, Drama, History"
	},
	{
		"movie_id" : 9086228,
		"title" : "Gretel & Hansel",
		"genre" : "Fantasy, Horror, Mystery"
	},
	{
		"movie_id" : 9134216,
		"title" : "Playing with Fire",
		"genre" : "Comedy, Family"
	},
	{
		"movie_id" : 9173418,
		"title" : "Brahms: The Boy II",
		"genre" : "Drama, Horror, Mystery"
	},
	{
		"movie_id" : 9208444,
		"title" : "Impractical Jokers: The Movie",
		"genre" : "Comedy"
	},
	{
		"movie_id" : 9214832,
		"title" : "Emma.",
		"genre" : "Comedy, Drama"
	},
	{
		"movie_id" : 9779516,
		"title" : "I Still Believe",
		"genre" : "Biography, Drama, Music"
	},
	{
		"movie_id" : 10039344,
		"title" : "Countdown",
		"genre" : "Horror, Thriller"
	},
	{
		"movie_id" : 10059518,
		"title" : "Unhinged",
		"genre" : "Action, Thriller"
	},
	{
		"movie_id" : 10481868,
		"title" : "Black Christmas",
		"genre" : "Horror, Mystery, Thriller"
	},
	{
		"movie_id" : 11107074,
		"title" : "My Hero Academia - Boku no hîrô akademia THE MOVIE - Heroes: Rising - Hîrôzu: Raijingu",
		"genre" : "Animation, Action, Adventure"
	},
];

const seedMovies = () => Movies.bulkCreate(movieData);

module.exports = seedMovies