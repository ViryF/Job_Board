const db = require('../db')
const {Employer, Seeker } = require('../models')



// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const employers = [
        { email: 'fake@fake.com', companyName: 'NCD' },
        { email: 'genius@genius.com', companyName: 'i4 Search Group' },
        { email: 'hello@hello.com', companyName: 'Sedona Technologies Government Services' }
    ]

    const seekers = [
      { email: 'email1@email.com', firstName: 'Job', lastName: 'Seeker' }, 
      { email: 'true@true.com', firstName: 'Casually', lastName: 'McBrowsing' }
    ]


    await Employer.insertMany(employers)
    console.log("Created some employers!")
    await Seeker.insertMany(seekers)
    console.log("Created some job seekers!")
}
const run = async () => {
    await main()
    db.close()
}

run()