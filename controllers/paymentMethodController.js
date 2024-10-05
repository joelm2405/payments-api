const PaymentMethod = require('../models/PaymentMethod');

exports.createPaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.create(req.body);
    res.json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    res.json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }
    await paymentMethod.update(req.body);
    res.json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found' });
    }
    await paymentMethod.destroy();
    res.json({ message: 'Payment method deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
