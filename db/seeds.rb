15.times do
  Item.create(title: FFaker::Lorem.word, body: FFaker::Lorem.sentence)
end
