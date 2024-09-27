/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  collection.listRule = "@request.auth.id = userId"
  collection.viewRule = "@request.auth.id = userId"
  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.userId"
  collection.updateRule = "@request.auth.id = userId"
  collection.deleteRule = "@request.auth.id = userId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
