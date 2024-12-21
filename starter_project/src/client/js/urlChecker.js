function checkForUrl(url) {

    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    
    // check if the url is valid
    return regex.test(url);
}

export { checkForUrl };
