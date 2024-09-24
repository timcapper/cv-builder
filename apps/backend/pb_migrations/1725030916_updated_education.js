/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9d472eth",
    "name": "grade",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pskxufshbcd0oq2")

  // remove
  collection.schema.removeField("9d472eth")

  return dao.saveCollection(collection)
})
