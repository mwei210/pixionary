# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Photo.delete_all
Follow.delete_all

# Users

user1 = User.create(
  username: "guest",
  password: "password",
  name: "Guest User",
  email: "guestuser@pixionary.com",
  bio: "I may be mysterious, but I do take good photos.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506538499/cadiz-189297_960_720_mnancn.jpg"
)

user2 = User.create(
  username: "crazyfox115",
  password: "password",
  name: "Helena Valk",
  email: "crazyfox115@pixionary.com",
  bio: "If you can't tell, I'm crazy about my favorite animal.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/blonde-1180343_960_720_xustjt.jpg"
)

user3 = User.create(
  username: "sammiesam",
  password: "password",
  name: "Samantha Covington",
  email: "sammiesam@pixionary.com",
  bio: "Aspiring actress. Cosplayer on the side. 🎭",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/aviator-1322701_960_720_mbsfkr.jpg"
)

user4 = User.create(
  username: "gvrabel",
  password: "password",
  name: "Gus Vrabel",
  email: "gvrabel@pixionary.com",
  bio: "I have a DSLR and I'm not afraid to use it for black and white pictures.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/photographer-1210243_960_720_hi0gh9.jpg"
)

user5 = User.create(
  username: "oscar89",
  password: "password",
  name: "Oscar Sandoval",
  email: "oscar89@pixionary.com",
  bio: "guitar 😎",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/guitarist-407212_960_720_plnrv8.jpg"
)

user6 = User.create(
  username: "igotyucovered",
  password: "password",
  name: "Jennifer Yu",
  email: "jenyu@pixionary.com",
  bio: "Photographer from San Francisco, CA 📷",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/girl-2205813_960_720_wbojej.jpg"
)

user7 = User.create(
  username: "",
  password: "whansen1962",
  name: "Will Hansen",
  email: "whansen1962@pixionary.com",
  bio: "My daughter told me this website was 'hella cool' so here I am.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/face-984031_960_720_pnhybd.jpg"
)

user8 = User.create(
  username: "browneyedgirl",
  password: "password",
  name: "Anita Khan",
  email: "browneyedgirl@pixionary.com",
  bio: "Vancouver => SF ✈️ ✈️ ✈️",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/studio-660804_960_720_fpjk5t.jpg"
)

user9 = User.create(
  username: "sonofchen",
  password: "password",
  name: "Wilson Chen",
  email: "sonofchen@pixionary.com",
  bio: "Foodie loving life in SF!",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506544404/sport-1815798_960_720_wysjt2.jpg"
)

user10 = User.create(
  username: "ulolonulloa",
  password: "password",
  name: "Ulrich Olsen",
  email: "ulolonulloa@pixionary.com",
  bio: "Viewing the sunset from the Sunset every day.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/self-2641581_960_720_i225k8.jpg"
)

user11 = User.create(
  username: "prancer81",
  password: "password",
  name: "Alondra Jenkins",
  email: "prancer81@pixionary.com",
  bio: "Ballet dancer living in NorCal! 💃🏻",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/woman-659348_960_720_uqgh2q.jpg"
)

user12 = User.create(
  username: "jalcantara",
  password: "password",
  name: "Jose Alcantara",
  email: "jalcantara@pixionary.com",
  bio: "Ready to start with warmth in my heart",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/man-1284310_960_720_yl0ont.jpg"
)

user13 = User.create(
  username: "branigan97",
  password: "password",
  name: "Bree Hannigan",
  email: "branigan97@pixionary.com",
  bio: "Poli-Sci major at Cal 🐻",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/girl-518321_960_720_yaxgkk.jpg"
)

user14 = User.create(
  username: "carriewilliamson",
  password: "password",
  name: "Carrie Williamson",
  email: "carriewilliamson@pixionary.com",
  bio: "If interested in my work via commission, contact my email.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/fashion-1048728_960_720_p8nho7.jpg"
)

