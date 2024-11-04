/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aeb4iguw7id8ijs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxa1nbkr",
    "name": "jobDescriptionUpload",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 20000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aeb4iguw7id8ijs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxa1nbkr",
    "name": "jobDescriptionUpload",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/png",
        "image/jpeg",
        "image/gif"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 20000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
