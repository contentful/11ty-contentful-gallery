const contentful = require("contentful");

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "rea8ci0yln66",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Er8DpEdI7rNloU2YXBocuoBDbqIW4cJR2wADEbBdFlY"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

module.exports = async () => {
    return client.getEntries({ content_type: 'photoSet' }).then(function(response) {

            const photoSet = response.items
                .map(function(photoSet) {
                    return photoSet.fields;
                });
            return photoSet;
        })

        .catch(console.error);
};
