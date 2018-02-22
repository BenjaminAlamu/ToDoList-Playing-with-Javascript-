var add = document.getElementById("addButton");
var input = document.getElementById("inputTask");
var inp = document.getElementById("uncompletedTasks");
var completeList = document.getElementById("completedTasks");
var incompleteText = document.getElementById("incomplete");
var completeText = document.getElementById("complete");

var incompleteCount = 0;
var completeCount = 0;


add.addEventListener('click', () => {
    incompleteCount++; //Increament the incomplete task counter

    incompleteText.textContent = "Here's a list of your yet to completed tasks"; //Set the text
    //Create list element
    var li = document.createElement("li");


    //Create checkbox and append it to the list item
    var check = document.createElement("input");
    check.type = "checkbox";
    li.appendChild(check);

    //Handle click events on the checkbox
    check.addEventListener("click", (event) => {

        completeCount++; //Increment the completed task counter
        completeText.textContent = "Here's a list of your completed tasks"; //Set the text 

        //Toggle text on labels with respect to the amount of tasks which are yet to be completed.
        incompleteCount--;
        if (incompleteCount < 1) {
            incompleteText.innerHTML = "You currently have no incompleted tasks";
        } else {
            incompleteText.innerHTML = "Here's a list of your yet to completed tasks";
        }


        //Create element that will be added to the completed tasks part
        var task = document.createElement("li");
        var deleteButton = document.createElement("button");


        //Get element which triggered the event listener
        var element = event.target.parentNode;

        //Set values
        task.textContent = event.target.nextElementSibling.textContent;
        deleteButton.textContent = "Delete";
        deleteButton.className = "remove";

        task.appendChild(deleteButton);

        //Get parent of selected list item,append to completed part and remove from the incomplete part
        var parent = element.parentNode;
        completeList.appendChild(task);
        parent.removeChild(element);



        //Add event listener for delete button
        deleteButton.addEventListener("click", () => {
            var ele = deleteButton.parentNode; //Ele represent the containing list item
            var par = ele.parentNode; //Par is the parent of the list element
            par.removeChild(ele);

            //Toggle text on labels with respect to the amount of tasks completed
            completeCount--;
            if (completeCount < 1) {
                completeText.innerHTML = "You currently have no completed tasks";
            } else {
                completeText.innerHTML = "Here's a list of your completed tasks";
            }


        })
    })

    //Create label and append it to the list item
    var lab = document.createElement("label");
    lab.textContent = input.value;
    li.appendChild(lab);

    //Create the remove and edit button and append to the list item
    var editButton = document.createElement("button");
    var but = document.createElement("button");


    but.textContent = "Remove";
    but.className = "remove";

    editButton.textContent = "Edit";
    editButton.className = "edit";

    //Create click listener for edit button
    editButton.addEventListener("click", (event) => {

        //Toggle text on labels
        incompleteCount--;
        if (incompleteCount < 1) {
            incompleteText.innerHTML = "You currently have no incompleted tasks";
        } else {
            incompleteText.innerHTML = "Here's a list of your yet to be completed tasks";
        }

        //Get the text on the clicked task
        var text = event.target.previousElementSibling.textContent;
        input.value = text;

        //Remove element from incomplete div
        var ele = event.target.parentNode; //Get containing element
        var parent = ele.parentNode; //Get parent of containing element
        parent.removeChild(ele);
        input.focus();

    })

    li.appendChild(editButton);
    li.appendChild(but);

    //Add event listener for remove button
    but.addEventListener("click", () => {
        var ele = but.parentNode; //Ele represent the containing list item
        var par = ele.parentNode; //Par is the parent of the list element
        par.removeChild(ele);

        //Toggle text on labels
        incompleteCount--;
        if (incompleteCount < 1) {
            incompleteText.innerHTML = "You currently have no incompleted tasks";
        } else {
            incompleteText.innerHTML = "Here's a list of your yet to be completed tasks";
        }

    })

    //Append list item and clear input TextField
    inp.appendChild(li);
    input.value = "";
});