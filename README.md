- [V2-CSV-PARSER](#v2-csv-parser)
  - [What does this project to?](#what-does-this-project-to)
  - [How to use it?](#how-to-use-it)

# V2-CSV-PARSER

## What does this project to?

- converts the .csv file data into simple JavaScript object based on the headings passed

## How to use it?

1. Fork the project
2. `cd` into the project
3. Install dependencies with `npm install`
4. Compile typescript with `npm run watch` (keep it live if you are working on project)
5. Execute the express server from compiled JavaScript with `npm start`.
6. Open postman and create a new `POST` request on `http://localhost:8000/fileupload`
7. Use `form-data` in the request body which includes keys `csvfile` and `headers`
   - `csvfile` is the file to be uploaded
   - `headers` is comma separated string values. Each comma separated value represents individual header to be extracted. If the header is invalid then it's skipped while generating object
8. Send the `POST` request
9. Verify response data is received in response body

Get a sample csv file from [here](https://www.stats.govt.nz/assets/Uploads/Business-operations-survey/Business-operations-survey-2022/Download-data/business-operations-survey-2022-price-and-wage-setting.csv)
