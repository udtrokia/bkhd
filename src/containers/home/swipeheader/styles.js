/*
 * html styles
 */

const styles = theme =>{
    console.log(theme)
    return({
	root: {
	    position: 'relative',
	},
	slide: {
	    padding: 15,
	    minHeight: 100,
	    color: '#fff',
	},
	slide1: {
	    backgroundColor: '#FEA900',
	},
	slide2: {
	    backgroundColor: '#B3DC4A',
	},
	slide3: {
	    backgroundColor: '#6AC0FF',
	},
	bg: {
	    backgroundSize:'cover',
	    height:'57vh',
	    display:'flex',
	    flex:1,
	    justifyContent:'center',
	    alignItems:'center',
	    flexDirection:'column'
	},
	bgfont:{
	    color:'#fff',
	    margin:5
	}
    })
}

export default styles
