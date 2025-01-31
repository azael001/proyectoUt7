import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2'

const VozInicio = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'historia',
      callback:()=> navigate("/historia")

    },
    {
      command:'María',
      callback:()=> navigate("/explicacion")
    },
    
    {
      command: 'pista',
      callback:()=> navigate("/pista")

    },
    {
      command: 'Pepe',
      callback:()=> alert("Te has equivocado , Inténtalo de nuevo")

    },
   
    {
      command: 'Juan',
      callback:()=> alert("Te has equivocado , Inténtalo de nuevo")

    },

  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  console.log(message)
  return (
       <Grid container direction="column" sx={{justifyContent: "center",alignItems: "center", }}>
       <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:4, ml:4}}>
       <Button variant="contained" sx={{backgroundColor:'#f06292',color:'black',fontWeight: 'bold', fontSize: '0,9rem'}} onClick={SpeechRecognition.startListening} size="large">Pulsa para hablar</Button>
       </Grid>
      </Grid>
  )
}
export default VozInicio