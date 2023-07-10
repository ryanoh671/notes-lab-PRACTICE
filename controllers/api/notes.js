const Notes = require('../../models/note');

module.exports = {
  getAllUserNotes,
  create
}

async function create(req, res) {
  try {
      req.body.user = req.user._id
      const newNote = await Notes.create(req.body)
      res.status(200).json(newNote);
  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
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