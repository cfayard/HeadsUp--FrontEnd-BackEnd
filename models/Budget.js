const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
  Id: {
    type: Schema.Types.ObjectId, 
    ref: "users"
  },
  userId: {
    type: String, 
    ref: "users"
  },
  totalIncome: {
    type: Number,
    required: true
  },
  totalBills: {
    type: Number
  },
  totalExpenses: {
    type: Number
  },
  totalSavings: {
    type: Number
  },
  totalLeisure: {
    type: Number
  },
  totalGrocery: {
    type: Number
  },
  totalEmergency: {
    type: Number
  },
  totalGas: {
    type: Number
  }
});
module.exports = Budget = mongoose.model("budget", BudgetSchema);