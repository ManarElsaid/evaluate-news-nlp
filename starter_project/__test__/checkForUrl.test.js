import {checkForUrl} from "../src/client/js/urlChecker";

describe("Testing the URL validation", () => {  
    test("Testing the checkForUrl() function", () => {
          expect(checkForUrl).toBeDefined();
    })

    test("testing the valid url form", () => {
        expect(checkForUrl("https://www.bbc.com/news")).toBeTruthy()
    })
});