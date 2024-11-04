/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o3nilmei",
    "name": "jobDescription",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tq5r5dpi",
    "name": "type",
    "type": "select",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // remove
  collection.schema.removeField("o3nilmei")

  // remove
  collection.schema.removeField("tq5r5dpi")

  return dao.saveCollection(collection)
})
