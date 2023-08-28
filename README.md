- [V2-CSV-PARSER](#v2-csv-parser)
  - [What does this project to?](#what-does-this-project-to)
  - [How to use it?](#how-to-use-it)

# V2-CSV-PARSER

## What does this project to?

- converts the .csv file data into simple JavaScript object based on the headings passed

## How to use it?

1. Fork the project
2. `cd` into the project
3. switch to `express` branch with `git checkout express`
4. Install dependencies with `npm install`
5. Compile typescript with `npm run watch` (keep it live if you are working on project)
6. Execute the express server from compiled JavaScript with `npm start`.
7. Open postman and create a new `POST` request on `http://localhost:8000/fileupload`
8. Use `form-data` in the request body which includes keys `csvfile` and `headers`
   - `csvfile` is the file to be uploaded
   - `headers` is comma separated string values. Each comma separated value represents individual header to be extracted. If the header is invalid then it's skipped while generating object
9. Send the `POST` request
10. Verify response data is received in response body

Get a sample csv file from [here](https://www.stats.govt.nz/assets/Uploads/Business-operations-survey/Business-operations-survey-2022/Download-data/business-operations-survey-2022-price-and-wage-setting.csv)
