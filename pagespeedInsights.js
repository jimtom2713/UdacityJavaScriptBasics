/*
Create a totalBytes(psiResults) function that iterates through pageStats in the
psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the 
localizedRuleNames in ruleResults and returns an array of their strings.
*/

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings. The input results will be a json object
// from the psinsights API and has the format shown below. We can use this
// format to loop through the array and grab the require keys and values.
function ruleList(results) {
	//set up an empty array to hold the localizedRuleNames values
    var rules = [];
    for(var key in results.formattedResults.ruleResults){
    	//for each localizedRuleName add the string value to the rules array
        rules.push(results.formattedResults.ruleResults[key]["localizedRuleName"]);
    }
    return rules;
    // Your code goes here!
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
	//set up the total variable to store the number of bytes
    var total = 0;
    //iterate through the pageStats portion key by key
    for(var key in results.pageStats){
    	//if that key inside pageStats has the word bytes in it we want to add it to total
    	// in order to get the total number of bytes required to load the page.
    	// Using the search method we can look for "Bytes" and using the parseInt method
    	// we can take the value at each place and parse out the integer value within it
    	// since the json object has it as a string.
        if(key.search("Bytes") !== -1){
            total += parseInt(results.pageStats[key]);        
        }
    }
    return total;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));