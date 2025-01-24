import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VozOrdenes = () => {

  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'cero',
      callback: (cero)
    },
    {
      command: 'uno',
      callback: (uno)
    },
    {
      command: 'dos',
      callback: (dos)
    },
    {
      command: 'tres',
      callback: (tres)
    },
    {
      command: 'cuatro',
      callback: (cuatro)
    },
    {
      command: 'cinco',
      callback: (cinco)
    },
    {
      command: 'seis',
      callback: (seis)
    },
    {
      command: 'siete',
      callback: (siete)
    },
    {
      command: 'ocho',
      callback: (ocho)
    },
    {
      command: 'nueve',
      callback: (nueve)
    },
    {
      command: 'diez',
      callback: (diez)
    },
    {
      command: 'once',
      callback: (once)
    },
    {
      command: 'doce',
      callback: (doce)
    },
    {
      command: 'trece',
      callback: (trece)
    },
    {
      command: 'catorce',
      callback: (catorce)
    },
    {
      command: 'quince',
      callback: (quince)
    },
    {
      command: 'dieciseis',
      callback: (dieciseis)
    },
    {
      command: 'diecisiete',
      callback: (diecisiete)
    },
    {
      command: 'dieciocho',
      callback: (dieciocho)
    },
    {
      command: 'diecinueve',
      callback: (diecinueve)
    },
    {
      command: 'veinte',
      callback: (veinte)
    },
    {
      command: 'veintiuno',
      callback: (veintiuno)
    },
    {
      command: 'veintidos',
      callback: (veintidos)
    },
    {
      command: 'veintitres',
      callback: (veintitres)
    },
    {
      command: 'veinticuatro',
      callback: (veinticuatro)
    },
    {
      command: 'veinticinco',
      callback: (veinticinco)
    },
    {
      command: 'veintiseis',
      callback: (veintiseis)
    },
    {
      command: 'veintisiete',
      callback: (veintisiete)
    },
    {
      command: 'veintiocho',
      callback: (veintiocho)
    },
    {
      command: 'veintinueve',
      callback: (veintinueve)
    },
    {
      command: 'treinta',
      callback: (treinta)
    },
    {
      command: 'treinta y uno',
      callback: (treintaYUno)
    },
    {
      command: 'treinta y dos',
      callback: (treintaYDos)
    },
    {
      command: 'treinta y tres',
      callback: (treintaYTres)
    },
    {
      command: 'treinta y cuatro',
      callback: (treintaYCuatro)
    },
    {
      command: 'treinta y cinco',
      callback: (treintaYCinco)
    },
    {
      command: 'treinta y seis',
      callback: (treintaYSeis)
    },
    {
      command: 'rojo',
      callback: (rojo)
    },
    {
      command: 'negro',
      callback: (negro)
    },

  
    {
      command: 'Beijing',
      callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2
    },
    {
      command: 'borrar',
      callback: ({ resetTranscript }) => resetTranscript()
    }
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