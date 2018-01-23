/*                                                                                   
 * contaner/home/swipeheader
 **/

import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
//import Pagination from './docs/src/modules/components/Pagination'
import SupportTouch from './docs/src/modules/components/SupportTouch';
import styles from './styles'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

class SwipeHeader extends Component{
    state = {
	index: 0,
    };

    handleChangeIndex = index => {
	this.setState({
	    index,
	});
    };
    render(){
	const { index } = this.state
	const { classes } = this.props
        return(
		<SupportTouch><div style={styles.root}>
		<AutoPlaySwipeableViews
	    enableMouseEvents={true} index={index} onChangeIndex={this.handleChangeIndex}>
		<div className={classes.bg} style={{
		    backgroundImage:`url(${require('../imgs/img/background01-1.png')})`,
		}}>
		<Typography className={ classes.bgfont } type="headline" >We Create</Typography>
		<Typography className={ classes.bgfont } type="headline" >New Exchange & Marketing !</Typography>
		</div>
		<div className={ classes.bg } style={{
		    backgroundImage:`url(${require('../imgs/img/background01-2.png')})`,
		}}>
		<Typography className={ classes.bgfont } type="headline" >We Are Changing</Typography>
		<Typography className={ classes.bgfont } type="headline" >The Whole World !</Typography>
		</div>
		<div className={ classes.bg } style={{
		    backgroundImage:`url(${require('../imgs/img/background01-3.png')})`,
		}}>
		<Typography className={ classes.bgfont }
	    style={{color:'#73c9b1'}} type="headline" >We Build the Trust</Typography>
		<Typography className={ classes.bgfont }
	    style={{color:'#73c9b1'}} type="headline" >More Open & Secure !</Typography>
		</div>
		</AutoPlaySwipeableViews>
		</div></SupportTouch>
        )
    }
}

SwipeHeader.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SwipeHeader)

