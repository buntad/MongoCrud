const express = require('express');
const router = express.Router();

const Url = require('../models/url');

router.get('/', async (req, res) =>{
  const url = await Url.find();
  console.log(url);
  res.render('index', {
    url
  });
});

router.post('/add', async (req, res) =>{
  console.log(req.body);
  console.log("AAAAAAAAAAAAAAAAAAAAA")
  const urlGuardar = new Url(req.body);
  await urlGuardar.save();
  res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Url.remove({_id: id});
  res.redirect('/');
})

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const url = await Url.findById(id);
  res.render('edit', {
    url
  });
})

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  await Url.update({_id: id}, req.body);
  res.redirect('/')
})

module.exports = router;
