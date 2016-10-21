### GET /countries

**Response:**
```
{
  "countries": [
    "India",
    "Pakistan",
    "Singapore",
    "SouthAfrica",
    "UnitedKingdom",
    "Canada",
    "UnitedStates",
    "Australia",
    "NewZealand"
  ]
}
```

### GET countries/{country}/trends

**Respone:** 

ex: country = India

**NOTE:** value of parameter to this api, is one of the country names from the [above](https://github.com/Infratab/Twitter-Trends/blob/master/API.md#get-apiwebcountrylist) end point response
```
{
  "trends": [
    {
      "name": "#thecrosspolo",
      "url": "http://twitter.com/search/?q=#thecrosspolo"
    },
    {
      "name": "Bollywood",
      "url": "http://twitter.com/search/?q=Bollywood"
    },
    {
      "name": "#KeepOffTemples",
      "url": "http://twitter.com/search/?q=#KeepOffTemples"
    },
    {
      "name": "#MyPhoneTaughtMe",
      "url": "http://twitter.com/search/?q=#MyPhoneTaughtMe"
    },
    {
      "name": "#music",
      "url": "http://twitter.com/search/?q=#music"
    },
    {
      "name": "#SM4CXOs",
      "url": "http://twitter.com/search/?q=#SM4CXOs"
    },
    {
      "name": "#TGIF",
      "url": "http://twitter.com/search/?q=#TGIF"
    },
    {
      "name": "Gujarat",
      "url": "http://twitter.com/search/?q=Gujarat"
    },
    {
      "name": "Hyper Building",
      "url": "http://twitter.com/search/?q=Hyper Building"
    },
    {
      "name": "Sushmita Banerjee",
      "url": "http://twitter.com/search/?q=Sushmita Banerjee"
    }
  ]
}
```
