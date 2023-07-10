const Notes = require('../../models/note');

module.exports = {
  getAllUserNotes
}

async function getAllUserNotes(req, res) {
  try {
      const userNotes = await Notes.find({user: req.user._id})
      res.status(200).json(userNotes);
  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
}