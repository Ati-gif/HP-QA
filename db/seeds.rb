# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all

potion = Category.create(name:'Potions')
darkart = Category.create(name:"Dark Arts")
charm = Category.create(name:'Charms')
herbology = Category.create(name:'Herbology')

potion.cards.create(question:'What potion is created by mixing powdered root of asphodel to an infusion of wormwood?', answer:'The Draught of the Living Death potion', answered:false)
potion.cards.create(question:"What is the name of the potion that temporarily grants the user good luck?", answer:'Felix Felicis', answered:false)

darkart.cards.create(question:"How many unforgivable curses are there?", answer:'Three', answered:false)
darkart.cards.create(question:"What is the incantation of the spell that can expel a boggart?", answer:'Riddikulus', answered:false)

charm.cards.create(question:'What is the incantation for the shield charm?', answer:'Protego', answered:false)
charm.cards.create(question:"What is the primary use of the charm Scourgify?", answer:'Cleaning', answered:false)

herbology.cards.create(question:'What plant helps you breath under water?', answer:'Gillyweed', answered:false)
herbology.cards.create(question:"Dittany is used primarily for what purpose?", answer:'Healing', answered:false)