const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

//todas as rotas estão senco acessadas através de /pedido
//retorna todos os pedidos
router.get('/',async (req,res) => {
  try {
    const c = await Pedido.find();
    res.json(c);
  } catch(err) {
    res.status(404).json({ message: err });
  }
  res.status(200).send('get do pedido')
})

//faz um pedido
router.post('/', async (req,res) => {
  const c = new Pedido({
    nomeCompleto: req.body.nomeCompleto,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    sabor1: req.body.sabor1,
    sabor2: req.body.sabor2,
    tamanho: req.body.tamanho
  });

  try {
    //salva no banco
    const saved = await c.save();
    res.status(200).json(saved.id);
  } catch(err) {
    res.status(404).json({ message: err });
  }
})

module.exports = router;
