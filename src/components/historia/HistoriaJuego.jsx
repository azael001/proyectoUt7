import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import  Grid from "@mui/material/Grid2";
function HistoriaJuego() {
    return(
          <Grid container direction="column" sx={{justifyContent: "center",alignItems: "center", }}>
          <Grid size={{xs:12, md:12 , xl:12}}>
            <h1 style={{ textAlign: "center" }} >Historia</h1>
            </Grid>
            <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:2}} style={{ alignItems: "center" }}>
            <Card style={{ textAlign: "center" }} sx={{ maxWidth: 1245 , m:"auto"}}  >
              <CardContent >
              <Typography sx={{ fontSize: "1.7rem" }}>En el tranquilo pueblo de Villamisterio, el asesinato de Don Andrés, el alcalde, ha dejado a todos en shock. El cuerpo fue encontrado en su oficina, con una herida mortal en la cabeza. Nadie entiende por qué alguien querría hacerle daño a un hombre tan querido por la comunidad.
                                                        Los tres principales sospechosos son María, la escritora reciente en el pueblo, Juan, el comerciante local, y Pepe, el jardinero del alcalde. Cada uno de ellos tiene un motivo potencial, pero las pruebas son escasas.
                                                        A medida que los investigadores profundizan, empiezan a descubrir secretos que ninguno de los tres está dispuesto a revelar. Pero, como en todo misterio, las pistas empiezan a señalar una única verdad.</Typography>
              </CardContent>
          </Card>
          </Grid>   
        </Grid>
 )
}
export default HistoriaJuego