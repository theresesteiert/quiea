// Assuming Lodash or Underscore.js is loaded
// Example array of attachments
var attachments = [
    { id: 1, name: 'attachment1', url: 'http://example.com/1' },
    { id: 2, name: 'attachment2', url: 'http://example.com/2' },
    { id: 3, name: 'attachment3', url: 'http://example.com/3' }
];

// Using _.each to iterate over each attachment
_.each(attachments, function(attachment) {
    console.log('ID:', attachment.id);
    console.log('Name:', attachment.name);
    console.log('URL:', attachment.url);
    // Perform other actions with the attachment as needed
});