user15 = User.create(
  username: "looking_glass_alice",
  password: "password",
  name: "Alice Kingman",
  email: "looking_glass_alice@pixionary.com",
  bio: "Look at all the things I spied on with my little eye!",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/selfie-933229_960_720_zoxyvm.jpg"
)

# Photos

Photo.create(
url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547138/road-220058_960_720_uabzye.jpg",
title: "Endless Horizons",
description: "This road just goes on and on...",
author_id: user1.id
)

Photo.create(
url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/mountain-landscape-640617_960_720_bpszng.jpg",
title: "Sun-kissed Hills",
description: "This fog was super dramatic.",
author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/sunset-169925_960_720_vjxlt5.jpg",
  title: "Sweltering Sunset",
  description: "Warm. Humid. Sweaty. Beautiful.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/countryside-2175353_960_720_qfr3ec.jpg",
  title: "Dramatic Rays",
  description: "These light rays emerged at the perfect time for this shot.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/mountain-2143877_960_720_tjcvjz.jpg",
  title: "Lone Rock",
  description: "This rock stands watch over the rest of the barren plain.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/landscape-1619283_960_720_brrxwt.jpg",
  title: "Mist",
  description: "Love how the plants peek through the fog.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/sunset-1326162_960_720_y7yinu.jpg",
  title: "The Red Hour",
  description: "I'm a sucker for red clouds during sunsets!",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547372/landscape-2211587_960_720_cgvtgp.jpg",
  title: "Expansive Farmland",
  description: "How many bugs live in this field before us?",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547373/mountain-1504197_960_720_evjnjm.jpg",
  title: "Quadrant",
  description: "Love how this one came out. Earth, water, and air come together.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547373/hut-1681485_960_720_ut2hnj.jpg",
  title: "Clearwater",
  description: "This shot looks straight out of a Bob Ross painting. Maybe more trees.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547373/mountains-1012425_960_720_yxtmsg.jpg",
  title: "Autumn",
  description: "Love how the sun hits these dying leaves.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506547373/snow-616319_960_720_he3f7p.jpg",
  title: "Glowing Gazebo",
  description: "This gazebo almost looks drawn on with how much it contrasts with the snow.",
  author_id: user1.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/snow-2597803_960_720_ttfvia.jpg",
  title: "Sunset Fox",
  description: "It looks so dignified!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/fox-2652814_960_720_fcgokk.jpg",
  title: "Cat Eye Fox",
  description: "This fox looks like it has cat eyes. Kind of unsettling.",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/animal-1850186_960_720_cdfe5f.jpg",
  title: "Tail Fox",
  description: "Trying to hide behind its fluffy tail!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/fox-1540833_960_720_pl2abx.jpg",
  title: "Water Fox",
  description: "Does it know it's staring at a reflection?",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/fox-1284512_960_720_fp3uwi.jpg",
  title: "Tree Fox",
  description: "Awww it found a stump to rest on!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/fox-1883658_960_720_fbf5x1.jpg",
  title: "Fluffy Fox",
  description: "I just want to tussle its belly!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/iceland-1979445_960_720_wbtaex.jpg",
  title: "Kit Fox",
  description: "Such a cute kit!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/t_media_lib_thumb/v1506551014/desert-fox-2444231_960_720_z9if0o.jpg",
  title: "Desert Fox",
  description: "Look how big its ears are! I wonder if that has to do with cooling itself.",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/animal-1842565_960_720_d86ofe.jpg",
  title: "Mad Fox",
  description: "This one doesn't look so happy!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551014/adorable-1853508_960_720_f6nebx.jpg",
  title: "White Fox",
  description: "Stared at me menacingly for a while. Still cute!",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551015/adorable-1851594_960_720_ynnn3r.jpg",
  title: "Not a Fox",
  description: "Is this called a Red Panda or something? Oh well, they're cute too.",
  author_id: user2.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/dead-pool-1903058_960_720_svlw7i.jpg",
  title: "Deadpool",
  description: "Not as easy to make one as the movies might suggest.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/chun-li-1724891_960_720_gxocom.jpg",
  title: "Chun Li",
  description: "Very enthusiastic in person!",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/starwars-1620970_960_720_bfsjae.jpg",
  title: "Tuskens",
  description: "Never saw one of these in person until now.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/geek-2441651_960_720_jks5is.jpg",
  title: "The Joker",
  description: "Sometimes you want more Mark Hamill than Heath Ledger.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/cosplay-2172325_960_720_qhgz06.jpg",
  title: "Harley Quinn",
  description: "She deserves all the fire emojis.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506551015/adorable-1851594_960_720_ynnn3r.jpg",
  title: "Captain America",
  description: "My money is on the Captain.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552365/alice-in-wonderland-872612_960_720_ibnvel.jpg",
  title: "Alice in Wonderland",
  description: "Not my favorite costume, but they were nice in person.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552364/cosplay-1546490_960_720_hyq6d8.jpg",
  title: "Mary Poppins",
  description: "Her costume was spic and span!",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552365/cosplay-980228_960_720_rdpse9.jpg",
  title: "Poison Ivy",
  description: "Absolutely nailed the look.",
  author_id: user3.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/people-741431_960_720_f6wbpj.jpg",
  title: "Vintage",
  description: "You'd think this photo was taken in the thirties were it not for the background.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/rosary-716250_960_720_nb86vl.jpg",
  title: "Rosary",
  description: "You see less of these than you used to.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/road-949832_960_720_srenu2.jpg",
  title: "Cobblestone",
  description: "Only a matter of time before this road is paved over anew.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506552365/cosplay-980228_960_720_rdpse9.jpg",
  title: "Finger in Hand",
  description: "So delicate and precious.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/hand-351277_960_720_zvzth9.jpg",
  title: "Handy",
  description: "Veins and bones in high relief.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/black-and-white-50272_960_720_ro92fw.jpg",
  title: "Rundown",
  description: "I wonder if trains still cross.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655731/cat-98359_960_720_pov9ju.jpg",
  title: "Feline Boredom",
  description: "He know what he's looking at.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655795/waterfall-2531194_960_720_i6ieec.jpg",
  title: "Waterfall",
  description: "So Smooth and yet so striated at once.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506655795/snails-700868_960_720_ezqg9k.jpg",
  title: "Snails",
  description: "They're probably hiding from me.",
  author_id: user4.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/acoustic-guitar-336479_960_720_zivslv.jpg",
  title: "Acoustic",
  description: "Nice finish!",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/guitar-1180744_960_720_ecmhsx.jpg",
  title: "Tough Fingerings",
  description: "Don't judge me!",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/guitar-586161_960_720_ikhj1k.jpg",
  title: "Gorgeous",
  description: "Really outdid themselves with this one.",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/bass-guitar-894524_960_720_wk4wzk.jpg",
  title: "Bass",
  description: "I can feel the power already.",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/guitar-2276181_960_720_sbca9q.jpg",
  title: "Outdoorsy",
  description: "Sometimes you just gotta get outside.",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657615/guitar-869217_960_720_wq6qkq.jpg",
  title: "Action Shot",
  description: "I didn't even know this picture was being taken.",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657229/acoustic-guitar-15598_960_720_xks79u.jpg",
  title: "Unorthodox Mechanics",
  description: "She's actually pretty good.",
  author_id: user5.id
)

Photo.create(
  url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506657828/guitar-2626339_960_720_fvaiva.jpg",
  title: "Chrome",
  description: "The green lighting looks SICK!",
  author_id: user5.id
)


Follow.create(
  follower_id: user1.id,
  following_id: user2.id
)

Follow.create(
  follower_id: user1.id,
  following_id: user3.id
)

Follow.create(
  follower_id: user1.id,
  following_id: user4.id
)

Follow.create(
  follower_id: user1.id,
  following_id: user5.id
)
