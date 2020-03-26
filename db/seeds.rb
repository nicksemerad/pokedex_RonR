10.times do
  Pokemon.create(
    name: Faker::Games::Pokemon.name,
    location: Faker::Games::Pokemon.location,
    move: Faker::Games::Pokemon.move,
    level: 1
  )
end

puts 'Data Seeded'