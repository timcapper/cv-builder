/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdryu6cfazlr2sj")

  // remove
  collection.schema.removeField("u5fw4g4t")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pdryu6cfazlr2sj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u5fw4g4t",
    "name": "languageId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lff45f4th6h0fx1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
