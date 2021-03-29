var obj='{"cases":[{"number":"12001","name":"Red Light Violation","description":"He crossed the road when redlight was on. It was evening."},'+
'{"number":"12002","name":"Parking ticker","description":"He parked on a no parking zone"},'+
'{"number":"12003","name":"Red Light Violation","description":"He crossed the road when redlight was on. It was busy hour in the morning."}]}';


var cases = JSON.parse(obj);
 

for (i in cases.cases)
{
    /*var cs=document.createElement("div")
    var case_name=document.createElement("h4")
    var case_number=document.createElement("div")
    var case_des=document.createElement("div")

    case_name.innerHTML=cases.cases[i]["name"];
    case_number.innerHTML=cases.cases[i]["number"];
    case_des.innerHTML=cases.cases[i]["description"];
    
    cs.appendChild(case_number)
    cs.appendChild(case_name)
    cs.appendChild(case_des)

    cs.setAttribute("class","cases")
    
    
    main_part.appendChild(cs);
    //console.log(cases.cases[i])*/
    document.getElementById("main").innerHTML='<div class="cases">'+
        '<h4>'+cases.cases[i].name+'</h4>'+
        '<div class="case_number">'+cases.cases[i].number+'</div>'+
        '<div class="case_des">'+cases.cases[i].description+'</div>'+
    "</div>";

    

}
console.log(main_part)
//console.log(cases['cases'][0])