import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import  Grid from "@mui/material/Grid2";
function Explicacion() {
    return(
    <Grid container direction="column" sx={{justifyContent: "center",alignItems: "center", }}>
    <Grid size={{xs:12, md:12 , xl:12}}>
      <h1 style={{ textAlign: "center" }} >Explicacion</h1>
      </Grid>
      <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:2}} style={{ alignItems: "center" }}>
      <Card style={{ textAlign: "center" }} sx={{ maxWidth: 1245 , m:"auto"}}  >
        <CardContent >
        <Typography sx={{ fontSize: "1.5rem" }}>María, la escritora misteriosa que llegó al pueblo un año atrás, es la culpable del asesinato. Aunque al principio parecía ser una simple forastera con un pasado oscuro, su historia oculta una verdad más perturbadora. María había sido la amante secreta de don Andrés, y su relación había sido mantenida en secreto, no solo por él, sino por ella misma.
                    Don Andrés, temeroso de que su relación con María se hiciera pública y dañara su imagen de alcalde, comenzó a distanciarse de ella. Sin embargo, ella no estaba dispuesta a ser descartada. La humillación y el rechazo la llevaron a planear su venganza. El asesinato fue premeditado: María sabía que don Andrés pasaba largas horas en su oficina y planeó el crimen con precisión. La herida en la cabeza fue un golpe mortal, y la escena del crimen fue cuidadosamente preparada para que pareciera un asesinato sin motivo.
                    María, lejos de ser una simple escritora, tenía un control psicológico sobre las personas, algo que había aprendido a lo largo de los años. Manipuló a todos a su alrededor, sembrando dudas y sospechas entre los habitantes del pueblo mientras ocultaba sus propios motivos. Pero al final, su desesperación por mantener su relación secreta y su miedo a la exposición la empujaron a cometer el asesinato, cambiando el destino de Villamisterio para siempre.</Typography>
        </CardContent>
    </Card>
    </Grid>
    <Grid size={{xs:12, md:12 , xl:12}}>
      <Typography style={{ textAlign: "center" }}  sx={{ fontSize: "8.5rem" }} >FIN</Typography>
      </Grid>

    </Grid>
    )


}
export default Explicacion