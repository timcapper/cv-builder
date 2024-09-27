/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("luk6lird6nqqn1h")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.userId"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("luk6lird6nqqn1h")

  collection.createRule = null

  return dao.saveCollection(collection)
})
