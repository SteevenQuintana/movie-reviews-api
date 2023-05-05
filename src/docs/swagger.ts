import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.3',
  info: {
    title: 'Movie reviews documentation',
    version: '1.0.0'
  },
  servers: [
    {
      url: `${process.env.BASE_URL}`
    },
    {
      url: `http://localhost:${process.env.PORT}`
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      movie: {
        type: 'object',
        require: ['movieName'],
        properties: {
          _id: {
            type: 'string'
          },
          movieName: {
            type: 'string'
          },
          averageRating: {
            type: 'number'
          },
          idUser: {
            type: 'string'
          },
          comments: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/comment'
            }
          },
          createdAt: {
            type: 'string',
            format: 'date-time'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time'
          }
        },
        example: {
          _id: '23456',
          movieName: 'The Shawshank Redemption',
          averageRating: 7,
          idUser: '12345',
          comments: [
            {
              _id: '67890',
              text: 'This movie was great!',
              raiting: 9,
              userId: '12345',
              movieId: '23456',
              createdAt: '2023-05-04T12:34:56.789Z',
              updatedAt: '2023-05-04T12:34:56.789Z'
            },
            {
              _id: '98765',
              text: "I didn't like this movie.",
              raiting: 5,
              userId: '67890',
              movieId: '23456',
              createdAt: '2023-05-04T12:34:56.789Z',
              updatedAt: '2023-05-04T12:34:56.789Z'
            }
          ]
        }
      },
      movieRequest: {
        type: 'object',
        require: ['movieName'],
        properties: {
          movieName: {
            type: 'string'
          }
        },
        example: {
          movieName: 'The Shawshank Redemption'
        }
      },

      comment: {
        type: 'object',
        require: ['text', 'raiting'],
        properties: {
          _id: { type: 'string' },
          text: { type: 'string' },
          raiting: { type: 'number' },
          userId: { type: 'string' },
          movieId: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' }
        },
        example: {
          _id: '12345',
          text: 'This movie was great!',
          raiting: 9,
          userId: '67890',
          movieId: '23456',
          createdAt: '2023-05-04T12:34:56.789Z',
          updatedAt: '2023-05-04T12:34:56.789Z'
        }
      },

      commentRequest: {
        type: 'object',
        require: ['text', 'raiting'],
        properties: {
          text: { type: 'string' },
          raiting: { type: 'number' }
        },
        example: {
          text: 'This movie was great!',
          raiting: 9
        }
      },

      role: {
        type: 'object',
        require: ['roleName'],
        properties: {
          _id: { type: 'string' }
        },
        example: {
          _id: '61092c2b2c55aa0015d2b1d5'
        }
      },

      user: {
        type: 'object',
        require: ['username', 'password', 'email'],
        properties: {
          _id: { type: 'string' },
          username: { type: 'string' },
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
          roles: {
            type: 'array',
            items: { $ref: '#/components/schemas/role' }
          }
        },
        example: {
          _id: '6109ad4a8a4a4f0015004ec7',
          username: 'john_doe',
          email: 'johndoe@example.com',
          password: 'password',
          roles: [
            {
              _id: '61092c2b2c55aa0015d2b1d5'
            }
          ]
        }
      },

      registerRequest: {
        type: 'object',
        required: ['email', 'username', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email'
          },
          username: {
            type: 'string'
          },
          password: {
            type: 'string'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['admin', 'user']
            }
          }
        },
        example: {
          email: 'johndoe@example.com',
          username: 'john_doe',
          password: 'password',
          roles: ['admin', 'user']
        }
      },

      loginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email'
          },
          password: {
            type: 'string'
          }
        },
        example: {
          email: 'johndoe@example.com',
          password: 'password'
        }
      },

      deleteResponse: {
        type: 'object',
        properties: {
          acknowledged: {
            type: 'boolean',
            description:
              'Indicates whether the operation was acknowledged by the server.'
          },
          deletedCount: {
            type: 'integer',
            description: 'The number of documents deleted.'
          }
        },
        required: ['acknowledged', 'deletedCount']
      }
    }
  }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts']
}

export default swaggerJSDoc(swaggerOptions)
