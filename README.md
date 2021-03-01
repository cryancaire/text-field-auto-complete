# text-field-auto-complete

### Stats
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cryancaire/text-field-auto-complete?style=plastic)
![Lines of code](https://img.shields.io/tokei/lines/github/cryancaire/text-field-auto-complete?style=plastic)
[![Generic badge](https://img.shields.io/badge/Language-Javascript-yellow.svg?syle=plastic)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Language-CSS-blue.svg?syle=plastic)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Language-HTML-orange.svg?syle=plastic)](https://shields.io/)

![GitHub followers](https://img.shields.io/github/followers/cryancaire?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/cryancaire?style=social)

![Example Image](/images/preview.gif)

Add auto-complete-like search results to an input text box!

You can get the data from wherever you want, but check my example data in data/data.js for how the data should look in its final form.

Add these to your html file for reference:
`<link rel="stylesheet" href="searchAutoComplete.css">` and
`<script src="searchAutoComplete.js" type="module"></script>`

And then simply add `data-auto-complete="true"` to your input field as such: `<input type="text" id="myText" data-auto-complete="true">` and have a data set in the `dataSets` object that is labled "default".

Or if you want to have multiple text input fields using different data, just have a data set for each in the `dataSets` object, and then add `data-set="yourDataSetName"` as such: `<input type="text" id="myText" data-auto-complete="true" data-set="games">` (games in our example case)

That should be just about it!
