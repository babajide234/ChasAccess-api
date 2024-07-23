const express = require('express');
const instance = require('../../instance');
const { paths } = require('../../constants');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const cartItems = await prisma.cartItem.findMany();
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await prisma.cartItem.delete({
            where: {
                id: id
            }
        });

        res.status(200).json({ message: 'Cart item deleted successfully', deletedItem });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
  const { phone, plan, amount, email, provider, type, userId } = req.body;

  if (!email || !provider || !type || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const parsedAmount = amount ? parseFloat(amount) : null;

    const newItem = await prisma.cartItem.create({
      data: {
        phone,
        plan,
        amount: parsedAmount,
        email,
        provider,
        type,
        userId,
      },
    });
    
    console.log(newItem);

    res.status(201).json({
        message: " Cart addded successfully",
        data: newItem
    });
  } catch (error) {
    console.error('Error creating cart item:', error);
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