// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

// import postsData from "../seed-data/posts.js";

// export async function seed(knex) {
//   await knex("posts").del();
//   await knex("posts").insert(postsData);
// }


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


const postsData = [

//Jen;s
  {
    id: 1,
    title: "From Ferraris to Fries: A Thrilling Summer Escape!",
    desc: "<p>This summer, my friends and I took an unforgettable road trip to Stoney Creek near Niagara Falls. </p><p><br></p><p>We celebrated two birthdays in style, driving 6 exotic cars like a <strong>Ferrari, Lamborghini, and Porsche 911 Turbo</strong> at Ultimate Exotics. </p><p><br></p><p>After a thrilling day on the road, we wrapped it up by the water with a mouthwatering burger and fries—a perfect ending to an epic adventure.</p>",
    img: "{\"filename\":\"1733237869577_travel - cars.png\"}", 
    date: new Date(),
    uid: 1, 
    cat: "travel",
  },
  {
    id: 2,
    title: "Swinging into Sweetness: Golf, Cake & Connection",
    desc: "<p>This year, I picked up golf, and wow—what a game-changer! Not only have I improved my swing (kind of), but I’ve also reconnected with old friends, met amazing new people, and even brought in fresh business opportunities.</p><p><br></p><p>To celebrate, I made a homemade birthday cake decked out with golf-themed decorations—a sweet tribute to the sport that’s brought so much fun and connection into my life.</p><p><br></p><p>Next on my bucket list? Golf travel! Scotland, Florida, Japan—watch out, here I come (eventually). Until then, it’s swings, sweet treats, and making memories on the green.</p>",
    img: "{\"filename\":\"1733237869577_travel - cars.png\"}",
    date: new Date(),
    uid: 1,
    cat: "travel",
  },
  {
    id: 3,
    title: "Wings, Fries, and Family Ties: A Road Trip to Remember",
    desc: "<p>This road trip wasn’t just about the miles—it was about reconnecting. </p><p><br></p><p>My partner, his dad, and I hit the road to Buffalo for some legendary Duff’s wings and fries (totally worth it) and then headed to Baltimore to meet extended family for the first time.</p><p><br></p><p>It was bittersweet—spending time with loved ones who are getting older and soaking up moments that truly matter. Staying in a quiet suburban house surrounded by greenery made it even more special. No endless scrolling, just laughs, stories, and a lot of heart.</p><p><br></p><p>Sometimes, all it takes is good food, great company, and a little disconnect to feel truly connected.</p>",
    img: "{\"filename\":\"1733237878426_travel - wings buffalo.png\"}",
    date: new Date(),
    uid: 1,
    cat: "travel",
  },
  {
    id: 4,
    title: "Salmon Nights: Cooking Healthy, Saving Big",
    desc: "<p>Cooking at home hits all the right notes: it’s budget-friendly, healthier, and lets me get creative. My latest creation? </p><p><br></p><p>Baked salmon with coleslaw—a brain-boosting, skin-loving combo.</p><p><br></p><p>Did you know salmon is packed with omega-3 fatty acids, which can improve memory and keep your skin glowing? It’s also loaded with protein, vitamin D, and antioxidants to keep you feeling your best.</p><p><br></p><p>Even though salmon isn’t my favorite protein, I can’t deny how good it is for the body (and the wallet). Plus, when paired with crunchy, tangy coleslaw, it’s a win-win on the plate!</p><p><br></p><p>What’s your favorite healthy dish to whip up at home? Let me know!</p>",
    img: "{\"filename\":\"1733237815480_food - salmon.png\"}",
    date: new Date(),
    uid: 1,
    cat: "food",
  },
  {
    id: 5,
    title: "'Hole-in-One Cravings: Shawarma Poutine Bliss",
    desc: "<p>After a full day of golfing, there’s one splurge that hits the spot like nothing else: shawarma poutine. </p><p><br></p><p>The mix of savory, spiced shawarma and cheesy, gravy-smothered fries? Absolute perfection.</p><p><br></p><p>As a shawarma and poutine lover, this combo feels like it was made just for me. It’s my ultimate reward for all those swings (and misses) on the golf course.</p><p><br></p><p>One day, when I have a bigger space, I’m getting a shawarma grill machine—imagine the possibilities! Until then, I’ll keep treating myself to this dreamy dish every now and then.</p><p><br></p>",
    img: "{\"filename\":\"1733237841867_food -shawarma.png\"}",
    date: new Date(),
    uid: 1,
    cat: "food",
  },
  {
    id: 6,
    title: "Caviar, Oysters & Vibes: Ryu Izakaya Magic",
    desc: "<p>Ryu Izakaya in Richmond Hill is a feast for the senses. With its dragon mural, cherry blossom tree, and a DJ after 9 PM, it’s more than just dinner—it’s an experience.</p><p><br></p><p>I’m not a fan of caviar, but the artfully plated oysters and caviar were too stunning not to capture. This spot is perfect for foodies who love great vibes and picture-perfect dishes.</p><p><br></p><p>What’s your favourite spot for food and ambiance?</p>",
    img: "{\"filename\":\"1733237789212_art - caviar.png\"}",
    date: new Date(),
    uid: 1,
    cat: "art",
  },
  {
    id: 7,
    title: "Ramen, Cappuccinos & Chill Vibes at Chillax",
    desc: "<p>Chillax in Richmond Hill, Ontario is my go-to spot for a quick, quality bite. Their ramen is delicious, their cappuccinos are pure art, and the cozy atmosphere is always inviting.</p><p><br></p><p>I love how efficient they are—you can check in and order through an app, but they’re just as happy to take your order in person. Plus, the cute plushies and gifts for sale make it even more charming.</p><p><br></p><p>Great food, great vibes, and great service—Chillax always delivers.</p><p><br></p><p>What’s your favorite local spot to unwind?</p>",
    img: "{\"filename\":\"1733237802560_art - ramen.png\"}",
    date: new Date(),
    uid: 1,
    cat: "art",
  },
  {
    id: 8,
    title: "Sushi, Style & Sweet Gestures",
    desc: "<p>There’s something special about sushi delivered with love—especially when it’s wrapped in a beautifully designed cloth. </p><p><br></p><p>A close friend surprised me with this gorgeous sushi box, and the quality was just as amazing as the presentation.</p><p>The floral cloth beneath the box made it feel extra thoughtful and unique, turning an already delicious treat into something unforgettable.</p><p><br></p><p>Good food, great friends, and those little touches that make life sweeter—this delivery was a win all around!</p><p><br></p><p>What’s the most thoughtful food gift you’ve ever received?</p>",
    img: "{\"filename\":\"1733237810328_art - sushi.png\"}",
    date: new Date(),
    uid: 1,
    cat: "art",
  },
  {
    id: 9,
    title: "Pizza, Games, and a Victory Lap",
    desc: "<p>There’s nothing like homemade pizza, especially when it’s made by a friend who’s all about fresh ingredients and new tech. </p><p><br></p><p>He crafted everything from scratch, using his cool new pizza oven to create perfect pies for our get-together.</p><p>The night was a blend of delicious food and friendly competition. </p><p><br></p><p>After indulging in those amazing pizzas, we battled it out in FIFA—and guess what? I took the win!</p><p><br></p><p>Good food, great friends, and a little bit of bragging rights—couldn’t ask for more.</p><p><br></p><p>What’s your go-to game night snack?</p>",
    img: "{\"filename\":\"1733237856326_technology - pizza.png\"}",
    date: new Date(),
    uid: 1,
    cat: "technology",
  },

//Sophia's
  {
    id: 10,
    title: "Cheers to the Graduates",
    desc: "<p>Celebrating the end of an incredible journey! </p><p><br></p><p>As a Teaching Assistant for the Software Engineering program at BrainStation, I\'ve had the chance to learn, grow, and support so many talented students eager to break into the tech world.</p><p><br></p><p>This week marks the finish line, and I just want to say: <em>Congratulations</em> to everyone graduating! You did it, and I’m so proud of all your hard work. Here’s to new beginnings and amazing opportunities ahead!</p><p><br></p><p>What’s next on your tech journey?</p>",
    img: "{\"filename\":\"1733237847582_technology - cake.png\"}",
    date: new Date(),
    uid: 2, // Sophia's user ID
    cat: "technology",
  },
];


export async function seed(knex) {
  await knex("posts").del();
  

  await knex("posts").insert(postsData);
};
