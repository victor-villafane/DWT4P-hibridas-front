import React, { useEffect } from 'react'
import io from "socket.io-client"
const Chat = () => {

    useEffect( () => {
        const socket = io("http://localhost:2024")
        socket.emit("mensaje", "Datos!")
    },[] )

  return (
    <div>Chat</div>
  )
}

export default Chat