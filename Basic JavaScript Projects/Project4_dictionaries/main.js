function myDictionary(){
    var student={
        firstName: "Franklin",
        lastName:"Roosevelt",
        grade:3,
        TestScore: 97
    };
    delete student.TestScore;
    document.getElementById("Dictionary").innerHTML= student.TestScore;
}