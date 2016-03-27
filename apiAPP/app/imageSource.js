var getImageSource = function (icon) {
    var imageSource = null;
    switch (icon) {
        case 'jQuery.png':
            imageSource = require('./Resources/jQuery.png');
            break;
        case 'angularjs.png':
            imageSource = require('./Resources/angularjs.png');
            break;
        case 'download.png':
            imageSource = require('./Resources/download.png');
            break;
        case 'done.png':
            imageSource = require('./Resources/done.png');
            break;
        case 'downloading.png':
            imageSource = require('./Resources/update.png');
            break;
        default:
            imageSource = require('./Resources/Avatar.png');
    }
    return imageSource;
}
module.exports = getImageSource;