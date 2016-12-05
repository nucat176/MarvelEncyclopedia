# Marvel Encyclopedia

[Marvel Encyclopedia live][heroku]

[heroku]: http://marvelencyclopedia.herokuapp.com

Marvel Encyclopedia is a front-end web application that interacts with the official Marvel Comics API to create the ultimate resource for finding and learning about the Marvel Comics Universe. Marvel Encyclopedia interacts with the Marvel API for character pictures, names, and descriptions, while powers and abilities are obtained by scraping the web.

## Features & Implementation

### Basic Marvel Character Information

Each Marvel character's name, description, and picture were all obtained directly through Marvel's official developer API. This was my first experience working with an external API in my application, so I learned quite a bit in doing so. Marvel's API was tricky to work with. If your web application has a back-end (which this may in a future update), then you need to create an MD5 hash of the time stamp, public API key and private API key that they give you combined. This needs to be passed in as a query parameter to your API call. If your application is front-end only, as this one currently is, then you need to go to your Marvel developer account and add your application URL your list of references, and then make your API calls as normal.  

### Powers and Abilities

This was a bit more difficult to accomplish, given that Marvel does not provide any sort of information on character powers and abilities in its official API. Therefore, I used jQuery to scrape this information from MarvelousDB. MarvelousDB uses the official Marvel ID numbers for all of the characters in its URL's, so I simply had my application retrieve the ID from each character and append it to a MarvelousDB URL in order to scrape the powers and abilities.

### Hand-rolled CSS

I wanted to give Marvel Encyclopedia a great look for its users, so I created the CSS from scratch. I used a lot of flexbox to align everything the way that it is, including the cards on the home page and the information on each character's individual page.

## Future Ideas for this Project

### Add Comics

I would like to add the same structure for individual Marvel Comics as I have for characters in the universe. I would add a "Featured Comics" section to the home page as well as adding individual pages for each comic as well. I could also show the characters that appear in each comic, in addition to the comics that each character appears in.

### Add a Back-end for Users

I want to add a rails back-end for users (and already have this set up), so that users may make accounts, sign in and log out, and follow characters and comics.
