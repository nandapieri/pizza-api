const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  sabor1: {
    type: String,
    required: true
  },
  sabor2: {
    type: String,
    required: false
  },
  tamanho: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pedido',PedidoSchema);
