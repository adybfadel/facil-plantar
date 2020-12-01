/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSearch = /* GraphQL */ `
  subscription OnCreateSearch {
    onCreateSearch {
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
export const onUpdateSearch = /* GraphQL */ `
  subscription OnUpdateSearch {
    onUpdateSearch {
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
export const onDeleteSearch = /* GraphQL */ `
  subscription OnDeleteSearch {
    onDeleteSearch {
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
export const onCreateSearchItem = /* GraphQL */ `
  subscription OnCreateSearchItem {
    onCreateSearchItem {
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
export const onUpdateSearchItem = /* GraphQL */ `
  subscription OnUpdateSearchItem {
    onUpdateSearchItem {
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
export const onDeleteSearchItem = /* GraphQL */ `
  subscription OnDeleteSearchItem {
    onDeleteSearchItem {
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
export const onCreateManual = /* GraphQL */ `
  subscription OnCreateManual {
    onCreateManual {
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
export const onUpdateManual = /* GraphQL */ `
  subscription OnUpdateManual {
    onUpdateManual {
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
export const onDeleteManual = /* GraphQL */ `
  subscription OnDeleteManual {
    onDeleteManual {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateTaskImage = /* GraphQL */ `
  subscription OnCreateTaskImage {
    onCreateTaskImage {
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
export const onUpdateTaskImage = /* GraphQL */ `
  subscription OnUpdateTaskImage {
    onUpdateTaskImage {
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
export const onDeleteTaskImage = /* GraphQL */ `
  subscription OnDeleteTaskImage {
    onDeleteTaskImage {
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
export const onCreateArticleTask = /* GraphQL */ `
  subscription OnCreateArticleTask {
    onCreateArticleTask {
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
export const onUpdateArticleTask = /* GraphQL */ `
  subscription OnUpdateArticleTask {
    onUpdateArticleTask {
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
export const onDeleteArticleTask = /* GraphQL */ `
  subscription OnDeleteArticleTask {
    onDeleteArticleTask {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial {
    onCreateMaterial {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial {
    onUpdateMaterial {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial {
    onDeleteMaterial {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction {
    onCreateInstruction {
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
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction {
    onUpdateInstruction {
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
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction {
    onDeleteInstruction {
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
export const onCreateStep = /* GraphQL */ `
  subscription OnCreateStep {
    onCreateStep {
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
export const onUpdateStep = /* GraphQL */ `
  subscription OnUpdateStep {
    onUpdateStep {
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
export const onDeleteStep = /* GraphQL */ `
  subscription OnDeleteStep {
    onDeleteStep {
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
export const onCreateMyArticle = /* GraphQL */ `
  subscription OnCreateMyArticle($owner: String!) {
    onCreateMyArticle(owner: $owner) {
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
export const onUpdateMyArticle = /* GraphQL */ `
  subscription OnUpdateMyArticle($owner: String!) {
    onUpdateMyArticle(owner: $owner) {
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
export const onDeleteMyArticle = /* GraphQL */ `
  subscription OnDeleteMyArticle($owner: String!) {
    onDeleteMyArticle(owner: $owner) {
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
export const onCreateMyOwn = /* GraphQL */ `
  subscription OnCreateMyOwn($owner: String!) {
    onCreateMyOwn(owner: $owner) {
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
export const onUpdateMyOwn = /* GraphQL */ `
  subscription OnUpdateMyOwn($owner: String!) {
    onUpdateMyOwn(owner: $owner) {
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
export const onDeleteMyOwn = /* GraphQL */ `
  subscription OnDeleteMyOwn($owner: String!) {
    onDeleteMyOwn(owner: $owner) {
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
export const onCreateMyNote = /* GraphQL */ `
  subscription OnCreateMyNote($owner: String!) {
    onCreateMyNote(owner: $owner) {
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
export const onUpdateMyNote = /* GraphQL */ `
  subscription OnUpdateMyNote($owner: String!) {
    onUpdateMyNote(owner: $owner) {
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
export const onDeleteMyNote = /* GraphQL */ `
  subscription OnDeleteMyNote($owner: String!) {
    onDeleteMyNote(owner: $owner) {
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
export const onCreateMyImage = /* GraphQL */ `
  subscription OnCreateMyImage($owner: String!) {
    onCreateMyImage(owner: $owner) {
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
export const onUpdateMyImage = /* GraphQL */ `
  subscription OnUpdateMyImage($owner: String!) {
    onUpdateMyImage(owner: $owner) {
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
export const onDeleteMyImage = /* GraphQL */ `
  subscription OnDeleteMyImage($owner: String!) {
    onDeleteMyImage(owner: $owner) {
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
