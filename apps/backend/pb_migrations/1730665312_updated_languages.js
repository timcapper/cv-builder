/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lff45f4th6h0fx1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mahna382",
    "name": "level",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A1",
        "A2",
        "B1",
        "B2",
        "C1",
        "C2",
        "Native"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lff45f4th6h0fx1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mahna382",
    "name": "level",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "beginner",
        "intermediate",
        "advanced",
        "native"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
