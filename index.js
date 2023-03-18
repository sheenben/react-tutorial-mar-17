//import React from "react"
//import ReactDOM from "react-dom"

function HeaderFunc () {
  return (
    <header>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width = "40px" />
              <h1>Why React?</h1>
    </header>
  )
};
function BodyFunc() {
  return (
    <body>
            <ol>
                  <li>It's easy.</li>
                  <li>I have a good teacher.</li>
                  <li>Live and learn.</li>
              </ol>              
    </body>
  )
}
function FooterFunc() {
  return (
            <footer>
              <small>© Copyright 2023 Dellos, Inc. All rights reserved</small>
           </footer>
  )
}
function CallFunc () {
  return (
    <html>          
          <HeaderFunc />
          <BodyFunc />
          <FooterFunc />          
    </html>
)
};

ReactDOM.render (<CallFunc /> , document.getElementById ("root"));