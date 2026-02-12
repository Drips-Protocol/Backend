const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    project: 'Drps Protocol', 
    status: 'Streaming Service Running',
    contract_id: 'CDNPP6CCZI6EWWGUTM2YQ4EXDXVCAYTLF3CB6FTMHFOZXG7IOXSNJVCS'
  });
});

app.listen(port, () => {
  console.log(`Drps Backend listening at http://localhost:${port}`);
});
