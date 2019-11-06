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
 
   `name=firstname<space>lastname`

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

* URL

* Method

    `GET`
    
* Success Response 

* Error Response

* Sample Call 

* Notes:

Club
---
Gets details about a specific club.

* URL

* Method

    `GET`
    
* Success Response 

* Error Response

* Sample Call 

* Notes:

Clubs
---
Gets a list of clubs based on their location i.e. city.

* URL

* Method

    `GET`
    
* Success Response 

* Error Response

* Sample Call 

* Notes:

Show
---
Gets the details about a show by it's headline.

* URL

* Method

    `GET`
    
* Success Response 

* Error Response

* Sample Call 

* Notes:

Shows
---
Gets a list of shows based on venue i.e. club.

* URL

* Method

    `GET`
    
* Success Response 

* Error Response

* Sample Call 

* Notes:
