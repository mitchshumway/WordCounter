//let text = window.onload = (text);
//function getText(text){
window.onload = (text) => {
    html = '';
    text = window.prompt("Enter any block of text: ");
    //"Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
    // remove the periods and commas and make all lowercase letters
    let original = text;
    text = text.toLowerCase();
    text = text.replace(/, /g," ");
    text = text.split('. ').join(" ");
    text = text.split('!').join("");
    text = text.split('?').join("");
    text = text.split('&').join("");
    text = text.split(';').join("");
    text = text.split('(').join("");
    text = text.split(')').join("");
    text = text.split(':').join("");
    //text = text.replace(/. /g," ");//why does this delete the last letter of every word?
    text = text.split(' and ').join(" ");
    text = text.split(' the ').join(" ");
    text = text.split(' or ').join(" ");
    text = text.split(' to ').join(" ");
    text = text.split(' of ').join(" ");
    text = text.split(' but ').join(" ");
    text = text.split(' for ').join(" ");
    text = text.split(' a ').join(" ");
    text = text.split(' in ').join(" ");
    text = text.split(' is ').join(" ");
    text = text.split(' i ').join(" ");
    text = text.split(' you ').join(" ");
    text = text.split(' he ').join(" ");
    text = text.split(' that ').join(" ");
    text = text.split(' his ').join(" ");
    text = text.split(' hers ').join(" ");
    text = text.split(' it ').join(" ");
    text = text.split(' with ').join(" ");
    text = text.split(' as ').join(" ");
    text = text.split(' on ').join(" ");
    text = text.split(' your ').join(" ");
    text = text.split(' are ').join(" ");
    text = text.split(' this ').join(" ");
    text = text.split(' be ').join(" ");
    text = text.split(' can ').join(" ");
    text = text.split(' more ').join(" ");
    text = text.split(' an ').join(" ");
    text = text.split(' just ').join(" ");
    text = text.split(' from ').join(" ");
    text = text.split(' so ').join(" ");
    text = text.split(' out ').join(" ");
    text = text.split(' have ').join(" ");
    text = text.split(' than ').join(" ");
    text = text.split(' each ').join(" ");
    text = text.split(' up ').join(" ");
    text = text.split(' one ').join(" ");
    text = text.split(' through ').join(" ");
    text = text.split(' most ').join(" ");
    text = text.split(' not ').join(" ");
    text = text.split(' will ').join(" ");
    text = text.split(' when ').join(" ");
    text = text.split(' which ').join(" ");
    text = text.split(' if ').join(" ");
    text = text.split(' how ').join(" ");
    text = text.split(' many ').join(" ");
    text = text.split(' was ').join(" ");
    text = text.split(' by ').join(" ");
    text = text.split(' its ').join(" ");
    text = text.split(' my ').join(" ");
    text = text.split(' also ').join(" ");
    text = text.split(' about ').join(" ");
    text = text.split(' like ').join(" ");
    text = text.split(' some ').join(" ");
    text = text.split(' has ').join(" ");
    text = text.split(' what ').join(" ");
    text = text.split(' get ').join(" ");
    text = text.split(' any ').join(" ");
    text = text.split(' they ').join(" ");
    text = text.split(' them ').join(" ");
    text = text.split(' at ').join(" ");
    text = text.split(' were ').join(" ");
    text = text.split(' much ').join(" ");
    text = text.split(' their ').join(" ");
    text = text.split(' there ').join(" ");
    text = text.split(' those ').join(" ");
    text = text.split(' very ').join(" ");
    text = text.split(' been ').join(" ");
    text = text.split(' all ').join(" ");
    text = text.split(' back ').join(" ");
    text = text.split(' then ').join(" ");
    text = text.split(' come ').join(" ");
    text = text.split(' must ').join(" ");
    text = text.split(' going ').join(" ");
    text = text.split(' almost ').join(" ");
    text = text.split(' still ').join(" ");
    text = text.split(' had ').join(" ");
    text = text.split(' even ').join(" ");
    text = text.split(' make ').join(" ");
    text = text.split(' over ').join(" ");
    text = text.split(' under ').join(" ");
    text = text.split(' without ').join(" ");
    text = text.split(' no ').join(" ");
    text = text.split(' while ').join(" ");
    text = text.split(' before ').join(" ");
    text = text.split(' use ').join(" ");
    text = text.split(' she ').join(" ");
    text = text.split(' her ').join(" ");
    text = text.split(' once ').join(" ");
    text = text.split(' well ').join(" ");
    text = text.split(' became ').join(" ");
    text = text.split(' who ').join(" ");
    text = text.split(' mr ').join(" ");
    text = text.split(' ms ').join(" ");
    text = text.split(' mrs ').join(" ");
    text = text.split(' would ').join(" ");
    text = text.split(' only ').join(" ");
    text = text.split(' took ').join(" ");
    text = text.split(' ahead ').join(" ");
    text = text.split(' put ').join(" ");
    text = text.split(' should ').join(" ");
    //text = text.split(" it's ").join(" ");
    //text = text.split(" you're ").join(" ");
    //text = text.split(" you'll ").join(" ");
    //text = text.split(" there's ").join(" ");
    //text = text.split(" can't ").join(" ");
    text = text.replace(/ can't /g," ");
    text = text.replace(/ it's /g," ");
    text = text.replace(/ there's /g," ");
    text = text.replace(/ you're /g," ");
    text = text.replace(/ you'll /g," ");
    //console.log(text);

    const wordArray = text.split(" ");
    // create object and make keys the "words" and the value the "word count"
    const wordCount = {};
    wordArray.forEach((item) => {
      if (wordCount[item] == null) {wordCount[item] = 1;
      } else {
        wordCount[item] += 1;
      }
    });
    // turn objects into an array of arrays
    let myArray = Object.entries(wordCount);
    // now sort the arrays based on the count number
    
    myArray.sort((a,b) => b[1] - a[1]);
    let frequent = `The most common word is "${myArray[0][0]}" with ${myArray[0][1]} instances, the second most common word is "${myArray[1][0]}" with ${myArray[1][1]} instances, and the third most common word is "${myArray[2][0]}" with ${myArray[2][1]} instances.`//
    // print out first three most common words.
    console.log(myArray);
    console.log(frequent);
    html += 
    '<p1>' + original + '</p1>' + 
    '<ol>' + 
      '<h3>' + 'Top 3 Words:' + '</h3>' +
      '<li>' + `"${myArray[0][0]}" appears ${myArray[0][1]} times.` + '</li>' + 
      '<li>' + `"${myArray[1][0]}" appears ${myArray[1][1]} times.` + '</li>' + 
      '<li>' + `"${myArray[2][0]}" appears ${myArray[2][1]} times.` + '</li>' + 
    '</ol'
    container.innerHTML = html;

};