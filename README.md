# GitHub Access Report Service

This project connects to the GitHub API and generates a report showing which users have access to which repositories in an organization.

## Features

- Authenticate with GitHub API
- Retrieve organization repositories
- Retrieve collaborators for each repository
- Generate aggregated access report
- Expose REST API endpoint

## Technologies

- Node.js
- Express
- Axios
- GitHub REST API

## Setup

1. Clone the repository

git clone https://github.com/username/github-access-report

2. Install dependencies

npm install

3. Create .env file

GITHUB_TOKEN=your_token
ORG_NAME=organization_name

4. Run server

node server.js

## API Endpoint

GET /access-report

Example:

http://localhost:3000/access-report

## Authentication

Authentication is handled using GitHub Personal Access Token stored in environment variables.

## Design Decisions

- Parallel API calls using Promise.all
- Aggregated user to repository mapping
- Environment variables used for security
- Error handling implemented

## Assumptions

- GitHub token has permission to access repositories
- Organization repositories are accessible
