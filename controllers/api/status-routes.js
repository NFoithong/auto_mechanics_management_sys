const router = require('express').Router();
const { User, Car, Repairs} = require('../../models');
const withAuth = require('../../utils/auth');

// the status page should first show user all the cars they have registered 
// so they can select which one they would like to the staus of
// this will be a get request

router.get('/', withAuth, (req, res) => {
    // find user that matches with the corresponding id
    User.findOne({
      where: {
        // use the ID from the session
        id: req.session.id
      },
    //   include the Cars model to show all active cars registered to that user
      include: [
        {
          model: Car,
          attributes: ['id','make','model','vin','year']
        }
      ]
    })
    // then pass cars into the template
      .then(carData => {
        //   if user doesnt have any cars, let them know
        if (!carData) {
            // error message might be different from actually letting them know they dont have cars registered
            res.status(404).json({ message: 'You have not yet registered any cars' });
            return;
          }
        // serialize data before passing to template
        const cars = carData.map(car => car.get({ plain: true }));
        // render the options status page ****** NEED TO PUDATE FILE NAME
        res.render('status', { cars, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// once the user selects a specific car they would like to view the status for
// get the car id from the req.params
  router.get('/cars/:id', withAuth, (req, res) => {
    // find the car that matches with the corresponding id
    Car.findOne({
      where: {
        // grab car id from the params
        id: req.params.id
      },
      attributes: ['id','make','model','vin','year'],
    //   include the Repairs model to show all active issues for that car
      include: [
        {
          model: Repairs,
          attributes: ['id','item','status_id']
        }
      ]
    })
    // then pass posts into the template
      .then(carData => {
        // feed car data back to page
        res.json(carData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;