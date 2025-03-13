# GDG Sheridan College

Welcome to the GDG Sheridan College project! This repository contains the source code and documentation for the GDG Sheridan College community initiatives.

## Table of Contents

- [Introduction](#introduction)
- [TechStack](#techstack)
- [DocStructure](#docstructure)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Introduction

GDG Sheridan College is a community-driven project aimed at fostering collaboration and learning among students and professionals interested in Google technologies. This repository includes various resources, tools, and projects developed by the community.

## TechStack

The project is built using the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [MySQL](https://www.mysql.com/)


## DocStructure

Root is organized into the following directories:

/gdgsheridancollege
  /github
    /workflows
  /client
  /server
  - .gitignore
  - package.json
  - README.md

Client is organized into the following directories:

/client
  /dist
  /public
  /src
    /assets
    /components
    /hooks
    /interfaces
      /Props
    /pages
    /utils
    - App.tsx
    - App.css
    - main.tsx
  - index.html
  - package.json
  - vite.config.ts

Server is organized into the following directories:

/server
  /config
  /controllers
  /middlewares
  /model
  /routes
  - index.ts
  - package.json

## Installation

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/GDGSheridanCollege.git
```

Navigate to the project directory:

```bash
cd GDGSheridanCollege
```

Install the necessary dependencies:

```bash
npm install && cd client && npm install && cd ../server && npm install && cd ..
```

## Usage

To run the project, run the following command:

```bash
npm run dev
```

This will launch the application on your local server. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contact

For any questions or inquiries, please contact us at [moinuddin.mustufa@gdgsheridan.ca](mailto:moinuddin.mustufa@gdgsheridan.ca).

Thank you for being a part of the GDG Sheridan College community!