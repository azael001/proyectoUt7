
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Grid from "@mui/material/Grid2";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

function PistaJuego() {
  useEffect(()=>{
  const storedPrimeraPista = localStorage.getItem('primeraPista');
  const storedSegundaPista = localStorage.getItem('segundaPista');
  const storedTerceraPista = localStorage.getItem('terceraPista');

  if (storedPrimeraPista === 'true') setPrimeraPista(true);
  if (storedSegundaPista === 'true') setSegundaPista(true);
  if (storedTerceraPista === 'true') setTerceraPista(true);

  })
  const [primeraPista, setPrimeraPista] = useState(false)
  const [segundaPista, setSegundaPista] = useState(false)
  const [terceraPista, setTerceraPista] = useState(false)
  const navigate = useNavigate();
    const [message, setMessage] = useState('')
    const commands = [
      {
        command: 'Inicio',
        callback:()=> navigate("/")
  
      },
      {
        command: 'historia',
        callback:()=> navigate("/historia")
  
      },
      {
        command: 'desbloquear pista',
        callback: () =>
          {
            if (primeraPista===false){
          setPrimeraPista(true)
         localStorage.setItem('primeraPista',true)} 
          else{
            if (segundaPista===false){
              setSegundaPista(true)
              localStorage.setItem('segundaPista',true)} 
              else{
                if (terceraPista===false){
                  setTerceraPista(true)
                  localStorage.setItem('terceraPista',true)} 
                  else{alert("Ya tienes todas las pistas posibles")}}
              }
            },
           
          }
          
      
    ]
     const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
      console.log(transcript)
      if (!browserSupportsSpeechRecognition) {
        return null
      }
      console.log(message)
    
    return(
      <Grid container direction="column" sx={{justifyContent: "center",alignItems: "center", }}>
      <Grid size={{xs:12, md:12 , xl:12}}>
        <h1 style={{ textAlign: "center" }} >Pista</h1>
        </Grid>
        <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:2}} style={{ alignItems: "center" }}>
        <Card style={{ textAlign: "center" }} sx={{ maxWidth: 1245 , m:"auto"}}  >
          <CardContent >
          <h2>Primera Pista</h2>
          {primeraPista &&<Typography sx={{ fontSize: "1.5rem" }}> La Relación Secreta
          Se descubre que María y Don Andrés habían tenido una relación secreta. Sin embargo, el alcalde había decidido terminarla, 
          ya que temía que afectara su reputación. María, profundamente afectada por el rechazo, comenzó a mostrar señales de desesperación 
          y celos. Los habitantes del pueblo comentaron que ella se encontraba cada vez más distante y resentida con él.
          </Typography>}
          </CardContent>
      </Card>
      </Grid>
      <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:2}} style={{ alignItems: "center" }}>
        <Card style={{ textAlign: "center" }} sx={{ maxWidth: 1245 , m:"auto"}}  >
          <CardContent >
          <h2>Segunda Pista</h2>
          {segundaPista &&<Typography sx={{ fontSize: "1.5rem" }}>
          La Presencia en el Lugar del Crimen
          María fue vista cerca de la oficina del alcalde el día del asesinato. Aunque inicialmente alegó que solo había estado caminando por el pueblo, 
          varias personas afirmaron haberla visto salir de la oficina minutos antes de que se descubriera el cuerpo. Nadie vio a los otros sospechosos cerca de la escena,
          lo que hace que la presencia de María se vuelva aún más sospechosa.
         </Typography>}
          </CardContent>
      </Card>
      </Grid> 
      <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:2}} style={{ alignItems: "center" }}>
        <Card style={{ textAlign: "center" }} sx={{ maxWidth: 1245 , m:"auto"}}  >
          <CardContent >
          <h2>Tercera Pista</h2>
        {terceraPista &&  <Typography sx={{ fontSize: "1.5rem" }}>
          El Libro Olvidado Al revisar la oficina de Don Andrés, los investigadores encontraron un libro de historia sobre la mesa del despacho. Este libro pertenecía a María,
          ya que había sido vista con él en varias ocasiones antes del asesinato. Sin embargo, el libro estaba en un lugar extraño: cerca del cadáver de Don Andrés. ¿Por qué habría dejado 
          María su libro en la escena del crimen?</Typography>}
          </CardContent>
      </Card>
      </Grid>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>   
     
    </Grid>
    )


}
export default PistaJuego