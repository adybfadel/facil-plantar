/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSearch = /* GraphQL */ `
  mutation CreateSearch(
    $input: CreateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    createSearch(input: $input, condition: $condition) {
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
export const updateSearch = /* GraphQL */ `
  mutation UpdateSearch(
    $input: UpdateSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    updateSearch(input: $input, condition: $condition) {
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
export const deleteSearch = /* GraphQL */ `
  mutation DeleteSearch(
    $input: DeleteSearchInput!
    $condition: ModelSearchConditionInput
  ) {
    deleteSearch(input: $input, condition: $condition) {
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
export const createSearchItem = /* GraphQL */ `
  mutation CreateSearchItem(
    $input: CreateSearchItemInput!
    $condition: ModelSearchItemConditionInput
  ) {
    createSearchItem(input: $input, condition: $condition) {
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
export const updateSearchItem = /* GraphQL */ `
  mutation UpdateSearchItem(
    $input: UpdateSearchItemInput!
    $condition: ModelSearchItemConditionInput
  ) {
    updateSearchItem(input: $input, condition: $condition) {
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
export const deleteSearchItem = /* GraphQL */ `
  mutation DeleteSearchItem(
    $input: DeleteSearchItemInput!
    $condition: ModelSearchItemConditionInput
  ) {
    deleteSearchItem(input: $input, condition: $condition) {
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
export const createManual = /* GraphQL */ `
  mutation CreateManual(
    $input: CreateManualInput!
    $condition: ModelManualConditionInput
  ) {
    createManual(input: $input, condition: $condition) {
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
export const updateManual = /* GraphQL */ `
  mutation UpdateManual(
    $input: UpdateManualInput!
    $condition: ModelManualConditionInput
  ) {
    updateManual(input: $input, condition: $condition) {
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
export const deleteManual = /* GraphQL */ `
  mutation DeleteManual(
    $input: DeleteManualInput!
    $condition: ModelManualConditionInput
  ) {
    deleteManual(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createTaskImage = /* GraphQL */ `
  mutation CreateTaskImage(
    $input: CreateTaskImageInput!
    $condition: ModelTaskImageConditionInput
  ) {
    createTaskImage(input: $input, condition: $condition) {
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
export const updateTaskImage = /* GraphQL */ `
  mutation UpdateTaskImage(
    $input: UpdateTaskImageInput!
    $condition: ModelTaskImageConditionInput
  ) {
    updateTaskImage(input: $input, condition: $condition) {
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
export const deleteTaskImage = /* GraphQL */ `
  mutation DeleteTaskImage(
    $input: DeleteTaskImageInput!
    $condition: ModelTaskImageConditionInput
  ) {
    deleteTaskImage(input: $input, condition: $condition) {
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
export const createArticleTask = /* GraphQL */ `
  mutation CreateArticleTask(
    $input: CreateArticleTaskInput!
    $condition: ModelArticleTaskConditionInput
  ) {
    createArticleTask(input: $input, condition: $condition) {
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
export const updateArticleTask = /* GraphQL */ `
  mutation UpdateArticleTask(
    $input: UpdateArticleTaskInput!
    $condition: ModelArticleTaskConditionInput
  ) {
    updateArticleTask(input: $input, condition: $condition) {
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
export const deleteArticleTask = /* GraphQL */ `
  mutation DeleteArticleTask(
    $input: DeleteArticleTaskInput!
    $condition: ModelArticleTaskConditionInput
  ) {
    deleteArticleTask(input: $input, condition: $condition) {
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
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
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
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
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
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createInstruction = /* GraphQL */ `
  mutation CreateInstruction(
    $input: CreateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    createInstruction(input: $input, condition: $condition) {
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
export const updateInstruction = /* GraphQL */ `
  mutation UpdateInstruction(
    $input: UpdateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    updateInstruction(input: $input, condition: $condition) {
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
export const deleteInstruction = /* GraphQL */ `
  mutation DeleteInstruction(
    $input: DeleteInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    deleteInstruction(input: $input, condition: $condition) {
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
export const createStep = /* GraphQL */ `
  mutation CreateStep(
    $input: CreateStepInput!
    $condition: ModelStepConditionInput
  ) {
    createStep(input: $input, condition: $condition) {
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
export const updateStep = /* GraphQL */ `
  mutation UpdateStep(
    $input: UpdateStepInput!
    $condition: ModelStepConditionInput
  ) {
    updateStep(input: $input, condition: $condition) {
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
export const deleteStep = /* GraphQL */ `
  mutation DeleteStep(
    $input: DeleteStepInput!
    $condition: ModelStepConditionInput
  ) {
    deleteStep(input: $input, condition: $condition) {
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
export const createMyArticle = /* GraphQL */ `
  mutation CreateMyArticle(
    $input: CreateMyArticleInput!
    $condition: ModelMyArticleConditionInput
  ) {
    createMyArticle(input: $input, condition: $condition) {
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
export const updateMyArticle = /* GraphQL */ `
  mutation UpdateMyArticle(
    $input: UpdateMyArticleInput!
    $condition: ModelMyArticleConditionInput
  ) {
    updateMyArticle(input: $input, condition: $condition) {
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
export const deleteMyArticle = /* GraphQL */ `
  mutation DeleteMyArticle(
    $input: DeleteMyArticleInput!
    $condition: ModelMyArticleConditionInput
  ) {
    deleteMyArticle(input: $input, condition: $condition) {
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
export const createMyOwn = /* GraphQL */ `
  mutation CreateMyOwn(
    $input: CreateMyOwnInput!
    $condition: ModelMyOwnConditionInput
  ) {
    createMyOwn(input: $input, condition: $condition) {
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
export const updateMyOwn = /* GraphQL */ `
  mutation UpdateMyOwn(
    $input: UpdateMyOwnInput!
    $condition: ModelMyOwnConditionInput
  ) {
    updateMyOwn(input: $input, condition: $condition) {
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
export const deleteMyOwn = /* GraphQL */ `
  mutation DeleteMyOwn(
    $input: DeleteMyOwnInput!
    $condition: ModelMyOwnConditionInput
  ) {
    deleteMyOwn(input: $input, condition: $condition) {
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
export const createMyNote = /* GraphQL */ `
  mutation CreateMyNote(
    $input: CreateMyNoteInput!
    $condition: ModelMyNoteConditionInput
  ) {
    createMyNote(input: $input, condition: $condition) {
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
export const updateMyNote = /* GraphQL */ `
  mutation UpdateMyNote(
    $input: UpdateMyNoteInput!
    $condition: ModelMyNoteConditionInput
  ) {
    updateMyNote(input: $input, condition: $condition) {
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
export const deleteMyNote = /* GraphQL */ `
  mutation DeleteMyNote(
    $input: DeleteMyNoteInput!
    $condition: ModelMyNoteConditionInput
  ) {
    deleteMyNote(input: $input, condition: $condition) {
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
export const createMyImage = /* GraphQL */ `
  mutation CreateMyImage(
    $input: CreateMyImageInput!
    $condition: ModelMyImageConditionInput
  ) {
    createMyImage(input: $input, condition: $condition) {
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
export const updateMyImage = /* GraphQL */ `
  mutation UpdateMyImage(
    $input: UpdateMyImageInput!
    $condition: ModelMyImageConditionInput
  ) {
    updateMyImage(input: $input, condition: $condition) {
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
export const deleteMyImage = /* GraphQL */ `
  mutation DeleteMyImage(
    $input: DeleteMyImageInput!
    $condition: ModelMyImageConditionInput
  ) {
    deleteMyImage(input: $input, condition: $condition) {
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
