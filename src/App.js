import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

import Me from "./img/me.jpeg";
import Bg from "./img/bg2.jpg";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  title:{
    color: "green",
    fontWeight: "bold",
    cursor: "pointer"
  },
  links: {
    marginLeft: "auto",
   
  },
  link:{
    cursor: "pointer",
    fontWeight: "bold"
  },
  buttLink:{
    border: 'none',
    backgroundColor: 'green',
    color: 'White',
    padding: '.5em 1em',
    borderRadius: '5px',
    '&:hover': {
      background: "rgb(1, 100, 1)",
      cursor: 'pointer'
   },

  },
  gr:{
    margin: "0 1em"
  },
  tagline:{
    fontWeight: "normal",
    fontSize: "small",
fontStyle: "italic",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${Bg}')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
    

  },
  blogTitle: {
    fontWeight: 800,
    marginTop: '5rem',
    paddingBottom: theme.spacing(5),
    color: 'green',
    textAlign: 'center'
  },
  card: {
    maxWidth: "100%",
    borderRadius: "10px",
    backgroundColor: 'rgba(0, 128, 0, 0.15)'
  },
  cardCont:{
    color: 'green',
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
    
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },

  // About Page
  about:{
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.18)",
    padding: "1em",
  },
  abtHead:{
    color: "rgb(0, 128, 0)",

  },
  a:{
    textDecoration: "none",
    color: "rgba(0, 128, 0, 0.5)",
    '&:hover': {
      color: "rgb(0, 128, 0)",
      cursor: 'pointer'
   },
  },
  img:{
    width: "15em",
    borderRadius: "20px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
  },
  l:{
    listStyleType: "none",
  },
  foot:{
    textAlign: "center",
    fontSize: "small"
  },
}));

function About(){
  return(
    <div className="App">
      <img src={Me} alt="" className='profile'/>
      <Typography>
        Farouqh
      </Typography>
    </div>
  )
}

function App() {
  const classes = useStyles();

  const [page, setPage] = useState('home');

  function scrollToV(){
    setPage('home');
    setTimeout(() =>{
      var el = document.getElementById('articles');
      el.scrollIntoView({behavior: "smooth"});
    }, 200);
    
  }
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.title} onClick={() => setPage('home')}>
            BlueSpots Blog 
          </Typography>
          <div className={classes.links}>
        <Grid container className={classes.gr}>
          <Grid item xs={'auto'} >
                <Typography className={classes.link} onClick={() => setPage('home')}>
                   <button className={classes.buttLink}>Home</button> 
                </Typography>
          </Grid>
          <Grid item xs={'auto'} style={{marginLeft: '1em'}}>
                <Typography className={classes.link} onClick={() => scrollToV()}>
                   <button className={classes.buttLink}>Articles</button> 
                </Typography>
          </Grid>
          <Grid item xs={'auto'} style={{marginLeft: '1em'}}>
              <Typography className={classes.link} onClick={() => setPage('about')}>
                <button className={classes.buttLink}>About me</button> 
                </Typography>
          </Grid>
        </Grid>
         </div>
        </Toolbar>
      </AppBar>
      {(page === 'home') ? 
      <div>
      <Box className={classes.hero}>
        <Box>BlueSpots Blog</Box>
        {/* <Box className={classes.tagline}>  Helpful and informative programming articles</Box> */}
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle} id='articles'>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">
                    Deep Learning using NumPy
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    New React Router V6
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                     Mary Hopkins
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Data Analytics and Panda
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    Sarah Lee Chong
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smart Contract Using Solidity
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    Isaac Baldwin
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>

        <div className={classes.foot}>
          &copy; BlogSpot 2021. All rights reserved
        </div>
        
      </Container>
      </div>
        : 
        <Box className={classes.about}>
          <h2 className={classes.abtHead}>About me</h2>
          <div><img src={Me} alt='my picture' className={classes.img}/></div>
          <p>I am a student of Nile University, welcome to BlogSpot. Enjoy..!</p>
          <ul className={classes.l}>

          <h3 className={classes.abtHead}>Contact me</h3>
            <li>Phone Number: <a href="tel:+2349075113292" className={classes.a}>0907 511 3292</a></li>
            <li>Email: <a href="mailto:faruqbeebz@gmail.com" className={classes.a}>faruqbeebz@gmail.com</a></li>
            <li>Instagram: <a href="https://instagram.com/farouqh_beebx" className={classes.a}>@farouqh_beebx</a></li>
          </ul>

        <div className={classes.foot}>
          &copy; BlogSpot 2021. All rights reserved
        </div>
        </Box>
        }
    </div>
    
  );
}

export default App;
