/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lyk7ylti",
    "name": "jobDescriptionLink",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // remove
  collection.schema.removeField("lyk7ylti")

  return dao.saveCollection(collection)
})
