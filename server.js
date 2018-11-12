import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

import { template } from './template';

const port = process.env.PORT || 3000;
const proxy = express()

proxy.use(bodyParser.urlencoded({extended: true}));
proxy.get('/buy/:productName', (req, res) => {
  const productName = req.params.productName
  axios.get(`http://localhost:3001/mongo/${productName}`).then(({data: {initialState, overviewsHtml}}) => {
    const page = template(initialState, overviewsHtml);
    res.status(200).send(page);
  }).catch(e => console.log('there is an error for /mongo/productName', e));
});

proxy.listen(port, function() {
  console.log(`port is up on ${port}`);
});
