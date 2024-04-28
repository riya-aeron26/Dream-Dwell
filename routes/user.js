const router = require("express").Router()
const Booking = require("../models/Booking")
const User = require("../models/User")
const Listing = require("../models/Listing")

//get trip list
router.get("/:userId/trips", async(req, res) => {
    try{
        const {userId} = req.params
        const trips = await Booking.find({customerId: userId}).populate("customerId hostId listingId")
        res.status(202).json(trips)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: "cannot find trips", error: err.message})
    }
})

//get property list
router.get("/:userId/properties", async(req, res) => {
    try{
        const {userId} = req.params
        const properties = await Listing.find({creator: userId}).populate("creator")
        res.status(202).json(properties)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: "cannot find properties", error: err.message})
    }
})

//get reservation list
router.get("/:userId/reservations", async(req, res) => {
    try{
        const {userId} = req.params
        const reservations = await Booking.find({hostId: userId}).populate("customerId hostId listingId")
        res.status(202).json(reservations)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: "cannot find reservations", error: err.message})
    }
})

module.exports = router