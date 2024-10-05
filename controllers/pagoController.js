const Pago = require('../models/Pago');

exports.createPago = async (req, res) => {
  try {
    const pago = await Pago.create(req.body);
    res.json(pago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPagos = async (req, res) => {
  try {
    const pagos = await Pago.findAll();
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

