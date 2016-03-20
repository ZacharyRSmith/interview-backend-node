'use strict';

/*
* Extracts the top stories from the CNN feed.
*
* Input: JSON object of CNN feed.
* Output: Exports a function that provides JSON object of the top stories.
*/

let Promise = require('bluebird'),

    // points to CNN feed property that is an array containing the top stories container:
    CONTAINERS_LOCATION = 'zoneContents',
    // property of top stories container that is an array of the actual top stories:
    TOP_STORIES_KEY = 'containerContents',
    // defines the .title value of the object containing the top stories:
    TOP_STORIES_TITLE = 'Top stories',
    // defines the .type value of the object containing the top stories:
    TOP_STORIES_TYPE = 'container';

function findTopStoriesContainer(cnnFeed) {
    return cnnFeed[CONTAINERS_LOCATION].find((content) => {
        return content.type === TOP_STORIES_TYPE &&
            content.title === TOP_STORIES_TITLE;
    });
}

module.exports = Promise.method((cnnFeed) => {
    return findTopStoriesContainer(cnnFeed)[TOP_STORIES_KEY];
});
