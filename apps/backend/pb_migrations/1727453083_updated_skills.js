/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("luk6lird6nqqn1h")

  collection.listRule = "@request.auth.id = userId"
  collection.viewRule = "@request.auth.id = userId"
  collection.updateRule = "@request.auth.id = userId"
  collection.deleteRule = "@request.auth.id = userId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("luk6lird6nqqn1h")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
