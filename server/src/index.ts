require('dotenv').config();
import 'reflect-metadata';
import 'module-alias/register';

const express = require('express');
import * as bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

(async () => {

  const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use('/todos', todosRoutes);

  const port = process.env.PORT || 3030;
  app.listen(port, () => console.log(`api listening at http://localhost:${port}`));
})();