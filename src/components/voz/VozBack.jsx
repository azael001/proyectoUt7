import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2'


const VozBack = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'Inicio',
      callback:()=> navigate("/")

    },
    {
      command: 'Pista',
      callback:()=> navigate("/pista")

    },
  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  console.log(message)
  return (
 
    <Grid size={{xs:12, md:12 , xl:12}} sx={{mt:4, ml:4}}>
    <Button variant="contained" sx={{backgroundColor:'#f06292',color:'black',fontWeight: 'bold', fontSize: '0,9rem'}} onClick={SpeechRecognition.startListening} size="large">Pulsa para hablar</Button>
    </Grid>
      
     

  )
}
export default VozBack