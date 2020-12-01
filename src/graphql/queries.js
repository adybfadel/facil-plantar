/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSearch = /* GraphQL */ `
  query GetSearch($id: ID!) {
    getSearch(id: $id) {
      id
      type
      key
      title
      items {
        items {
          id
          order
          section
          subsection
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSearchs = /* GraphQL */ `
  query ListSearchs(
    $filter: ModelSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        key
        title
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSearchItem = /* GraphQL */ `
  query GetSearchItem($id: ID!) {
    getSearchItem(id: $id) {
      id
      order
      section
      subsection
      content
      search {
        id
        type
        key
        title
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSearchItems = /* GraphQL */ `
  query ListSearchItems(
    $filter: ModelSearchItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSearchItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
        section
        subsection
        content
        search {
          id
          type
          key
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getManual = /* GraphQL */ `
  query GetManual($id: ID!) {
    getManual(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      type
      name
      subtitle
      description
      image {
        bucket
        key
        region
      }
      difficultyLevel
      luminosityLevel
      humidityLevel
      growingLevel
      tasks {
        items {
          id
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      myArticles {
        items {
          id
          have
          favorite
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        image {
          bucket
          key
          region
        }
        difficultyLevel
        luminosityLevel
        humidityLevel
        growingLevel
        tasks {
          nextToken
        }
        myArticles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      materials {
        items {
          id
          order
          quant
          createdAt
          updatedAt
        }
        nextToken
      }
      instructions {
        items {
          id
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      note
      season
      dayPeriod
      moonFase
      interval
      intervalUnit
      alert
      images {
        items {
          id
          order
          video
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      articles {
        items {
          id
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        materials {
          nextToken
        }
        instructions {
          nextToken
        }
        note
        season
        dayPeriod
        moonFase
        interval
        intervalUnit
        alert
        images {
          nextToken
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTaskImage = /* GraphQL */ `
  query GetTaskImage($id: ID!) {
    getTaskImage(id: $id) {
      id
      order
      file {
        bucket
        key
        region
      }
      video
      description
      task {
        id
        name
        materials {
          nextToken
        }
        instructions {
          nextToken
        }
        note
        season
        dayPeriod
        moonFase
        interval
        intervalUnit
        alert
        images {
          nextToken
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTaskImages = /* GraphQL */ `
  query ListTaskImages(
    $filter: ModelTaskImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
        file {
          bucket
          key
          region
        }
        video
        description
        task {
          id
          name
          note
          season
          dayPeriod
          moonFase
          interval
          intervalUnit
          alert
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticleTask = /* GraphQL */ `
  query GetArticleTask($id: ID!) {
    getArticleTask(id: $id) {
      id
      order
      article {
        id
        type
        name
        subtitle
        description
        image {
          bucket
          key
          region
        }
        difficultyLevel
        luminosityLevel
        humidityLevel
        growingLevel
        tasks {
          nextToken
        }
        myArticles {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        id
        name
        materials {
          nextToken
        }
        instructions {
          nextToken
        }
        note
        season
        dayPeriod
        moonFase
        interval
        intervalUnit
        alert
        images {
          nextToken
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticleTasks = /* GraphQL */ `
  query ListArticleTasks(
    $filter: ModelArticleTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
        article {
          id
          type
          name
          subtitle
          description
          difficultyLevel
          luminosityLevel
          humidityLevel
          growingLevel
          createdAt
          updatedAt
        }
        task {
          id
          name
          note
          season
          dayPeriod
          moonFase
          interval
          intervalUnit
          alert
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
      id
      order
      quant
      product {
        id
        name
        unit
        cost
        price
        link
        materials {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        id
        name
        materials {
          nextToken
        }
        instructions {
          nextToken
        }
        note
        season
        dayPeriod
        moonFase
        interval
        intervalUnit
        alert
        images {
          nextToken
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
        quant
        product {
          id
          name
          unit
          cost
          price
          link
          createdAt
          updatedAt
        }
        task {
          id
          name
          note
          season
          dayPeriod
          moonFase
          interval
          intervalUnit
          alert
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      unit
      cost
      price
      link
      materials {
        items {
          id
          order
          quant
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        unit
        cost
        price
        link
        materials {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInstruction = /* GraphQL */ `
  query GetInstruction($id: ID!) {
    getInstruction(id: $id) {
      id
      order
      step {
        id
        text
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      task {
        id
        name
        materials {
          nextToken
        }
        instructions {
          nextToken
        }
        note
        season
        dayPeriod
        moonFase
        interval
        intervalUnit
        alert
        images {
          nextToken
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order
        step {
          id
          text
          createdAt
          updatedAt
        }
        task {
          id
          name
          note
          season
          dayPeriod
          moonFase
          interval
          intervalUnit
          alert
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStep = /* GraphQL */ `
  query GetStep($id: ID!) {
    getStep(id: $id) {
      id
      text
      instructions {
        items {
          id
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSteps = /* GraphQL */ `
  query ListSteps(
    $filter: ModelStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        instructions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMyArticle = /* GraphQL */ `
  query GetMyArticle($id: ID!) {
    getMyArticle(id: $id) {
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
        description
        image {
          bucket
          key
          region
        }
        difficultyLevel
        luminosityLevel
        humidityLevel
        growingLevel
        tasks {
          nextToken
        }
        myArticles {
          nextToken
        }
        createdAt
        updatedAt
      }
      myOwns {
        items {
          id
          ident
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMyArticles = /* GraphQL */ `
  query ListMyArticles(
    $filter: ModelMyArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          description
          difficultyLevel
          luminosityLevel
          humidityLevel
          growingLevel
          createdAt
          updatedAt
        }
        myOwns {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
      location {
        lat
        lon
      }
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
          description
          difficultyLevel
          luminosityLevel
          humidityLevel
          growingLevel
          createdAt
          updatedAt
        }
        myOwns {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      myImages {
        items {
          id
          title
          main
          video
          visibility
          description
          createdAt
          updatedAt
          owner
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMyOwns = /* GraphQL */ `
  query ListMyOwns(
    $filter: ModelMyOwnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyOwns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ident
        location {
          lat
          lon
        }
        look
        growth
        health
        myArticle {
          id
          have
          favorite
          createdAt
          updatedAt
          owner
        }
        myImages {
          nextToken
        }
        myNotes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMyNote = /* GraphQL */ `
  query GetMyNote($id: ID!) {
    getMyNote(id: $id) {
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
        file {
          bucket
          key
          region
        }
        main
        video
        visibility
        description
        myOwn {
          id
          ident
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        myNote {
          id
          dateTime
          action
          note
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      myOwn {
        id
        ident
        location {
          lat
          lon
        }
        look
        growth
        health
        myArticle {
          id
          have
          favorite
          createdAt
          updatedAt
          owner
        }
        myImages {
          nextToken
        }
        myNotes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMyNotes = /* GraphQL */ `
  query ListMyNotes(
    $filter: ModelMyNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          updatedAt
          owner
        }
        myOwn {
          id
          ident
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMyImage = /* GraphQL */ `
  query GetMyImage($id: ID!) {
    getMyImage(id: $id) {
      id
      title
      file {
        bucket
        key
        region
      }
      main
      video
      visibility
      description
      myOwn {
        id
        ident
        location {
          lat
          lon
        }
        look
        growth
        health
        myArticle {
          id
          have
          favorite
          createdAt
          updatedAt
          owner
        }
        myImages {
          nextToken
        }
        myNotes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      myNote {
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
          createdAt
          updatedAt
          owner
        }
        myOwn {
          id
          ident
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMyImages = /* GraphQL */ `
  query ListMyImages(
    $filter: ModelMyImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        file {
          bucket
          key
          region
        }
        main
        video
        visibility
        description
        myOwn {
          id
          ident
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        myNote {
          id
          dateTime
          action
          note
          look
          growth
          health
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
