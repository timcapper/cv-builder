/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  collection.viewRule = "@request.auth.id = userId"

  return dao.saveCollection(collection)
})
