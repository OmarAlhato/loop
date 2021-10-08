/*
var x;
for (x = 0; x < 10; x++) {


    document.getElementById("forloop").innerHTML = x;

    //document.write(x + "<br>");
}
*/
////////////////////////////////////////for//////////////////////////
var x;
document.write(`

<h2>forloop</h2>

<table>
`);
for (x = 0; x < 10; x++) {
    document.write(

        `
        <tr>

    <th>${x}</th>
    </tr>

`
    );

}
document.write(`

</table>

`);
////////////////////////////////////////for in/////////////////////////////
document.write(`
<h1>For In</h1>

`)

var person = {
    firstName: "omar",
    lastName: "alhato",
    address: "palestine-gaza-Dair Al Balah",
    age: 34,
}
var i = 0;
var text = "";

for (var i in person) {
    text += person[i] + "<br> ";
}
document.write(text);

///////////////////////////////////////Dowhile/////////////////////////////

var d = 0;
document.write(`

<h2>Dowhile</h2>

<table>
`);
do {

    document.write(

        `
        <tr>

    <th>${d}</th>
    </tr>

`
    );



    d++;



} while (d < 10);


document.write(`

</table>

`);


///////////////////////////////////////while/////////////////////////////

var o = 0;
document.write(`

<h2>while</h2>

<table>
`);
while (o < 10) {
    document.write(

        `
        <tr>

    <th>${o}</th>
    </tr>

`
    );
    o++;
}

document.write(`

</table>

`);


///////////////////////////////////////error/////////////////////////////

try {
    var x = parseInt(prompt("whats your age"));
    if (x < 10) {
        throw "less than";
    } else if (x > 20) {
        throw "bigger than";
    } else {
        alert("hello");
    }
    console.log("hello")
} catch (e) {
    alert("hello error");
    console.log("x x x x xx");

} finally {
    document.getElementById("demo").innerHTML = "OK";
}


//////////////////////////////////////////////////////////////////////////

///////
/*
function Count() {
    var counter = 0;

    function increaseCounter() {
        return counter += 1;
    }
    return increaseCounter;
}

var counterueee = Count();
alert(counterueee());
alert(counterueee());
alert(counterueee());
alert(counterueee());
*/