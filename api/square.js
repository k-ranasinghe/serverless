// api/square.js

module.exports = async function (req, res) {
    try {
      const { number } = req.body;
  
      if (!number) {
        throw new Error('Number not provided');
      }
  
      const result = number ** 2;
  
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  