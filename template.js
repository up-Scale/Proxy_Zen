export const template = function(initialState = {}, html = '') {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upscale</title>
    <link rel="stylesheet" href="http://localhost:3001/styles.css">
  </head>
  <body>

  <script>window.__initialState__ = ${JSON.stringify(initialState)}</script>

  <div id="app">
    <div id="product-overviews-app">${html}</div>
  </div>

  <script src="http://localhost:3001/bundle.js"></script>
  
  </body>
  </html>
  `
}