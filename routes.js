const express = require('express');
const paymentMethodController = require('./controllers/paymentMethodController');
const pagoController = require('./controllers/pagoController');

const router = express.Router();

router.post('/payment-methods', paymentMethodController.createPaymentMethod);
router.get('/payment-methods', paymentMethodController.getPaymentMethods);
router.put('/payment-methods/:id', paymentMethodController.updatePaymentMethod); 
router.delete('/payment-methods/:id', paymentMethodController.deletePaymentMethod); 

router.post('/pagos', pagoController.createPago);
router.get('/pagos', pagoController.getPagos);

module.exports = router;
