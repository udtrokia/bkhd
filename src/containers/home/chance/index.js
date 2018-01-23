import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'

const styles = theme =>({
    img:{
	width:"85%",
	height:'85%'
    }
})

const Service = styles => {
    const { classes } = styles
    return(
	    <Grid
	style={{paddingTop:96 ,paddingRight:48, paddingLeft:48, paddingBottom:128, backgorundColor:'#ddd'}} align="center" >
	    <Grid item><Typography color="secondary" align="center" type="headline"
	style={{fontWeight:'bold'}}
	    >我们的团队</Typography>
	    <Divider style={{backgroundColor:'#73c9b1', height:5, width:36, marginTop:14,marginBottom:42}}/></Grid>
	    <Grid container justify="center" direction="row" style={{paddingTop:64}}>

	    </Grid>
	    </Grid>
    )
}

export default withStyles(styles)(Service)
