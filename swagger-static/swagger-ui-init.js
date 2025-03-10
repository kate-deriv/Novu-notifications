
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/": {
        "get": {
          "operationId": "AppController_getHello",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "App"
          ]
        }
      },
      "/users/{id}/notifications": {
        "get": {
          "description": "Retrieve paginated list of notifications for a specific user",
          "operationId": "UsersController_getSubscribersNotifications",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Subscriber ID",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": false,
              "in": "query",
              "description": "Page number (0-based)",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "description": "Number of items per page (max 100)",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "read",
              "required": false,
              "in": "query",
              "description": "Filter by read status",
              "schema": {
                "type": "boolean"
              }
            },
            {
              "name": "seen",
              "required": false,
              "in": "query",
              "description": "Filter by seen status",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of notifications retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string",
                              "example": "notification-123"
                            },
                            "subscriberId": {
                              "type": "string",
                              "example": "subscriber-123"
                            },
                            "templateIdentifier": {
                              "type": "string",
                              "example": "welcome-template"
                            },
                            "channel": {
                              "type": "string",
                              "example": "email"
                            },
                            "event": {
                              "type": "string",
                              "example": "welcome"
                            },
                            "content": {
                              "type": "string",
                              "example": "Welcome to our platform!"
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-03-10T15:30:00.000Z"
                            },
                            "seen": {
                              "type": "boolean",
                              "example": false
                            },
                            "read": {
                              "type": "boolean",
                              "example": false
                            },
                            "transactionId": {
                              "type": "string",
                              "example": "transaction-123"
                            },
                            "payload": {
                              "type": "object",
                              "additionalProperties": true,
                              "example": {
                                "key": "value"
                              }
                            }
                          }
                        }
                      },
                      "page": {
                        "type": "number",
                        "example": 0
                      },
                      "totalCount": {
                        "type": "number",
                        "example": 100
                      },
                      "pageSize": {
                        "type": "number",
                        "example": 10
                      },
                      "hasMore": {
                        "type": "boolean",
                        "example": true
                      }
                    }
                  }
                }
              }
            }
          },
          "summary": "Get user notifications",
          "tags": [
            "Users"
          ]
        }
      },
      "/users/{id}/notifications/unseen": {
        "get": {
          "description": "Get the count of unseen notifications for a specific user",
          "operationId": "UsersController_getUnseenNotificationsCount",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Subscriber ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Unseen notifications count retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "count": {
                        "type": "number"
                      }
                    }
                  }
                }
              }
            }
          },
          "summary": "Get unseen notifications count",
          "tags": [
            "Users"
          ]
        }
      },
      "/users": {
        "post": {
          "description": "Create a new subscriber in the Novu system",
          "operationId": "UsersController_createSubscriber",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "subscriberId"
                  ],
                  "properties": {
                    "subscriberId": {
                      "type": "string",
                      "description": "Unique identifier for the subscriber",
                      "example": "user-123"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Subscriber created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "_id": {
                        "type": "string",
                        "example": "subscriber-123"
                      },
                      "subscriberId": {
                        "type": "string",
                        "example": "user-123"
                      },
                      "firstName": {
                        "type": "string",
                        "example": "John",
                        "nullable": true
                      },
                      "lastName": {
                        "type": "string",
                        "example": "Doe",
                        "nullable": true
                      },
                      "email": {
                        "type": "string",
                        "example": "john@example.com",
                        "nullable": true
                      },
                      "phone": {
                        "type": "string",
                        "example": "+1234567890",
                        "nullable": true
                      },
                      "avatar": {
                        "type": "string",
                        "example": "https://example.com/avatar.jpg",
                        "nullable": true
                      },
                      "locale": {
                        "type": "string",
                        "example": "en",
                        "nullable": true
                      },
                      "data": {
                        "type": "object",
                        "additionalProperties": true,
                        "nullable": true,
                        "example": {
                          "customField": "value"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "summary": "Create subscriber",
          "tags": [
            "Users"
          ]
        }
      },
      "/users/{id}/notifications/{notificationId}": {
        "put": {
          "description": "Mark a specific notification as seen for a user",
          "operationId": "UsersController_setNotificationAsSeen",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Subscriber ID",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "notificationId",
              "required": true,
              "in": "path",
              "description": "Notification ID to mark as seen",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Notification marked as seen successfully"
            }
          },
          "summary": "Mark notification as seen",
          "tags": [
            "Users"
          ]
        }
      },
      "/purchase": {
        "post": {
          "description": "Create a new purchase and send notification to subscriber",
          "operationId": "PurchaseController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "subscriberId",
                    "text"
                  ],
                  "properties": {
                    "subscriberId": {
                      "type": "string",
                      "description": "ID of the subscriber who made the purchase",
                      "example": "user-123"
                    },
                    "text": {
                      "type": "string",
                      "description": "Purchase details or message",
                      "example": "Purchased Premium Subscription"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Purchase created and notification sent successfully"
            },
            "400": {
              "description": "Invalid request payload"
            },
            "404": {
              "description": "Subscriber not found"
            }
          },
          "summary": "Create purchase",
          "tags": [
            "Purchase",
            "Purchase"
          ]
        }
      }
    },
    "info": {
      "title": "DEMO NOVU NOTIFICATIONS API",
      "description": "",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        },
        "basicAuth": {
          "type": "http",
          "scheme": "basic"
        }
      },
      "schemas": {}
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
