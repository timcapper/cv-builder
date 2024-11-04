/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aeb4iguw7id8ijs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "61l7fhlt",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "file",
        "link",
        "manual"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aeb4iguw7id8ijs")

  // remove
  collection.schema.removeField("61l7fhlt")

  return dao.saveCollection(collection)
})
