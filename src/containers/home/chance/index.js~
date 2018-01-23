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
	    <Grid xs={12} sm={3} >
	    <Typography gutterBottom><Avatar className={classes.img} src={require('../imgs/img/sam.png')}/></Typography>
	    <Typography gutterBottom type="headline" color="secondary">Sam Lee</Typography>
	    <Typography gutterBottom type="subheading" color="secondary">区块链集团 Founder & CEO</Typography>	    
	    </Grid>
	    <Grid xs={12} sm={3} >
	    <Typography gutterBottom><Avatar className={classes.img} src={require('../imgs/img/layla.png')}/></Typography>
	    <Typography gutterBottom type="headline" color="secondary">Layla Dong</Typography>
	    <Typography gutterBottom type="subheading" color="secondary">Blockheaders Founder</Typography>	    
	    </Grid>
	    <Grid xs={12} sm={3} >
	    <Typography gutterBottom><Avatar className={classes.img} src={require('../imgs/img/jack.png')}/></Typography>
	    <Typography gutterBottom type="headline" color="secondary">晋剑</Typography>
	    <Typography gutterBottom type="subheading" color="secondary">CEO</Typography>	    
	    </Grid>
	    <Grid xs={12} sm={3} >
	    <Typography gutterBottom><Avatar className={classes.img} src={require('../imgs/img/KJ.png')}/></Typography>
	    <Typography gutterBottom type="headline" color="secondary">阚嘉 KJ</Typography>
	    <Typography gutterBottom type="subheading" color="secondary">CTO</Typography>	    
	    </Grid>	    
	    </Grid>
	    </Grid>
    )
}

export default withStyles(styles)(Service)
