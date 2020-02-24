const Budget = require('../models/Budget')
const express = require("express");
const router = express.Router();

const budgetController = {
    index: (req, res) => {
        Budget.find().then((songs) => {
          res.json(songs)
        }).catch((err) => {
          console.log(err)
        })
      },
      show: (req, res) => {
        Budget.find()
            .then((Budget) => {
                res.send(Budget)
            })
    },
    update: (req, res) => {
        Budget.findByIdAndUpdate(req.params.id, req.body)
            .then((updatedBudget) => {
                updatedBudget.save()
                res.send(updatedBudget)
            })
    },
    delete: (req, res) => {
        Budget.findByIdAndDelete(req.params.id)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
       
                Budget.create(req.body)
                    .then((newBudget) => {
                      
                        budget.save()
                        res.send(newBudget)
                    })
        
    }
}
module.exports = budgetController

router.get("/budget", budgetController.show)