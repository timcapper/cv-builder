/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s81wn0wl",
    "name": "jobDescriptionUpload",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "application/pdf",
        "text/plain"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v0g6jt0sghcdt3")

  // remove
  collection.schema.removeField("s81wn0wl")

  return dao.saveCollection(collection)
})
