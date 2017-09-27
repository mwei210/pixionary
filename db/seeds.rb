# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Photo.delete_all

User.create(
  username: "guest",
  password: "password",
  name: "Guest User",
  email: "guestuser@pixionary.com",
  bio: "I may be mysterious, but I do take good photos.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506538499/cadiz-189297_960_720_mnancn.jpg"
)

User.create(
  username: "crazyfox115",
  password: "password",
  name: "Helena Valk",
  email: "crazyfox115@pixionary.com",
  bio: "If you can't tell, I'm crazy about my favorite animal.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/blonde-1180343_960_720_xustjt.jpg"
)

User.create(
  username: "sammiesam",
  password: "password",
  name: "Samantha Covington",
  email: "sammiesam@pixionary.com",
  bio: "Aspiring actress. Cosplayer on the side. 🎭",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/aviator-1322701_960_720_mbsfkr.jpg"
)

User.create(
  username: "gvrabel",
  password: "password",
  name: "Gus Vrabel",
  email: "gvrabel@pixionary.com",
  bio: "I have a DSLR and I'm not afraid to use it",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/photographer-1210243_960_720_hi0gh9.jpg"
)

User.create(
  username: "oscar89",
  password: "password",
  name: "Oscar Sandoval",
  email: "oscar89@pixionary.com",
  bio: "😎",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/face-2351158_960_720_yvpr3w.jpg"
)

User.create(
  username: "igotyucovered",
  password: "password",
  name: "Jennifer Yu",
  email: "jenyu@pixionary.com",
  bio: "Photographer from San Francisco, CA 📷",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/girl-2205813_960_720_wbojej.jpg"
)

User.create(
  username: "",
  password: "whansen1962",
  name: "Will Hansen",
  email: "whansen1962@pixionary.com",
  bio: "My daughter told me this website was 'hella cool' so here I am.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/face-984031_960_720_pnhybd.jpg"
)

User.create(
  username: "browneyedgirl",
  password: "password",
  name: "Anita Khan",
  email: "browneyedgirl@pixionary.com",
  bio: "Vancouver => SF ✈️ ✈️ ✈️",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541830/studio-660804_960_720_fpjk5t.jpg"
)

User.create(
  username: "sonofchen",
  password: "password",
  name: "Wilson Chen",
  email: "sonofchen@pixionary.com",
  bio: "Techie loving life in SF!",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506544404/sport-1815798_960_720_wysjt2.jpg"
)

User.create(
  username: "ulolonulloa",
  password: "password",
  name: "Ulrich Olsen",
  email: "ulolonulloa@pixionary.com",
  bio: "Viewing the sunset from the Sunset every day.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/self-2641581_960_720_i225k8.jpg"
)

User.create(
  username: "prancer81",
  password: "password",
  name: "Alondra Jenkins",
  email: "prancer81@pixionary.com",
  bio: "Ballet dancer living in NorCal! 💃🏻",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/woman-659348_960_720_uqgh2q.jpg"
)

User.create(
  username: "jalcantara",
  password: "password",
  name: "Jose Alcantara",
  email: "jalcantara@pixionary.com",
  bio: "Ready to start with warmth in my heart",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/man-1284310_960_720_yl0ont.jpg"
)

User.create(
  username: "branigan97",
  password: "password",
  name: "Bree Hannigan",
  email: "branigan97@pixionary.com",
  bio: "Poli-Sci major at Cal 🐻",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/girl-518321_960_720_yaxgkk.jpg"
)

User.create(
  username: "carriewilliamson",
  password: "password",
  name: "Carrie Williamson",
  email: "carriewilliamson@pixionary.com",
  bio: "If interested in my work via commission, contact my email.",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/fashion-1048728_960_720_p8nho7.jpg"
)

User.create(
  username: "looking_glass_alice",
  password: "password",
  name: "Alice Kingman",
  email: "looking_glass_alice@pixionary.com",
  bio: "Look at all the things I spied on with my little eye!",
  profile_photo_url: "https://res.cloudinary.com/doo201f3d/image/upload/v1506541829/selfie-933229_960_720_zoxyvm.jpg"
)
