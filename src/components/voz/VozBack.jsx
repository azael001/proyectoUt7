import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';



const VozOrdenes = () => {
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
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <p>{transcript}</p>
      <p>{message}</p>
      
     
    </div>
  )
}
export default VozOrdenes