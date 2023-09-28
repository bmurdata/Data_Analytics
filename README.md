# WEB103 Project 2 - Data_Analytics Part 2

Submitted by: Brian Murphy

About this web app: Node project with client and server about Data Analytics

Time spent: 1 hour

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
- [x] **The PostgreSQL database includes a table that matches the data displayed in the web app**
  - [x] **NOTE: Your GIF or a screenshot added to the README must include a view of your Railway database that shows the contents of the table used by your app**

The following **optional** features are implemented:

- [ ] The user can search for items with a specific attribute

The following **additional** features are implemented:

- [x] Added a default item for PostgreSQL in case a local file isn't found
- [x] Added a .env file to store and read credentials safely. Schema defined below
PGDATABASE=""  
PGHOST=""  
PGPASSWORD=""  
PGPORT=""  
PGUSER=""  
## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/bmurdata/Data_Analytics/blob/PostgresSQL/result.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCAP

## Notes

Had some trouble loading certain data fields from PostgreSQL, as they would show up in the database and not display on the frontend- pricepoint, date submitted, and submitted by for example.

## License

Copyright 2023 Brian Murphy

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
