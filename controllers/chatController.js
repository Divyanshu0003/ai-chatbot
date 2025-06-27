const Message = require('../models/Message');
const askAI = require('../utils/openai');

exports.chat = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.user.id;

    const response = await askAI(prompt);

    await Message.create({ user: userId, prompt, response });

    res.json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
