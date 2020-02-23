import React, { Component, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { Button, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getTransactions,
  
  } from "../../actions/accountActions";
  import { logoutUser } from "../../actions/authActions";





const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'silver'
    },
    inputUnderline: {borderBottomColor: "silver"},
    fontColor: {fontColor: "silver"},
    paper: {
      backgroundColor: "theme.palette.background.paper",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const Budget = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalBill, setTotalBill] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalSavings, setTotalSavings] = useState(0)
    const [totalLeisure, setTotalLeisure] = useState(0)
    const [totalFood, setTotalFood] = useState(0)
    const [totalEmergency, setTotalEmergency] = useState(0)

    const [budgetCalc, setBudgetCalc] = useState([])

       
        return (
            <div >

                <h1 style={{
                    fontSize: "22px"
                }}>
                    If your anything like me, you need to budget....👇
                </h1>
                <a href="/Dashboard">
                    <button style={{color:'black', marginLeft:10,marginRight:10}} className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn">
                        Linked Accounts
                    </button>
                </a>
                <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn" onClick={()=> setOpen(!open)}>
                    Projected Budget
                </button>
                <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn" onClick={()=> setOpen(!open)}>
                    Actual Budget
                </button>
                <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn" onClick={()=> setOpen(!open)}>
                    Dashboard
                </button>
                <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn"
                onClick=
                    {console.log('truth')}
                >
                    Logout
                </button>

                <Modal 
                className={classes.modal}     
                open={open} 
                >
                    <div style={{width:600,height:500, backgroundColor:'black'}}>
                        <div onClick={()=>setOpen(!open)}>X</div>
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Income:
                        </InputLabel>
                        <Input 
                            style={{color: 'white'}}
                            onChange={(val)=>setTotalIncome(val.target.value)}
                        />
                        {totalIncome}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Bill:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalBill(val.target.value)}
                        />
                        {totalIncome-totalBill}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Expense:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalExpense(val.target.value)}
                        />
                        {totalExpense}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Savings:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalSavings(val.target.value)}
                        />
                        {(totalSavings/100)*totalIncome}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Leisure:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalLeisure(val.target.value)}
                        />
                        {totalLeisure}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Food:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalFood(val.target.value)}
                        />
                        {totalFood}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Emergency:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalEmergency(val.target.value)}
                        />
                        {totalEmergency}
                        <br />
                    </div>

                    
                </Modal>


            </div>
            
        )
    
}

  
const mapStateToProps = state => ({
    plaid: state.plaid
  });
  export default connect(
    mapStateToProps,
    { logoutUser, getTransactions }
  )(Budget);