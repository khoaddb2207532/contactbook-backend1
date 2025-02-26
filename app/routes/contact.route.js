const express = require("express");
const contacts = require("../controllers/contact.controller.js");

const router = express.Router();

router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favorite").get(contacts.findAllFavorite);

router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
// The above code defines the routes for the contact application. The routes are defined using the express.Router() object. The routes are defined for the following URL patterns:
