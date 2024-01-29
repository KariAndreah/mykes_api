# OPEN MYC API

**Welcome to Open MYC API: Locate the Laughs**

All the comedy open mic info in the New York City five boroughs in one place, easily accessible through a modern RESTful API.

**This API is hosted on [Heroku](https://open-myc-api-b3fdf5fc5994.herokuapp.com/).**

All data is stored in a Heroku Postgres Database. The API was built using Spring Boot.

## Get Requests

### Get all mics

`GET /mics`

### Get mics by id

`Get /mic/{id}`

### Get mics by borough

`GET /mics/get-borough?borough={borough}`

**borough**: Manhattan, Queens, Bronx, Brooklyn, Staten-Island\

### Get free mics by borough

`GET /mics/get-borough-day?page={page}&borough={borough}`

**page** : #
**borough**: Manhattan, Queens, Bronx, Brooklyn, Staten-Island\

### Get mics by day and borough

`GET /mics/get-borough-day?page={page}&day={day}&borough={borough}`

**page** : #
**day**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\
**borough**: Manhattan, Queens, Bronx, Brooklyn, Staten-Island\

### Get free mics by day and borough

`GET /mics/get-borough-day-free?page={page}&day={day}&borough={borough}`

**page** : #
**day**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\
**borough**: Manhattan, Queens, Bronx, Brooklyn, Staten-Island\

**_@Parameters are optional_**

**_All requests have Pagination and Sorting, append parameters:_**\
pageNo={}\
pageSize={}\
sortBy={}

**[Swagger API Documentation](https://open-myc-api-b3fdf5fc5994.herokuapp.com/swagger-ui/index.html#/)**
