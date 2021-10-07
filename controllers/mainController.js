const date = require('../getDate.js');

let toDoList = [];


exports.getMainPage = (req, res) => {
    let today = date.getTodayDateLong();
    console.log(typeof(today));
    res.render('index.ejs', {date: today, myToDo: toDoList});
};

exports.postNewTask = (req, res) => {
    let userTask = req.body.newTask;
    toDoList.push(userTask);
    console.log(toDoList);
    res.redirect('/');
};

exports.deleteTask =  (req, res) => {
    let itemToDelete = req.body.checkbox;
    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i] === itemToDelete){
            console.log(`item ${toDoList[i]} removed`)
            toDoList.splice(i, 1);
        }
    }

    res.redirect('/');

};