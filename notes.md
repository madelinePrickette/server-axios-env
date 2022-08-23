postman can go from GIPHY to give it to us.
There are 2 places you can talk to any 3rd party api, client, and server. Axios is making a get request to our own api. 

we CAN go from our client to GIPHY, but we need a key, and if we did this from the client, everything on the client side is exposed to danger and may be compromized.

axios.get(/fjakdfjlksdjf key=MyKeyShouldNeverBeOnTheClientSide)

so we will be doing a axios get request to the 3rd party API and get back the things we want. servers can talk to servers through axios http requests.. AWESOME!

