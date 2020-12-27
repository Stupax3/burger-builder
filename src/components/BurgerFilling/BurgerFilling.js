import React, { Component } from 'react';
import classes from './BurgerFilling.css';
import PropTypes from 'prop-types';

class BurgerFilling extends Component {
    render () {
        let filling = null;
    
        switch (this.props.type) {
            case ('bottom-bread'):
                filling = <div className={classes.BreadBottom}></div>
            break;
            case ('top-bread'):
                filling = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                )
            break;
            case ('Cheese'):
                filling = <div className={classes.Cheese}></div>
                break;
            case ('meat'):
                filling = <div className={classes.Meat}></div>
                break;
            case ( 'bacon' ):
                filling = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
            filling = <div className={classes.Salad}></div>;
                break;
            default:
                filling = null;
    
        }
    
        return filling;
    }


};

BurgerFilling.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerFilling;