const router = require('express').Router();
const Animal = require('../models/Animal')

router.get('/', (req, res) => {
    Animal.findAll().then((animals) => {
        res.json(animals);
    });
});

router.get('/dangerous', (req, res) => {
    Animal.findAll({
        order: ['name'],
        where: {
            is_dangerous: true
        },
        attributes: {
            exclude: ['is_dangerous']
        }
    }).then((animals) => {
        res.json(animals);
    });
});

router.get('/:id', (req, res) => {
    Animal.findByPk(req.params.id).then((animal) => {
        res.json(animal);
    });
});

router.put('/:id', (req, res) => {
    Animal.update(req.body,{where:{id: req.params.id}}).then(updatedAnimal => {
        res.json(updatedAnimal);
    })
});

router.delete('/:id', (req, res) => {
    Animal.destroy({where:{id:req.params.id}}).then(() => {
        res.send('animal deleted!');
    })
});

router.post('/', (req, res) => {
    Animal.create(req.body)
    .then((animal) => {
        res.json(animal);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post('/seed', (req, res) => {
    Animal.bulkCreate([
        {
            name: 'humpy',
            species: 'camel',
            class: 'mammal',
            is_dangerous: false
        },
        {
            name: 'squishy',
            species: 'jellyfish',
            class: 'scyphozoa',
            is_dangerous: true
        },
        {
            name: 'steven',
            species: 'turtle',
            class: 'reptile',
            is_dangerous: false
        },
    ])
    .then(() => {
        res.send('zoo populated!');
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;