import React from 'react';
import classes from './Burger.css';
import BurgerFilling from '../BurgerFilling/BurgerFilling'


const burger = (props) => {
    let fillingTransform = Object.keys(props.fillings)
    .map((filling) => {
        console.log(filling);
        return filling
    })
    console.log(fillingTransform);
    return (
        <div className={classes.Burger}>
            <BurgerFilling type='top-bread' />
            <BurgerFilling type='Cheese' />
            <BurgerFilling type='bacon' />
            <BurgerFilling type='salad' />
            <BurgerFilling type='meat' />
        </div>
    );
};

export default burger;