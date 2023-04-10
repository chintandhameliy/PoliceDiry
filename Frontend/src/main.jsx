import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Background from "./assets/images/Background.png"

ReactDOM.createRoot(document.getElementById('root')).render(
    <div
     style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundColor: "#0094FF",
        margin: '-8px',
        '@media (maxwidth: 300px)': {
          height: "200vh"
        },
        
      }} 
    >
        <App />
    </div>
)
