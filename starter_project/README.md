#  Evaluate a news article with NLP

- The udacity web project that allows users to analyze the sentiment, subjectivity, and polarity of text using advanced Natural Language Processing (NLP) techniques.

# Installation

## Prerequisites:
- Node.js
- npm 

1. Clone the repository:
   ```bash
   git clone https://github.com/ManarElsaid/evaluate-news-nlp.git
   ```
2. Navigate to the project directory:
  cd evaluate-news-nlp/starter_project
3. Install dependencies:
  npm install
4. install loaders and plugins
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
5. Signup for the API key at https://www.meaningcloud.com/developer/sentiment-analysis 
6. Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
7. Create a new .env file in the root of your project.
8. Fill the .env file with your API keys like this:
API_KEY=**************************
9. build the project for production: 
npm run build-prod
10. run the project:
npm run start
11. open the browser: http://localhost:8081/



# Features:
- Analyze text sentiment (positive, negative, neutral, etc.).
- Detect subjectivity (objective vs. subjective).