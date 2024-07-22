const express = require('express');
const instance = require('../../instance');
const { paths } = require('../../constants');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const cartItems = await prisma.cartItem.findMany();
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
router.post('/', async (req, res) => {
    const { phone, plan, email, provider } = req.body;
  
    try {
      const newItem = await prisma.cartItem.create({
        data: {
          phone,
          plan,
          email,
          provider,
        },
      });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.cartItem.delete({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;