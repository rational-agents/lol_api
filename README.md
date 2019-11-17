# lol_api
backend api for lol app

Documenation
---
The following documentation describes how to navigate the following routes of this api:
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
                ],
                "resource_link":"http://host/comedian/Howie Mandel",
                "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/HowieMandelM07.jpg/440px-HowieMandelM07.jpg",
                "bio":"Howard Michael Mandel (born November 29, 1955) is a Canadian comedian, actor, voice actor, and television host. He hosted the CNBC (originally NBC) game show Deal or No Deal, as well as the show's daytime and Canadian-English counterparts. In 1987, Mandel starred alongside Amy Steel in the comedy film Walk Like a Man. From 1982 to 1988 Mandel played rowdy ER intern Dr. Wayne Fiscus on the NBC medical drama St. Elsewhere. He also created and starred in the children's cartoon Bobby's World, and judges on NBC's America's Got Talent."
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
                ],
                "resource_link":"http://host/comedian/Eddie Murphy",
                ,
                "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eddie_Murphy_by_David_Shankbone.jpg/440px-Eddie_Murphy_by_David_Shankbone.jpg",
                "bio":"Edward Regan Murphy (born April 3, 1961)[2] is an American actor, comedian, and singer.  Murphy was a regular cast member on Saturday Night Live from 1980 to 1984.  He has worked as a stand-up comedian and was ranked No. 10 on Comedy Central''s list of the 100 Greatest Stand-ups of All Time.  In films, Murphy has received Golden Globe Award nominations for his performances in 48 Hrs., the Beverly Hills Cop series, Trading Places, and The Nutty Professor.  In 2007, he won the Golden Globe for Best Supporting Actor and received a nomination for the Academy Award for Best Supporting Actor for his portrayal of soul singer James \"Thunder\" Early in Dreamgirls."
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
                "website": "https://www.carolines.com/",
                "resource_link":"http://host/club/Carolines"
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
            "website": "https://gothamcomedyclub.com/",
            "resource_link":"http://host/club/Gotham Comedy Club"
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
            "website": "https://www.carolines.com/",
            "resource_link":"http://host/club/Carolines"
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
                "show_time": "5pm",
                "resource_link":"http://host/show/April Fools"
            }
        }
    ]` 

* **Sample Call** 

    `http://host/show/April Fools`

Shows
---
Gets a list of shows based on venue i.e. club and / or comedian.

* **URL**

    /shows/?venue=club&comedian=comedian

* **Method**

    `GET`
    
*  **URL Params**

   **Optional:**
 
   `venue=club[string]`
   `comedian=comedian[string]`

   Note: though both these parameters are optional, at least one is required.
    
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
                "show_time": "9pm",
                "resource_link":"http://host/show/Get Made"
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
                "show_time": "5pm",
                "resource_link":"http://host/show/April Fools"
            }
        }
    ]` 

* **Sample Calls** 

    `http://host/shows/?venue=Stand Up NY&comedian=Melissa McCarthy`

    `http://host/shows/?comedian=Melissa McCarthy`
    
    `http://host/shows/?venue=Stand Up NY`
