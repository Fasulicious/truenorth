# TRUENORTH CHALLENGE

## OVERVIEW
TrueNorth Challenge

## Requirements
- npm
- node
- docker
- docker-compose

## How to install
1.  Clone the repo
    ```
    git clone git@github.com:Fasulicious/codelitt-test.git
    ```

2.  (Optional) Create .env file following .env.example if you want to run it locally for development

3.  Install dependencies
    ```
    npm install
    ```

4.  (Optional) Verify test
    ```
    npm run test
    ```

5.  Deploy:

5.1 Locally using .env
    ```
    npm run dev
    ```
5.2 Locally using docker
    ```
    docker build  -t tn:1.0.0 .
    docker run -d -p 3000:3000 -e PORT=3000 -e DB_USER={{DB_USER}} -e DB_PASSWORD={{DB_PASSWORD}} -e DB_DOMAIN={{DB_DOMAIN}} -e DB_SUBDOMAIN={{DB_SUBDOMAIN}} -e NUMBER_OF_TITLES={{NUMBER_OF_TITLES}} --name truenorth tn:1.0.0
    ```

5.3 Stage or Production:
    ```
    export $(cat .env)
    docker-compose up --build
    ```

6.  Server wille be listening on port 3000 locally and port 8000 for prod.

## Next Steps

-   Add a documentation about the endpoints, it could be with swagger but I rather use apidocs.
-   Connect the project with some online logger service as logdna for monitoring.
-   Register our database in some service such as redash, for easy monitoring.