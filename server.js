import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

import { template } from './template';

const port = process.env.PORT || 3000;
const proxy = express()

proxy.use(bodyParser());
proxy.get('/buy/:prod_name', function(req, res) {
  const prod_name = req.params.prod_name

  //for overviews only:
  axios
    .get(`http://localhost:3001/buy/${prod_name}/overview`)
    .then(({data: {product : initialState, overviewsHtml}}) => {
        const html = template(initialState, overviewsHtml);
        res.status(200).send(html);
      }
    )
    .catch(e => console.log('there is an error!', e));
});

proxy.listen(port, function() {
  console.log(`port is up on ${port}`);
});
