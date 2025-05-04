//  api = https://upadhayay.github.io/db.json 

// fetch("https://upadhayay.github.io/db.json---").then(

// function(res){
//     if(res.status !==200){
//         console.log( " Status is Not OKay  ")
//         console.log(res.status);
//     }else{
//         console.log("Stauts is Okay")
//     }

// }

// )


// fetch('https://upadhayay.github.io/db.json ')
// .then(res => res.json())
// .then(data => console.log(data))

// best way to use promise is to use async await




async function getData(){

    const response = await fetch('https://upadhayay.github.io/db.json ');
    console.log(typeof(response));
    const data = await response.json();
    console.log(typeof(data));
    return data;

}

function doSomething(data){
    console.log(data);
}


function printBooks(data){

    mybooks = data.books;
    // console.log(mybook);

    let book_div = document.querySelector('.books');

    for(let book of mybooks){
        console.log(book.title);

        let single_book_div = document.createElement("div");
        single_book_div.textContent = book.title;
        single_book_div.classList.add("singlebook");
        book_div.append(single_book_div);



        

    }





}
getData().then(printBooks)