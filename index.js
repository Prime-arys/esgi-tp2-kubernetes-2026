const express = require('express');
const app = express();
const version = process.env.VERSION || "v1";

app.use(express.json({ type: ['application/json', 'application/*+json'] }));

app.get('/', (req, res) => {
  console.log(`Reçu requête sur ${version}`);
  res.send(`Bonjour depuis Campus FN - ${version}\n`);
});

// Pour l'étape Eventing
app.post('/', (req, res) => {
  console.log("Événement reçu:", req.body);
  res.send("Event processed");
});

app.listen(8080, () => console.log('Server started on port 8080'));