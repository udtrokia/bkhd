import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

const styles = theme =>({
    img:{
	width:'8vw'
    }
})

const Service = styles => {
    const { classes } = styles
    return(
	    <Grid
	style={{paddingTop:128 ,paddingRight:48, paddingLeft:48, paddingBottom:128,
		backgroundImage:`url(${require('../imgs/img/background02.png')})`}} align="center" >
	    <Grid item><Typography color="secondary" align="center" type="headline"
	style={{color:'#fff', fontWeight:'bold'}}
	    >我们的流程</Typography>
	    <Divider style={{backgroundColor:'#73c9b1', height:5, width:36, marginTop:14,marginBottom:42}}/></Grid>
	    <Grid container justify="center" direction="row" style={{marginTop:30}}>
	    <Grid item xs={12} sm={3}>
	    <img alt="step" className={classes.img} src={require('../imgs/img/step01.png')}/>
	    <Typography type="subheading" style={{color:'#fff',fontWeight:'bold',margin:12}}>产品咨询</Typography>	
	    <Typography type="subheading" style={{color:'#fff', marginTop:0,margin:8}}
	    >通过产品咨询，产品经理会为您梳理需求提供的产品解决方案以及原型设计</Typography></Grid>
	    <Grid item xs={12} sm={3}>
	    <img alt="step" className={classes.img} src={require('../imgs/img/step02.png')}/>
	    <Typography type="subheading" style={{color:'#fff',fontWeight:'bold',margin:12}}>产品咨询</Typography>	
	    <Typography type="subheading" style={{color:'#fff', marginTop:0,margin:8}}
	    >设计师根据产品特性和用户属性进行UI设计，提升产品体验</Typography></Grid>
	    <Grid item xs={12} sm={3}>
	    <img alt="step" className={classes.img} src={require('../imgs/img/step03.png')}/>
	    <Typography type="subheading" style={{color:'#fff',fontWeight:'bold',margin:12}}>产品咨询</Typography>	
	    <Typography type="subheading" style={{color:'#fff', marginTop:0,margin:8}}
	    >根据产品需求和原型，工程师进入开发阶段，规范的代码保障项目质量</Typography></Grid>
	    <Grid item xs={12} sm={3}>
	    <img alt="step" className={classes.img} src={require('../imgs/img/step04.png')}/>
	    <Typography type="subheading" style={{color:'#fff',fontWeight:'bold',margin:12}}>产品咨询</Typography>	
	    <Typography type="subheading" style={{color:'#fff', marginTop:0,margin:8}}
	    >通过内部测试和第三方专业测试及时发现修复bug，顺利部署上线</Typography></Grid>	    
	    </Grid>
	    </Grid>
    )
}

export default withStyles(styles)(Service)
