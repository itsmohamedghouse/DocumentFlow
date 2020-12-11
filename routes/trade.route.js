const express = require('express')
const router = express.Router()
const Trade = require('../models/trade.models')

// Get all field
router.get('/', async (req, res, next) => {
    try {
        const results = await Trade.find({},{_id:0,Description:0,Policy:0,Condition:0,HS_4:0,HS_5:0,HS_6:0,HS_8:0});
        res.send(results)
    } catch (error) {
        console.log(error.message)
    }
});


//Create new field
router.post('/', async (req, res, next) => {
    try {
        const trade = new Trade(req.body)
        const result = await trade.save()
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
})

//Get a field by id
router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const result = await Trade.find({"_id":id},{_id:0,Description:0,Policy:0,Condition:0,HS_4:0,HS_5:0,HS_6:0,HS_8:0})
    res.send(result);
});

//Update a field by id
router.patch('/:id', (rea, res, next) => {
    res.send('updating a single product')
});

//Delete a field by id
router.delete('/:id', (rea, res, next) => {
    res.send('deleting a single product')
});




























// //Getiing All
// router.get('/', async (req, res) => {
//     try {
//         const tariffs = await TariffChecks.find()
//         res.json(tariffs)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })
// //Getiing One
// router.get('/:id', getTariff, (req, res) => {
//     res.json(res.tariff)
// })

// // Creating one
// router.post('/', async (req, res) => {
//     const tariff = new TariffChecks({
//         hsn: req.body.hsn,
//         impcon: req.body.impcon,
//         expcon: req.body.expcon
//     })
//     try {
//         const newTariff = await tariff.save()
//         res.status(201).json(newTariff)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// //Updating One
// router.patch('/:id', getTariff, async (req, res) => {
//     if (req.body.hsn != null) {
//         res.tariff.hsn = req.body.hsn
//     }
//     try {
//         const updatedTariff = await res.tariff.save()
//         res.json(updatedTariff)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// //Deleting One
// router.delete('/:id', getTariff, async (req, res) => {
//     try {
//         await res.tariff.remove()
//         res.json({ message: 'Deleted Tariff' })
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// async function getTariff(req, res, next) {
//     let tariff
//     try {
//         tariff = await TariffChecks.findById(req.params.id)
//         if (tariff == null) {
//             return res.status(404).json({ message: 'Cannot find Tariff' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//     res.tariff = tariff
//     next()
// }

module.exports = router