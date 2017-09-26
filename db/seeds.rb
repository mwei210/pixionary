# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create(
  username: "guest",
  password: "password",
  name: "Guest User",
  email: "randomname@example.com"
)

# 20.times do
#   user = Faker::Name.unique.name
#   User.create(
#     username: user,
#     email: Faker::Internet.safe_email(user),
#
#   )
# end
