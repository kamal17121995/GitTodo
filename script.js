
var ul = document.getElementById('list');


var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);



function addItem() {

    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if (item.trim() === '') {
        return false;
    } else {

        //create li
        var li = document.createElement('li');


        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //creat e label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        //add this element on webpage
        //  document.querySelector('list').appendChild(ul);

        var wrapperDiv = document.createElement("div");
        wrapperDiv.style.display = "flex";
        wrapperDiv.style.wordBreak = "break-word";

        li.appendChild(wrapperDiv);

        wrapperDiv.appendChild(label);

        wrapperDiv.appendChild(checkbox);
        //  document.querySelector('li').appendChild(li);
        label.appendChild(textNode);
        //   document.querySelector('label').appendChild(label);
        wrapperDiv.appendChild(label);
        //   document.querySelector('li').appendChild(li);
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'visual';

        input.value = '';
    }

}


function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        if (li[index] && li[index].children[0].children[0].checked) {
            ul.removeChild(li[index])
        }

    }
}






// alert("Great King Kisan")
// var h = document.createElement("h1");
// var myValue = document.createTextNode("Hello world!")
// h.appendChild(myValue)
// document.querySelector("h1").appendChild(h)

// var val = 5;
// while (val >= 3) {
//     console.log(val);
//     val--
// }