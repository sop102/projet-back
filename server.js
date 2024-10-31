const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Remplacez par votre nom d'utilisateur MySQL
  password: '', // Remplacez par votre mot de passe MySQL
  database: 'optimisationdeventesjeny' // Remplacez par le nom de votre base de données
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Route pour récupérer les données
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM votre_table'; // Remplacez par votre requête SQL
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log('Serveur lance sur http://localhost:${port}');
});