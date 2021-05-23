console.log("Hello World");
    // alert("Wattana (มิกซ์)");

    var Name = "Wattana";
    let Age = 23;

    console.log("My name is " + Name);

    name[3] = [5, 6, 7];
    name[0] = 10;
    name[2] = "Mix";
    
    console.log(name[0]);
    document.getElementById("content").innerHTML = name[2];

    var users = '{"name":"Mix","name":"Boy"}';
    var json = JSON.parse(users);
    console.log(json);

    emp = {name:"AA",name:"BB",name:"CC"};
    console.log(emp);
    console.log(emp.name);

    if(name[0] != 5){
        console.log("True");
    }else{
        console.log("False, name is 5");
    }
    for(i =1; i<5; i++){
        console.log(i);
    }
    console.log(Add(5, 3)); 
    function Add(A,B) {
        c = A + B;
        return c;
    }


