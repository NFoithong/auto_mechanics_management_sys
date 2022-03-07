const router = require('express').Router();
const { User, Schedule, Car, Repairs } = require('../../models');
const withAuth = require('../../utils/auth');
// A second post request will be needed to add the car to the database
// is it easier to make two separate post requests or combine it all into one?
router.post('/', withAuth, async (req, res) => {
    try {
        const carData = await Car.create({
            make: req.body.make,
            vin: req.body.vin,
            model: req.body.model,
            mileage: req.body.mileage,
            year: req.body.year,
            user_id: req.session.user_id
        })
        const scheduleData = await Schedule.create({
            Date: req.body.date,
            user_id: req.session.user_id,
        })
        const repairData = await Repairs.create({
            car_id: carData.id,
            user_id: req.session.user_id,
            item: req.body.item,
            status_id: null
        })
        res.json({carData,scheduleData,repairData})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// need a post request that allows user to post their apoointment data to server
// sign up page
// router.post('/', withAuth, (req, res) => {
//     // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
//     Schedule.create({
//       Date: req.body.date,
//       user_id: req.session.id,
//     //   I need to pass through car id here as well but not exactly sure how to accomplish that car_id: 
//     })
//       .then(apptData => {
//         res.json(apptData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });




// do I also need to make a third post request to repairs to update what repairs are being done?
// router.post('/', (req, res) => {
//     Repairs.create({
//       item: req.body.model,
//       status_id: req.body.status_id,
//       user_id: req.session.id
//     })
//       .then(carData => {
//         res.json(carData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;