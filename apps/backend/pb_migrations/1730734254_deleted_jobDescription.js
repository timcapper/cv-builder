/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aeb4iguw7id8ijs");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "aeb4iguw7id8ijs",
    "created": "2024-08-30 15:52:39.943Z",
    "updated": "2024-11-04 15:23:45.247Z",
    "name": "jobDescription",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oh4fcriu",
        "name": "userId",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "vdp6rnyu",
        "name": "jobDescriptionLink",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "ej3oebj8",
        "name": "company",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ft59exaa",
        "name": "jobTitle",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bsls7m3v",
        "name": "jobDescription",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = userId",
    "viewRule": "@request.auth.id = userId",
    "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.userId",
    "updateRule": "@request.auth.id = userId",
    "deleteRule": "@request.auth.id = userId",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
