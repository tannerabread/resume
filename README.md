# Welcome

This is a ***[personal portfolio](tannerabread.com)*** (incorrectly named resume in github before deciding to add most of my work) created with [Next.js](https://nextjs.org/ "one of the fastest tools to get started with a react project")

## Features

###### SRC Directory

To help keep the project better organized, it utilizes the [`/src` directory](https://nextjs.org/docs/advanced-features/src-directory) advanced feature of Next.js<br>

The structure of the `/src` folder is as follows
```
    src
    |---components
    |   |---Card.js
    |   |---Card.module.scss
    |   |---Contacts.js
    |   |---Contacts.modules.scss
    |   |---Container.js   (*uses styled-components*)
    |   |---Examples.js
    |   |---Grid.js
    |   |---Grid.module.scss
    |   |---Layout.js      (*uses styled-components*)
    |   |---Title.js       (*uses styled-components*)
    |---data
    |   |---contacts.json
    |   |---homegrid.json
    |   |---projects.json
    |   |---sandbox.json
    |---helpers
    |---pages
    |   |---about
    |   |   |---index.js
    |   |---blog
    |   |   |---[id]
    |   |   |   |---index.js
    |   |   |---[id].js
    |   |   |---index.js
    |   |---examples
    |   |   |---apis
    |   |   |   |---index.js
    |   |   |---css
    |   |   |   |---index.js
    |   |   |---html
    |   |   |   |---index.js
    |   |   |---javascript
    |   |   |   |---index.js
    |   |   |---react
    |   |   |   |---index.js
    |   |   |---index.js
    |   |---projects
    |   |   |---index.js
    |   |   |---projects.module.scss
    |   |---_app.js
    |   |---_document.js
    |   |---index.js
```

###### CSS Modules + SCSS

[CSS Modules](https://github.com/css-modules/css-modules) are great for separating styling into separate files. Mixed with [SCSS](https://sass-lang.com/), it can save lots of rewriting of the same rules or selectors to accomplish the same goals.

###### React Components + Styled-Components

Most pages are split up into [React](https://reactjs.org/) components contained in the src directory for scalability.

Some pages use *[Styled-Components](https://styled-components.com/ "great for pages that just need a little bit of styling")*

##### Amazon AWS DynamoDB

[DynamoDB](https://aws.amazon.com/dynamodb/?trk=ps_a134p000004f2afAAA&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=Google&sc_category=Database&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=dynamodb&sc_content=DynamoDB_e&sc_matchtype=e&sc_segment=536393513269&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Database|DynamoDB|US|EN|Text&s_kwcid=AL!4422!3!536393513269!e!!g!!dynamodb&ef_id=CjwKCAjwkvWKBhB4EiwA-GHjFs46y8n2fBfCbKh6pdPMJkx49G0vVd6afIvE0rgoKf1pC_t9kfzT5hoCkBkQAvD_BwE:G:s&s_kwcid=AL!4422!3!536393513269!e!!g!!dynamodb)
is a fast, flexible NoSQL database service for single-digit millisecond performance at any scale.
It was chosen for this project for the blog section

###### NextJS Dynamic Routing



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
