const express = require('express');
const paymentMethodController = require('./controllers/paymentMethodController');
const pagoController = require('./controllers/pagoController');

const router = express.Router();


/**
 * @swagger
 * /:
 *   get:
 *     summary: Muestra un mensaje de bienvenida
 *     responses:
 *       200:
 *         description: Bienvenido a la API
 */
router.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API');
  });


/**
 * @swagger
 * /payment-methods:
 *   post:
 *     summary: Crea un nuevo método de pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               expiry:
 *                 type: string
 *                 format: date
 *               cardnumber:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Método de pago creado
 */
router.post('/payment-methods', paymentMethodController.createPaymentMethod);

/**
 * @swagger
 * /payment-methods:
 *   get:
 *     summary: Obtiene todos los métodos de pago
 *     responses:
 *       200:
 *         description: Lista de métodos de pago
 */
router.get('/payment-methods', paymentMethodController.getPaymentMethods);

/**
 * @swagger
 * /payment-methods/{id}:
 *   put:
 *     summary: Actualiza un método de pago por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               expiry:
 *                 type: string
 *                 format: date
 *               cardnumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: Método de pago actualizado
 *       404:
 *         description: Método de pago no encontrado
 */
router.put('/payment-methods/:id', paymentMethodController.updatePaymentMethod); 

/**
 * @swagger
 * /payment-methods/{id}:
 *   delete:
 *     summary: Elimina un método de pago por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Método de pago eliminado
 *       404:
 *         description: Método de pago no encontrado
 */
router.delete('/payment-methods/:id', paymentMethodController.deletePaymentMethod); 

/**
 * @swagger
 * /pagos:
 *   post:
 *     summary: Crea un nuevo pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               status:
 *                 type: string
 *               paymentMethod:
 *                 type: string
 *               userId:
 *                 type: integer
 *               reserva:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pago creado
 */
router.post('/pagos', pagoController.createPago);

/**
 * @swagger
 * /pagos:
 *   get:
 *     summary: Obtiene todos los pagos
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/pagos', pagoController.getPagos);

module.exports = router;