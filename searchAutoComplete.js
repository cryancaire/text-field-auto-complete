//Get the data from whereever you want
//look data/data.js for an example of how to 
//set up the data
import { dataSets } from '../data/data.js';
let theData = dataSets['default'].sort();

//get the input to use
//and set up some elements
const inputToAutoComplete = document.querySelectorAll('[data-auto-complete="true"]');
let resultDiv = document.createElement('div');
let resultListUl = document.createElement('ul');
resultDiv.classList.add('__results-div');
resultListUl.classList.add('__results-ul');

inputToAutoComplete.forEach((item) => {
    //wrap the input field in a span
    //to make sure it all works correctly
    let parent = item.parentNode;
    let wrapper = document.createElement('span');
    parent.replaceChild(wrapper, item);
    wrapper.appendChild(item)
    wrapper.classList.add('__auto-complete-wrapper');

    resultDiv.style.width = `${item.clientWidth}px`;
    item.classList.add('__auto-complete-input');
    let result;
    item.addEventListener("keyup", (e) => {
        processEvent(item, result);
    });

    item.addEventListener("click", () => {
        processEvent(item, result);
    });

    item.addEventListener("blur", () => {
        resultDiv.classList.add('__results-div_hide');
    });
});


//Used to filter out all non matches
let matchData = (input, dataSet) => {
    return dataSet.filter(element => element.toLowerCase().startsWith(input.toLowerCase()));
}

//Used to return a default string
//when no results are found
let displayNoResults = () => {
    return [ "No results" ];
}

//Unused currently, but would be used 
//to just return all results
let displayAllData = (dataSet) => {
    return dataSet;
}

//Kind of dirty/messy, used to display the list
//also had to add click listener for each item
let displayData = (results, element) => {
    resultListUl.innerHTML="";
    results.forEach((item) => {
        resultListUl.innerHTML += `<li class="__results-list-item" data-results-item="true">${item}</li>`;
    });
    resultDiv.append(resultListUl);
    element.parentElement.append(resultDiv);

    let eachResultItem = document.querySelectorAll('[data-results-item="true"]');
    eachResultItem.forEach((item) => {
        item.addEventListener('mousedown', () => {
            element.value = `${item.innerHTML}`;
        });
    });
}

//event for both click and typing
let processEvent = (item, result) => {
    //the input has a data-set element
    //defined to use that
    if (item.dataset.set) {
        theData = dataSets[item.dataset.set].sort();
    } else {
        theData = dataSets['default'].sort();
    }
    resultDiv.classList.remove('__results-div_hide');
    result=matchData(item.value, theData);
    if (result.length < 1) {
        result=displayNoResults();
    }
    displayData(result, item);
}