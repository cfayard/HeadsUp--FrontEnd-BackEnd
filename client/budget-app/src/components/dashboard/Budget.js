import React, { Component, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { Button, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputUnderline: {borderBottomColor: "black"},
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  export default function Budget() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [totalIncome, setTotalIncome] = useState(0)
    const [budgetCalc, setBudgetCalc] = useState([])

       
        return (
            <div>
                <h1>
                    This is the budget page!
                </h1>
                <Button onClick={()=> setOpen(!open)}>
                    Projected Budget
                </Button>
                <Modal 
                className={classes.modal}     
                open={open} 
                >
                    <div style={{width:600,height:500, background:'white'}}>
                        <div onClick={()=>setOpen(!open)}>X</div>
                        <InputLabel>
                        Total Income:
                        </InputLabel>
                        <Input 
                        
                            onChange={(val)=>setTotalIncome(val.target.value)}
                        />
                        {totalIncome}
                        <br />
                        <InputLabel>
                        Total Income:
                        </InputLabel>
                        <Input 
                        
                            onChange={(val)=>setTotalIncome(val.target.value)}
                        />
                        {totalIncome}
                    </div>
                </Modal>
            </div>
        )
    
}

