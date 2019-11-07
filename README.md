# lol_api
backend api for lol app

Documenation
---
The following documentation describes how to navigate the following routes:
* host/**Comedian**/..
* host/**Comedians**/..
* host/**Club**/..
* host/**Clubs**/..
* host/**Show**/..
* host/**Shows**/..

Note: at this time, all api query parameters are case sensitive given that postgres is the backend database engine.  And postgres is case-sensitive by nature. 

Comedian
---
Gets details about a comedian.

* **URL**

    /comedian/:name
    
* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `name=firstname[string]<space>lastname[string]`

* **Success Response** 

  * **Status Code:** 200 <br />
    **Content:** 
    `[
        {
            "document": {
                "age": "63",
                "location": "Toronto",
                "last_name": "Mandel",
                "first_name": "Howie",
                "stage_name": "Howie",
                "social_media": [
                    {
                        "url": "https://en.wikipedia.org/wiki/Howie_Mandel",
                        "network": "wikipedia"
                    }
                ]
            }
        }
    ]`

* **Sample Call** 

    `http://host/comedian/Howie Mandel`

Comedians
---
Gets a list of comedians based on location i.e. city. 

* **URL**

    /comedians/?location=city

* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `city=[string]`
    
* **Success Response**

  * **Status Code:** 200 <br />
    **Content:**
    
    `[
        {
            "document": {
                "age": "58",
                "location": "Brooklyn",
                "last_name": "Murphy",
                "first_name": "Eddie",
                "stage_name": "",
                "social_media": [
                    {
                        "url": "https://en.wikipedia.org/wiki/Eddie_Murphy",
                        "network": "wikipedia"
                    }
                ]
            }
        }
    ]`

* **Sample Call** 

    `http://host/comedians/?location=Brooklyn`

Club
---
Gets details about a specific club by venue i.e. club name.

* **URL**

    /club/:venue

* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `venue=[string]`
    
* **Success Response**

  * **Status Code:** 200 <br />
    **Content:**
    `[
        {
            "document": {
                "owner": [],
                "venue": "Carolines",
                "address": {
                    "zip": "10019",
                    "city": "New York",
                    "state": "NY",
                    "street": "1626 Broadway"
                },
                "website": "https://www.carolines.com/"
            }
        }
    ]`

* **Sample Call** 

    `http://host/club/Carolines`

Clubs
---
Gets a list of clubs based on their location i.e. city.

* **URL**

    /clubs/?location=city

* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `city=[string]`
    
* **Success Response**

  * **Status Code:** 200 <br />
    **Content:**
    `[
    {
        "document": {
            "owner": [],
            "venue": "Gotham Comedy Club",
            "address": {
                "zip": "10011",
                "city": "New York",
                "state": "NY",
                "street": "208 W 23rd St"
            },
            "website": "https://gothamcomedyclub.com/"
        }
    },
    {
        "document": {
            "owner": [],
            "venue": "Carolines",
            "address": {
                "zip": "10019",
                "city": "New York",
                "state": "NY",
                "street": "1626 Broadway"
            },
            "website": "https://www.carolines.com/"
        }
    }]` 

* **Sample Call**

    `http://host/clubs/?location=New York`

Show
---
Gets the details about a show by headline.

* **URL**

    /show/:headline

* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `headline=[string]`
    
* **Success Response**

  * **Status Code:** 200 <br />
    **Content:**
    `[
        {
            "document": {
                "club": "Stand Up NY",
                "lineup": [
                    "Dave Chappelle",
                    "Eddie Murphy",
                    "Kevin Hart",
                    "Melissa McCarthy"
                ],
                "headline": "April Fools",
                "show_date": "4/1/2020",
                "show_time": "5pm"
            }
        }
    ]` 

* **Sample Call** 

    `http://host/show/April Fools`

Shows
---
Gets a list of shows based on venue i.e. club.

* **URL**

    /shows/?venue=club

* **Method**

    `GET`
    
*  **URL Params**

   **Required:**
 
   `venue=club[string]`
    
* **Success Response**

  * **Status Code:** 200 <br />
    **Content:**
    `[
        {
            "document": {
                "club": "Stand Up NY",
                "lineup": [
                    "Howie Mandel",
                    "Kevin Hart",
                    "Melissa McCarthy"
                ],
                "headline": "Get Made",
                "show_date": "3/15/2020",
                "show_time": "9pm"
            }
        },
        {
            "document": {
                "club": "Stand Up NY",
                "lineup": [
                    "Dave Chappelle",
                    "Eddie Murphy",
                    "Kevin Hart",
                    "Melissa McCarthy"
                ],
                "headline": "April Fools",
                "show_date": "4/1/2020",
                "show_time": "5pm"
            }
        }
    ]` 

* **Sample Call** 

    `http://host/shows/?venue=Stand Up NY`
