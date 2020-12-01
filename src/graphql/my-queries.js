// eslint-disable
// this is an auto generated file. This will be overwritten

export const getStatus = /* GraphQL */ `
query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    myArticles {
      items {
        id
        have
        favorite
      }
      nextToken
    }
  }
}
`;

export const getTasks = /* GraphQL */ `
query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    tasks {
      items {
        id
        order
        task {
          id
          name
          note
          materials {
            items {
              id
              order
              quant 
              product {
                id
                name
                unit
                link
              }
            }
            nextToken
          }
          instructions {
            items {
              id
              order
              step {
                id
                text
              }
            }
            nextToken
          }
          images {
            items {
              id
              order
              video
              description
              file {
                bucket
                key
                region
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;

export const getMyArticle = /* GraphQL */ `
query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    type
    name
    subtitle
    image {
      bucket
      key
      region
    }
    myArticles {
      items {
        id
        myImage {
          bucket
          key
          region
        }
      }
      nextToken
    }
  }
}
`;

export const listSchedule = /* GraphQL */ `
query ListMyOwns(
  $filter: ModelMyOwnFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyOwns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ident
      createdAt
      location {
        lat
        lon
      }
      myArticle {
        id
        article {
          id
          type
          name
          subtitle
          tasks {
            items {
              id
              order
              task {
                id
                name
                season
                dayPeriod
                moonFase
                interval
                intervalUnit
                alert
              }
            }
            nextToken
          }
        }
      }
      myNotes {
        items {
          id
          dateTime
          action
        }
        nextToken
      }
    }
    nextToken
  }
}
`;

export const getMyOwn = /* GraphQL */ `
query GetMyOwn($id: ID!) {
  getMyOwn(id: $id) {
    id
    ident
    look
    growth
    health
    myArticle {
      id
      have
      favorite
      myImage {
        bucket
        key
        region
      }
      article {
        id
        type
        name
        subtitle
        image {
          bucket
          key
          region
        }
      }
    }
    myImages {
      items {
        id
        title
        main
        video
        visibility
        description
        file {
          bucket
          key
          region
        }
      }
      nextToken
    }
    myNotes {
      items {
        id
        dateTime
        action
        note
        look
        growth
        health
        myImage {
          id
          title
          main
          video
          visibility
          description
          file {
            bucket
            key
            region
          }
        }
      }
      nextToken
    }
  }
}
`;

export const getMyOwns = /* GraphQL */ `
query GetMyArticle($id: ID!) {
  getMyArticle(id: $id) {
    id
    myOwns {
      items {
        id
        ident
        look
        growth
        health
        myNotes {
          items {
            id
            dateTime
            action
            note
            look
            growth
            health
            myImage {
              id
              title
              main
              video
              visibility
              description
              file {
                bucket
                key
                region
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
}
`;


// SEARCH
export const listManuals = /* GraphQL */ `
query ListManuals(
  $filter: ModelManualFilterInput
  $limit: Int
  $nextToken: String
) {
  listManuals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      title
      subtitle
      content
      image {
        bucket
        key
        region
      }
    }
    nextToken
  }
}
`;

export const listArticles = /* GraphQL */ `
query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      name
      subtitle
      description
      tasks {
        items {
          task {
            id
            name
            materials {
              items {
                product {
                  id
                  name
                }
              }
              nextToken
            }
            instructions {
              items {
                step {
                  id
                  text
                }
              }
              nextToken
            }
            note
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;