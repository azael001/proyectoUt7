import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';

const VozOrdenes = () => {
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
    
    {
      command: 'Inicio',
      callback:()=> navigate("/")

    },

  ]

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  console.log(message)
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <p>{message}</p>
      
     
    </div>
  )
}
export default VozOrdenes