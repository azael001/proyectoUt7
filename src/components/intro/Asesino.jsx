import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import  Grid from "@mui/material/Grid2";
function Asesino() {
    return(
    <Grid container direction="row" sx={{justifyContent: "space-between",alignItems: "center", }}>
      <Grid size={{xs:12, md:12 , xl:12}}>
      <h1 style={{ textAlign: "center" }}>¿Quién es el asesino?</h1>
      </Grid>
      <Grid size={{xs:12, md:12 , xl:12}} >
     <Typography>En el tranquilo pueblo de Villamisterio, tres personas aparentemente comunes esconden secretos que podrían cambiarlo todo. La partida está a punto de comenzar, y cada jugador debe descubrir la verdad... o protegerla a toda costa.</Typography>
      </Grid>
    <Grid size={{ xs: 8, md: 6 ,xl:4}} sx={{mt:4,}} >
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
         sx={{
          height: 240, objectFit: "contain", }}
          component="img"
          image="./public/maria.png"
          alt="immgMaria"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Maria
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          María es la misteriosa escritora que llegó al pueblo hace un año. Siempre con una libreta en mano, parece estar documentando algo importante. Sus relatos están llenos de oscuros crímenes que parecen extrañamente familiares. ¿Es su imaginación... o está ocultando un pasado peligroso?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid size={{ xs: 8, md: 6,xl:4 }}sx={{mt:4}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{
          height: 240, objectFit: "contain", }}
          component="img"
          height="140"
          image="./public/pepe.png"
          alt="imgPepe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pepe
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Pepe es el simpático panadero del pueblo. Siempre tiene una sonrisa para todos y es conocido por sus deliciosas magdalenas. Pero detrás de su amable fachada, parece saber más de lo que deja ver. ¿Es simplemente un buen oyente... o un maestro manipulador?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid size={{ xs: 8, md: 6,xl:4 }}sx={{mt:4}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{
          height: 240, objectFit: "contain", }}
          component="img"
          height="140"
          image="./public/juan.png"
          alt="img Juan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Juan
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Juan es el carismático mecánico que arregla todo lo que se le pone por delante. Le encanta charlar con los vecinos y conoce cada rincón del pueblo. Pero hay rumores de que trabaja en algo más que coches... ¿Es solo un buen vecino o está ocultando un lado oscuro?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    )


}


export default Asesino