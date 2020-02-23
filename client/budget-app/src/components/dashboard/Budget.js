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


import Visual from '../dashboard/Visual'



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
    const [totalGas, setTotalGas] = useState(0)

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
                <a href='/Visual'>
                <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn" onClick={()=> setOpen(!open)}>
                    Visual
                </button>
                </a>
                {/* <button style={{color:'black', marginLeft:10,marginRight:10}}className="btn btn-large waves-effect waves-light hoverable green accent-3 main-btn" onClick={()=> setOpen(!open)}>
                    Dashboard
                </button> */}
                <a href='/Register'>
                    
                <button style={{color:'springgreen', marginLeft:10,marginRight:10}}>
                    Logout
                </button></a>


                <Visual />

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
                        {totalIncome-totalBill-totalExpense-totalSavings-totalLeisure-totalFood-totalEmergency-totalGas}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Bills:
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
                        Total Expenses:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalExpense(val.target.value)}
                        />
                        {totalIncome-totalBill-totalExpense}
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
                        {/* {(totalSavings/100)*totalIncome} */}
                        {totalIncome-totalBill-totalExpense-totalSavings}

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
                        {totalIncome-totalBill-totalExpense-totalSavings-totalLeisure}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Grocery:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalFood(val.target.value)}
                        />
                        {totalIncome-totalBill-totalExpense-totalSavings-totalLeisure-totalFood}
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
                        {totalIncome-totalBill-totalExpense-totalSavings-totalLeisure-totalFood-totalEmergency}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}>
                        Total Gas:
                        </InputLabel>
                        <Input 
                        style={{color: 'white'}}
                            onChange={(val)=>setTotalGas(val.target.value)}
                        />
                        {totalIncome-totalBill-totalExpense-totalSavings-totalLeisure-totalFood-totalEmergency-totalGas}
                        <br />
                        <InputLabel style={{
                            color: "springgreen"
                        }}> <div style={{color:'white'}}>
                            Total Remaining:
                            <h4 style={{color:'red'}}>{totalIncome-totalBill-totalExpense-totalSavings-totalLeisure-totalFood-totalEmergency-totalGas}</h4> </div>
                        </InputLabel>
                        
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